import {Link} from "react-router-dom";
import {useState} from "react";
import default_pfp from "../../../images/default_pfp.png";
import style from "./UserDropdown.module.css";

function UserDropdown() {

    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        setVisible(!visible);
    }


    return (
        <div className={style['user-dropdown']}>
            <img src={default_pfp} className={style['pfp']}  alt='profile_pic' onClick={toggleVisible}/>
            {visible &&
                <div className={style['dropdown-div']}>
                    <ul>
                        <li><Link to="/favourites" className={style['link']}>Favourites</Link></li>
                        <li><Link to="/logout" className={style['link']}>Logout</Link></li>
                    </ul>
                </div>}
        </div>
    )
}

export default UserDropdown;