import RecipeListItem from "./RecipeListItem";
import style from "./RecipeList.module.css"
import LoadingIndicator from "../../common/loading/LoadingIndicator";
import {useEffect, useState} from "react";
import axios from 'axios';

function RecipeList() {

    const [page, setPage] = useState(1);
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    const fetchRecipes = async () => {
        const response = await axios({
            method: 'GET',
            url: 'http://localhost:80/pages',
            params: {
                page: page
            }
        }).catch(err => {

            window.location.href = '/error/520'
        })
        return response.data.data;
    }

    useEffect(() => {
        setIsLoading(true);
        fetchRecipes().then((data) => {
            setRecipes(prevRecipes => [...prevRecipes, ...data]);
            console.log('ID: ', data[0].name);
            setIsLoading(false);
        });
    }, [page]);

    const showMore = () => {
        setPage(prevPage => prevPage + 1);
    }


    return (
        <div className={style['component-div']}>
            <div className={style['recipe-list']}>
                {recipes.map((item) => RecipeListItem(item))}
            </div>
            <div className={style['show-more-div']}>
                {isLoading ? <LoadingIndicator /> :
                    <button className={style['show-more-button']} onClick={showMore}>Show More</button> }
            </div>
        </div>
    )
}

export default RecipeList;