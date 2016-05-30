/* Parallax
 * @author: Pablo Cazorla
 */
(function($) {
	$.fn.parallax = function(options) {

		// Window reference
		var $window = $(window),
			// Settings
			setting = $.extend({
				backgroundClass: 'bg',
				backgroundColor: '#000',
				opacity: 0.7,
				vel: 0.3,
				backgroundElement: '*',
				zIndex: '-1'
			}, options);

		return this.each(function() {
			var $this = $(this).css({
				'background': 'transparent none'
			});

			var data = $this.attr('data-parallax');
			if (data !== undefined) {
				var dataArray = data.split(','),
					dataArrayLength = dataArray.length;
				for (var i = 0; i < dataArrayLength; i++) {
					var arr = dataArray[i].split(':'),
						prop = $.trim(arr[0]),
						val = $.trim(arr[1]),
						valNum = parseFloat(val);
					if (!isNaN(valNum)) {
						val = valNum;
					}
					setting[prop] = val;
				}
			}

			var $bg = $this.find('> .' + setting.backgroundClass).css({
					'position': 'absolute',
					'z-index': setting.zIndex,
					'top': 0,
					'bottom': 0,
					'left': 0,
					'right': 0,
					'padding': 0,
					'margin': 0,
					'overflow': 'hidden',
					'background-color': setting.backgroundColor
				}),
				$element = $bg.find('> ' + setting.backgroundElement).eq(0).css({
					'opacity': setting.opacity,
					'position': 'absolute'
				}),
				onLoadElement = function(callback) {
					var $img = $bg.find('img'),
						count = $img.length;
					if (count > 0) {
						var timer = setInterval(function() {
							var i = 0;
							$img.each(function() {
								if (this.complete) {
									i++;
								}
							});
							if (i >= count) {
								clearInterval(timer);
								callback();
							}
						}, 150);
					} else {
						var $vid = $bg.find('video').eq(0);
						if ($vid.length > 0) {
							$vid[0].addEventListener('canplay', function() {
								callback();
							});
						} else {
							callback();
						}
					}
				},
				w = {
					A: 0,
					I: 0
				},
				h = {
					A: 0,
					Ap: 0,
					I: 0,
					dif: 0
				},
				m = {
					Ap: 1,
					I: 1
				},
				dy = 0,
				x = 0,
				y = 0,
				setPosition = function() {
					var k = $this[0].getBoundingClientRect().top / $window.height();
					y = -1 * (k * (2 * h.dif)) + dy;
					$element
						.css({
							'top': Math.round(y) + 'px'
						});
				},
				setSize = function() {
					w.A = $bg.width();
					h.A = $bg.height();
					w.I = $element.width();
					h.I = $element.height();
					h.dif = h.A * setting.vel;
					h.Ap = h.A + h.dif;
					m.Ap = w.A / h.Ap;
					m.I = w.I / h.I;
					//
					if (m.Ap > m.I) {
						w.I = w.A;
						h.I = w.A / m.I;
						dy = 0.5 * (h.Ap - h.I);
						x = 0;
					} else {
						h.I = h.Ap;
						w.I = h.Ap * m.I;
						dy = 0;
						x = 0.5 * (w.A - w.I);
					}
					$element
						.width(Math.round(w.I))
						.height(Math.round(h.I))
						.css({
							'left': Math.round(x) + 'px'
						});
					setPosition();
				};
			//
			if ($this.css('position') === 'static') {
				console.log('vaaa');
				$this.css('position', 'relative');
			}
			onLoadElement(function() {
				setSize();
			});
			setTimeout(setSize,2000);
			//
			$window.resize(setSize).scroll(setPosition);
		});
	};
	// PIN
	if (typeof pin != 'undefined' && typeof pin.init != 'undefined') {
		pin.init(function() {
			$('.parallax').parallax();
		});
	}
})(jQuery);