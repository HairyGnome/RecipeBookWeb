import RecipeListItem from "./RecipeListItem";
import style from "./RecipeList.module.css"


function RecipeList(items) {
    return (
        <section>
            <div className={style['recipe-list']}>
                { items.map((item) => RecipeListItem(item)) }
            </div>

        </section>
    )
}

export default RecipeList;