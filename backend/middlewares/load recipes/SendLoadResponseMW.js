module.exports = function SendLoadResponseMW(){
    return function(req, res, next){
        res.json({
            data: res.locals.recipes
        });
    };
}