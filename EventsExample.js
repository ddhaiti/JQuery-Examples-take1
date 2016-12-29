/*this is a function that will first wait for the DOM to send ready
then it will select all list items
three events, click, mouseover, and mouseout
on click and mouseover takes id of this list item and concatenates it
on mouseout takes out the id from screen*/

$(function() {//ready event
	var ids='';
	var $listItems = $('li');

	$listItems.on('mouseover click', function(){//mouseover or click
		ids= this.id;
		$listItems.children('span').remove();
		$(this).append('<span class="priority">' + ids + '</span>');
		});
$listltems.on('mouseout', function(){//mouseout
	$(this).children('span').remove();
	});
});
