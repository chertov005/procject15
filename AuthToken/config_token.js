const jwt = require('jsonwebtoken');
const {myToken} = require('../secret/tokenPublic')


exports.genToken = (_id ,role) => {

    let token = jwt.sign({_id ,role} , myToken.key ,{expiresIn:'60mins'})

    return token

};



exports.authToken = async(req , res , next) => {

    let checkReqHeader =  req.header('x-api-key') ;
    if(!checkReqHeader) {

        return res.status(401).json({message:'no token sent in headers req'})
    };


    try {
        
        let decodeToken = jwt.verify(checkReqHeader , myToken.key) 

        req.decodeToken = decodeToken


        console.log(req.decodeToken)
        

        next()
      

    } catch (error) {
        return res.status(401) .json({message:'token invalid or expired'})
    }


};






