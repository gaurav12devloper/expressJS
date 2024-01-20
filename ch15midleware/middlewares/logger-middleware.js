var logger = function (req, res, next) {
    console.log('LOGGED');
    next();
}
// multiple middleware
// var logger = function (req, res, next) {
//     console.log('LOGGED');
//     next();
// }, function (req, res, next) {	
//     console.log('LOGGED');
//     next();
// }

export default logger;