import React, {useEffect, useState} from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {boolSelected, selectCard} from "../../reducers/booksReducer";

const BookCard = ({ title, category, btn, img, asin, style, clickFunc}) => {

    return (
        <Card style={style}>
            <Card.Img variant="top" src={img} className="d-flex flex-wrap align-items-stretch card-img" onClick={clickFunc}/>
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