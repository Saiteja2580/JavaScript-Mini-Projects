"use strict";

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// We're building a football betting app (soccer for my American friends �)!
// Suppose we get data from a web service about a certain game ('game' variable on
// next page). In this challenge we're gonna work with that data.
// Your tasks:
// 1. Create one player array for each team (variables 'players1' and
// 'players2')
const {
  players: [players1, players2],
} = game;
console.log(players1, players2);

// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
const [gk, ...fieldPlayers] = game.players[0];
console.log(gk, fieldPlayers);
// 3. Create an array 'allPlayers' containing all players of both teams (22 players)

const allPlayers = [...game.players[0], ...game.players[1]];
console.log(allPlayers);
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
const players1Final = ["Thiago", "Coutinho", "Perisic", ...game.players[0]];
console.log(players1Final);
// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);
// 6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
const printGoals = function (...names) {
  console.log(`${names.length} goals were scored.`);
};
printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals("Davies", "Muller");
printGoals(...game.scored);
// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.
game.odds.team1 < game.odds.team2 &&
  console.log(`team 1 - ${team1} is more likely to win`);
// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
// Then, call the function again with players from game.score

//8.print the game.scored player name along with their goal numbers
let entries = game.scored.entries();
console.log(entries);

for (const [index, value] of entries) {
  console.log(`Goal - ${index + 1} - ${value}`);
}

//9.use a loop to calculate average odds
let values = Object.values(game.odds);
console.log(values);
let sum = 0;
for (const val1 of values) {
  sum = sum + val1;
}
let average = sum / values.length;
console.log(`Average of odds - ${average}`);

//10.print the 3 odds to teh console but in a nice formatted way like this
//Odd of Victory Bayern Munich : 1.33

for (const [key, value] of Object.entries(game.odds)) {
  if (game[key] == undefined) {
    console.log(`Odd of victory draw : ${value}`);
  } else {
    console.log(`Odd of victory ${game[key]} : ${value}`);
  }
}


//crete an object called scorers which contains the names of the player and the goals scored
// let scorers = {};
// for (const [index,value] of game.scored.entries()){
//   scorers[value] = index;
// }
// console.log(scorers);


const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
  ]);


  // 1. Create an array 'events' of the different game events that happened (no duplicates

  const events = new Set([...gameEvents.values()]);
  console.log(events);

//After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
gameEvents.delete(64);
console.log(gameEvents);

// Compute and log the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes
console.log(`An event happened, on average, every ${90/gameEvents.size} minutes`);



// Loop over 'gameEvents' and log each element to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:[FIRST HALF] 17: ⚽ GOAL

for(const [mapKey,mapValue] of gameEvents){
  console.log(mapKey < 45 && `[FIRST HALF] : ${mapValue}` || `[SECOND HALF] : ${mapValue}`);
}