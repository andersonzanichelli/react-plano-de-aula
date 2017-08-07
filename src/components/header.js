import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {

  renderLinks() {
    return (
      <li>Teste</li>
    );
  }

  render() {
    return (
      <nav className="header-component navbar navbar-light">
        <Link to="/" className="navbar-brand">Plano de Aula</Link>
          <ul className="nav navbar-nav">
            {this.renderLinks()}
          </ul>
      </nav>
    );
  }
}

export default connect(null)(Header);
