import React from 'react';

import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const Header = (props) => {

  const { logado, onLogin, onLogout } = props;

  return (
    <Navbar bg="primary" variant="dark" >
      <Navbar.Brand>
        <Link to="/" role="button" className="btn btn-primary">Elo Twitter</Link>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      {logado ? (
        <Nav className="mr-auto">
          <Link to="/perfil" role="button" className="btn btn-primary">Meu Perfil</Link>
          <Link to="/configuracao" role="button" className="btn btn-primary">Configurações</Link>
        </Nav>
      ) : <Nav className="mr-auto"></Nav>}
      <Nav className="justify-content-end" activeKey="/home">
        {logado ? (
          <Button variant="danger" style={{ marginRight: 10 }} onClick={onLogout}>
            Sair
        </Button>
        ) : <Button variant="success" style={{ marginRight: 10 }} onClick={onLogin}>
            Entrar
        </Button>}
      </Nav>
    </Navbar>

  );
}
export default Header;
