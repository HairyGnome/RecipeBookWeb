import {useLocation, useParams} from "react-router-dom";
import style from './ErrorPage.module.css';
import ErrorImage from '../images/sad_cat.png';


function ErrorPage() {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const code = query.get('code');
    const message = query.get('message');

    return (
        <div className={style['error-page']}>
            <div className={style['image-div']}>
                <img src={ErrorImage} alt="Error" />
            </div>
            <div className={style['error-div']}>
                <p className={style['error-code']}>{code}</p>
                <p className={style['error-message']}>{message}</p>
            </div>
        </div>
    )

}


export default ErrorPage;