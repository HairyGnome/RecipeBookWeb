import styles from './RecipeDetailsItem.module.css';
import energyImage from '../../images/energy.png';
import clockImage from '../../images/clock.png';

function RecipeDetailsItem({id, title, calories, prepTime, imageUrl}) {
    return (
        <div className={styles['recipe-details-item']}>
            <div className={styles["title-div"]}>
                <h2>{title}</h2>
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
        </div>
    );
}

export default RecipeDetailsItem;