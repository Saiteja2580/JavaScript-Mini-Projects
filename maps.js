"use strict";

//map is a datastructure that maps values to keys
//data is stored in keyvalue pairs
// keys can be any datatype unlike objects

const profile = new Map();
profile.set("name", "Sai Teja");
profile.set("age", 23);
console.log(profile);

// set method return an updated map
// so we can chain the data

profile
  .set(true, "Degree Completed")
  .set(false, "Degree Not Completed")
  .set(9.7, "Grade");

console.log(profile);

//to read the data from a map we can use get method
console.log(profile.get(9.7));
console.log(profile.get(true));
console.log(profile.get(false));

//method to check a map contains a certain key
console.log(profile.has(9.7));
console.log(profile.size);

//maps iteration

const question = new Map([
  ["Question", "What is the best programming language in the world?"],
  [1, "Java Script"],
  [2, "C/C++"],
  [3, "Python"],
  [4, "Java"],
  ["Correct", 1],
  [true, "Correct"],
  [false, "Try Again"],
]);
console.log(question);

//converting object to maps
const myProfile = {
  name: "Sai teja",
  age: 23,
  degreee: "BTech",
  village: "Jammalamadugu",
  grade: 9.7,
};
console.log(myProfile);
console.log(myProfile["age"]);
console.log(Object.entries(myProfile));

const myProfileMap = new Map(Object.entries(myProfile));
console.log(myProfileMap);

//iteration on maps

for (const key of Object.keys(myProfile)) console.log(key);
console.log("-------------------------------------------------------");
for (const value of Object.values(myProfile)) console.log(value);
console.log("-------------------------------------------------------");
for (const [key, value] of Object.entries(myProfile))
  console.log(`${key} : ${value}`);
console.log("-------------------------------------------------------");

// ieration on maps
console.log(question.get('Question'))
for (const [mapKey, mapValue] of question) {
  typeof mapKey == 'number' && console.log(`${mapKey} : ${mapValue}`);
}

// const answer = Number(prompt("Enter your answer ? "));
//console.log(answer == question.get('Correct') && question.get(true) || question.get(false));


//convert a map to new array
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);


//we have four ds to choose arrays,objects,maps,sets
/*
    sources of data
    from program itself
    from ui as user input
    from external sources like api

    simple list of values - array or set
    key value pairs - maps or objects
    f
*/