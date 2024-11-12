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