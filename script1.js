// const country = 'Latvia';
// const continent = 'Europe';
// let population = 1000000;

// console.log(country);
// console.log(continent);
// console.log(population);

// const isIsland = false;
// const language = 'Latvian';

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// console.log(population / 2);
// population += 1;
// console.log(population);

// console.log(population > 6000000);
// console.log(population < 33000000);

// let description = country + ' is in ' + continent + ', and its ' + population + ' people speak ' + language;

// console.log(description);

// console.log("Coding Challenge #1");
// console.log("-----DATA1-----");

// let marksWeight = 78;
// let marksHeight = 1.69;
// let johhWeight = 92;
// let johnHeight = 1.95;

// let marksBMI = marksWeight / (marksHeight * marksHeight);
// console.log(marksBMI);
// let johhBMI = johhWeight / (johnHeight * johnHeight);
// console.log(johhBMI);

// let markHigherBMI = marksBMI > johhBMI;

// console.log(markHigherBMI);

// console.log("-----DATA2-----");

// marksWeight = 95;
// marksHeight = 1.88;
// marksBMI = marksWeight / (marksHeight * marksHeight);
// console.log(marksBMI);

// johhWeight = 85;
// johnHeight = 1.76;
// johhBMI = johhWeight / (johnHeight * johnHeight);
// console.log(johhBMI);

// markHigherBMI = marksBMI > johhBMI;
// console.log(markHigherBMI);

// if (marksBMI > johhBMI) {
//   console.log(`Mark's BMI ${marksBMI} is higher than John's ${johhBMI}!`);
// }           else {
//   console.log(`John's BMI ${johhBMI} is higher than Mark's ${marksBMI}!`);
// } 

// CHALANGE 3 

let teamDoplhins = (96 + 108 + 89) / 3;
console.log(`Dolphins has ${teamDoplhins} average score`);

let teamKoalas = (88 + 91 + 110) / 3;
console.log(`Koalas has ${teamKoalas} average score`);

if (teamDoplhins > teamKoalas) {
  console.log("Dolphins is a winner!");
} else if (teamDoplhins < teamKoalas) {
  console.log("Koalas is a winner!");
} else {
  console.log("Draw!");
}

// BONUS 1

teamDoplhins = (97 + 112 + 101) / 3;
console.log(`Dolphins has ${teamDoplhins} average score`);
teamKoalas = (109 + 95 + 123) / 3;
console.log(`Koalas has ${teamKoalas} average score`);

if (teamDoplhins > teamKoalas && teamDoplhins > 100) {
  console.log("Dolphins is a winner!");
} else if (teamKoalas > teamDoplhins && teamKoalas > 100) {
  console.log("Koalas is a winner!");
} else if (teamDoplhins === teamKoalas) {
  console.log("Draw! :)");
} else {
  console.log("No winner :(");
}

// BONUS 2 

teamDoplhins = (97 + 112 + 101) / 3;
console.log(`Dolphins has ${teamDoplhins} average score`);
teamKoalas = (109 + 95 + 106) / 3;
console.log(`Koalas has ${teamKoalas} average score`);

if (teamDoplhins > teamKoalas && teamDoplhins > 100) {
  console.log("Dolphins is a winner!");
} else if (teamKoalas > teamDoplhins && teamKoalas > 100) {
  console.log("Koalas is a winner!");
} else if (teamDoplhins >= 100 && teamKoalas >= 100 && teamDoplhins === teamKoalas) {
  console.log("Draw! :)");
} else {
  console.log("No winner :(");
}