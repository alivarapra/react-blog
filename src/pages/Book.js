import React, { Component } from 'react';

import {
  Header,
  Footer,
  BookGrid
} from '../components';

class Book extends Component {
  state = {
      'booklist': [
        {
          'title': 'awesome-notes',
          'author': 'sabertazimi',
          'url': 'https://sabertazimi.github.io/awesome-notes',
          'description': 'Daily I Learned Notes'
        },
      ]
  };

  render() {
    const { booklist } = this.state;

    return (
      <div>
        <Header headingHidden={true} />
        <BookGrid booklist={booklist} />
        <Footer />
      </div>
    );
  }
}

export default Book;