/* Template Plugin
 * @author: Pablo Cazorla
 * @e-mail: pablo.cazorla@huddle.com.ar
 * @date: 22/08/2012
 */
(function($) {
	$.fn.dropdown = function(options) {


		return this.each(function() {
			var $this = $(this).filter(':not(.hover)'),
				opened = false,
				overTrigger = false;

			if ($this.hasClass('open')) {
				opened = true;
			}

			$this.click(function() {
				if (!opened) {
					$this.addClass('open');
					opened = true;
				}
				overTrigger = true;
			});

			$(window).click(function() {
				if (opened && !overTrigger) {
					$this.removeClass('open');
					opened = false;
				}
				overTrigger = false;
			});

		});
	};
	// PIN
	if (typeof pin != 'undefined' && typeof pin.init != 'undefined') {
		pin.init(function() {
			$('.dropdown').dropdown();
		});
	}

})(jQuery);