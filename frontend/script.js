function orderFood(food,price){


fetch("http://localhost:3000/order",{


method:"POST",


headers:{

"Content-Type":"application/json"

},


body:JSON.stringify({

food:food,

price:price

})


})


.then(response=>response.json())


.then(data=>{


alert(
"✅ "+food+
" order confirmed!"
);


})


.catch(error=>{


alert(
"Server error"
);


});


}