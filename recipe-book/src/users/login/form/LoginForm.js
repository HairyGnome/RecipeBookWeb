import style from "./LoginForm.module.css"
import { Link } from 'react-router-dom';

function LoginForm() {
    return (
        <div>
            <div>
                <h1 className={style['title']}>Sign In</h1>
            </div>
            <div className={style['form-div']}>
                <form className={style['form']}>
                    <input type="text" placeholder="Username" className={style['input']}/>
                    <input type="password" placeholder="Password" className={style['input']}/>
                    <div>
                        <button className={style['button']}>Sign In</button>
                        <Link to="/register" className={style['register-link']}>I don't have an account</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;