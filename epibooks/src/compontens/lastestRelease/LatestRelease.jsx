import React, {useState, useEffect} from 'react';
import BookCard from "../card/BookCard";

import BeatLoader from "react-spinners/BeatLoader"
import {nanoid} from "nanoid";

import {useDispatch, useSelector} from "react-redux";
import {allBooks, allLoading, allError, getData, boolSelected} from "../../reducers/booksReducer";
import Form from "react-bootstrap/Form";
import {Col, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import SingleBook from "../singleBook/SingleBook";
import CommentArea from "../comment/CommentArea";

const LatestRelease = () => {
    const BOOKS_API_URL = "https://epibooks.onrender.com"

    const dispatch = useDispatch()

    const data = useSelector(allBooks)
    const loading = useSelector(allLoading)
    const error = useSelector(allError)

    const [filteredBooks, setFilteredBooks] = useState([])
    const [formValue, setFormValue] = useState("")


    console.log(filteredBooks)

    const getValueFromForm = (value) => {
        if (formValue === "") setFilteredBooks(data)
        setFormValue(value)
    }

     const submitFiltered = (e) => {
        e.preventDefault()
         const booksFiltered = filteredBooks.filter(book => book.title.toLowerCase().includes(formValue.toLowerCase()))
        setFilteredBooks(booksFiltered)
    }

    const fetchParams = {
        url: BOOKS_API_URL,
        params: {
            method: 'GET'
        }
    }


    useEffect(() => {
        dispatch(getData(fetchParams))
        setFilteredBooks([...data])
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

            <Form onSubmit={submitFiltered} className="d-flex flex-wrap justify-content-center m-5">
                <Row>
                    <Col xs="auto">
                        <Form.Control
                            name="formData"
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
                <CommentArea/>
                <div className='row d-flex flex-wrap'>
                    <div className='col d-flex flex-wrap'>
                        {!loading && !error}
                        {!loading && !error && data && filteredBooks.map((book => (
                            <SingleBook
                                key={nanoid()}
                                book={book}
                            />
                        )))
                        }
                    </div>
                </div>

            </div>
        </div>
    );
}

export default LatestRelease;
