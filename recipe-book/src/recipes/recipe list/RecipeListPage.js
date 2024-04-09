import RecipeList from "./RecipeList";
import style from "./RecipeListPage.module.css"
import Menu from "../../common/menu/Menu";
import {BrowserRouter as Router} from 'react-router-dom';
import Searchbar from "../../common/searchbar/Searchbar";

function RecipeListPage(props) {
    return (
        <div className={style['page']}>
            <div>
                <Searchbar/>
            </div>
            <div className={style['recipe-list-container']}>
                {RecipeList([
                    {
                        title: 'Spaghetti',
                        calories: 382,
                        prepTime: '30 minutes',
                        imageUrl: 'https://img.buzzfeed.com/tasty-app-user-assets-prod-us-east-1/recipes/b60280faac3745be8a66bdc12c0757d1.jpeg'
                    },
                    {
                        title: 'Hamburger',
                        calories: 600,
                        prepTime: '15 minutes',
                        imageUrl: 'https://img.buzzfeed.com/tasty-app-user-assets-prod-us-east-1/recipes/b60280faac3745be8a66bdc12c0757d1.jpeg'
                    },
                    {
                        title: 'Pizza',
                        calories: 10,
                        prepTime: '8 minutes',
                        imageUrl: 'https://img.buzzfeed.com/tasty-app-user-assets-prod-us-east-1/recipes/b60280faac3745be8a66bdc12c0757d1.jpeg'
                    },
                    {
                        title: 'Pancakes',
                        calories: 88,
                        prepTime: '12 minutes',
                        imageUrl: 'https://img.buzzfeed.com/tasty-app-user-assets-prod-us-east-1/recipes/b60280faac3745be8a66bdc12c0757d1.jpeg'
                    },
                    {
                        title: 'Bread',
                        calories: 350,
                        prepTime: '28 minutes',
                        imageUrl: 'https://img.buzzfeed.com/tasty-app-user-assets-prod-us-east-1/recipes/b60280faac3745be8a66bdc12c0757d1.jpeg'
                    }

                ])}
            </div>
        </div>
    )
}

export default RecipeListPage;