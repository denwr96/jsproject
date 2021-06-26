
// var logins = [];

// function myFunction() {

//    let login,pass;
//    var lo
//    login = document.getElementById("username").value;
//    pass = document.getElementById("password").value;

//    logins.push(login);
//   // login = document.getElementById("login").value;
//   // pass = document.getElementById("password").value;


//   // document.getElementById("demo").innerHTML = login;
//   alert(login + " " + pass);
//   console.log(logins);
  
// }


let a;
a = document.getElementById("number").value;
console.log(a)

function myFunction() {
  let a;
  a = document.getElementById("number").value;
  console.log(a);
  let toCelsius = (a) => a * (9/5) + 32;
  document.getElementById("demo").innerHTML = "In fahrenheit: " + toCelsius(a);
  
}

