import styles from './RecipeDetailPage.module.css';
import RecipeDetailsItem from './RecipeDetailsItem';
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import LoadingIndicator from "../../common/loading/LoadingIndicator";


function RecipeDetailPage() {

    const [isLoading, setIsLoading] = useState(true);
    const [recipeDetails, setRecipeDetails] = useState({'name': '', 'prepTime': '', 'calories': '', 'imageUrl': '', 'ingredients': [], 'instructions': []});

    const id = useParams().id;

    async function fetchRecipeDetails() {
        const response = await axios({
            method: 'GET',
            url: 'http://localhost:80/recipe',
            params: {
                id: id
            }
        });
        return response.data.data;
    }

    useEffect(() => {
        setIsLoading(true);
        fetchRecipeDetails().then((data) => {
            setRecipeDetails(data);
            setIsLoading(false);
        });
    }, []);


    return(
        <div className={styles['page']}>
            <div className={styles['content']}>
                { isLoading ? <LoadingIndicator /> : <RecipeDetailsItem recipe={recipeDetails} /> }
            </div>

        </div>
    );
}

export default RecipeDetailPage;