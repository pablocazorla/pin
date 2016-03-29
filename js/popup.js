/* Template Plugin
 * @author: Pablo Cazorla
 * @e-mail: pablo.cazorla@huddle.com.ar
 * @date: 22/08/2012
 */
(function($) {
	$.fn.popup = function(options) {
		//Settings
		var setting = {
			content: '',
			skin:'popup',
			event:'click'
		};

		if (typeof options == 'string') {
			setting.content = options;
		} else {
			setting = $.extend(setting, options);
		}

		return this.each(function() {
			var $this = $(this),
				$content = (function() {
					var c = setting.content,
						$c = $(document.getElementById(c.replace('#','')));
					if ($c.length > 0) {
						return $c.show();
					} else {
						if (c.toLowerCase() == 'title') {
							c = $this.attr('title');
							$this.attr('title', '');
						}
						return $('<span>' + c + '</span>');
					}
				})();

			var $float = $('<div class="float"/>').appendTo('body'),
				$floatBody = $('<div class="float-body '+setting.skin+'"><span class="float-arrow"><span></span></span></div>').appendTo($float).append($content);






				/*



var viewportOffset = el.getBoundingClientRect();
// these are relative to the viewport, i.e. the window
var top = viewportOffset.top;
var left = viewportOffset.left;









				*/



















		});
	};

})(jQuery);