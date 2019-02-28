# Snippets_WebScrap
Code snippet demo of web scraping using Cheerio

# Cheerio selectors
In Cherrio, we use selectors to select tags of an HTML document. The selector syntax was borrowed from jQuery.

The following is a partial list of available selectors:

$("*") — selects all elements
$("#first") — selects the element with id="first"
$(".intro") — selects all elements with class="intro"
$("div") — selects all <div> elements
$("h2, div, p") — selects all <h2>, <div>, <p> elements
$("li:first") — selects the first <li> element
$("li:last") — selects the last <li> element
$("li:even") — selects all even <li> elements
$("li:odd") — selects all odd <li> elements
$(":empty") — selects all elements that are empty
$(":focus") — selects the element that currently has focus

For How-to examples:
http://zetcode.com/javascript/cheerio/
