import React, { Component } from 'react'
import { Container, Button } from 'react-bootstrap'

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
            posts: [...this.state.posts, { usuario: usuario, username: username, mensagem: mensagem, data: new Date() }]
        })
    }

    render() {

        return (
            <Container>
                <textarea rows="5" cols="100" name="mensagem" onChange={this.onChangeMensagem} />
                <Button onClick={this.postar}>Postar</Button>

                {this.state.posts}
            </Container>
        )
    }

}

export default Home;