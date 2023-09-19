import React, {useState, useEffect} from 'react';
import BookCard from "../card/BookCard";

import BeatLoader from "react-spinners/BeatLoader"
import {nanoid} from "nanoid";

import {useDispatch, useSelector} from "react-redux";
import {allBooks, allLoading, allError, getData} from "../../reducers/booksReducer";

const LatestRelease = () => {

    const dispatch = useDispatch()
    const data = useSelector(allBooks)
    console.log(data)
    const loading = useSelector(allLoading)
    const error = useSelector(allError)


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
            <div className="container">
                <div className='row d-flex flex-wrap'>
                    <div className='col d-flex flex-wrap gap-5'>
                        {!loading && !error && data && data.map((book) => {
                            return (
                                <BookCard
                                    key={nanoid()}
                                    title={book.title}
                                    category={book.category}
                                    btn="Vai al prodotto"
                                    img={book.img}
                                    asin={book.asin}
                                />
                            )
                        })}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default LatestRelease;