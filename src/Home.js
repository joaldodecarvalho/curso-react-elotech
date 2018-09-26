import React, { Component } from 'react'
import { Container, Button, Form } from 'react-bootstrap'

import Posts from './Posts'

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            usuario: 'joaldo',
            username: '@joaldo',
            mensagem: '',
            posts: []
        }
    }

    onChangeMensagem = (event) => {
        const { value } = event.target;

        this.setState({
            'mensagem': value
        })
    }

    postar = () => {
        const { usuario, username, mensagem } = this.state;

        this.setState({
            posts: [...this.state.posts,
            { usuario, username, mensagem, data: new Date()}]
        })
    }

    render() {

        const { posts } = this.state;

        return (
            <Container style={style}>
                <Form>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Escreva aqui seu Tweet</Form.Label>
                        <Form.Control as="textarea" rows="3" onChange={this.onChangeMensagem} />
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