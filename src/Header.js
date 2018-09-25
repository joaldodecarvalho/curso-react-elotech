import React from 'react';

import { Navbar, Nav, Button, } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const Header = (props) => {

    const { logado, onLogin, onLogout } = props;

    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand>
                <Link to="/" role="button" className="btn btn-primary">Twitter</Link>
            </Navbar.Brand>

            <Nav>
                {logado ? (
                    <div>
                        <Link to="/perfil" role="button" className="btn btn-primary">Meu Perfil</Link>
                        <Link to="/configuracao" role="button" className="btn btn-primary">Configurações</Link>

                        <Button variant="danger" style={{ marginRight: 10 }} onClick={onLogout}>
                            Logout
                        </Button>
                    </div>
                ) : (
                        <Button variant="success" style={{ marginRight: 10 }} onClick={onLogin}>
                            Login
                        </Button>
                    )}
            </Nav>
        </Navbar>
    );
}
export default Header;
