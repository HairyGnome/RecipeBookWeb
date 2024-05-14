const axios = require('axios');

module.exports = function LoadDetailsMW() {
    return function(req, res, next) {
        const request = res.locals.request;
        return axios(request)
            .then( response => {
                res.locals.detailsData = response.data;
                return next();
            })
            .catch(err => {
                console.log(err);
                return res.status(500).json({message: 'Error trying to reach external API.'});
            })
    }
}