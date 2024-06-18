import {describe, it, expect, beforeEach} from '@jest/globals';
import Book from '../book.js';

describe('Book', () => {
  let myBook;

  beforeEach(() => {
    myBook = new Book('Cuentos de la Selva', 'Horacio Quiroga', 350,700);
  });

  it('return the correct title', () => {
    expect(myBook.getTitle()).toBe('Cuentos de la Selva');
  });

  it('return the correct author', () => {
    expect(myBook.getAuthor()).toBe('Horacio Quiroga');
  });

  it('return the correct number of pages', () => {
    expect(myBook.getPages()).toBe(350);
  });

  it('check title is a string', () => {
    expect(() => myBook = new Book(451, 1, 350)).toThrow();
  });


  it('check author is anonimo', () => {
    myBook = new Book('Los tres chanchitos', '', 1, 350);
    expect((myBook.getAuthor())).toBe('Anónimo');
  });



  it('check title is not empty', () => {
    expect(() => myBook = new Book('', 'Horacio Quiroga', 350)).toThrow();
  });

  it('check author is a string', () => {
    expect(() => myBook = new Book('Los tres chanchitos', 1324354, 1, 350)).toThrow();
  });

  it('check page param is a number', () => {
    expect(()=>myBook.setPages('letra')).toThrow();
  });

  it('check pages not < 1', () => {
    expect(()=>myBook.setPages(-1)).toThrow();
  });

  it('toString()', () => {
    let myBook = new Book('Cuentos de la Selva','Horacio Quiroga', 350, 2000);
    expect(myBook.toString()).toBe('Título: Cuentos de la Selva Autor: Horacio Quiroga Páginas: 350 Palabras: 2000');
  });

  it('check words is a number',() =>{
    expect(()=>myBook.setWords('letra')).toThrow();
  });

  it('return the correct number of words', () => {
    expect(myBook.getWords()).toBe(700);
  });

  it('return the average of words per page', () => {
    expect(myBook.wordsPerPage()).toBe(2);
  });

});
