

window.addEventListener('load' , async () => {

    doApiList()
    declareViewEvent()

});


const doApiList = async() => {

    let url = 'http://127.0.0.1:3320/foods';
    fetch(url , {
        method:'GET' ,
        headers: {'content-type':'application/json' , 'x-api-key':localStorage['token']}
    })
    .then(resp => resp.json())
    .then(data => {

        console.log(data)
        createListArray(data)

    })

};


const doPostApi = async(_body) => {


    let url = 'http://127.0.0.1:3320/foods';
    fetch(url , {
        method:'POST' ,
        body:JSON.stringify(_body) ,
        headers: {'content-type':'application/json' , 'x-api-key':localStorage['token']}

    })
    .then(resp => resp.json())
    .then(data => {

        if(data._id) {
            doApiList()
        }



    })




}



const doDeleteApi = async(id) => {

    let url = `http://127.0.0.1:3320/foods/${id}` 

    fetch(url ,{
        method:'DELETE',
        headers:{'content-type':'application/json' , 'x-api-key':localStorage['token']}
    })
    .then(resp => resp.json())
    .then(data => {

        if(data.deletedCount == 1) {
            doApiList()
        }


    });

};





const createListArray  = async(_arr) => {

    document.querySelector('#id_ul').innerHTML = '' ;
    
    _arr.forEach(item => {
        
        
        let li = document.createElement('li');
        li.className = 'list-group-item ' ;
        document.querySelector('#id_ul').appendChild(li)

        li.innerHTML += ` <button class="btn btn-dark float-end-0 btnD">x</button> name: ${item.food} , price:  ${item.price} nis`
      
        let btnD = li.querySelector('.btnD') ;

        btnD.addEventListener('click' ,async(e) => {

            if(confirm(`delete ${item.food} ?`)) {
                
                doDeleteApi(item._id)
            }

        })




    });

};



const declareViewEvent = async() => {

    document.querySelector('#id_form').addEventListener('submit' , async(e) => {

        e.preventDefault()

        let obj = {

            food:document.querySelector('#id_food').value , 
            caloris:document.querySelector('#id_caloris').value , 
            price:document.querySelector('#id_price').value , 
            img:document.querySelector('#id_img').value 
 
         };

         if(obj.food.length < 2) {
            alert('name to sort')
         }
 
         console.log(obj)

         doPostApi(obj)
 


    })


};