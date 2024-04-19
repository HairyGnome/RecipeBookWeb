const axios = require('axios');

module.exports = function LoadRecipesMW() {
    return async function (req, res, next) {
        let request = res.locals.request;
        axios(request)
            .then(response => {
                res.locals.recipeData = response.data.results;
                return next();
            });
    };
}