//use this with Lesson.html
$("li").on('click',function(){//waits for click on selection
	$(this).slideUp(2000);//slides up after click
    alert("You have clicke an li element!");//sends an alert when clicked
});