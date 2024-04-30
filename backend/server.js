const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const cors = require('cors');
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
const GenerateSessionIdMW = require('./middlewares/users/login/GenerateSessionIdMW');
const GetUserMW = require('./middlewares/users/login/GetUserMW');
const mongoose = require('mongoose');
const User = require('./models/User');
const Favourite = require('./models/Favourite');
const Session = require('./models/Session');

const PORT = 80

objectrepository = {
    User: User,
    Favourite: Favourite,
    Session: Session
}

mongoose.connect('mongodb://127.0.0.1:27017/recipe-book')
    .then(() => console.log('Database connected!'));

app.use(cors())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

app.get('/pages',
    BuildLoadRequestMW(),
    LoadRecipesMW(),
    BuildLoadResponseMW(),
    SendLoadResponseMW()/*
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
    CheckParamsMW(),
    GetUserEmailOrNameMW(objectrepository),
    CheckAvailabilityMW(),
    SaveUserMw(objectrepository)
);

app.post('/users/login',
    GetUserMW(objectrepository),
    CheckPasswordMW(),
    GenerateSessionIdMW(objectrepository)
);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
