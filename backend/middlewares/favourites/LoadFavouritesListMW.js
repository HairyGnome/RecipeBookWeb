const axios = require("axios");


module.exports = function (objectrepository) {
    return async function (req, res, next) {
        const favouriteIds = res.locals.favourites;
        const api_key = process.env.API_KEY;

        const page = req.query.page;
        const size = 4;

        if (!favouriteIds) {
            return res.status(500).json({message: 'Internal server error'});
        }

        if((page-1)*size >= favouriteIds.length) {
            return res.status(204).json({message: 'Page number out of range!'});
        }

        let favourites = [];

        for (let i = (page-1)*size; i < (page*size < favouriteIds.length ? page*size : favouriteIds.length); i++) {
            const id = favouriteIds[i];

            let promises = [];

            for (let i = (page-1)*size; i < (page*size < favouriteIds.length ? page*size : favouriteIds.length); i++) {
                const id = favouriteIds[i];

                promises.push(
                    axios({
                        method: 'GET',
                        url: 'https://tasty.p.rapidapi.com/recipes/get-more-info',
                        params: {id: id.toString()},
                        headers: {
                            'X-RapidAPI-Key': api_key,
                            'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
                        }
                    }).then(response => response.data)
                );
            }

            try {
                res.locals.recipeData = await Promise.all(promises);
                return next();
            } catch (err) {
                console.log(err);
                return res.status(500).json({message: 'Internal server error'});
            }
        }
    }
}