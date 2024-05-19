'use strict';

const oneWord = function(word){
    word = word.replaceAll(' ','').toLowerCase();
    return word;
}

const upperFirstWord = function(word){
    word = word.slice(0,word.indexOf(' ')).toUpperCase() + word.slice(word.indexOf(' '));
    return word;
}


console.log(upperFirstWord('Sai Teja'));

//higher order function
const transformer = function(str,fun){
    console.log(`Transformed String : ${str} ${fun('Programming Language')}`);
    console.log(`Transformed by : ${fun.name}`);
}

console.log(transformer('Java Script is the best! ',upperFirstWord));


const high5 = function(){
    alert('Hello 👋👋👋');
}

document.body.addEventListener('click',high5);

//['sai teja','kalkjdl','aschaskh'].forEach(high5);

//function returning a function
const greeting = function(greet){
    const greeter = function(name){
        console.log(`${greet} ${name}`);
    }
    return greeter;
}

//1st way to call function returnong a function
greeting('hello')('Sai Teja');

//2nd way
const greeter = greeting('Hello');
greeter('Sai TEja');


const grretings = (greet) => {
    return (name) => console.log(`${greet} ${name}`);
}

grretings('Hello')('Sai TEja');
const g = grretings('Hello');
g('Sai');