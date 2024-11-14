// control structure in js is essential for controlling the flow of
// execution in your code. The allow you to dictate how your
// programme should respond based on conditions.

//  1. Conditional statement
// conditional statement executes a block of code if the specified
// condition is true or false.

// a. If statement
let temperature = 30;

if(temperature > 25){
    console.log('it is a hot day!')
}else {
    console.log('it is a cold day')
}

const isAdmin = false;
const isSuperUser = false;

if (isAdmin || isSuperUser){
    console.log("you can have access to the app")
}else{
    console.log("you are not allowed to access this app")
}

// write if statement that checks if someone has  paid school
// fees and also have good health before the person can
// have access to the class, else the person should go back home.
// your output should be: welcome to the class or go back home.

let paidSchoolFees = 60;
let goodHealth = 20;

if(goodHealth < 30){
    console.log("Welcome back to school")
}
else{
    console.log("Go back home")
}
// OR
const hasPaid = true;
const hasGoodHealth = true;

if(hasPaid && hasGoodHealth){
    console.log("Welcome to class")
}else{
    console.log("Go back home")
}

let age = 26;
if (age > 25){
    console.log("your age is above 25")
}else if(age < 25){
    console.log("your age is below 25")
}else{
    console.log("your age is 25")
}
let fruit ="apple";
if(fruit === "bannana"){
    console.log('we have bannana in the store')
}else if(fruit === "orange"){
    console.log("we have orange in our store")
}else if(fruit === "coconut"){
    console.log("coconut is in our store")
}else if(fruit === "apple"){
    console.log("we have apple in our store")
}else{
    console.log("we do not have apple in our store")
}

let fruit1 = "apple";

switch (fruit1){
    case "bannana":
        console.log('it is bannana')
        break;
    case "apple":
        console.log('it is apple');
        break;
    default:
        console.log('we do  not have any fruit');
}

let age1 = 30;

switch(age1){
    case age1 > 25:
        console.log("your age is above 25");
        break;
    case age1 < 25:
        console.log("your age is below 25");
        break;
    default:
        console.log("your age is equal to 25");
}

// Define an array of allowed actions
const actions = ["start", "stop", "pause"];
// Set the current user action
let userAction = "start";
// Set the login status
let isLoggedIn = true;
// Switch statement to evaluate conditions
switch(true){
    // Check if the user is valid and user is logged in
    case actions.includes(userAction) && isLoggedIn:
        // Log the message if the action is permitted
        console.log("Action permitted:" + userAction);
        break;
        // Check if the valid but user is not logged in
    case actions.includes(userAction) && !isLoggedIn:
        // Log a message asking the user to log in
        console.log("pleaselog in to perform this action");
        break;
    default:
        // Log a message for no valid case found
        console.log("No valid case found.");
}