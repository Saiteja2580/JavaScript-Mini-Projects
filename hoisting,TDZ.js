
//hoisting with variables

// trying to use all before declerations
console.log(me);
// console.log(name);
// console.log(age);


var me = "Sai";
let name = "Sai";
const age = 18;


//trying to use fucntions before decleration
// console.log(addDec(5,6));
// console.log(addFunc(5,6));
// console.log(addArr(5,6));

//function hoisting
// function addDec(a,b){
//     return a+b;
// }

// var addFunc = function(a,b){
//     return a+b;
// }

// const addArr = (a,b) => a+b;


//example
if (!numproducts) {
    deleteShoppingCart();
}

var numproducts = 10;
function deleteShoppingCart(){
    console.log("All Products Deleted");
}
