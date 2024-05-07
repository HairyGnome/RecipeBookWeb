import style from "./RegisterForm.module.css"
import {useState} from "react";
import axios from "axios";
import {ToastContainer, toast, Bounce} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ErrorToast from "../../../common/toast/ErrorToast";
import InfoToast from "../../../common/toast/InfoToast";
import {Navigate} from "react-router-dom";

function RegisterForm() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    function passwordFormatCheck() {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*]{8,20}$/;
        return regex.test(password);
    }

    const onSubmit = async (event) => {
        event.preventDefault();

        if (username === ''
            || email === ''
            || password === ''
            || confirmPassword === '') {
            ErrorToast('Missing parameters! Please fill out all fields.');
            return;
        }

        if (!passwordFormatCheck()) {
            ErrorToast('Password must contain at least one uppercase letter, one lowercase letter, one number and be between 8 and 20 characters long');
            return;
        }

        axios({
            method: 'post',
            url: 'http://localhost:80/users/register',
            data: {
                username: username,
                email: email,
                password: password
            }
        }).then(res => {
            if(res.status === 200) {
                InfoToast('Registration successful');
                window.open('/login', '_self');
            }
            if(res.status === 406) {
                ErrorToast('Missing parameters! Please fill out all fields.');
            }

        })
            .catch(err => {
                if(err.response.status === 409) {
                    ErrorToast('Username or email address already exists');
                }
                else {
                    window.open('/error/520', '_self');
                }
        });
    };


    return (
        <div className={style['register-form']}>
            <ToastContainer />
            <div className={style['title-div']}>
                <h1 className={style['title']}>Register</h1>
            </div>
            <div className={style['form-div']}>
                <form className={style['form']} onSubmit={onSubmit} >
                    <input type="text" placeholder="Username" className={style['input']} value={username} onChange={e => setUsername(e.target.value)}/>
                    <input type="email" placeholder="Email" className={style['input']} value={email} onChange={e => setEmail(e.target.value)}/>
                    <input type="password" placeholder="Password" className={style['input']} value={password} onChange={e => setPassword(e.target.value)}/>
                    <input type="password" placeholder="Confirm Password" className={style['input']} value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>
                    <div>
                        <button className={style['button']}>Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterForm;