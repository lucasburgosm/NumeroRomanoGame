// The most common way to access an HTML element is to use the id of the element.
// In the example above the getElementById method used id="demo" to find the element.

//The easiest way to get the content of an element is by using the innerHTML property.
//The innerHTML property is useful for getting or replacing the content of HTML elements.

// https://www.w3schools.com/js/js_htmldom_document.asp

// document.getElementById(id)	Find an element by element id
// document.getElementsByTagName(name)	Find elements by tag name
// document.getElementsByClassName(name)	Find elements by class name


// This example finds the element with id="main", and then finds all <p> elements inside "main":

const x = document.getElementById("main");
const y = x.getElementsByTagName("p");
const x = document.getElementsByClassName("intro");


// If you want to find all HTML elements that match a specified CSS selector (id, class names, types, attributes, values of attributes, etc), use the querySelectorAll() method.
const x = document.querySelectorAll("p.intro");