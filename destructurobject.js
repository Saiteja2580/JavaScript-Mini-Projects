"use strict";

const myProfile = {
  name: "Sai Teja",
  age: 19,
  mother: "Sujitha",
  father: "Chowdeswar Rao",
  friends: ["Achyuth", "Kowmudi", "navaneeth", "Sujay"],
  skills: ["Python", "C/C++"],
  languages: ["Englsih", "Telugu"],
  professionalSkills: {
    web: {
      lang1: "Html",
      lang2: "css",
    },
    app: {
      lang1: "xml",
      lang2: "kotlin",
    },
  },
};

console.log(myProfile);

//destructuring objects

const { name, friends, skills } = myProfile;
console.log(name, friends, skills);

//variable names different from property names
const { name: myName, friends: myfriends, skills: mySkills } = myProfile;
console.log(myName, myfriends, mySkills);

//if we didnt have entered property name in the object we will get undefined as the variable value
const { courses = [], skills: myskills = [] } = myProfile;
console.log(courses, myskills);

//switching or swapping or mutating variables
// to copy property values from object to already declared variables we have to do that inside parenthesis
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);

// nested objects
let {
  professionalSkills: {
    app: { lang1 },
    web: { lang2 },
  },
} = myProfile;
console.log(pp, web);
