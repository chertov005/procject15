const express = require('express') ;
const router = express.Router();
const {FoodsModel,validFoods} = require('../DataBase/Model/foodsModel');
const {authToken} = require('../AuthToken/config_token')

router.get('/' ,authToken, async(req , res) => {

    try {
        
        let data = await FoodsModel.find({user_id:req.decodeToken}) .sort({_id:1}) .limit(10)
        return res.status(200) .json(data)
        
    } catch (error) {
        console.log(error)
    }

});



router.post('/' ,authToken, async(req , res) => {

    try {

        let data = new FoodsModel(req.body)
        data.user_id = req.decodeToken
        await data.save() 
        res.status(201).json(data)
    
        
    } catch (error) {
        return res.status(500).json({message:'internal server error 500 '})
    }
    
    
});



router.delete('/:id' ,authToken, async(req , res) => {
    
    try {
        
        let data = await FoodsModel.deleteOne({_id:req.params.id , user_id:req.decodeToken})

        return res.json(data)

    } catch (error) {
        return res.status(500).json({message:'internal server error 500 '})
        
    }
    
});


router.put('/:id' , authToken , async(req , res) => {
    
    try {
        
        let valid = validFoods(req.body);
        if(valid.error){
            return res.status(400).json(valid.error.details)
        };

        let data = await FoodsModel.updateOne({_id:req.params.id , user_id:req.decodeToken} , req.body)
        return res.json(data)



    } catch (error) {
        return res.status(500).json({message:'internal server error 500 '})
        
    }

});













module.exports = router;