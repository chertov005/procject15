const http = require('http');
const path = require('path') ;
const express = require('express') ;
const app = express();
const cors = require('cors') ;
const mongoose = require('./DataBase/config/mongoose_config')
const {routeInit} = require('./route/config/config_route')



const server = http.createServer(app) 
app.use(cors()) ;
app.use(express.json()) ;
app.use(express.static(path.join(__dirname, 'public')));
routeInit(app)


let port = process.env.PORT || 3320 ;

server.listen(port , (err) => {

    if(err) {
        return console.log(err)
    }

    return console.log(`server up , running on port : ${port}`)

});