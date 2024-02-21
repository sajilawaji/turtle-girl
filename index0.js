// Declare variables using let and const
let num1 = 21;
const num2 = 31;
let result;

// Perform some calculations using the variables
result = num1 + num2;

// Output the result to the console
console.log("The result of num1 + num2 is:", result);

// Log the result for the user to see
console.log("The result of the calculation is:", result);

// Use strings, numbers, and boolean values cached within variables
let message = "The result is: ";
let isResultPositive = result > 0;

// Use if/else statements to control program flow
if (isResultPositive) {
  console.log(message + result);
} else {
  console.log("The result is positive.");
}

// Use switch statement
switch (result) {
  case 1:
    console.log("The result is 1.");
    break;
  case 4:
    console.log("The result is 4.");
    break;
  default:
    console.log("The result is not recognized.");
}

// Use try/catch statements to manage potential errors
try {
  // Attempt to parse a string as an integer
  let invalidNumber = parseInt("hello");
  if (isNaN(invalidNumber)) {
    throw "Invalid number";
  }
} catch (error) {
  console.error("Error:", error);
}

// Utilize loops
let count = 0;
while (count < 5) {
  console.log("Count:", count);
  count++;
}

// Utilize loop control keywords
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue; // Skip iteration if i is 5
  }
  console.log("Loop iteration:", i);
}

// Create and manipulate arrays
let numbers = [1, 2, 3, 4, 5];
numbers.push(6); // Add item to the end of the array
numbers.pop(); // Remove the last item from the array

// Create and manipulate objects
let person = {
  name: "Miller",
  age: 100,
  city: "Atlanta",
};
person.age = 31; // Update property value

// Use functions to handle repeated tasks
function multiply(x, y) {
  return x * y;
}

// Program outputs processed data
let product = multiply(num1, num2);
console.log("Product:", product);
