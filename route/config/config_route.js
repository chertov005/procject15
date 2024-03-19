
const usersR = require('../usersRoute');
const foodsR = require('../foodsRute');
const uploadR = require('../fileUpLoad');

exports.routeInit  = (_app) => {

    _app.use('/users' , usersR);
    _app.use('/foods' , foodsR);
    _app.use('/upload' , uploadR);


};