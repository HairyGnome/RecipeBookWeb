import style from "./RecipeListItem.module.css";
import clock from "../../images/clock.png";
import energy from "../../images/energy.png";
import {Link} from "react-router-dom";

function RecipeListItem({id, name, prepTime, calories, imageUrl}) {
    return (
        <div className={style['recipe-list-item']}>
            <Link to={`/recipes/${id}`} className={style['link']}>
                <div className={style['title-div']}>
                    <p className={style['title']}>{name}</p>
                </div>
                <div className={style['image-div']}>
                    <img src={imageUrl} alt="Food image" className={style['food-image']}/>
                </div>
                <div className={style['details-div']}>
                    <div className={style['data-div']}>
                        <img src={energy} alt="Calories: " className={style['data-logo']}/>
                        <p className={style['data-text']}>{calories}</p>
                    </div>
                    <div className={style['data-div']}>
                        <img src={clock} alt="Prep time: " className={style['data-logo']}/>
                        <p className={style['data-text']}>{prepTime}</p>
                    </div>
                </div>
            </Link>
        </div>

    )
}

export default RecipeListItem;