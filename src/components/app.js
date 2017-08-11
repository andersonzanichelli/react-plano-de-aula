import React, { Component } from 'react';
import Header from './header';
import TableList from './tablelist';
import Tools from './tools';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Tools />
        <TableList />
      </div>
    );
  }
}
