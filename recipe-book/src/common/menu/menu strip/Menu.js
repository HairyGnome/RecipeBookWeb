import style from "./Menu.module.css";
import logo from "../../../images/logo.png";
import { Link } from 'react-router-dom';
import LoginButton from "../../login/button/LoginButton";
import GetSessionCookie from "../../cookies/GetSessionCookie";
import UserDropdown from "../user dropdown/UserDropdown";

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
                    {GetSessionCookie('sessionId') ? <UserDropdown /> : <LoginButton />}
                </div>
            </div>
        </nav>
    )
}

export default Menu;