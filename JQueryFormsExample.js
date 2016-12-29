/*we are using jquery to allow the user to edit list with a form
first we hide our form until user clicks the new item button
then we hide that button and show our form
we stop the default submit event, and put in our own, which is
to add the text value to our list*/

$(function() {
	var $newItemButton = $('#newItemButton');
	var $newItemForm = $('#newItemForm');
	var $textInput = $('input:text');

	$newItemButton.show();
	$newItemForm.hide();

	$('#showForm').on('click', function() {
		$newItemButton.hide();
		$newItemForm.show();
		});
	$newItemForm.on('submit', function(e){
		e.preventDefault();
		var newText = $('input:text').val();
		$('li:last').after('<li>' + newText + '</li>');
		$newItemForm.hide();
		$newItemButton.show();
		$('li:last').addClass('cool');
		$textInput.val('');
		});
});