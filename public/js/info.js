

window.addEventListener('load' , function() {

    doGetApi()


});


const doGetApi = async() => {

    let url = 'http://127.0.0.1:3320/users/info' ;

    let resp = await fetch(url , {
        method:'GET',
        headers:{'content-type':'application/json' , 'x-api-key':localStorage.token}
    })
    let data = await resp.json()
    
    console.log(data);

    document.querySelector('#id_user').innerHTML = `${data.user}`
    document.querySelector('#id_email').innerHTML = `${data.email}`
    document.querySelector('#id_type').innerHTML = `${data.user_type}`
    document.querySelector('#id_date').innerHTML = `${data.date_created}`



};