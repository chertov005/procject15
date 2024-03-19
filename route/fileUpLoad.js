const express = require('express') ;
const router = express.Router();
const path = require('path')


// router.post('/' , async(req , res) => {

//     try {

//         let myFile = req.files.myFile ;
//         if(myFile.size <= 1024*1024*4) {

//             let exts_arr = ['.gip' ,'.png' ,'.jpeg' ,'.jps','.svg','.pdf' ,'.jpg']
//             let extsFile = path.extname(myFile.name) 
//             if(exts_arr.includes(extsFile)) {

//                 myFile.mv(`public/image/${myFile.name}` , (error) => {
//                     if(error) {
//                         return res.json({message:'there was error'})
//                     }
        
                    
//                     return res.json({message:'success upload your file '})
//                 })

                
//             }
            
//             else {
//                 return res.json({message:'format file not approved'})
//             }


//         }



//         else{
//             return res.json({message:'your file size over 5 MB , error error Max 5MB '})
//         }

        
//     } catch (error) {
//         return res.status(500) .json({message:'there was problem with server , try later...'})
//     }


// });




//////////////////////////////////////////////////////////



router.post('/' , async(req , res) => {
    
    try {
        
        let myFile = req.files.myFile ;
        if(myFile.size <= 1024*1024*4) {

            let exts_array = ['.jpg' , '.jpeg ' ,'.jfif ' ,'.pjpeg ' ,'.pjp', '.png']
            let checkFileExts = path.extname(myFile.name) 

            if(exts_array.includes(checkFileExts)) {

                myFile.mv(`public/image/${myFile.name}` , (err) => {
                    if(err) {
                        return res.json(err)
                    }
    
                    return res.json({message:'success upload your file'})
                })
            }
            else{
            
                return res.json({message:'unconfirmed file'})

            }
        } 

        else{
         
            res.json({message:'your file over 5MB , max 5MB'})
        }

    } catch (error) {    
    return res.status(500) .json({message:'there was problem with server , try later...'})
    }

});

module.exports = router ;