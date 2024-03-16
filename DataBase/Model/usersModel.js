const mongoose = require('mongoose');
const joi = require('joi') ;




const usersSchema = new mongoose.Schema({


    user: String ,
    email:String ,
    password:String ,
    role: {type:String , default:'user'} ,
    date_created: {type:Date , default:Date.now()}

});



exports.UserModel = mongoose.model('users' , usersSchema);


exports.validUser = (req_body) => {

    let schema = joi.object({

        user:joi.string() .min(2) .max(999) .required() ,
        email:joi.string() .min(2) .max(9999)  .email() .required() ,
        password:joi.string() .min(6) .max(9999) .required() ,

    })

    return schema.validate(req_body)

};




exports.validLogin = (req_body) => {

    let schema = joi.object({

        
        email:joi.string() .min(2) .max(9999)  .email() .required() ,
        password:joi.string() .min(6) .max(9999) .required() ,

    })

    return schema.validate(req_body)

};