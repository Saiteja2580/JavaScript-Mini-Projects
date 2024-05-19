'use strict';

// function to capitalix=ze names using string methods
function capitalizeName(name){
    const names = name.split(' ');
    const capitalizdNames = [];
    for (let n of names)
        capitalizdNames.push(n.replace(n[0],n[0].toUpperCase()));

    return capitalizdNames.join(' ');
}

console.log(capitalizeName('sai teja'));

console.log('sai teja'.padEnd(10,'-').padStart(12,'-'));

//maskking a number using string methods
const maskingNumber = function(number){
    const str = String(number);
    const lastfour = str.slice(-4);
    const maskedNumber = lastfour.padStart(str.length,'*');
    return maskedNumber;
}

const num1 = maskingNumber(123456789123);
console.log(num1);


//repeat method
console.log('Sai Teja\n'.repeat(10));







const flights = 
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel93766109;fao2133758440;12:05+_Departure;fao0943384722;lis93766109;12:30';



const flight = flights.split('+');
console.log(flight);

for (let f of flight){
    const [type,from,to,time] = f.split(';');
    const output = `${type.startsWith('_Delayed') && '🔴' || ''} ${type.replaceAll('_',' ').trim()} from ${from.slice(0,3).toUpperCase()} to ${to.slice(0,3).toUpperCase()} (${time.replace(':','h')})`.padStart(45,' ');
    console.log(output);
}