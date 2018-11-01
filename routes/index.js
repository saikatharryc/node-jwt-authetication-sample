
const config = require('../config');

const api = {};
const isAuth = ()=>{
    //do some checking here
};
api.includeRoutes = app => {
var authRoute = require('./auth');
app.use('/auth',authRoute);
app.use('/apis/*',isAuth); //authenticated route
};

module.exports = api;
