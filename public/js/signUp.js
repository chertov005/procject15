
window.addEventListener('load' , async() => {

    declareViewEvent();


});





const doPostApi = async(_body) => {


    let url = 'http://127.0.0.1:3320/users/' ;
    
    fetch(url , {
        method:'POST' ,
        body: JSON.stringify(_body),
        headers:{'content-type':'application/json'}
    })
    .then(resp => resp.json())
    .then(data => {

        if(data._id) {

            alert(`welcome ${data.user}`)

            window.location.href = '/html/login.html'
        }

        

    })



};





const declareViewEvent = async() => {


    document.querySelector('#id_form').addEventListener('submit' , async(e) => {

        e.preventDefault();

        let obj = {

            user:document.querySelector('#id_user').value ,
            email:document.querySelector('#id_email').value ,
            password:document.querySelector('#id_password').value 


        };

        console.log(obj)

        doPostApi(obj)

    });


};