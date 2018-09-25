import React, { Component } from 'react'
import { Container, Form, Button } from 'react-bootstrap'

class Configuracao extends Component {

    constructor(props) {
        super(props)

        this.state = {
            nome: 'Joaldo',
            username: '@joaldo',
            urlPhoto: 'https://images.vexels.com/media/users/3/147102/isolated/preview/082213cb0f9eabb7e6715f59ef7d322a--cone-do-perfil-instagram-by-vexels.png'
        }
    }

    onChange = (event) => {
        const { value, name } = event.target;

        this.setState({
            [name]: value
        })
    }

    save = () => {
        console.log(this.state)
    }

    render() {

        const { nome, username, urlPhoto } = this.state;

        return (
            <Container>
                <Form>
                    <Form.Group>
                        <Form.Label>Nome</Form.Label>
                        <Form.Control name="nome" value={nome} onChange={this.onChange}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control name="username" value={username} onChange={this.onChange}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>URL perfil</Form.Label>
                        <Form.Control name="urlPhoto" value={urlPhoto} onChange={this.onChange}></Form.Control>
                    </Form.Group>
                    <Button variant="success" onClick={this.save}>Salvar</Button>
                </Form>
            </Container>
        );
    }

}

export default Configuracao;