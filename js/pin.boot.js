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

	var parseData = function(str) {
		str = '{' + str + '}'
		var datastring = str
			.replace(/"/g, '')
			.replace(/'/g, '')
			.replace(/ :/g,':')
			.replace(/: /g,':')
			.replace(/ ,/g,',')
			.replace(/, /g,',')

			.replace(/ {/g,'{')
			.replace(/{ /g,'{')

			.replace(/ }/g,'}')
			.replace(/} /g,'}')






			.replace(/:/g, '":"')
			.replace(/{/g, '{"')
			.replace(/}/g, '"}')
			.replace(/,/g, '","')
			.replace(/:"{/g, ':{')
			.replace(/}"}/g, '}}')
			.replace(/}",/g, '},')
			.replace(/"true"/g, 'true')
			.replace(/"false"/g, 'false');
			/"/;

			console.log(datastring);
		return $.parseJSON(datastring);
	};

	pin.init(function() {
		$('*[data-pin]').each(function() {
			var $this = $(this),
				obj = parseData($this.attr('data-pin'));

				for(var a in obj){
					if(typeof $this[a] == 'function'){
						var b = obj[a];
						$this[a](b);
					}
				}

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