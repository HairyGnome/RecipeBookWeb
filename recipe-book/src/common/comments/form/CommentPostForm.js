import style from "./CommentPostForm.module.css"
import {useState} from "react";


function CommentPostForm({onPost}) {

    const [comment, setComment] = useState('');

    function post(event) {
        event.preventDefault();
        onPost(comment);
        setComment('');
    }

    return (
        <form onSubmit={post} className={style['comment-form']}>
            <input type='text' className={style['comments-input']} placeholder='Write a comment...' value={comment}
                   onChange={e => {
                       setComment(e.target.value)
                   }}/>
            <button type='submit' className={style['post-button']}>Post</button>
        </form>
    )
}

export default CommentPostForm;