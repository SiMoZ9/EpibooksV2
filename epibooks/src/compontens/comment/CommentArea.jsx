import React, {useEffect} from 'react';
import CommentList from "./CommentList";
import {useDispatch, useSelector} from "react-redux";
import {allComments, errors, fetchComments, isLoading} from "../../reducers/commentReducer";
import {useParams} from "react-router-dom";
import AddComment from "./AddComment";
import {boolSelected} from "../../reducers/booksReducer";
import {nanoid} from "nanoid";

const CommentArea = () => {

    const comments = useSelector(allComments)
    const loading = useSelector(isLoading)
    const error = useSelector(errors)

    const isSelected = useSelector(boolSelected)


    const myStyle = {
        display: isSelected ? 'flex' : 'none',
        flexDirection: 'column',
        alignItems: 'center',
    }

    console.log(isSelected)


    return (
        <div style={myStyle}>
            <AddComment/>
            {!loading && !error && comments.map((i) => (
                <CommentList
                    key={nanoid()}
                    reviewList={i}
                />
            ))
            }
        </div>
    );
};

export default CommentArea;
