/*
* @Author: rhyspang
* @Date:   2017-03-26 10:45:16
* @Last Modified by:   rhyspang
* @Last Modified time: 2017-03-26 11:15:32
*/

'use strict';

define(['jquery', 'scrollto'], function($, scrollto) {
	function BackTop(el, opts) {
		this.opts = $.extend({}, BackTop.DEFAULTS, opts);
		this.$el = $(el);
		this.scroll = new scrollto.ScrollTo({
			dest: 0,
			speed: BackTop.DEFAULTS.speed
		});

		this._checkPosition();
		if (this.opts.mode === 'move') {
			this.$el.on('click', $.proxy(this._move, this));
		}else {
			this.$el.on('click', $.proxy(this._go, this));
		}
		$(window).on('scroll', $.proxy(this._checkPosition, this));
	}

	BackTop.DEFAULTS = {
		mode: 'move',
		pos: $(window).height(),
		speed: 800
	}

	BackTop.prototype._move = function() {
		this.scroll.move();
	};


	BackTop.prototype._go = function() {
		this.scroll.go();
	};


	BackTop.prototype._checkPosition = function() {
		var $el = this.$el;
		if ($(window).scrollTop() > this.opts.pos) {
			$el.fadeIn();
		}else {
			$el.fadeOut();
		}
	};
	return {
		BackTop: BackTop
	}
});
