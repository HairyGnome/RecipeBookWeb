import style from "./Menu.module.css";
import logo from "../../images/logo.png";
import { Link } from 'react-router-dom';
import LoginButton from "../../common/login/button/LoginButton";
import GetSessionCookie from "../../common/cookies/GetSessionCookie";

function Menu() {
    return (
        <nav>
            <div className={style['menu-div']}>
                <div className={style['links-div']}>
                    <div className={style['logo-div']}>
                        <Link to="/">
                            <img src={logo} alt="Logo" className={style['logo']}/>
                        </Link>
                    </div>
                </div>
                <div>
                    {GetSessionCookie('sessionId') ? 'Hello ' + GetSessionCookie('username') : <LoginButton />}
                </div>
            </div>
        </nav>
    )
}

export default Menu;