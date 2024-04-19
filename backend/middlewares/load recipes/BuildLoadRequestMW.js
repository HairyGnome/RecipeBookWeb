

module.exports = function BuildLoadRequestMW() {
    return function(req, res, next) {
        let pages = req.query.page;
        const size = 20;
        const offset = (pages - 1) * size;
        const api_key = process.env.API_KEY;
        res.locals.request = {
            method: 'GET',
            url: 'https://tasty.p.rapidapi.com/recipes/list',
            params: {
                from: offset.toString(),
                size: size.toString()
            },
            headers: {
                'X-RapidAPI-Key': api_key,
                'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
            }
        };

        return next();
    };
}