const button = document.querySelector("button")
/*
    querySelector selects the elements as like css selector
*/
button.addEventListener("click", () => {
    alert("error")
})

/*
    addEventListener listen the behavours of the browser like click,  
*/


// 1.Basics
console.log("I like pizza")
console.log("it's really good")

// window.alert("I really love pizza")  //it shows pop up msg on the top of screen 


// 2.variable and attributes
// variable declaration can be done using(var, let, const) 

let firstName = "bro"; //strings
let age = 21; //numbers
let student = false; //boolens
 
age = age +1;

console.log("hello",firstName);
console.log("you are ",age, "years old");
console.log("which is ",student);

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "you are " + age + " years old";
document.getElementById("p3").innerHTML = "Enrolled :" + student ;


// 3.Accept user input
// Easy way using window prompt 
 let username = window.prompt("404 error")
 console.log(username)

 // Dificult way HTML textbox

//  let username;
//  document.getElementById("myButton").onclick = function(){

//     username = document.getElementById("myText").value;
//     console.log(username);
//     document.getElementById("myLabel").innerHTML = "hello " + username;
//  }


 // 4.Type Conversion
 // change the datatype of a value to another (strings, numbers, boolean)

 