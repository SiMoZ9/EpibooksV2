import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
import {allBooks, allLoading, allError, getData} from "../reducers/booksReducer"
import MainLayout from "../layouts/MainLayout";

const BookDetail = () => {

    const {bookId} = useParams(); // prende il parametro bookId (definito nell'App.js)

    const dispatch = useDispatch();
    const data = useSelector(allBooks)
    const loading = useSelector(allLoading)
    const error = useSelector(allError)

    useEffect(() => {
        dispatch(getData(`https://epibooks.onrender.com/${bookId}`))
    }, [])

    return (
        <MainLayout>
        <div>
            Pagina del libro con id {bookId}
            {loading && <p>Caricando...</p>}
            {data && !error && <div>
                <img width={150} src={data[0].img} alt="" />
                <div>{data[0].asin}</div>
                <div>{data[0].category}</div>
                <div>{data[0].price}</div>
                <div>{data[0].title }</div>
            </div>}

            <div>
                <button>
                    <Link to={"/"}>
                        Torna alla home
                    </Link>
                </button>
            </div>
        </div>
        </MainLayout>
    )
}

export default BookDetail;
