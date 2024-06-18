import Book from './book.js';

class Library {

  #name;
  #inventory = [];


  constructor(name) {
    this.setName(name);
  }

  setName(name) {
    if (typeof (name) !== 'string') {
      throw new Error();
    };
    name = name.trim();
    if (name.length === 0) {
      throw new Error();
    };
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  addBook(title, author, pages, words) {
    const newBook = new Book(title, author, pages,words);
    this.#inventory.push(newBook);
  }

  getInventory() {
    return this.#inventory;
  }

  totalBooks() {
    return this.#inventory.length;
  }

  totalWords() {
    let cantWords = 0;
    for (let i = 0; i < this.totalBooks(); i++){
      cantWords += this.#inventory[i].getWords();
    }
    return cantWords;
  }
}

export default Library;
