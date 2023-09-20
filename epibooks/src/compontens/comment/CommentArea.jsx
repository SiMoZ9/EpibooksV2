import React, {useEffect} from 'react';
import CommentList from "./CommentList";
import {useDispatch, useSelector} from "react-redux";
import {allComments, errors, getComments, isLoading} from "../../reducers/commentReducer";

const CommentArea = () => {
    const dispatch = useDispatch()

    const comments = useSelector(allComments)
    const loading = useSelector(isLoading)
    const error = useSelector(errors)

    useEffect(() => {
        dispatch(getComments())
    }, []);

    return (
        <>
            {!loading && !error && comments.map((i) => (
                <CommentList
                    reviewList={i}
                />
            ))}

        </>
    );
};

export default CommentArea;
