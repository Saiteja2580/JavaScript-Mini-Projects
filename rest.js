"use strict";
//lets say we have an array of friends
const array = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];
//now we want to create three variables with monday in 1 var,tuesday in 2nd var,and all other days in one array as days

const [mon, tue, ...days] = array;
console.log(mon, tue, days);

//we can perform same thong on objects laso
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

//now i want mother and father in seperate variables and all other in seperate object
const {
  mother,
  father,
  professionalSkills: { web },
  ...profile
} = myProfile;
console.log(mother, father, profile, web);

//fucntons - in this case we call as rest parameters
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  console.log(sum);
};

add(3, 5);
add(3, 6, 7);
add(4, 5, 6, 7, 8);

const x = [10,11,12,13,14,15,166];
add(...x);

//assignment

const book = {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: ['computer science', 'programming', 'algorithms', 'data structures', 'java', 'math', 'software', 'engineering'],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13
      }
    },
    highlighted: true
  };

//   Destructure the keywords property (array) of the first book from the books array into variables called mainKeyword and rest. The first keyword should be assigned to mainKeyword, and the rest of the keywords should be assigned to the rest variable (it should be an array).


const [mainKeyword,...rest] = book.keywords;
console.log(mainKeyword,rest);

//  The bookPublisher variable should be assigned with the value of the publisher property of the book object. Assign the rest of the properties to the restOfTheBook variable.

const {publisher:bookPublisher,...restOfTheBook} = book;
console.log(bookPublisher,restOfTheBook);


// Write a function called printBookAuthorsCount that has two parameters called title and authors. The authors parameter should accept any number of arguments. This function should log to the console a string formatted like that: "The book "${title}" has ${authors.length} authors".


const printBookAuthorsCount = function(title,...authors){
    console.log(`The book "${title}" has ${authors.length} authors.`);
}
printBookAuthorsCount('Algorithms','Robert Sedgewick', 'Kevin Wayne');

