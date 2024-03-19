const express = require('express') ;
const router = express.Router() ;
const {CakesModel,validCakes} = require('../DataBase/Model/cakesModel')

router.get('/' ,async(req , res) => {

    let perPage = 5 ;
    let page = req.query.page-1;
    let myFilter = {}
    let s = req.query.s ;
    if(s) {
        let sExp = new RegExp(s,'i')
        myFilter = {$or:[{name:sExp},{info:sExp}]}
    }

    try {

        let data = await CakesModel.find(myFilter) .limit(perPage) .skip(perPage*page);
        return res.status(200) .json(data)
        
        
    } catch (error) {
        return res.status(500) .json({message:'internal sever error 500 '})
    }


});


module.exports = router