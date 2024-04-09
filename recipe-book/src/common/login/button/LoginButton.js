import style from "./LoginButton.module.css";
import { useNavigate } from "react-router-dom";

function LoginButton() {
    const navigate = useNavigate();
    const goToLogin = () => {
        navigate('/login')
    }
    return (
        <button className={style['login']} onClick={goToLogin}>Sign In/Register</button>
    )
}

export default LoginButton;