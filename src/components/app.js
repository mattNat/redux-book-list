// "dumb" container or a component that 
// does not have a handle on redux
import React, {Component} from 'react';

import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>My Booklist!</h1>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}
