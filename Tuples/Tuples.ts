type Book = [string, string, number, string[]];

const book: Book = ["The Great Gatsby", "F. Scott Fitzgerald", 1925, ["classic", "fiction"]];
const [title, author, year, genres] = book; //Basic use case of Destructuring

console.log(`Title: ${title}`);
console.log(`Author: ${author}`);
console.log(`Year: ${year}`);
console.log(`Genres: ${genres.join(", ")}`);

export {}