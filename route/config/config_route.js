
const usersR = require('../usersRoute')
const foodsR = require('../foodsRute')


exports.routeInit  = (_app) => {

    _app.use('/users' , usersR);
    _app.use('/foods' , foodsR);


};