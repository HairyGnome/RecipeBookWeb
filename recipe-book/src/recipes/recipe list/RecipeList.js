import RecipeListItem from "./RecipeListItem";
import style from "./RecipeList.module.css"
import LoadingIndicator from "../../common/loading/LoadingIndicator";
import {useEffect, useState} from "react";
import axios from 'axios';
import Searchbar from "../../common/searchbar/Searchbar";

function RecipeList() {

    const [page, setPage] = useState(1);
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');


    const onSearchTermSubmit = (term) => {
        setSearchTerm(term);
        setRecipes([]);
        setPage(1);
    }

    const fetchRecipes = async () => {
        return axios({
            method: 'GET',
            url: 'http://localhost:80/pages',
            withCredentials: true,
            params: {
                page: page,
                searchTerm: searchTerm
            }
        }).then(response => {
            return response.data.data;
        }).catch(err => {
            window.open('/error/520', '_self');
        });
    }

    useEffect(() => {
        setIsLoading(true);
        fetchRecipes().then((data) => {
            setRecipes(prevRecipes => [...prevRecipes, ...data]);
            setIsLoading(false);
        });
    }, [page, searchTerm]);

    const showMore = () => {
        setPage(prevPage => prevPage + 1);
    }


    return (
        <div className={style['page']}>
            <div>
                <Searchbar onSearchTermSubmit={onSearchTermSubmit} />
            </div>
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

export default RecipeList;