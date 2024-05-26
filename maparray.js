'use strict';

const movements = [200,450,-400,3000,-650,-130,70,1300];

const euroToUsd = 1.1;
const euroArray = movements.map((mov) => {
    return mov*euroToUsd;
});
console.log(euroArray);
console.log(euroToUsd);
const euroString = movements.map(mov => {
    return mov*euroToUsd;
}).join(' ');
console.log(euroString);


//filter method

const deposits = movements.filter(mov => mov>0);
console.log(deposits);
const withdrawls = movements.filter(mov => mov<0);
console.log(withdrawls);

console.log(movements);


//reduce method
const globalBalance = movements.reduce((accum,mov) => {
    return accum+mov;
},0);
console.log(globalBalance);

//maxvalue
const maxvalue = movements.reduce((accum,mov)=>{
     return accum < mov ? accum = mov : accum;
},movements[0]);

console.log(maxvalue);