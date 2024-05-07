import style from "./LoginForm.module.css"
import { Link } from 'react-router-dom';
import {ToastContainer} from "react-toastify";
import ErrorToast from "../../../common/toast/ErrorToast";
import {useState} from "react";
import SetSessionCookie from "../../../common/cookies/SetSessionCookie";
import axios from "axios";
import InfoToast from "../../../common/toast/InfoToast";

function LoginForm() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const onSubmit = async (event) => {
        event.preventDefault();

        if (username === '' || password === '') {
            ErrorToast('Missing parameters! Please fill out all fields.');
            return;
        }

        axios({
            method: 'post',
            url: 'http://localhost:80/users/login',
            withCredentials: true,
            data: {
                username: username,
                password: password
            }
        }).then(res => {
            if(res.status === 200) {
                InfoToast('Login successful');
                window.open('/', '_self');
            }
        }).catch(err => {
            console.log(err);
            switch(err.response.status) {
                case 400:
                    ErrorToast('Invalid username or password');
                    break;
                case 401:
                    ErrorToast('Already logged in');
                    break;
                default:
                    window.open(`/error?code=${err.response.status}&message=${err.response.message}`, '_self');
                    break;
            }
        })
    }


    return (
        <div>
            <ToastContainer />
            <div>
                <h1 className={style['title']}>Sign In</h1>
            </div>
            <div className={style['form-div']}>
                <form className={style['form']} onSubmit={onSubmit}>
                    <input type="text" placeholder="Username" className={style['input']} value={username} onChange={e => setUsername(e.target.value)} />
                    <input type="password" placeholder="Password" className={style['input']} value={password} onChange={e => setPassword(e.target.value)} />
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