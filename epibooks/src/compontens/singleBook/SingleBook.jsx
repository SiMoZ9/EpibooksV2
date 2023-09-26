import BookCard from "../card/BookCard";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {boolSelected, selectCard} from "../../reducers/booksReducer";
import {addAsin, asin, fetchComments} from "../../reducers/commentReducer";

const API_URL = `https://striveschool-api.herokuapp.com/api/comments/`

const SingleBook = ({book}) => {

    const [selected, setIsSelected] = useState(false)
    const dispatch = useDispatch()

    const id = useSelector(asin)

    const handleClick = () => {
        setIsSelected(!selected)
        dispatch(selectCard(selected))
        dispatch(addAsin(book.asin))
        dispatch(fetchComments(fetchParams))
    };

    const fetchParams = {
        url: API_URL+book.asin,
        params: {
            method: 'GET',
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGZhMDBlOGU4NDIyNzAwMTRjMzI2NzciLCJpYXQiOjE2OTU3MzMxNTgsImV4cCI6MTY5Njk0Mjc1OH0.z-Fxi9IbskrELa5IM7x6ua1Cvdx1FFmvztf_1R_Pwkg",
                'Content-Type': 'application/json'
            },
        }
    }

    const style = {
        width: '18rem',
        border: selected ? '10px solid red' : ''
    }


    return (
        <>
            <BookCard
                title={book.title}
                category={book.description}
                btn="Vai al prodotto"
                img={book.img}
                asin={book.asin}
                style={style}
                clickFunc={handleClick}
            />
        </>
    );
}

export default SingleBook