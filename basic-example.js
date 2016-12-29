/*this is the header selector and it selects all tags from h1-h6
then we give all of them a class = header*/

$(':header').addClass('headline');

/*this line 1st selects the list items up to the third one,
then it hides them, waits for one seconds with delay method,
then fades them in within a 1.5 sec timeframe*/

$('li:lt(3)').hide().delay(1000).fadeIn(1500);

/*this selects all of our list items on our page
then it waits for the user to click on one, then proceeds to run the
function to remove the list item (this) that was clicked on*/

$('li').on('click', function() {
	$(this).remove();
	});