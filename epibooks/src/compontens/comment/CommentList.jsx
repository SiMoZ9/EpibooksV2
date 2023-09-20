import React, {useEffect} from 'react';
import SingleComment from "./SingleComment";

const CommentList = ({reviewList, index}) => {
    return (
        
        <SingleComment
            author={reviewList.author}
            comment={reviewList.comment}
            rate={reviewList.rate}
        />
    );
}

export default CommentList;