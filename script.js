'use strict';


/* function logger() {
    console.log("My name is Denis");
}

// calling / running / invoking function

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');

*/

/*
// function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1996);
console.log(age1);


// function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
};

const age2 = calcAge2(1996);

console.log(age1, age2); */


// Arrow functions

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1996);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     //return retirement;
//     return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1996, 'Denis'));
// console.log(yearsUntilRetirement(1990, 'Bob'));

// function calling in another function 

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired`);
//         return -1;
//     }
// };

// console.log(yearsUntilRetirement(1996, 'Denis'));
// console.log(yearsUntilRetirement(1970, 'Mike'));

// const calcAverage = (a, b, c) => (a + b + c) / 3;

// const avgDolhins = calcAverage(85, 54, 41);
// console.log(avgDolhins);

// const avgKoalas = calcAverage(77, 56, 41);
// console.log(avgKoalas);


// const checkWinner = (avgDolhins, avgKoalas) => {
//     if (avgDolhins >= 2 * avgKoalas) {
//         console.log(`Dolphins win ${avgDolhins} vs ${avgKoalas}`);
//         return avgDolhins;
//     } else if (avgKoalas >= 2 * avgDolhins) {
//         console.log(`Koalas win ${avgKoalas} vs ${avgDolhins}`);
//         return avgKoalas;
//     } else {
//         console.log('No winner');
//     }
// };

// checkWinner(avgKoalas, avgDolhins);



// Arrays

// const friends = ['Michael', 'Steven', 'Peter'];

// //Add elements
// const newLength = friends.push('Jay'); // dobovljaet element v konec
// console.log(friends);
// console.log(newLength);

// friends.unshift('John'); // dobovljaet element v nachalo
// console.log(friends);

// // Remove elements
// friends.pop(); // Last
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); // First
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));

// friends.push(23);
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes('23'));

// if (friends.includes('Steven')) {
//     console.log('You have a friend called Steven');
// }


// // Codding challange 2

// const calcTip = bill => bill >= 50 && bill <= 300 ?
//     bill * 0.15 : bill * 0.2;

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);

// const total = [bills[0] + calcTip(bills[0]), bills[1] + calcTip(bills[1]), bills[2] + calcTip(bills[2])];
// console.log(total);

// // Indrotuction to objects


// const denis = {
//     firstName: 'Denis',
//     lastName: 'Lobach',
//     age: 2037 - 1996,
//     job: 'student',
//     friends: ['Michael', 'Peter', 'Steven']
// };

// // 43. Dot vs. Bracket Notation

// console.log(denis);

// console.log(denis.lastName);
// console.log(denis['lastName']);

// const nameKey = 'Name';
// console.log(denis['first' + nameKey]);
// console.log(denis['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Denim? Choose between firstName, lastName,age, job and friends');

// if (denis[interestedIn]) {
//     console.log(denis[interestedIn]);
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job and friends ');
// }


// denis.location = 'Latvia';
// denis['twitter'] = '@denislobach';
// console.log(denis);


// console.log(`${denis.firstName} has ${denis.friends.length} friend and his best friends is ${denis.friends[0]}`);



// Object methods

// const denis = {
//     firstName: 'Denis',
//     lastName: 'Lobach',
//     birthYear: 1996,
//     job: 'student',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriverLicense: true,

//     // calcAge: function (birthYear) {
//     //     return 2037 - birthYear;
//     // }

//     calcAge: function () {
//         return 2037 - this.birthYear;
//     },

//     foo: function () {
//         if (this.hasDriverLicense) {
//             return console.log(`${this.firstName} is ${this.calcAge()} years old and he has a drivers license`);
//         } else {
//             return console.log(`${this.firstName} is ${this.calcAge()} years old and he has no a drivers license`);
//         }
//     }
// };

// console.log(denis.calcAge());

// denis.foo();




// Coding Challenge #3


// const markMiller = {
//     fullName: 'Mark Miller',
//     weight: 78,
//     height: 1.69,

//     calcBMI: function () {
//         this.bmi = this.weight / this.height ** 2;
//         return this.bmi;
//     }
// };


// const johnSmith = {
//     fullName: 'John Smith',
//     weight: 92,
//     height: 1.95,

//     calcBMI: function () {
//         this.bmi = this.weight / this.height ** 2;
//         return this.bmi;
//     }
// };

// markMiller.calcBMI();
// johnSmith.calcBMI();


// if (markMiller.bmi > johnSmith.bmi) {
//     console.log(`Mark's BMI (${markMiller.bmi}) is higher than John's BMI (${johnSmith.bmi})`);
// } else if (johnSmith.bmi > markMiller.bmi) {
//     console.log(`John's BMI (${johnSmith.bmi}) is higher than Mark's BMI (${markMiller.bmi})`);
// }



// Loops


// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Messege ${rep}`);
// }


// 47. Looping Arrays, Breaking and Continuing


// const denis = [
//     `Denis`,
//     `Lobach`,
//     2037 - 1996,
//     `student`,
//     ['Michael', 'Peter', 'Steven'],
//     true
// ];

// const types = [];

// for (let i = 0; i < denis.length; i++) {
//     // Reading from denis array
//     console.log(denis[i], typeof denis[i]);

//     // Filling types array
//     // types[i] = typeof denis[i];
//     types.push(typeof denis[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// }

// // continue and break

// for (let i = 0; i < denis.length; i++) {
//     if (typeof denis[i] !== 'string') {
//         continue;
//     }

//     console.log(denis[i], typeof denis[i]);
// }

// console.log('BREAK WITH NUMBER')
// for (let i = 0; i < denis.length; i++) {
//     if (typeof denis[i] === 'number') {
//         break;
//     }

//     console.log(denis[i], typeof denis[i]);
// }

// // Looping backwards and loop in loop

// for (let i = denis.length - 1; i >= 0; i--) {
//     console.log(i, denis[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`--------- Starting exercise ${exercise}`);

//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Exercise ${exercise} Lifting weight repitition ${rep}`);
//     }
// }

// // While 

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting wet=ights repitition ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
//     // console.log(`Lifting wetights repitition ${rep}`);
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log('Loop is about to end..');
// }


const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = bill => bill >= 50 && bill <= 300 ?
    bill * 0.15 : bill * 0.2;


// console.log(calcTip(bills[0]));
// console.log(calcTip(bills[1]));

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
}

console.log(tips);

for (let i = 0; i < bills.length; i++) {
    totals.push(bills[i] + tips[i]);
}

console.log(totals);

const calcAverage = arr => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; // sum = sum + arr[i];
    }
    console.log(sum);
};

calcAverage(totals);