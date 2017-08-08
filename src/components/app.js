import React, { Component } from 'react';
import Header from './header';
import TableList from './tablelist';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <TableList />
      </div>
    );
  }
}
