import {createBlogPost } from "./blogpost.js";
let i = 20;
var forAgainstLet = createBlogPost(
    "For and against let",
    "Kyle Simpson",
    "October 27, 2014",
    "https://davidwalsh.name/for-and-against-let"
);

console.log('i = ',i);

forAgainstLet.print();