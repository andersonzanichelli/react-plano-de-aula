import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-materialize';

class TableList extends Component {
  render() {
    return(
      <div className="table">
        <Row>
          <Col>Atividade</Col>
          <Col>Data</Col>
        </Row>
      </div>
    );
  }
}

export default connect(null)(TableList)
