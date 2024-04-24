import './App.css';
import './recipes/recipe list/RecipeListItem'
import RecipeListPage from "./recipes/recipe list/RecipeListPage";
import LoginScreen from "./users/login/LoginScreen";
import Menu from "./common/menu/Menu";
import {Navigate, Route, Routes} from "react-router-dom";
import {BrowserRouter as Router} from 'react-router-dom';
import RecipeDetailPage from "./recipes/details/RecipeDetailPage";
import ErrorPage from "./error/ErrorPage";

function App() {
    return (
        <Router>
            <div className='app'>
                <Menu />
                <Routes>
                    <Route path="/" element={<RecipeListPage />} />
                    <Route path="/login" element={<LoginScreen />} />
                    <Route path="/register" element={<LoginScreen />} />
                    <Route path={"/recipes/:id"} element={<RecipeDetailPage />}/>
                    <Route path="/error/:code" element={<ErrorPage />} />
                    <Route path='*' element={<Navigate to="/error/404" />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;