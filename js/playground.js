// Playground
$('document').ready(function() {
	"use strict";

	var totalSources = htmlSources.length,
		readySources = 0,
		$container = $('#playbox-container'),
		successSource = function(data) {
			var source = $('<div class="playbox">' + data + '</div>');
			$container.append(source);
			readySources++;
		};

	for (var i = 0; i < totalSources; i++) {
		$.ajax({
			url: 'html/' + htmlSources[i] + '.html',
			success: successSource
		});
	};

	var VM = (function() {
			var vm = {};

			
			vm.w = function(){
				return Lipsum.word();
			};
			vm.h = function(){
				return Lipsum.title();
			};
			vm.p = function(){
				return Lipsum.paragraph();
			};
			vm.li = function(){
				return Lipsum.li();
			};










			return vm;
		})(),
		timeReady = setInterval(function() {
			if (readySources >= totalSources) {
				clearInterval(timeReady);
				ko.applyBindings(VM);
			}
		}, 100);
});