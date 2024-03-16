

// window.addEventListener('load' ,async() => {

//     declareViewEvent()


// });



// const doPostApi = async(_body) => {

//     let url = 'http://127.0.0.1:3320/users/login' ;

//     fetch(url ,{
//         method:'POST' ,
//         body:JSON.stringify(_body),
//         headers: {'content-type':'application/json'}

//     })
//     .then(resp => resp.json())
//     .then(data => {

//         if(data.token) {
//             localStorage.setItem('token' , data.token)
//         }


//     });


// };





// const declareViewEvent = async() => {

//     document.querySelector('#id_form').addEventListener('submit' , async(e) => {


//         e.preventDefault();

//         let objLogin = {

//             email:document.querySelector('#id_email').value ,
//             password:document.querySelector('#id_password').value 


//         };

//         console.log(objLogin)

//         doPostApi(objLogin)


//     });

// };

//////////////////////////////////////////////////////////////////




window.addEventListener('load' ,function() {

    declareViewEvent()

});


const doPostToken = async(body) => {

    fetch('http://127.0.0.1:3320/users/login' , {
        method:'POST' ,
        body:JSON.stringify(body) ,
        headers: {'content-type':'application/json'}
    })
    .then(resp => resp.json())
    .then(data => {

        if(data.token) {

           localStorage.setItem('token' , data.token)
           window.location.href = '/html/info.html'

        }

        else{
            alert('wrong user or password')
        }

    })


}




const declareViewEvent = async() => {


    document.querySelector('#id_form').addEventListener('submit' , function async(e) {

        e.preventDefault()

        let objectLogin = {

            email:document.querySelector('#id_email').value ,
            password:document.querySelector('#id_password').value 


        };


        console.log(objectLogin)

        doPostToken(objectLogin)


    });


};