import style from './LogoutPage.module.css';
import DeleteSessionCookie from "../../common/cookies/DeleteSessionCookie";
import {useEffect, useState} from "react";
import axios from "axios";
import LoadingIndicator from "../../common/loading/LoadingIndicator";
import GetSessionCookie from "../../common/cookies/GetSessionCookie";

function LogoutPage() {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        axios({
            method: 'post',
            url: 'http://localhost:80/users/logout',
            withCredentials: true
        }).then(res => {
            if(res.status === 200) {
                setIsLoading(false);
                window.open('/', '_self');
            }
        }).catch(err => {
            window.open('/error/520', '_self');
        });


    }, []);


    return (
        <div className={style['logout-page']}>
            {isLoading ? <LoadingIndicator/> : <p className={style['logout-message']}>You have been logged out</p>}
        </div>
    )
}

export default LogoutPage;