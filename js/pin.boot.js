// pin
pin = (function($) {
	"use strict";

	var onInitList = [],
		$selectedByData;

	var pin = {
		init: function(callback) {
			if (typeof callback == 'function') {
				onInitList.push(callback);
			}
		}
	};	

	/*************************************/
	$('document').ready(function() {
		var length = onInitList.length;
		for (var i = 0; i < length; i++) {
			onInitList[i]();
		}
	});
	return pin;
})(jQuery);