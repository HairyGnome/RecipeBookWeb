import styles from './RecipeDetailPage.module.css';
import RecipeDetailsItem from './RecipeDetailsItem';


function RecipeDetailPage() {
    return(
        <div className={styles['page']}>
            <div className={styles['content']}>
                {RecipeDetailsItem({
                    id: 1,
                    title: 'Spaghetti',
                    calories: 382,
                    prepTime: '30 minutes',
                    imageUrl: 'https://img.buzzfeed.com/tasty-app-user-assets-prod-us-east-1/recipes/b60280faac3745be8a66bdc12c0757d1.jpeg'
                })}
                <div className={styles['ingredients']}>
                    <h2>Ingredients</h2>
                    <ul>
                        <li>1 kg spaghetti</li>
                        <li>Tomato</li>
                        <li>Onion</li>
                    </ul>
                </div>
                <div className={styles['instructions']}>
                    <h2>Instructions</h2>
                    <ol>
                        <li>Boil water</li>
                        <li>Add spaghetti</li>
                        <li>Boil spaghetti</li>
                    </ol>
                </div>
            </div>

        </div>
    );
}

export default RecipeDetailPage;