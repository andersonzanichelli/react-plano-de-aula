import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-materialize';

class TableList extends Component {
  render() {
    return(
      <table className="table">
        <thead>
          <tr>
              <th>Atividade</th>
              <th>Data</th>
              <th>Avaliação</th>
              <th></th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    );
  }
}

export default connect(null)(TableList)
