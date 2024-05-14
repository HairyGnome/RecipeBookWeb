const axios = require('axios');

module.exports = function LoadRecipesMW() {
    return async function (req, res, next) {
        let request = res.locals.request;
        return axios(request)
            .then(response => {
                res.locals.recipeData = response.data.results;
                return next();
            })
            .catch(err => {
                console.log(err);
                return res.status(500).json({message: 'Error trying to reach external API.'})
            })
    };
}