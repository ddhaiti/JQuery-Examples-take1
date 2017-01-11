//use this with Lesson.html
$(":header").on('mousedown',function(){//waits for mousedown event
    $(this).css("color", "red");// changes text color to red after mousedown
});
$(":header").on('mouseup',function(){//waits for mouseup event0
    $(this).css("color", "blue");//changes text color to blue after mouseup
});