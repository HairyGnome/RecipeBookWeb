module.exports = function BuildDetailsRequestMW() {
    return function (req, res, next) {
        const id = req.query.id;
        const api_key = process.env.API_KEY;
        res.locals.request = {
            method: 'GET',
            url: 'https://tasty.p.rapidapi.com/recipes/get-more-info',
            params: {id: id.toString()},
            headers: {
                'X-RapidAPI-Key': api_key,
                'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
            }
        };
        return next();
    };
}