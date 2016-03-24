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
		},
		data:function(srt){

		}
	};
	pin.init(function(){
		$('*[data-pin]').each(function(){
				var $this = $(this),
				txt = 'popup:{content:#cont-popup,pablo:cazu,aaa:{cosas:otra}}';




				var	datastring = '{"' + txt.replace(/:/g,'":"').replace(/{/g,'{"').replace(/}/g,'"}').replace(/,/g,'","')
				.replace(/:"{/g,':{').replace(/}"}/g,'}}') +'}';

console.log(datastring);

				var aaa = $.parseJSON(datastring);

					console.log(aaa);
		});
	});



	/*************************************/
	$('document').ready(function() {
		var length = onInitList.length;
		for (var i = 0; i < length; i++) {
			onInitList[i]();
		}
	});
	return pin;
})(jQuery);