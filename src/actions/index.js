import bookList from "../containers/book-list";

export function selectBook(book) {
  /*
  selectBook is an ActionCreator, it needs to return an action 
  an object with a type property.

  Actions have two values:
  1. Type
  2. Payload: clarifies condition
  */
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}

