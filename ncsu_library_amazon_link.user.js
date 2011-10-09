// ==UserScript==
// @name           NCSU Library Amazon Link
// @namespace      http://andrew-austin.com
// @description    adds a link to the book's amazon.com page
// ==/UserScript==

var isbnSpan = document.getElementById('isbn');
var isbnText = isbnSpan.firstChild.data;
var toolbarBox = document.getElementById('toolbarBox');
var toolbarDiv = document.createElement("div");
toolbarDiv.setAttribute("class", "toolbar");
var amazonImg = document.createElement("img");
amazonImg.setAttribute("src", "http://www.amazon.com/favicon.ico");
amazonImg.setAttribute("class", "toolbarIcon");
var amazonLink = document.createElement("a");
amazonLink.setAttribute("href", "http://www.amazon.com/exec/obidos/ISBN=" + isbnText);
amazonLink.appendChild(document.createTextNode("Amazon"));
toolbarDiv.appendChild(amazonImg);
toolbarDiv.appendChild(amazonLink);
toolbarBox.appendChild(toolbarDiv);