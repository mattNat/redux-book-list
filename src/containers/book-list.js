// container aka smart component

import React, {Component} from 'react';
// book-list connection to redux
import { connect } from 'react-redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      <li key={book.title} className="list-group-item">{book.title}</li>
    })
  }
  
  // render a list of books
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

/* 
purpose: take application state as an argument
state contains list of books and active book

whatever is returned will show up as props
inside of bookList
*/
function mapStateToProps(state) {
  
}