import React, { Component } from 'react'

import { Container, Card, Row, Col } from 'react-bootstrap'

import Posts from './Posts'

class Perfil extends Component {

    constructor(props) {
        super(props)

        const usuarioMock = {
            usuario: 'joaldo',
            username: '@joaldo',
            urlPhoto: 'http://i.imgur.com/xaWpElq.png',
        }

        this.state = {
            usuario: usuarioMock,
            posts: [
                {
                    ...usuarioMock,
                    mensagem: 'Tweet mockado',
                    data: new Date()
                }]
        }
    }

    render() {

        const { posts, usuario } = this.state;

        return (
            <Container style={style}>
                <Card style={{ width: '18rem' }}>
                    <Row>
                        <Col>
                            <img className="avatar" height="100" width="100" src={usuario.urlPhoto} />
                        </Col>
                        <Col>

                            <Card.Title>{usuario.usuario}</Card.Title>
                            <Card.Text>{usuario.username}</Card.Text>
                        </Col>
                    </Row>
                </Card>
                <Posts posts={posts}></Posts>
            </Container>
        );
    }
}

const style = {
    paddingTop: 20
}

export default Perfil;