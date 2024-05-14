import style from "./LoginScreen.module.css"
import LoginForm from "./form/LoginForm";
import Logo from "../../images/logo.png";
import RegisterForm from "../register/form/RegisterForm";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import getSessionCookie from "../../common/cookies/GetSessionCookie";

function LoginScreen() {
    const location = useLocation();
    const isRegister = location.pathname === '/register';

    let signInText = <p className={style['welcome']}>Welcome to RecipeBook! Please sign in, or register if you do not
        have an account yet.</p>

    let registerText = <p className={style['welcome']}>Welcome to RecipeBook! Please register, or sign in if you already have an account! </p>

    useEffect(() => {
        if(getSessionCookie('sessionId')) {
            window.open('/', '_self');
        }
    }, []);


    return (
        <div className={style['login-screen']}>
            <div className={style['logo-container']}>
                <img src={Logo} alt="Logo" className={style['logo']}/>
            </div>
            <div className={style['welcome-div']}>
                {isRegister ? registerText : signInText}
            </div>
            <div className={style['login-container']}>
                {isRegister ? <RegisterForm/> : <LoginForm/>}
            </div>
        </div>
    )
}


export default LoginScreen;