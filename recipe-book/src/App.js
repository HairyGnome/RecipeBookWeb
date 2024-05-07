import './App.css';
import './recipes/recipe list/RecipeListItem'
import RecipeList from "./recipes/recipe list/RecipeList";
import LoginScreen from "./users/login/LoginScreen";
import Menu from "./common/menu/menu strip/Menu";
import {Navigate, Route, Routes} from "react-router-dom";
import {BrowserRouter as Router} from 'react-router-dom';
import RecipeDetailPage from "./recipes/details/RecipeDetailPage";
import ErrorPage from "./error/ErrorPage";
import LogoutPage from "./users/logout/LogoutPage";
import FavouriteListPage from "./favourites/FavouriteListPage";

function App() {
    return (
        <Router>
            <div className='app'>
                <Menu />
                <Routes>
                    <Route path="/" element={<RecipeList />} />
                    <Route path="/login" element={<LoginScreen />} />
                    <Route path="/register" element={<LoginScreen />} />
                    <Route path={"/recipes/:id"} element={<RecipeDetailPage />}/>
                    <Route path="/error" element={<ErrorPage />} />
                    <Route path='/logout' element={<LogoutPage />} />
                    <Route path='/favourites' element={<FavouriteListPage />} />
                    <Route path='*' element={<Navigate to="/error?code=404&message=Page not found" />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;