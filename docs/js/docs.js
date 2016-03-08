$('document').ready(function() {
	$('.doc-box').doctabs();
	hljs.configure({
	  'tabReplace': '  '
	});
	$('pre').each(function(i, block) {
		hljs.highlightBlock(block);
	});
});