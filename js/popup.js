/* Template Plugin
 * @author: Pablo Cazorla
 * @e-mail: pablo.cazorla@huddle.com.ar
 * @date: 22/08/2012
 */
(function($){
  $.fn.popup = function(options){
		//Settings
		var setting = $.extend({
      duration : 200
		}, options);		
	
		return this.each(function(){			
			console.log(this);
		});
	};
	// PIN
	pin.init(function(){
		pin.data('popup');
	});
})(jQuery);