"use strict";
// alert('Hello World');

//array methods
//SLICE METHOD
const array = ["sai", "teja", "ram", "kumar", "achu"];
console.log(array.slice(2));
console.log(array.slice(2, 4));
console.log(array.slice(-2));
console.log(array.slice(-1));
console.log(array.slice(0, -3));

//SPLICE METHOD - changes the orioginal array
//1st param is index and 2nd param is no of elemnets to delete
console.log(array.splice(2));
console.log(array);

//reversee method mutates the original array
const r2 = [...array];
console.log(r2);
console.log(r2.reverse());
console.log(r2);

//concat method used to cincatenate two arrays
const concatarray = r2.concat(array);
console.log(concatarray);

//join method
console.log(concatarray.join("-"));

//at method in es 2023
const arr = [23, 30, 64];
console.log(arr[0]);
console.log(arr.at(0));
console.log(arr.at(-1));

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
for (const movement of movements) {
  (movement < 0 && console.log(`money Withdrawn - ${Math.abs(movement)}`)) ||
    console.log(`money deposited - ${movement}`);
}
console.log(
  "-------------------------------------------------FOR EACH----------------------------------------------"
);
movements.forEach(function (movement, i, array) {
  (movement < 0 && console.log(`money Withdrawn - ${Math.abs(movement)}`)) ||
    console.log(`money deposited - ${Math.abs(movement)}`);
  console.log(`present index - ${i}`);
  console.log(array);
});

// some and every methods
const anydep = movements.some((mov) => {
  return mov > 5000;
});
console.log(anydep);
console.log("hello");

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

//calculate total deposit
const accounts = [account1, account2, account3, account4];
let depositSum = accounts
  .map((account) => account.movements)
  .flat()
  .filter((mov) => mov > 0)
  .reduce((accum, dep) => accum + dep, 0);
console.log(depositSum);

//no of deposit atleast 1000 dolars
const atlestThousand = accounts
  .map((account) => account.movements)
  .flat()
  .filter((mov, i, arr) => {
    return mov >= 1000;
  })
  .reduce((accum, dep) => accum + 1, 0);
console.log(atlestThousand);

//create a new object of deposits and withdrawls
const depoWith = accounts
  .map((account) => account.movements)
  .flat()
  .reduce(
    (accum, mov) => {
      if (mov > 0) {
        accum.deposits += mov;
      } else {
        accum.withdrawls += Math.abs(mov);
      }
      return accum;
    },
    { deposits: 0, withdrawls: 0 }
  );
console.log(depoWith);

//this is a title -> This Is a Nice title
const convertTitleCase = function (title) {
  const exceptions = ["a", "an", "the", "but", "or", "on", "in", "with"];
  const capitalizedArray = title
    .toLowerCase()
    .split(" ")
    .map((word) => {
      if (exceptions.includes(word)) {
        return word;
      } else {
        return word.replace(word[0], word[0].toUpperCase());
      }
    })
    .join(" ");
    return capitalizedArray;
};

console.log(convertTitleCase("this is a title"));
console.log(convertTitleCase("this is a Long tITLE but not too LoNG"));
console.log(convertTitleCase("this is a SHORT TITLE"));