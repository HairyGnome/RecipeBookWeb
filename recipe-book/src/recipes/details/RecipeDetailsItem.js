import styles from './RecipeDetailsItem.module.css';
import energyImage from '../../images/energy.png';
import clockImage from '../../images/clock.png';

function RecipeDetailsItem({recipe}) {
    const {id, name, calories, prepTime, imageUrl, description, ingredients, instructions} = recipe;
    return (
        <div className={styles['recipe-details-item']}>
            <div className={styles["title-div"]}>
                <h2>{name}</h2>
            </div>
            <div className={styles["image-div"]}>
                <img src={imageUrl} alt="Food image" className={styles["food-image"]}/>
            </div>
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
            <div className={styles['description']}>
                <h2>Description</h2>
                <p>{description}</p>
            </div>
            <div className={styles['ingredients']}>
                <h2>Ingredients</h2>
                <ul>
                    { ingredients.map(ingredient => {return(<li>{ingredient}</li>)}) }
                </ul>
            </div>
            <div className={styles['instructions']}>
                <h2>Instructions</h2>
                <ol>
                    { instructions.map(instruction => {return(<li>{instruction}</li>)}) }
                </ol>
            </div>
        </div>
    );
}

export default RecipeDetailsItem;