var Lipsum = (function() {
	"use strict";


	var word = 'lorem ipsum dolor sit amet consectetur adipiscing elit quisque posuere ultricies tellus donec eu dui congue elementum nulla sit amet pulvinar ante sed ac nibh sit amet ligula euismod elementum sed dolor libero bibendum vel imperdiet nec convallis et urna cras quis tincidunt arcu donec facilisis odio mauris vel lacinia elit cursus id aliquam hendrerit feugiat diam nam sapien nunc dignissim et viverra at commodo sed augue sed id semper risus mauris tellus lorem sollicitudin sed nibh sit amet ornare sagittis sapien sed porttitor tortor fermentum tincidunt velit eget lacinia nunc cras vel lacus in nunc placerat mattis nunc dignissim felis eu libero vestibulum congue donec vitae nulla nec diam posuere posuere aenean eleifend commodo sem eget imperdiet nullam eget orci vel odio laoreet sodales et eget nulla duis a mauris sit amet nisl faucibus efficitur donec fringilla sem at sapien commodo id aliquet sem finibus quisque tincidunt finibus nunc et tempor nam id luctus purus duis sem diam placerat nec ipsum quis ultrices posuere augue duis fermentum porta semper nulla ut dolor in tortor suscipit interdum morbi vitae magna purus vivamus ipsum neque porta at luctus quis sagittis id eros suspendisse cursus viverra quam in lacinia dignissim lorem curabitur tincidunt eros eget rhoncus pellentesque lectus dolor malesuada mi in congue magna tortor nec mi praesent ullamcorper tempus odio nec luctus lorem vehicula non donec finibus euismod tincidunt phasellus tincidunt mauris at erat congue interdum cras sed imperdiet nulla sed tincidunt nulla quisque pulvinar imperdiet venenatis nunc sed porttitor massa ac commodo urna quisque imperdiet mauris at laoreet imperdiet elit purus fringilla nisl vitae viverra purus mi egestas quam in dignissim felis at nulla consectetur rhoncus nulla pellentesque odio augue quis scelerisque turpis tristique in aenean sit amet lectus ut nisi pellentesque imperdiet ut consequat augue vivamus laoreet auctor gravida praesent ac enim a sem faucibus interdum vehicula vitae sem maecenas consequat elit et fermentum condimentum tortor lacus dapibus erat in tempus mauris sem et mauris pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas pellentesque dolor turpis viverra vel pellentesque in tristique a lorem donec tincidunt blandit mauris quis blandit ipsum ultrices eget donec eget ex accumsan tortor sollicitudin convallis at et purus integer in neque lectus duis luctus lectus ut laoreet bibendum erat libero finibus neque et consectetur nisl eros ac orci suspendisse venenatis aliquet dui id laoreet lectus fringilla nec interdum et malesuada fames ac ante ipsum primis in faucibus in tempor justo id erat mollis lobortis gravida erat semper curabitur semper magna id dignissim lobortis orci lorem efficitur lacus non viverra ex magna quis urna sed nibh sapien tempus ut nisl sit amet iaculis accumsan justo proin a magna eu nunc ultrices posuere auctor vel diam mauris congue erat eget dui maximus sed pulvinar nisi pellentesque vivamus eu elit nisl lorem ipsum dolor sit amet consectetur adipiscing elit'.split(' '),

		capitalize = function(str) {
			return str.charAt(0).toUpperCase() + str.slice(1);
		},
		len = word.length,
		ran = function(min, max) {
			return Math.floor(Math.random() * (max - min)) + min;
		},
		getWord = function() {
			var r = ran(0,len);
			return word[r];
		},
		nexus = function() {
			var r = ran(0,100);
			var v = ': ';
			if (r <= 98) {
				v = ': ';
			}
			if (r <= 97) {
				v = '; ';
			}
			if (r <= 91) {
				v = ', ';
			}
			if (r <= 90) {
				v = ' ';
			}

			return v;
		};



	var Lip = {};

	Lip.word = getWord;

	Lip.text = function(num) {
		var src = capitalize(getWord());
		for (var i = 1; i < num; i++) {
			src += nexus() + getWord();
		}
		return src;
	};
	Lip.paragraph = function() {
		var r = ran(25,58);
		return Lip.text(r) + '.';
	};
	Lip.title = function() {
		var r = ran(2,5);
		return Lip.text(r);
	};
	Lip.li = function() {
		var r = ran(10,15);
		return Lip.text(r) + '.';
	};
	Lip.num = function() {
		var r = ran(0,9999);
		return r;
	};



	return Lip;
})();