import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {

  renderLinks() {
    return (
      [
        <li className="nav-item" key={1}>
          <Link className="nav-link signin" to="/myplans">Meus Planos</Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link className="nav-link signin" to="/signin">Entrar</Link>
        </li>
      ]
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
