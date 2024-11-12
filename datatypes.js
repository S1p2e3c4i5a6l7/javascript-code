// alert("hello jsclass");
console.log('Welcome to my website');

// VARIABLES
var name ="Peculiar";
console.log(name);

let age = 40;
// LET can be changed
age = 50;
console.log(age);

const email = "peculiar@gmail.com";
// CONST can't be changed
console.log(email);

// DATATYPES
// PRIMITIVE DATATYPES
// STRING
let name2 = "Peter";
console.log(name2);

// NUMBERS
let age2 = 25;
console.log(age2);
let myNumber = 0.94;
console.log(myNumber);

// BOOLEAN
let isMarried = false;
let isGudMan = true;

// UNDEFINED
let notAssigned;

// NULL
let isActive = null;
isActive ="open" ;
console.log(isActive);

// NON-PRIMITIVE DATATYPES
// ARRAY
let products = ["bag", "shoes", "cloth", "phone", "laptop"]
console.log(products[3] [4]);

// OBJECT
let user = {
    name:"Peculiar",
    age: 20,
    email:"peculiar@gmail.com",
    isStudent: false,
};
console.log(user);

// AN OBJECT INSIDE ANOTHER OBJECT
const user2 = {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    userName: "johnDoe123",
    email: "johndoe@example.com",
    password: "securePassword123",
    phone: "+1234567800",
    address:{
        street:"123 Main St",
        city:"Lagos",
        state:"Lagos",
        postalCode: "100001",
        country: "Nigeria",
    },
    dateOfBirth:  "1990-01-01",
    isActive: true,
    roles: ["user", "admin"],
    lastLogin:"2024-10-14T10:30:00Z",
};
console.log(user2);