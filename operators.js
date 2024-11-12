// operators in js are special symbols that performs operations on one or more 
// operads in our js file system

// 1. Arithmetic operations
// addition
let sum = 5 + 3;
console.log(sum)

// subtractions
let difference = 10 - sum;
console.log(difference)

// multiplication
let product = sum * difference;
console.log(product)

// division
let quotient = product / 4;
console.log(quotient)

// modulus
let reminder = quotient % 3;
console.log(reminder)

// 2. Assignment Operators
// These operators assign values to varaiables

// assignment
let x = 5;
console.log(x)

// addition assignment
let y = 5;
y += 1;
console.log(y)

// subtraction assignment
let z = 10;
z -=y;
console.log(z)

// 3. Comparison assignment
// These operators compare values and return a boolean value

// Equal
console.log(5 == "5")

// strict Equal
console.log( 5 === "5")

// Not Equal
console.log(5 != "5")

// strict Not Equal
console.log(5 !== "5")

// not equal
console.log(5 != "5")
let n = 3
let b = 2

console.log(n !=  b)

// strict not equal
console.log(5 !== "5")
let u = "Peculiar"
let e = 10
console.log(u !== e)

// Greater than
console.log(10 > 5)
let g = 12
let k = 10
let t = g + k
console.log(k > g)

// less than
console.log(3 < 2)
let r = 12
let i = 10
let w = r - i
console.log(t < w)

// greater than and equal
console.log(4 >=5 )
let m = 6
let a = 6
let q = m * 2
console.log(m >= a)

let s = a - 3
console.log(q >= s)

// 4. Logical operators
// They are used to combine or manipulate 
// boolean values (true or false )
// AND = &&
// OR = ||
// NOT = ! 

// AND: Is used for when both conditions are true it will be true but wnen
// one of the condition are false it will be false
let temp = 200;
if (temp > 0 && temp <= 30){
    console.log("The weather is GOOD");
}
else{
    console.log("The weather is BAD");
}

let temp2 = 25;
if (temp2 > 0 && temp2 <= 30){
    console.log("The weather is GOOD");
}
else{
    console.log("The weather is BAD");
}

// OR: Is used when at least one of the statement
// is true 
let temp3 = 250;
if (temp3 <= 0 || temp3 > 30){
    console.log("The weather is BAD");
}
else{
    console.log("The weather is GOOD");
}

// NOT:It changes true to be false and 
// false to be true

let isSunny = false;
if(isSunny){
    console.log("It is BRIGHT")
}
else{
    console.log("It is RAINY")
}

let isSunny1 = true;
if(isSunny1){
    console.log("It is BRIGHT")
}
else{
    console.log("It is RAINY")
}

let isSunny2 = false;
if(!isSunny2){
    console.log("It is BRIGHT")
}
else{
    console.log("It is RAINY")
}

let isSunny3 = true;
if(!isSunny3){
    console.log("It is BRIGHT")
}
else{
    console.log("It is RAINY")
}

// MORE EXAMPLES ON LOGICAL OPERATORS
const hasDriverLiences = true;
const hasInsurance = true;

const carDrive = hasDriverLiences && hasInsurance;
console.log(carDrive)

const isAdult = true;
const isHungry = false;

const canEnter = isAdult && isHungry;
console.log(canEnter)

const knowsHTML = false;
const knowCSS = true;
const canDesignWebsite = knowsHTML || knowCSS;
console.log(canDesignWebsite)

const isAdmin = false;
const isSuperUser = false;
const canAccessPage = isAdmin || isSuperUser;
console.log(canAccessPage)
