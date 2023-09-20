import React, {useEffect} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import {useSelector, useDispatch} from "react-redux";
import {allComments, isLoading, errors, getComments} from "../../reducers/commentReducer";

const CommentList = () => {

    const dispatch = useDispatch()

    const comments = useSelector(allComments)
    const loading = useSelector(isLoading)
    const error = useSelector(errors)

    useEffect(() => {
        dispatch(getComments())
    }, []);

    console.log(comments)

    return (
        <ListGroup>
            <ListGroup.Item>{}</ListGroup.Item>
        </ListGroup>
    );
}



export default CommentList;