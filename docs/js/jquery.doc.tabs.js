/* Doc Tabs Plugin
 * @author: Pablo Cazorla
 * @date: 02/29/2016
 */
(function($) {
	$.fn.doctabs = function(options) {
		//Settings
		var setting = $.extend({
			duration: 200
		}, options);

		return this.each(function() {
			var $this = $(this);

			var $tabContainer = $('<div class="doc-tabs"/>');
			$this.before($tabContainer);

			var $preContainer = $('<div class="doc-pre-content"/>').hide();
			var $pre = $('<pre class="doc-pre html"/>');
			$this.after($preContainer);
			$preContainer.append($pre);

			var $tabView = $('<div class="doc-tab doc-tab-current">View</div>'),
				$tabHtml = $('<div class="doc-tab">Html</div>');

			$tabContainer.append($tabView).append($tabHtml);

			$tabView.click(function(){
				$tabHtml.removeClass('doc-tab-current');
				$tabView.addClass('doc-tab-current');

				$this.show();
				$preContainer.hide();
			});
			$tabHtml.click(function(){
				$tabHtml.addClass('doc-tab-current');
				$tabView.removeClass('doc-tab-current');

				$this.hide();
				$preContainer.show();
			});

			var str = $.trim($this.html().replace(/</g,'&lt;').replace(/>/g,'&gt;'));
			$pre.html(str);
			//PR.prettyPrint();

		});
	};
})(jQuery);