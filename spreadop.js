'use strict';
// used to unpack all ements in an array at a time
//example

const arr = ['sai','navaneeth','ajay'];
const newArr = ['achyuth','kowmudi',...arr];
console.log(newArr);


//create a shallow array using spreas operator
const array = [1,2,3,[5,6,7]];
const copyArray = [...array];
console.log(copyArray);

//create two arrays and merge them 
const array1 = [1,2,3];
const array2 = [4,5,6];
const mergedArray = [...array1,...array2];
console.log(mergedArray);

//passing as an arguemnet to the function

function bookInfo(name,author,edition){
    console.log(`${name} by ${author}, edition ${edition}`)
}
const bookDetails = [
    prompt("Enter book name :"),
    prompt("Enter author name :"),
    prompt("Enter edition :")
]
bookInfo(...bookDetails);

//Write a function called spellWord that accepts a single string as an argument. This function should log to the console each letter of the argument separated by a space.

function spellWord(name){
    console.log(...name);
}
spellWord('Sai Teja');