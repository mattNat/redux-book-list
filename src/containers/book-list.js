// container aka smart component

import React, {Component} from 'react';
// book-list connection to redux
import { connect } from 'react-redux';
import { selectBook } from '../actions';
// func action generated actually ends up flowing through all reducers
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book, index) => (
      <li key={book.title} className="list-group-item">{book.title}</li>
    )
  )}
  
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

whenever application state changes...
1. container will re-render
2. object will be reassigned as this.props
*/
function mapStateToProps(state) {
  return {
    books: state.books
  };
}

/*
whenever selectBopok is called, the result should be passed
to all our reducers

anything returned from this function will end up as props on the
booklist container
*/
function mapDispatchToProps(dispatch) {
  // take all action and pass it into funnel (dispatch)
  return bindActionCreators({ selectBook: selectBook}, dispatch);
}

/*
connect takes function and component and produces a 
container (component that is aware of the state that is wwith Redux)

promote booklist from component to conatiner - 
needs to know about this new dispatch method, selectbook.  
Make it available as a prop
*/
export default connect(mapStateToProps, mapDispatchToProps)(BookList);