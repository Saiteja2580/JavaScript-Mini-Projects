"use strict";

// object declaration

const sai = {
  firstName: "Sai",
  lastName: "Teja",
  job: "Student at SCSVMV",
  friends: ["Achyuth", "Navaneeth", "Sujay", "Aditya"],
  birthYear: 2004,
  hasLicense:true,


  // function expression is called method 
  calcAge: function () {
    this.age =2023-this.birthYear 
    return this.age;
  },

  summary: function () {
    console.log(`${this.firstName} is a ${this.age}-year old ${this.job}, and he has ${this.hasLicense?'a':'no'} driver's license`);
  }

};

let interestIn = prompt(
  "What do you want to know about Sai? Choose between firstName,lastName,job,age,friends"
);

if (sai[interestIn] == undefined) {
  console.log("The property is not present in the object!!!!!!");
} else {
  console.log(sai[interestIn]);
}

// adding new properties to the object

sai.location = "India,Jammalamadugu";
sai["Email"] = "saitejassp2580@gmail.com";

// to create a string literal accessing the properties in the object

console.log(
  `${sai['firstName']} has ${sai["friends"].length} friends and his best friend is called ${sai["friends"][0]}`
);
console.log(sai.calcAge());
console.log(sai.age);
console.log(sai.age);
console.log(sai.age);
sai.summary();
