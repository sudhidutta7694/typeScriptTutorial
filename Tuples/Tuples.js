"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var book = ["The Great Gatsby", "F. Scott Fitzgerald", 1925, ["classic", "fiction"]];
var title = book[0], author = book[1], year = book[2], genres = book[3]; //Basic use case of Destructuring
console.log("Title: ".concat(title));
console.log("Author: ".concat(author));
console.log("Year: ".concat(year));
console.log("Genres: ".concat(genres.join(", ")));
