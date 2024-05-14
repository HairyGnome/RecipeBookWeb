import style from './Comment.module.css';
import defaultpfp from '../../images/default_pfp.png';


function Comment({username, text}) {
    return (
        <div className={style['comment-div']}>
            <div className={style['user-div']}>
                <img src={defaultpfp} alt="profile picture" className={style['pfp']} />
                <h3 className={style['username']}>{username}</h3>
            </div>
            <p className={style['text']}>{text}</p>
        </div>
    )
}

export default Comment;