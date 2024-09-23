"use strict";

/**
 * Counts and outputs to the console the number of categories in ul#categories, i.e. li.item elements.
 * For each item li.item in the list, ul#categories will find and output to the console the text of the item's title
 * (the <h2> tag) and the number of items in the category (all <li>'s nested within it). 
 */

const categories = document.getElementById("categories").querySelectorAll(".item");

console.log(`Number of categories: ${categories.length}`)

for (const category of categories) {
    console.log(`Category ${category.querySelector('h2').innerText}`)
    console.log(`Elements ${category.querySelectorAll('li').length}`)
}