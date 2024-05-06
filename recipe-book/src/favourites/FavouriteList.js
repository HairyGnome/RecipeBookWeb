

import RecipeListItem from "../recipes/recipe list/RecipeListItem";
import style from "./FavouriteList.module.css";
import LoadingIndicator from "../common/loading/LoadingIndicator";
import {useEffect, useState} from "react";
import axios from 'axios';

function FavouriteList() {

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
            // window.open('/error/520', '_self');
        });
    }

    useEffect(() => {
        setIsLoading(true);
        fetchRecipes().then((data) => {
            console.log(data);
            if(data) {
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
                    <div className={style['recipe-list']}>
                        {recipes.map((item, key) => <RecipeListItem key={key} {...item} />)}
                    </div>
                    <div className={style['show-more-div']}>
                        {isLoading ? <LoadingIndicator/> :
                            <button className={style['show-more-button']} onClick={showMore}>Show More</button>}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FavouriteList;