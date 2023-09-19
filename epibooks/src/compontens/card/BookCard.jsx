import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";

const BookCard = ({ title, category, btn, img, asin }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} className="d-flex flex-wrap align-items-stretch card-img"/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {category}
                </Card.Text>
                <Button variant="primary">
                    <Link to={`/book/${asin}`}>
                    {btn}
                    </Link>
                </Button>
            </Card.Body>
        </Card>
    )
}

export default BookCard;