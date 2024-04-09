import style from "./RecipeListItem.module.css";
import clock from "../../images/clock.png";
import energy from "../../images/energy.png";

function RecipeListItem({title, calories, prepTime, imageUrl}) {
    return (
        <div className={style['recipe-list-item']}>
            <div>
                <p className={style['title']}>{title}</p>
            </div>
            <div className={style['image-div']}>
                <img src={imageUrl} alt="Food image" className={style['food-image']}/>
            </div>
            <div className={style['details-div']}>
                <div className={style['data-div']}>
                    <img src={energy} alt="Calories: " className={style['data-logo']}/>
                    {calories}
                </div>
                <div className={style['data-div']}>
                    <img src={clock} alt="Prep time: " className={style['data-logo']}/>
                    {prepTime}
                </div>
            </div>
        </div>
    )
}

export default RecipeListItem;