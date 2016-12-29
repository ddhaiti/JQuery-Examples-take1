/*This will select all list items then animate them when clicked on
making them transparent
we also must choose the speed at which the animation happens*/

$(function() {
$('li').on('click', function() {
	$(this).animate({
		opacity: 0.0,
		paddingright: '+=80'
		}, 2500, function() {
			$(this).remove();
			});
		});
	});
1