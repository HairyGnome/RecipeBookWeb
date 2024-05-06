const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');
const Favourite = require('./models/Favourite');
const Session = require('./models/Session');
const cookieParser = require('cookie-parser');
const BuildLoadRequestMW = require("./middlewares/load recipes/BuildLoadRequestMW");
const LoadRecipesMW = require("./middlewares/load recipes/LoadRecipesMW");
const BuildLoadResponseMW = require("./middlewares/load recipes/BuildLoadResponseMW");
const SendLoadResponseMW = require("./middlewares/load recipes/SendLoadResponseMW");
const LoadCachedDataMW = require("./middlewares/load recipes/LoadCachedDataMW");
const BuildDetailsRequestMW = require("./middlewares/load details/BuildDetailsRequestMW");
const LoadDetailsMW = require("./middlewares/load details/LoadDetailsMW");
const BuildDetailsResponseMW = require("./middlewares/load details/BuildDetailsResponseMW");
const SendDetailsResponseMW = require("./middlewares/load details/SendDetailsResponseMW");
const CheckParamsMW = require("./middlewares/users/register/CheckParamsMW");
const CheckAvailabilityMW = require("./middlewares/users/register/CheckAvailabilityMW");
const SaveUserMw = require("./middlewares/users/register/SaveUserMw");
const GetUserEmailOrNameMW = require('./middlewares/users/register/GetUserEmailOrNameMW')
const CheckPasswordMW = require('./middlewares/users/login/CheckPasswordMW');
const GenerateSessionIdMW = require('./middlewares/users/session/GenerateSessionIdMW');
const GetUserMW = require('./middlewares/users/login/GetUserMW');
const DeleteSessionMW = require('./middlewares/users/logout/DeleteSessionMW');
const ClearCookiesMW = require('./middlewares/users/logout/ClearCookiesMW');
const SendCookiesMW = require('./middlewares/users/login/SendCookiesMW');
const GetUserBySessionMW = require('./middlewares/users/session/GetUserBySessionMW');
const LoadFavouritesMW = require('./middlewares/favourites/LoadFavouritesMW');
const SendFavouritesMW = require('./middlewares/favourites/SendFavouritesMW');
const UpdateFavouritesListMW = require('./middlewares/favourites/UpdateFavouritesListMW');
const UpdateFavouritesMW = require('./middlewares/favourites/UpdateFavouritesMW');
const CreateFavouritesMW = require('./middlewares/favourites/CreateFavouritesMW');
const CheckSessionMW = require('./middlewares/users/session/CheckSessionMW');
const CheckSessionLoginMW = require('./middlewares/users/session/CheckSessionLoginMW');
const GetSessionByIdMW = require('./middlewares/users/session/GetSessionByIdMW');
const LoadFavouritesListMW = require('./middlewares/favourites/LoadFavouritesListMW');
const UpdateSessionTimeMW = require('./middlewares/users/session/UpdateSessionTimeMW');


const PORT = 80

objectrepository = {
    User: User,
    Favourite: Favourite,
    Session: Session
}

mongoose.connect('mongodb://127.0.0.1:27017/recipe-book')
    .then(() => console.log('Database connected!'));

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))

app.use(cookieParser());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
});

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

app.get('/pages',
    BuildLoadRequestMW(),
    LoadRecipesMW(),
    BuildLoadResponseMW()/*
    LoadCachedDataMW(),
    BuildLoadResponseMW(),
    SendLoadResponseMW()*/
);

app.get('/recipe',
    BuildDetailsRequestMW(),
    LoadDetailsMW(),
    BuildDetailsResponseMW(),
    SendDetailsResponseMW()
);

app.post('/users/register',
    GetUserBySessionMW(objectrepository),
    CheckSessionLoginMW(objectrepository),
    CheckParamsMW(),
    GetUserEmailOrNameMW(objectrepository),
    CheckAvailabilityMW(),
    SaveUserMw(objectrepository),
    CreateFavouritesMW(objectrepository)
);

app.post('/users/login',
    GetUserMW(objectrepository),
    GetSessionByIdMW(objectrepository),
    CheckSessionLoginMW(objectrepository),
    CheckPasswordMW(),
    GenerateSessionIdMW(objectrepository),
    SendCookiesMW()
);

app.post('/users/logout',
    DeleteSessionMW(objectrepository),
    ClearCookiesMW(objectrepository)
);

app.post('/users/favourites/favourite',
    GetUserBySessionMW(objectrepository),
    CheckSessionMW(objectrepository),
    UpdateSessionTimeMW(objectrepository),
    LoadFavouritesMW(objectrepository),
    UpdateFavouritesListMW(objectrepository),
    UpdateFavouritesMW(objectrepository)
);

app.get('/users/favourites/list',
    GetUserBySessionMW(objectrepository),
    CheckSessionMW(objectrepository),
    UpdateSessionTimeMW(objectrepository),
    LoadFavouritesMW(objectrepository),
    LoadFavouritesListMW(objectrepository),
    BuildLoadResponseMW(),
    )

app.get('/users/favourites',
    GetUserBySessionMW(objectrepository),
    CheckSessionMW(objectrepository),
    UpdateSessionTimeMW(objectrepository),
    LoadFavouritesMW(objectrepository),
    SendFavouritesMW(objectrepository)
);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
