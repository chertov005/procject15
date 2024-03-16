const express = require('express') ;
const router = express.Router() ;
const { UserModel,validUser , validLogin} = require('../DataBase/Model/usersModel')
const bcrypt = require('bcrypt') ;
const {genToken, authToken} = require('../AuthToken/config_token')

router.get('/' ,async(req , res) => {

    try {
        
        res.status(200) .json({message:'users route work  status  200'})

    } catch (error) {
        return console.log(error) 
    }

});



router.delete('/:id' , async(req, res) => {

    try {
        
        let data = await UserModel.deleteOne({_id:req.params.id} ) 
        return res.json(data)

    } catch (error) {
        console.log(error)
    }

});


router.put('/:id'  , async(req , res) => {

    let valid = validUser(req.body) ;
    if(valid.error) {
        return res.status(400) .json(valid.error.details)
    };




    try {
        
        let data = await UserModel.updateOne({_id:req.params.id} , req.body)
        return res.json(data)

    } catch (error) {
        console.log(error)
    }


});



router.post('/' , async(req, res) => {

    let valid = validUser(req.body) ;
    if(valid.error) {
        return res.status(400) .json(valid.error.details)
    };

    let data = new UserModel(req.body) 
    data.password = await bcrypt.hash(data.password , 10)
    await data.save()
    return res.status(201) .json(data)

    
} );


router.post('/login' , async(req , res) => {

    let valid = validLogin(req.body) ;
    if(valid.error) {
        return res.status(400) .json(valid.error.details)
    };


    try {

        let user = await UserModel.findOne({email:req.body.email}) 
        if(!user) {
            return res.status(401) .json({message:'wrong user , please try agin'})
        }

        let validPass = await bcrypt.compare(req.body.password , user.password)
        if(!validPass) {
            return res.status(401) .json({message:'wrong password , please try agin'})
        }
        
            let token = genToken(user._id ,user.role) 
            return res.json({token:token})

     



    } catch (error) {
        console.log(error)
    }

});




router.get('/info' ,authToken , async(req , res ) => {

    let data = await UserModel.findOne({_id:req.decodeToken} , {password:0}) 
    return res.status(200) .json(data)

});


module.exports = router;