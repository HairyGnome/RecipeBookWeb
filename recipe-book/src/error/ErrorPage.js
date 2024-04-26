import {useParams} from "react-router-dom";
import style from './ErrorPage.module.css';
import ErrorImage from '../images/sad_cat.png';


function ErrorPage() {
    const { code } = useParams();

    let message;
    switch (code) {
        case '404':
            message = 'Page not found';
            break;
        case '500':
            message = 'An error occurred when connecting to the server';
            break;
        case '520':
            message = 'An unexpected error occurred'
            break;
        default:
            message = 'An error occurred';
    }

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