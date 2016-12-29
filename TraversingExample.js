/*This example is to show how you can move around the DOM
After you have selected something, there may not be a need to reselect
something else if you know its position in the DOM in relation to
your previous selection*/

$(function() {
	var $h2 = $('h2');
$ ('ul').hide();
$h2.append('<a> show(click here)</a>');
$h2.on('click', function(){
	$h2.next()
	.fadeIn(500)
	.children('hot')
	.addClass('complete');
	$h2.find('a').fade0ut();
	});
});