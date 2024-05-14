import style from './CommentSection.module.css';
import {useEffect, useState} from "react";
import Comment from "../common/comments/Comment";
import axios from "axios";
import CommentPostForm from "../common/comments/form/CommentPostForm";
import LoadingIndicator from "../common/loading/LoadingIndicator";
import GetSessionCookie from "../common/cookies/GetSessionCookie";

function CommentSection({recipeId}) {

    const [comments, setComments] = useState([]);

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);


    const onPost = (comment) => {
        axios({
            method: 'post',
            url: `http://localhost:80/comment`,
            withCredentials: true,
            data: {
                recipeId: recipeId,
                comment: comment
            }
        }).then(response => {
            setComments(response.data.comments);
        }).catch(err => {
            window.open(`/error?code=${err.response.status}&message=${err.response.message}`, '_self');
        });
    }

    useEffect(() => {
        setIsLoggedIn(GetSessionCookie('sessionId') !== null);
        axios({
            method: 'get',
            url: `http://localhost:80/comments/${recipeId}`,
            withCredentials: true,
        }).then(response => {
            console.log(response.data);
            setComments(response.data.comments);
            setIsLoading(false);
        }).catch(err => {
            window.open(`/error?code=${err.response.status}&message=${err.response.message}`, '_self');
        });
    }, []);




    return (
        <div className={style['comment-section']}>
            <h2 className={style['comments-title']}>Comments</h2>
            { isLoading ? <LoadingIndicator/> : (
                <div className={style['comments-div']}>
                    { comments.length > 0 ? (
                    <div className={style['comments']}>
                        { comments.map(((comment, key) => <Comment key={key} username={comment.username} text={comment.comment}/>)) }
                    </div>) : (<p className={style['no-comments']}>No comments yet. Be the first to comment</p>) }
                    { isLoggedIn ? (
                    <div className={style['comments-input-div']}>
                        <CommentPostForm onPost={onPost}/>
                    </div>) : (<p>You must log in to post comments</p>) }
                </div>) }
        </div>
    )
}

export default CommentSection;