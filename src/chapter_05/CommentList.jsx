import React from 'react';
import Comment from './Comment';

const comments = [
    {
        name: "졔졔",
        comment: "제가 만든 댓글입니다.",
    },
    {
        name: "wisdom",
        comment: "안녕하세요.",
    },
    {
        name: "jjeong",
        comment: "반갑습니다.",
    },
    {
        name: "룰루랄라",
        comment: "헬로헬로",
    },
];

const CommentList = (props) => {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
};

export default CommentList;