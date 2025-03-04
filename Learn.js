// JavaScript Basics

// 1. Variables
// Variables in JavaScript can be declared using var, let, or const.
var name = "John Doe"; // var is function-scoped
let age = 30; // let is block-scoped
const isStudent = true; // const is block-scoped and cannot be reassigned

// 2. Functions
// Functions in JavaScript can be declared in different ways.

// Function Declaration
function greet() {
  console.log("Hello, " + name);
}

// Function Expression
const add = function(a, b) {
  return a + b;
};

// Arrow Function
const multiply = (a, b) => a * b;

// Calling functions
greet();
console.log("Sum: " + add(5, 10));
console.log("Product: " + multiply(5, 10));

// 3. Control Structures
// if-else statement
if (age > 18) {
  console.log(name + " is an adult.");
} else {
  console.log(name + " is a minor.");
}

// switch statement
switch (isStudent) {
  case true:
    console.log(name + " is a student.");
    break;
  case false:
    console.log(name + " is not a student.");
    break;
  default:
    console.log("Unknown status.");
}

// for loop
for (let i = 0; i < 5; i++) {
  console.log("Iteration " + i);
}

// while loop
let counter = 0;
while (counter < 5) {
  console.log("Counter: " + counter);
  counter++;
}

// 4. Arrays
const fruits = ["Apple", "Banana", "Cherry"];
console.log("Fruits: " + fruits.join(", "));

// Adding an element to the array
fruits.push("Orange");
console.log("Updated Fruits: " + fruits.join(", "));

// 5. Objects
const person = {
  firstName: "Jane",
  lastName: "Doe",
  age: 25,
  greet: function() {
    return "Hello, " + this.firstName + " " + this.lastName;
  }
};

console.log(person.greet());

// 6. Basic DOM Manipulation
// Assuming there is an element with id "content" in the HTML
const content = document.getElementById("content");
if (content) {
  content.innerHTML = "<h1>Welcome to JavaScript Learning!</h1>";
}

// Adding an event listener
const button = document.getElementById("myButton");
if (button) {
  button.addEventListener("click", () => {
    alert("Button was clicked!");
  });
}
