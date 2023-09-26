import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import {addComment, fetchComments, new_comment} from "../../reducers/commentReducer";
import {useParams} from "react-router-dom";


const API_URL = `https://striveschool-api.herokuapp.com/api/comments/`

const AddComment = ({bookId}) => {

    const dispatch = useDispatch()
    const newComment = useSelector(new_comment)
    const getValueFromForm = (v) => {
        dispatch(addComment(v))
    }

    const fetchParams = {
        method: 'PUT',
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExYmZmYmIyYjJhZTAwMTRiMzQ3MDEiLCJpYXQiOjE2OTU2NjIwNzUsImV4cCI6MTY5Njg3MTY3NX0.CJKSOlVH1HPTz9Tj557IC53bI7J628G5IFama7a1if0",
            'Content-Type': 'application/json'
        },
        body: JSON.stringify()
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(fetchComments(API_URL+bookId, fetchParams))
        console.log(newComment)
    };

    return (
        <Form noValidate onSubmit={handleSubmit}>
            <Row>
                <Form.Group as={Col} md="4">
                    <Form.Label>Username</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control
                            type="text"
                            placeholder="Username"
                            aria-describedby="inputGroupPrepend"
                            required
                            onChange={(e) => getValueFromForm(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                            Scegli uno username
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
                <Form.Group as={Col} md="4" >
                    <Form.Label>Email</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control
                            type="email"
                            placeholder="Email"
                            aria-describedby="inputGroupPrepend"
                            required
                            onChange={(e) => getValueFromForm(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                            Email non valida
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Scrivi un commento</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Row>
            <Row className="mb-3">
            </Row>
            <Button type="submit">Aggiungi un commento</Button>
        </Form>
    );
}

export default AddComment;