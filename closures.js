'use strict';

const secureBooking = function(){
    let passengerVount = 0;

    return function(){
        passengerVount++;
        console.log(`${passengerVount} passengers`);
    }
}

const booker = secureBooking();
booker();
booker();
console.dir(booker);


//more closure examples
let f;
let g = function(){
    const a = 23;
    f = function(){
        console.log(a*2);
    }
}

const h = function(){
    const b = 7777;
    f = function(){
        console.log(b*2);
    }
}


g();
f();
console.dir(f);
//re-assigned by h
h();
f();
console.dir(f);

//closure - examle 2 - timer
const boardPassengers = function(n,wait){
    const perGroup = n/3;

    setTimeout(function(){
        console.log(`we are now boarding all ${n} passengers`);
        console.log(`Threre are 3 groups each with ${perGroup} passengers`);
    },wait*1000)

    console.log(`will start boarding in ${wait} seconds`);
}

boardPassengers(1800,3);
console.dir(boardPassengers);