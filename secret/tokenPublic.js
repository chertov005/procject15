require('dotenv').config()



exports.myToken = {
    key:process.env.PUBLIC_KEY,
    db_name:process.env.DB_NAME ,
    db_password:process.env.DB_PASSWORD

};





