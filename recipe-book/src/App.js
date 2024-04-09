import './App.css';
import './recipes/recipe list/RecipeListItem'
import RecipeListPage from "./recipes/recipe list/RecipeListPage";
import LoginScreen from "./users/login/LoginScreen";
import Menu from "./common/menu/Menu";
import {Route, Routes} from "react-router-dom";
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
    return (
        <Router>
            <div>
                <Menu />
                <Routes>
                    <Route path="/" element={<RecipeListPage />} />
                    <Route path="/login" element={<LoginScreen />} />
                    <Route path="/register" element={<LoginScreen />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;