import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import default_pfp from "../../../images/default_pfp.png";
import style from "./UserDropdown.module.css";
import GetSessionCookie from "../../cookies/GetSessionCookie";

function UserDropdown() {

    const [visible, setVisible] = useState(false);
    const [username, setUsername] = useState('');

    const toggleVisible = () => {
        setVisible(!visible);
    }

    useEffect(() => {
        const username = GetSessionCookie('username');
        setUsername(username ? username : '');
    }, []);

    const handleBlur = () => {
        setVisible(false);
    }

    return (
        <div className={style['user-dropdown']}>
            <img src={default_pfp} className={style['pfp']}  alt='profile_pic' onClick={toggleVisible} onBlur={handleBlur}/>
            {visible &&
                <div className={style['dropdown-div']}>
                    <p className={style['dropdown-text']}>Welcome {username}!</p>
                    <ul>
                        <li><Link to="/favourites" className={style['link']}>Favourites</Link></li>
                        <li><Link to="/logout" className={style['link']}>Logout</Link></li>
                    </ul>
                </div>}
        </div>
    )
}

export default UserDropdown;