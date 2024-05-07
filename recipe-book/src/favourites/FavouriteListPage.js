import style from "./FavouriteListPage.module.css";
import FavouriteList from "./list/FavouriteList";
import NoFavourites from "./no favourites/NoFavourites";
import {useEffect, useState} from "react";
import axios from 'axios';
import LoadingIndicator from "../common/loading/LoadingIndicator";

function FavouriteListPage() {

    const [page, setPage] = useState(1);
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    const fetchRecipes = async () => {
        return axios({
            method: 'GET',
            url: 'http://localhost:80/users/favourites/list',
            withCredentials: true,
            params: {
                page: page,
            }
        }).then(response => {
            return response.data.data;
        }).catch(err => {
            window.open(`/error?code=${err.response.status}&message=${err.response.message}`, '_self');
        });
    }


    useEffect(() => {
        setIsLoading(true);
        fetchRecipes().then((data) => {
            console.log(data);
            if (data) {
                setRecipes(prevRecipes => [...prevRecipes, ...data]);
            }
            setIsLoading(false);
        });
    }, [page]);

    const showMore = () => {
        setPage(prevPage => prevPage + 1);
    }


    return (
        <div className={style['page']}>
            <div className={style['recipe-list-container']}>
                <div className={style['component-div']}>
                    { isLoading ? (recipes.length > 0 ?
                            <FavouriteList favourites={recipes} isLoading={isLoading} showMore={showMore} /> : (<div className={style['loading-indicator']}><LoadingIndicator /></div>))
                        : (recipes.length > 0 ? <FavouriteList favourites={recipes} isLoading={isLoading} showMore={showMore} /> : <NoFavourites />)}
                </div>
            </div>
        </div>

    )
}

export default FavouriteListPage;