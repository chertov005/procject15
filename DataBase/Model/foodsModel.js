const mongoose = require('mongoose');
const joi = require('joi') ;


const schema = new mongoose.Schema({

    food:String ,
    price: Number ,
    caloris: Number ,
    img:String ,
    data_created: {type:Date , default:Date.now()},
    user_id: String
    

});




exports.FoodsModel = mongoose.model('foods' , schema) ;


exports.validFoods = (req_body) => {

    let schema = joi.object({

        food:joi.string().min(2) .max(9999) .required() ,
        price:joi.number().min(1) .max(9999) .required() ,
        caloris:joi.number().min(1) .max(9999) .required() ,
        img:joi.string().min(2) .max(9999) .allow('' , null)

    });

    return schema.validate(req_body) ;

};