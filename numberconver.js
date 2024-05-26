//practice numbers and integers
console.log(23 === 23.0)
console.log(0.1+0.2 === 0.3);
console.log(Number('23'));
console.log(+'23');

//parsing
console.log(Number.parseInt('30px',10));
console.log(Number.parseFloat('2.5rem'));

//checking whether a value is number o rnot
console.log(Number.isFinite(10));
console.log(Number.isFinite(+'2.5rem'));
console.log(Number.isFinite(23/0));

//checking whether a numbr is integer or not
console.log(Number.isInteger(10));
console.log(Number.isInteger(+'2.5'));
console.log(Number.isInteger(23/0));

//rounding off the numbers
console.log(Math.sqrt(20));
console.log(Math.sqrt(2));
console.log(Math.max(8.10,23.5,100.5));
console.log(Math.max(101.5,200.5,'300.5'));
const number = [5,6,7,8,9];
console.log(Math.min(...number));
console.log(Math.PI);

//random function
const randomInt = function(min,max){
    return Math.trunc(Math.random()*(max-min)+1)+min;
}

console.log(randomInt(5,10));
console.log(randomInt(5,10));
console.log(randomInt(5,10));
console.log(randomInt(5,10));
console.log(randomInt(5,10));


//rounding off numbers
console.log(Math.trunc(23.3));
console.log(Math.floor(23.3));
console.log(Math.ceil(23.3));
console.log(Math.round(23.3));
console.log(Math.round(23.9));
console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3));
console.log(Math.ceil(-23.3));

//rounding decimals
console.log(+(2.375).toFixed(1));
console.log(+(2.375).toFixed(0));

const diameter = 287_460_000_000;
const priceCents = 345_99;


