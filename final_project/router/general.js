const express = require("express");
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();

public_users.post("/register", (req, res) => {
  //Write your code here
  return res.status(300).json({ message: "Yet to be implemented" });
});

// Get the book list available in the shop
public_users.get("/", function (req, res) {
  //Write your code here
  return res.send(JSON.stringify(books));
});

// Get book details based on ISBN
public_users.get("/isbn/:isbn", function (req, res) {
  let isbn = parseInt(req.params.isbn);
  return res.send(books[isbn]);
});

// Get book details based on author
public_users.get("/author/:author", function (req, res) {
  let capitalAuthor = req.params.author.charAt(0).toUpperCase() + author.slice(1);
  let booksIDArr = Object.keys(books);
  let booksArr = [];
  for (let id = 1; id <= booksIDArr.length; id++) {
    booksArr.push(books[id]);
  }
  let finalArr = []
  for (let authors in booksArr) {
    if (booksArr[authors].author === capitalAuthor) {
      finalArr.push(booksArr[authors])
      console.log(booksArr[authors]);
    }
  }
  return res.send(finalArr);
});

// Get all books based on title
public_users.get("/title/:title", function (req, res) {
  //Write your code here
  return res.status(300).json({ message: "Yet to be implemented" });
});

//  Get book review
public_users.get("/review/:isbn", function (req, res) {
  //Write your code here
  return res.status(300).json({ message: "Yet to be implemented" });
});

module.exports.general = public_users;
