/*Methods that do the same thing can work differntly, this is an example between .html() and .text()
both retrieve the content from where you select but may work differently when you try to do something else
like printing*/
///*what if there is more than one thing in a tag*/
document.write("Results in li<br>");
var content = $('li').html();//selects the html in the li tags
document.write(".html on li: " + content);


var content1 = $('li').text();//selects the text in the li tags
document.write("<br>.text on li: " + content1);

/*what if there is more than one thing in a tag*/
document.write("<br><br>Results in ul<br>");
var content3 = $('ul').html();//selects the html in the first ul tags which includes all the li html as well
document.write(".html on ul: " + content3);


var content4 = $('ul').text();//selects the text in the ul tag
document.write("<br>.text on ul: " + content4);