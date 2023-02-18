"use strict";
const mainContainer = document.querySelector("main");
const cardContainer = document.createElement("div");
cardContainer.classList.add("card-container");
mainContainer.appendChild(cardContainer);
const addBook = document.querySelector(".add-book");
const formBox = document.querySelector(".form-container");
const form = document.querySelector(".book-form");
const nameInput = document.getElementById("book-name");
const authorInput = document.getElementById("book-author");
const pagesInput = document.getElementById("book-pages");
const library = [];

// ================================================
function Book(title, author, number, isRead) {
  this.BookTitle = title;
  this.author = author;
  this.number = number;
  this.isRead = isRead;
}
// ================================================
addBook.addEventListener("click", function () {
  formBox.classList.remove("hidden");
});
// ==================================================

formBox.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = nameInput.value;
  const author = authorInput.value;
  const pages = pagesInput.value;
  const read = document.getElementById("read-checkbox").checked;
  const book = new Book(name, author, pages, read);
  library.push(book);
  const keys = Object.keys(book);
  const card = document.createElement("div");
  card.classList.add("card");
  keys.forEach(function (key) {
    const text = document.createElement("p");
    text.textContent = "" + key + " : " + book[key];
    card.appendChild(text);
  });
  const remove = document.createElement("button");
  remove.textContent = "Remove";
  remove.classList.add("remove");
  card.appendChild(remove);
  cardContainer.appendChild(card);
  form.reset();
  formBox.classList.toggle("hidden");
});
window.addEventListener("click", function (e) {
  if (e.target.classList.contains("remove")) e.target.closest(".card").remove();
});
