import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const BookCard = ({ title, category, btn, img, asin }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {category}
                </Card.Text>
                <Button variant="primary">
                </Button>
            </Card.Body>
        </Card>
    )
}

export default BookCard;