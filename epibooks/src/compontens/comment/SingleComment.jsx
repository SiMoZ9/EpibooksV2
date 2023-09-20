import React, {useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const SingleComment = ({author, comment, rate}) => {
    return (
        <Container>
            <Col>
                <Row>{author}</Row>
                <Row>{comment}</Row>
                <Row>{rate} stelle su 5</Row>
            </Col>
        </Container>
    );
}

export default SingleComment;
