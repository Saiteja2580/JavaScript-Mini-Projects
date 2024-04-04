'use strict';

console.log(this); //strinct mode so point towards the global window object

const calcAge = function(birthYear){
    console.log (2023-birthYear);
    console.log(this);
}
calcAge(1991);// points to undefined

const calcAgeArrow = (birthYear) => {
    console.log (2023-birthYear);
    console.log(this);
}
calcAgeArrow(2003); // it has lexical this i.e it will have this objects as same as its parent this or lexical thsi


//arguements ketword
const addExpr = function(a,b){
    console.log(arguments);
    return a+b;
};

addExpr(10,6);
addExpr(10,6,5,8); // arguements keyword only exists in normal functions but not in arrow functions

// primitives vs objects stored in execution context
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

// objects stored in heap memory of js engine
const me = {
    Name : "Sai Teja",
    age : 30,
};

const friend = me;
friend.age = 37;
console.log("Friend : ", friend);
console.log("Me : ", me)

//copying objects
const jessica = {
    firstName:"jessica",
    age : 27,
    family : ['Alice','Bob'],
};
const jessicacopy = Object.assign({},jessica);
jessicacopy.husband = "Davis";
jessicacopy.family.push('Mary');
jessicacopy.family.push('John');
console.log("Before Marriage : ", jessica);
console.log("After Marriage : ", jessicacopy);

//as in the above example the ibject inside the object has changing in both so we cant use object.assign didnt copy deeply