import React, {useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import {addComment, fetchComments, rate, asin, cm, addRate, addAsin} from "../../reducers/commentReducer";
import {removeListener} from "@reduxjs/toolkit";


const API_URL = `https://striveschool-api.herokuapp.com/api/comments/`

const AddComment = () => {

    const dispatch = useDispatch()
    const new_comment = useSelector(cm)
    const rating = useSelector(rate)
    const id = useSelector(asin)


    const fetchParams = {
        url: API_URL,
        params: {
            method: 'POST',
            body: JSON.stringify({
                comment: new_comment,
                rate: rating,
                elementId: id
            }),
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGZhMDBlOGU4NDIyNzAwMTRjMzI2NzciLCJpYXQiOjE2OTU3MzMxNTgsImV4cCI6MTY5Njk0Mjc1OH0.z-Fxi9IbskrELa5IM7x6ua1Cvdx1FFmvztf_1R_Pwkg",
                'Content-Type': 'application/json'
            },
        }
    }

    useEffect(() => {

    }, []);

    const handleSumbit = (e) => {
        e.preventDefault()
        const formData = new FormData(document.getElementById('comment-form'))

        const r = formData.get('rate')
        const c = formData.get("comment")
        dispatch(addRate(r))
        dispatch(addComment(c))

        console.log(id)
        console.log(rating)
        console.log(new_comment)

        dispatch(fetchComments(fetchParams))
    }

    return (
        <Form noValidate id="comment-form" onSubmit={handleSumbit}>
            <Row>
                <Form.Group as={Col} className="mb-3">
                    <Form.Label>Rating</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control
                            type="text"
                            name="rate"
                            placeholder="Scegli un valore tra 1 e 5"
                            aria-describedby="inputGroupPrepend"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Scegli un valore da 1 a 5
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Scrivi un commento</Form.Label>
                    <Form.Control as="textarea" rows={3} name="comment"/>
                </Form.Group>
            </Row>
            <Row className="mb-3">
            </Row>
            <Button type="submit">Aggiungi un commento</Button>
        </Form>
    );
}

export default AddComment;