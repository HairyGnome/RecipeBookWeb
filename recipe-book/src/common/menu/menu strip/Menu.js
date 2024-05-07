import style from "./Menu.module.css";
import logo from "../../../images/logo.png";
import {Link} from 'react-router-dom';
import LoginButton from "../../login/button/LoginButton";
import GetSessionCookie from "../../cookies/GetSessionCookie";
import UserDropdown from "../user dropdown/UserDropdown";
import {useState} from "react";
import axios from "axios";

function Menu() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    axios.interceptors.response.use(response => {
        setIsLoggedIn(GetSessionCookie('sessionId') !== null);
        return response;
    });



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
                    {isLoggedIn ? <UserDropdown /> : <LoginButton />}
                </div>
            </div>
        </nav>
    )
}

export default Menu;