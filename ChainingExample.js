/*so chaining is putting many functions together on the same
line*/

$( 'li[id!="one"]').hide().delay(500).fadeIn(1400);

/*this will chk the ids of all list items and select all who arent one
it will hide them, wait for .5 sec and the fade them In*/