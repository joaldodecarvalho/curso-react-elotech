import React, { Component } from 'react'
import { Container, Form, Button, Col, Row } from 'react-bootstrap'

class Configuracao extends Component {

    constructor(props) {
        super(props)

        this.state = {
            nome: 'Joaldo',
            username: '@joaldo',
            urlPhoto: 'https://i1.wp.com/www.emotioncard.com.br/wp-content/uploads/2016/05/perfil-whatsapp.jpg'
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
            <Container style={style}>
                <Form>

                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>
                            Nome
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control name="nome" value={nome} onChange={this.onChange}></Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>
                            Username
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control name="username" value={username} onChange={this.onChange}></Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>
                            URL perfil
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control name="urlPhoto" value={urlPhoto} onChange={this.onChange}></Form.Control>
                        </Col>
                    </Form.Group>

                    <Button variant="success" onClick={this.save}>Salvar</Button>
                </Form>
            </Container>
        );
    }

}

const style = {
    paddingTop: 20
}

export default Configuracao;