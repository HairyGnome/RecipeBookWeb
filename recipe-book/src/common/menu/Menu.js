import style from "./Menu.module.css";
import logo from "../../images/logo.png";
import { Link } from 'react-router-dom';
import LoginButton from "../../common/login/button/LoginButton";

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
                    <Link to="/" className={style['link']}>Home</Link>
                    <Link to="/profile" className={style['link']}>Profile</Link>
                </div>
                <div>
                    <LoginButton />
                </div>
            </div>
        </nav>
    )
}

export default Menu;