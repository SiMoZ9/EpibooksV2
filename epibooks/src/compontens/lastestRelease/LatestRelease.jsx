import React, {useState, useEffect} from 'react';
import BookCard from "../card/BookCard";

import BeatLoader from "react-spinners/BeatLoader"
import {nanoid} from "nanoid";

import {useDispatch, useSelector} from "react-redux";
import {allBooks, allLoading, allError, getData} from "../../reducers/booksReducer";
import {value, filteredBooks, setFormValue, setFilteredBooks} from "../../reducers/searchReducer";
import Form from "react-bootstrap/Form";
import {Col, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";

const LatestRelease = () => {

    const dispatch = useDispatch()

    const data = useSelector(allBooks)
    const loading = useSelector(allLoading)
    const error = useSelector(allError)

    const formData = useSelector(value)
    const filterData = useSelector(filteredBooks)

    const getValueFromForm = (value) => {
        if (formData === "") dispatch(setFilteredBooks(data))
        dispatch(setFormValue(value))
    }

     const submitFiltered = (e) => {
        e.preventDefault()
         const booksFiltered = filterData.filter(book => book.title.toLowerCase().includes(formData.toLowerCase()))
        dispatch(setFilteredBooks(booksFiltered))
    }

    useEffect(() => {
        dispatch(getData("https://epibooks.onrender.com"))

    }, []);

    return (

        <div>
            {error && <h1>OOps errore durante il caricamento dei libri...</h1>}
            {loading && !error && (
                <BeatLoader className="d-flex justify-content-center p-5"
                    loading={loading}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            )}

            <Form onSubmit={submitFiltered}>
                <Row>
                    <Col xs="auto">
                        <Form.Control
                            type="text"
                            placeholder="Cerca libri"
                            className=" mr-sm-2"
                            onChange={(e) => getValueFromForm(e.target.value)}
                        />
                    </Col>
                    <Col xs="auto">
                        <Button type="submit">Cerca</Button>
                    </Col>
                </Row>
            </Form>

            <div className="container">
                <div className='row d-flex flex-wrap'>
                    <div className='col d-flex flex-wrap gap-5'>

                        {dispatch(setFilteredBooks([...data])) && console.log(filterData)}

                        {!loading && !error && data && data.map((book) => {
                            return (
                                    filterData.map((book => (
                                        <BookCard
                                            key={nanoid()}
                                            title={book.title}
                                            category={book.category}
                                            btn="Vai al prodotto"
                                            img={book.img}
                                            asin={book.asin}
                                        />
                                    )))
                            )

                        })}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default LatestRelease;
