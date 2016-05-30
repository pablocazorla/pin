/* Waves
 * @author: Pablo Cazorla
 */
(function($) {
	$.fn.waves = function() {	
		return this.each(function() {
			var $this = $(this),
				$waveContainer = $('<span class="wave-cont"/>').appendTo($this),
				$wave = $('<span class="wave-rip"/>').appendTo($waveContainer),
				waving = false,
				animateCss = function($elem, animationClass) {
					waving = true;
					var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
					$elem.addClass(animationClass).one(animationEnd, function() {
						$elem.removeClass(animationClass);
						waving = false;
					});
				},
				rip = function(e) {
					if (!waving) {
						var rect = $waveContainer[0].getBoundingClientRect(),
							x = Math.round(e.pageX - rect.left),
							y = Math.round(e.pageY - rect.top);
						$wave.css({
							'left': x + 'px',
							'top': y + 'px'
						});
						animateCss($wave, 'waving');
					}
				};

			$this.click(function(e) {
				rip(e);
			});
		});
	};

	// PIN
	pin.init(function() {
		$('.wave').waves();
	});
})(jQuery);