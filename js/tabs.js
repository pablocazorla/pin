/* Template Plugin
 * @author: Pablo Cazorla
 * @e-mail: pablo.cazorla@huddle.com.ar
 * @date: 22/08/2012
 */
(function($) {
	$.fn.tabs = function(options) {
		//Settings
		var setting = $.extend({
			duration: 200
		}, options);

		return this.each(function() {

			var $this = $(this),
				$tabContent = $('#' + $this.attr('data-tabs'));
			if ($tabContent.length > 0) {
				var $buttons = $this.find('>.btn,.dropdown-content .btn'),
					$tabs = $tabContent.find('>.tab');

				var current = 0,
					activateTab = function(index) {
						$buttons.removeClass('active').eq(index).addClass('active');
						$tabs.removeClass('active').eq(index).addClass('active');
					},
					setButton = function($button, index) {
						if ($button.hasClass('active')) {
							current = index;
						}
						$button.click(function(e) {
							e.preventDefault();
							activateTab(index);
						});
					};

				$buttons.each(function(i) {
					setButton($(this), i);
				});
				activateTab(current);

			}
		});
	};

	// PIN
	pin.init(function(){
		$('.tab-buttons').tabs();
	});
})(jQuery);

