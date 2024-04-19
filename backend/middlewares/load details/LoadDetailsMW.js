const axios = require('axios');

module.exports = function LoadDetailsMW() {
    return function(req, res, next) {
        const request = res.locals.request;
        axios(request)
            .then( response => {
                res.locals.detailsData = response.data;
                console.log(response.data);
                return next();
            });
    }
}