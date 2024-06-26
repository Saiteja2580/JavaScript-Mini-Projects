// Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
// about their dog's age, and stored the data into an array (one array for each). For
// now, they are just interested in knowing whether a dog is an adult or a puppy.
// A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
// old.
// Your tasks:
// Create a function 'checkDogs', which accepts 2 arrays of dog's ages
// ('dogsJulia' and 'dogsKate'), and does the following things:
// 1. Julia found out that the owners of the first and the last two dogs actually have
// cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
// ages from that copied array (because it's a bad practice to mutate function
// parameters)

const checkDogs = function (dogsJulia, dogsKate) {
  let juliaDogs = [...dogsJulia];
  juliaDogs = juliaDogs.slice(1, 4);
  console.log(juliaDogs);
  const dogsAges = [...juliaDogs, ...dogsKate];
  console.log(dogsAges);
  dogsAges.forEach(function (age, i) {
    const dogAp = (age < 3 && "Puppy") || "Adult";
    console.log(
      `Dog number ${i + 1} is ${
        (dogAp === "Adult" && `an ${dogAp}, and is ${age} years old`) ||
        `still a ${dogAp}`
      }`
    );
  });
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

// 2. Create an array with both Julia's (corrected) and Kate's data
// 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
// is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
// �
// ")
// 4. Run the function for both test datasets
// Test data:
// § Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// § Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4

// Let's go back to Julia and Kate's study about dogs. This time, they want to convert
// dog ages to human ages and calculate the average age of the dogs in their study.
// Your tasks:
// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
// ages ('ages'), and does the following things in order:
// 1. Calculate the dog age in human years using the following formula: if the dog is
// <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
// humanAge = 16 + dogAge * 4

const calcAverageHumanAge = function (dogsAgeArray) {
  const humanAge = dogsAgeArray.map((value) => {
    return (value <= 2 && 2 * value) || 16 + value * 4;
  });

  const lessThan18 = humanAge.filter((humanage) => {
    return humanage >= 18;
  });
  console.log(lessThan18);

  const avgHumanAge = lessThan18.reduce((accum, humanage) => {
    return accum + humanage;
  }, 0);
  console.log(avgHumanAge);
  return avgHumanAge / lessThan18.length;
};
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));

// 2. Exclude all dogs that are less than 18 human years old (which is the same as
// keeping dogs that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs (you should already know
// from other challenges how we calculate averages �)
// 4. Run the function for both test datasets
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4

// Julia and Kate are still studying dogs, and this time they are studying if dogs are
// eating too much or too little.
// Eating too much means the dog's current food portion is larger than the
// recommended portion, and eating too little is the opposite.
// Eating an okay amount means the dog's current food portion is within a range 10%
// above and 10% below the recommended portion (see hint).
// Your tasks:



// Use many different tools to solve these challenges, you can use the summary
// lecture to choose between them �
// § Being within a range 10% above and below the recommended portion means:
// current > (recommended * 0.90) && current < (recommended *
// 1.10). Basically, the current portion should be between 90% and 110% of the
// recommended portion

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

// 1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
// the recommended food portion and add it to the object as a new property. Do
// not create a new array, simply loop over the array. Forumla:
// recommendedFood = weight ** 0.75 * 28. (The result is in grams of
// food, and the weight needs to be in kg)

dogs.forEach((dog) => {
  dog.recommendedFood = dog.weight ** 0.75 * 28;
});
console.log(dogs);

// 2. Find Sarah's dog and log to the console whether it's eating too much or too
// little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
// the owners array, and so this one is a bit tricky (on purpose) �

const sarahDog = dogs.find((dog) => {
  return dog.owners.includes("Sarah");
});
console.log(
  `${sarahDog.owners[sarahDog.owners.indexOf("Sarah")]}'s dog is eating ${
    sarahDog.curFood > sarahDog.recommendedFood ? "too high" : "too low"
  }`
);

// 3. Create an array containing all owners of dogs who eat too much
// ('ownersEatTooMuch') and an array with all owners of dogs who eat too little
// ('ownersEatTooLittle').

let ownersEatTooMuch = [];
let ownersEatTooLittle = [];
dogs.forEach((dog) => {
  dog.curFood > dog.recommendedFood && ownersEatTooMuch.push(dog.owners);
  dog.curFood < dog.recommendedFood && ownersEatTooLittle.push(dog.owners);
});

console.log(ownersEatTooLittle);
console.log(ownersEatTooMuch);

// 4. Log a string to the console for each array created in 3., like this: "Matilda and
// // Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
// // too little!"

ownersEatTooLittle = ownersEatTooLittle.join(" and ").replace(",", " and ");
ownersEatTooMuch = ownersEatTooMuch.join(' and ').replace(",", " and ");
console.log(`${ownersEatTooLittle}'s dogs eat too little`);
console.log(`${ownersEatTooMuch}'s dogs eat too much`);

// 5. Log to the console whether there is any dog eating exactly the amount of food
// that is recommended (just true or false)

console.log(
  dogs.some((dog) => {
    dog.curFood === Number(dog.recommendedFood);
  })
);

// 6. Log to the console whether there is any dog eating an okay amount of food
// (just true or false)

console.log(
  dogs.some((dog) => {
    dog.curFood > dog.recommendedFood * (10 / 100) &&
      dog.curFood < dog.recommendedFood * (90 / 100);
  })
);

// 7. Create an array containing the dogs that are eating an okay amount of food (try
// to reuse the condition used in 6.)
const dogsEatingOkay = dogs.map((dog) => {
  if (
    dog.curFood >= dog.recommendedFood * (10 / 100) &&
    dog.curFood <= dog.recommendedFood * (90 / 100)
  ) {
    return dog;
  }else{
    return 0;
  }
});
console.log(dogsEatingOkay);

// 8. Create a shallow copy of the 'dogs' array and sort it by recommended food
// portion in an ascending order (keep in mind that the portions are inside the
// array's objects �)

const dogsShallow = [...dogs];

dogsShallow.sort((dog1,dog2) => {
    if (dog1.recommendedFood > dog2.recommendedFood) {
        return 1;
    }
    if(dog1.recommendedFood < dog2.recommendedFood){
        return -1;
    }
});
console.log(dogsShallow);