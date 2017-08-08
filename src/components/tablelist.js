import React, { Component } from 'react';
import { connect } from 'react-redux';

class TableList extends Component {
  render() {
    return(
      <div className="table">Table</div>
    );
  }
}

export default connect(null)(TableList)
