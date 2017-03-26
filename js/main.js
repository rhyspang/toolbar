/*
* @Author: rhyspang
* @Date:   2017-03-26 09:39:15
* @Last Modified by:   rhyspang
* @Last Modified time: 2017-03-26 11:03:11
*/

'use strict';

requirejs.config({
	paths: {
		jquery: 'jquery.min'
	}
});

requirejs(['jquery', 'backtop'], function ($, backtop) {
	new backtop.BackTop($('#backTop'));
});