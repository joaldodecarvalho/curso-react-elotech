import React, { Component } from 'react'
import { Container, Button, Form } from 'react-bootstrap'

import Posts from './Posts'

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            usuario: 'joaldo',
            username: '@joaldo',
            urlPhoto: 'http://i.imgur.com/xaWpElq.png',
            mensagem: '',
            posts: []
        }
    }

    onChangeMensagem = event => {
        const { value } = event.target;

        this.setState({
            mensagem: value
        })
    }

    postar = () => {
        const { usuario, username, mensagem, urlPhoto } = this.state;

        this.setState({
            posts: [...this.state.posts,
            { usuario, username, mensagem, urlPhoto, data: new Date() }]
        })
    }

    render() {

        const { posts } = this.state;

        return (
            <Container style={style}>
                <Form>
                    <Form.Group>
                        <Form.Control as="textarea" rows="3" onChange={this.onChangeMensagem} placeholder="Escreva aqui seu Tweet" />
                    </Form.Group>
                </Form>

                <Button onClick={this.postar}>Postar</Button>

                <Posts posts={posts}></Posts>
            </Container>
        )
    }
}

const style = {
    paddingTop: 20
}

export default Home;