import React, {useEffect} from 'react';
import CommentList from "./CommentList";
import {useDispatch, useSelector} from "react-redux";
import {allComments, errors, fetchComments, isLoading} from "../../reducers/commentReducer";
import {useParams} from "react-router-dom";
import AddComment from "./AddComment";
import {boolSelected} from "../../reducers/booksReducer";
const CommentArea = ({bookId}) => {
    const dispatch = useDispatch()

    const comments = useSelector(allComments)
    const loading = useSelector(isLoading)
    const error = useSelector(errors)

    const isSelected = useSelector(boolSelected)

    const fetchParams = {
        method: 'GET',
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExYmZmYmIyYjJhZTAwMTRiMzQ3MDEiLCJpYXQiOjE2OTU2NjIwNzUsImV4cCI6MTY5Njg3MTY3NX0.CJKSOlVH1HPTz9Tj557IC53bI7J628G5IFama7a1if0"
        },
    }

    const myStyle = {
        display: isSelected ? 'flex' : 'none'
    }

    useEffect(() => {
        dispatch(fetchComments(`https://striveschool-api.herokuapp.com/api/comments/${bookId}`, fetchParams))
    }, []);


    return (
        <div style={myStyle}>
            {!loading && !error && comments.map((i) => (
                <CommentList
                    reviewList={i}
                />
            ))
            }
            <AddComment bookId={bookId}/>
        </div>
    );
};

export default CommentArea;
