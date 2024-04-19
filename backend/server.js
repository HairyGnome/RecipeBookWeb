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

const PORT = 80

app.use(cors())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

app.get('/pages', /*
    BuildLoadRequestMW(),
    LoadRecipesMW(),
    BuildLoadResponseMW(),
    SendLoadResponseMW()*/
    LoadCachedDataMW(),
    BuildLoadResponseMW(),
    SendLoadResponseMW()
);

app.get('/recipe',
    BuildDetailsRequestMW(),
    LoadDetailsMW(),
    BuildDetailsResponseMW(),
    SendDetailsResponseMW()
);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
