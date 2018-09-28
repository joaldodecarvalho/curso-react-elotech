import React from 'react'

import { ListGroup, Card } from 'react-bootstrap'

const Posts = (props) => {

    const { posts } = props;

    return (
        <ListGroup style={style}>
            {posts.map(p =>
                <Card>
                    <Card.Header>{p.usuario} - {p.data.toLocaleString()}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <p> {p.mensagem} </p>
                            <footer className="blockquote-footer">
                                <img src="http://i.imgur.com/xaWpElq.png" height="100" width="100" className="avatar" />
                                Escrito por <cite title="Source Title">{p.username}</cite>
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            )}
        </ListGroup>
    );
}

const style = {
    paddingTop: 20
}

export default Posts;