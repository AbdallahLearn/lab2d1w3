


// Q1
console.log("---------------Q1")
var eatsPlants = false; 
var eatsAnimals = true; 


var category = eatsPlants && eatsAnimals ? "omnivore" :
               eatsPlants && !eatsAnimals ? "herbivore" :
               !eatsPlants && eatsAnimals ? "carnivore" :
               undefined;

console.log(category);


// Q2
console.log("-------------------Q2")
var musicians = 2;


if (musicians <= 0) {
    console.log("not a group");
} else if (musicians === 1) {
    console.log("solo");
} else if (musicians === 2) {
    console.log("duet");
} else if (musicians === 3) {
    console.log("trio");
} else if (musicians === 4) {
    console.log("quartet");
} else {
    console.log("this is a large group");
}

//Q3
console.log("-------------------Q3")

var room = "billiards room";

var suspect = "Mr. Parkes";
var weapon = "";
var solved = false;

if (room === "billiards room") {
    weapon = "poison";
} else if (room === "gallery") {
    weapon = "trophy";
} else if (room === "billiards room") {
    weapon = "pool stick";
} else if (room === "dining room") {
    weapon = "knife";
}

if (suspect === "Mr. Parkes" && room === "dining room") {
    solved = true;
} else if (suspect === "Ms. Van Cleve" && room === "gallery") {
    solved = true;
} else if (suspect === "Mrs. Sparr" && room === "billiards room") {
    solved = true;
} else if (suspect === "Mr. Kalehoff" && room === "ballroom") {
    solved = true;
}


if (solved) {
    console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}
else{
    console.log("The criminal does not exist ")
}

// Q4
console.log("-------------------Q4")
var balance = -325; 
var checkBalance = true; 
var isActive = true; 

if (checkBalance) {
    if (isActive) {
        if (balance > 0) {
            console.log("Your balance is $" + balance + ".");
        } else if (balance === 0) {
            console.log("Your balance is $0.00.");
        } else {
            console.log("Your balance is negative. Please contact customer service.");
        }
    } else {
        console.log("Your account is inactive. Please contact customer service.");
    }
}
else{
    console.log("your check balance is false! ")
}

console.log("-------------------Q5")

// Q5



var flavor = "vanilla"; 
var vessel = "cone";   
var toppings = "sprinkles"; 


if ((flavor === "vanilla" || flavor === "chocolate") &&
    (vessel === "cone" || vessel === "bowl") &&
    (toppings === "sprinkles" || toppings === "peanuts")) {
    console.log("I'd like two scoops of " + flavor + " ice cream in a " + vessel + " with " + toppings + ".");
}