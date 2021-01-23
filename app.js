// let user1 = {
//   firstName: 'Denis',
//   lastName : "Denis",
//   age: 25,
//   isAdmin: true,
//   email: 'test@test.com',

// const answer = +prompt("Type your age..");

// if (answer != null && answer >= 18) {
//   alert("LAPIPNI LUDZAM!");
// } else {
//   alert("LAI PIEKĻŪTU ŠĪS LAPAS MATERIĀLIEM, JUMS JĀBŪT VISMAZ 18 GADUS.");
// }

let car = {
  color: "red",
  openDoor() {
    console.log("Open");
  }
};

// car.openDoor();


class User {

  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFirstName() {
    return this.firstName;
  }

}


let user1 = new User("Denis", "Denis", 23);
// console.log(user1.firstName);



let x1 = function (a, b) {
  return a * b;
};

let x2 = (a, b) => a * b;



let z1 = x1(5, 3);
console.log(z1);
let z2 = x2(4, 3);
console.log(z2);



let array = [1, 2, 3, 4];
let array2 = [];

array2.push(car);

array2.forEach(element => {
  if (car.color == "Red") {
      
  }
});

// function getTime() {
//   let d = new Date();
//   document.getElementById("demo").innerHTML = d;

// }
// if (new Date().getHours() > 0) {
//   document.getElementById("demo").innerHTML = "Good day!";
// }

// var userList;

// userList.push()

// console.log(fruits);
// addFruits("Kiwi");
// addFruits("Apelsin");
// addFruits("Cocos");
// console.log(fruits);

// function foo(names = []) {
//   let a = document.getElementById("number").value;
//   names.push(a)
//   console.log(names);

// }


// function showFruits(arrayP){    
//   for(var i = 0; i < arrayP.length; i++){
//      console.log(arrayP[i]);  
//   }
// }

// function addFruits(fruit){    
//   fruits.push(toString(fruit));
//   console.log(fruits);
// }

// const name = document.getElementById('fname');
// const lastName = document.getElementById('lname');
// // console.log(value1 = getFullName(user1))
// // console.log(value2 = getFullName(user2))

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push("Kiwi");       //  Adds a new element ("Kiwi") to fruits
// fruits.sort();

// // console.log(fruits);