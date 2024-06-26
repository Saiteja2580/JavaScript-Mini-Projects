// declaring variables using let kyword
// let country = "India";
// let continent = "Asia";
// let Population = 1436697241;
// let isIsland = true
//printing the output
// console.log(country)
// console.log(continent)
// console.log(Population)
//data types

// console.log(typeof country)
// console.log(typeof continent)
// console.log(typeof Population)
// console.log(typeof isIsland)

// challenge 1
// CHALLENGE #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).

// Your task is to write some code to help them:

// Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

// Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

// Log the value of BMIMark and BMIJohn to the console.

// BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too

// TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

// 👋 OPTIONAL: You can watch my solution in video format in the next lecture

// IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2)

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;

const markHigherBmi = BMIMark > BMIJohn;

console.log(`Bmi Mark : ${BMIMark}`);
console.log(`Bmi John : ${BMIJohn}`);
