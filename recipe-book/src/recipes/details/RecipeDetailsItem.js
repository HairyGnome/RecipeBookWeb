import styles from './RecipeDetailsItem.module.css';
import energyImage from '../../images/energy.png';
import clockImage from '../../images/clock.png';
import {useEffect, useState} from "react";
import fullStar from '../../images/star_full.png';
import emptyStar from '../../images/star_empty.png';
import axios from "axios";

function RecipeDetailsItem({recipe}) {
    const {id, name, calories, prepTime, imageUrl, description, ingredients, instructions} = recipe;

    const [isFavourite, setIsFavourite] = useState(false);

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:80/users/favourites',
            withCredentials: true
        }).then(response => {
            const favourites = response.data;
            if(response.status === 204) {
                setIsFavourite(false);
            } else {
                setIsFavourite(favourites.includes(id.toString()));
            }

        })
    }, [id]);

    function toggleFavourite() {
        axios({
            method: 'post',
            url: 'http://localhost:80/users/favourites/favourite',
            data: {
                recipeId: id
            },
            withCredentials: true
        }).then(res => {
            if(res.status === 200) {
                setIsFavourite(!isFavourite);
            }
            if(res.status === 204) {
                setIsFavourite(false);
            }
        })
    }

    return (
        <div className={styles['recipe-details-item']}>
            <div className={styles["title-div"]}>
                <h2>{name}</h2>
            </div>
            <div className={styles["image-div"]}>
                <img src={imageUrl} alt="Food image" className={styles["food-image"]}/>
            </div>
            <div className={styles['icons-div']}>
                <div className={styles["details-div"]}>
                    <div className={styles["data-div"]}>
                        <img src={energyImage} alt="Calories: " className={styles["data-logo"]}/>
                        {calories}
                    </div>
                    <div className={styles["data-div"]}>
                        <img src={clockImage} alt="Prep time: " className={styles["data-logo"]}/>
                        {prepTime}
                    </div>
                </div>
                <div className={styles['favourite-div']}>
                    {isFavourite ? <img src={fullStar} className={styles['favourite-icon']} alt={'Favourite'} onClick={toggleFavourite} /> : <img src={emptyStar} className={styles['favourite-icon']} alt={'Favourite'} onClick={toggleFavourite} /> }
                </div>
            </div>

            <div className={styles['description']}>
                <h2>Description</h2>
                <p>{description}</p>
            </div>
            <div className={styles['ingredients']}>
                <h2>Ingredients</h2>
                <ul>
                    {ingredients.map((ingredient, key) => {
                        return (<li key={key}>{ingredient}</li>)
                    })}
                </ul>
            </div>
            <div className={styles['instructions']}>
            <h2>Instructions</h2>
                <ol>
                    { instructions.map((instruction, key) => {
                        return(<li key={key}>{instruction}</li>)
                    })}
                </ol>
            </div>
        </div>
    );
}

export default RecipeDetailsItem;