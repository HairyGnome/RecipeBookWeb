import style from "../FavouriteListPage.module.css";
import RecipeListItem from "../../recipes/recipe list/RecipeListItem";
import LoadingIndicator from "../../common/loading/LoadingIndicator";


function FavouriteList({favourites, isLoading, showMore}) {
    return (<div>
        <div className={style['recipe-list']}>
            {favourites.map((item, key) => <RecipeListItem key={key} {...item} />)}
        </div>
        <div className={style['show-more-div']}>
            {isLoading ? <LoadingIndicator/> :
                <button className={style['show-more-button']} onClick={showMore}>Show More</button>}
        </div>
    </div>);
}

export default FavouriteList;