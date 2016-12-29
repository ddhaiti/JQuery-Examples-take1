/*this example will wait for DOM to be ready
then will hide h2 then slide it down
selects all li then hides them , then fades them in one by one
last if we click on an li it fades out*/

$(function(){
	$('h2').hide().slideDown();
	var $li = $('li');
	$li.hide().each(function(index){
		$(this).delay(700 * index).fadeIn(700);
		});
	$li.on('click', function(){
		$(this).fadeOut(700);
	});
});