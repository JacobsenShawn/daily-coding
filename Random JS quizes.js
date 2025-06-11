/*
 * Programming Quiz: First Expression
 * Write an expression that uses at least three, distinct, arithmetic 
 * operators to log the number 42 to the console.
 */
 
/*
 * QUIZ REQUIREMENTS
 * 1. Your code should print the value `42`
 * 2. You should use at least 3 distinct operators.
 *    (`+`, `-`, `*`, `/`, or `%`) 
 */


// this expression equals 4, change it to equal 42
console.log(1 + 5 - 2);


console.log(8 * 5 + 2 / 1);
console.log((1 + 5 - 2) * 10 + 2 );
console.log((1 + 5 - 2) * 10 + 2 / 1 );
console.log(10 * 4 + 4 - 2);
console.log(80 - 40 + 2 / 1)

//|------------------------------------------------------------------------------------------------------------------------------------------|

/*
 * Programming Quiz: Converting Temperatures
 *
 * The Celsius-to-Fahrenheit formula:
 *
 *    F = C x 1.8 + 32
 *
 * 1. Set the fahrenheit variable to the correct value using the
 *    celsius variable and the formula above
 * 2. Log the fahrenheit variable to the console
 */
 
/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have a variable `celsius`
 * 2. You code should have a variable `fahrenheit`
 * 3. Your variable `celsius` should equal `12`
 * 4. Your variable `fahrenheit` should produce the output equal `53.6`
 * 5. Your variable `fahrenheit` declaration should use the `celsius` variable
 * 6. Your variable `fahrenheit` should have the correct formula
 * 7. Your code should log the `fahrenheit` variable
 */
 

let celsius = 12;
let fahrenheit = 12 * 1.8 + 32 

console.log(fahrenheit);

celsius = 22;
fahrenheit = 42 * 1.8 + 32 

console.log(fahrenheit);

//|------------------------------------------------------------------------------------------------------------------------------------------|

/*
 * Programming Quiz: Even or Odd
 *
 * Write an if...else statement that prints `even` if the 
 * number is even and prints `odd` if the number is odd.
 *
 * Note - make sure to print only the string "even" or the string "odd"
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have a variable `number`, and include an `if...else` statement
 * 2. Your conditional should use a strict comparison (`===` or `!==`), and use the modulo ( `%` ) operator
 * 3. Your code should produce the expected output - "even" or "odd" using console.log() method
 */
 
 
// change the value of `number` to test your if...else statement
const number = 100;
// if statement to check to see if const number is odd or even 
// if the modulo is equal to 1 even  , else odd 
if (0 === number % 2){
    console.log('even');
 } else { 
    console.log('odd');
}

//|------------------------------------------------------------------------------------------------------------------------------------------|

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have a variable `musicians`, and include `if...else if...else` conditional statement
 * 2. Your code should produce the expected output, as mentioned above. Read each condition carefully. 
 */
 
// Write a series of conditional statements that:
// Prints "not a group" if musicians is less than or equal to 0
// Prints "solo" if musicians is equal to 1
// Prints "duet" if musicians is equal to 2
// Prints "trio" if musicians is equal to 3
// Prints "quartet" if musicians is equal to 4
// Prints "this is a large group" if musicians is greater than 4

// change the value of `musicians` to test your conditional statements
const musicians = 4;

if (musicians === 1) {
    console.log("solo")
} else if (musicians === 2) {
    console.log("duet" )
} else if (musicians === 3) {
    console.log("trio")
} else if (musicians === 4) {
    console.log("quartet")
} else{
    console.log("this is a large group ")
}



// |-------------------------------------------------------------------------|




// Flow Chart Directions 

// Using the atm to check balance 

// 1st condition  - check your balance 
// Option 1 - true  move to next condition 
// false - Thank youhave a nice day 

//  2nd condition  - Is the account active  and balance > 0
// Option 1 - true  Your balance is 
// false - move to next condition 

// 3rd condition - is account not active 
// option 1 true  Your account is no longer active 
// false -  move to next condition 

// 4th conditon - is balance = 0
// true - Your account is empty 
// false - Your balance is negative Please contact bank 



const balance = 1325.00;
const checkBalance = true;
const isActive = true;

// To print out the account balance with decimal points (i.e. 325.00), use the .toFixed() method and pass it the number of decimal points you want to use. For example, balance.toFixed(2) returns 325.00.


// Start only if checkBalance === true
if (checkBalance === true) {
    
    
// Cases when account is active. Now, the balance could be <, =, or > zero
if (isActive === true && balance > 0) {
console.log("Your balance is $" + balance.toFixed(2) + ".");
}
else if (isActive === true && balance === 0){
console.log("Your account is empty.");
}
else if (isActive === true && balance < 0){
console.log("Your balance is negative. Please contact bank.");
}
// Case when account is NOT active
else if (isActive === false) {
console.log("Your account is no longer active.");
}
}
else {
console.log("Thank you. Have a nice day!");
}



// Expected Output


// Customer	balance	checkBalance	isActive	Expected Output
// Customer1	-325	true	true	Your balance is negative. Please contact bank.
// Customer2	35	true	true	Your balance is $35.00.
// Customer3	35	false	true	Thank you. Have a nice day!
// Customer4	35	true	false	Your account is no longer active.
// Customer5	0	true	true	Your account is empty.
// Customer6	-325	false	true	Thank you. Have a nice day!
// Customer7	-325	true	false	Your account is no longer active.
// Customer8	35	false	false	Thank you. Have a nice day!
// Customer9	0	false	false	Thank you. Have a nice day!
// Customer10	0	true	false	Your account is no longer active.

// |----------------------------------------------------------------------------------|

/*
 * Programming Quiz: Ice Cream
 *
 * Write a single if statement that logs out the message:
 * 
 * "Great choice! Your ice cream is at the next window."
 * 
 * ...only if:
 *   - flavor is "vanilla" or "chocolate"
 *   - vessel is "sugar cone" or "wafer cone"
 *   - topping is "sprinkles" or "peanuts"
 *
 * Otherwise log out:
 *
 * "Please check our menu and try again."
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables `flavor`, `vessel`, and `topping`
 * 2. Your code should have an `if` statement
 * 3. Your code should use logical expressions
 * 
 */
 
 
//  Testing Your Code

// How will you know if your code works? Change the values of flavor, topping and vessel and re-run the code and compare your output with the expected output.



//  Assigning variables 
const flavor = "vanilla";
const topping = "sprinkles";
const vessel = "wafer cone";



if ((flavor === "vanilla" || flavor === "chocolate") && (topping === "sprinkles" || topping === "peanuts") && (vessel === "sugar cone" || vessel === "wafer cone")){
    console.log ("Great choice! Your ice cream is at the next window.");
} else {
    console.log ("Please check our menu and try again.");
}

// Expected Output
// Flavor	Topping	Vessel	Response
// chocolate	bananas	wafer cone	"Please check our menu and try again."
// chocolate	peanuts	wafer cone	"Great choice! Your ice cream is at the next window."
// chocolate	sprinkles	sugar cone	"Great choice! Your ice cream is at the next window."
// chocolate	sprinkles	bowl	"Please check our menu and try again."
// strawberry	sprinkles	wafer cone	"Please check our menu and try again."
// strawberry	bananas	sugar cone	"Please check our menu and try again."
// strawberry	peanuts	bowl	"Please check our menu and try again."
// vanilla	sprinkles	wafer cone	"Great choice! Your ice cream is at the next window."
// vanilla	peanuts	sugar cone	"Great choice! Your ice cream is at the next window."
// vanilla	sprinkles	bowl	"Please check our menu and try again."


// |----------------------------------------------------------------------|

/*
 * Programming Quiz: What do I Wear?
 *
 * Using if/else statements, create a series of logical expressions that logs the size of a t-shirt based on the measurements of:
 *   - shirtWidth
 *   - shirtLength
 *   - shirtSleeve
 *
 * Use the chart above to print out one of the following correct values:
 *   - S, M, L, XL, 2XL, or 3XL
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables `shirtWidth`, `shirtLength`, and `shirtSleeve`
 * 2. Your code should include an `if...else` conditional statement
 * 3. Your code should use logical expressions
 * 4. Your code should produce the expected output.
 */
 
// Study thr logic for this one 

// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
const shirtWidth = 23;
const shirtLength = 30;
const shirtSleeve = 8.71;

if ((shirtWidth>=18 && shirtWidth<20) && (shirtLength>=28 && shirtLength<29) && (shirtSleeve>=8.13 && shirtSleeve<8.38) ) {
size = "S";
}
else if ((shirtWidth>=20 && shirtWidth<22) && (shirtLength>=29 && shirtLength<30) && (shirtSleeve>=8.38 && shirtSleeve<8.63) ) {
size = "M";
}
else if ((shirtWidth>=22 && shirtWidth<24) && (shirtLength>=30 && shirtLength<31) && (shirtSleeve>=8.63 && shirtSleeve<8.88) ) {
size = "L";
}
else if ((shirtWidth>=24 && shirtWidth<26) && (shirtLength>=31 && shirtLength<33) && (shirtSleeve>=8.88 && shirtSleeve<9.63) ) {
size = "XL";
}
else if ((shirtWidth>=26 && shirtWidth<28) && (shirtLength>=33 && shirtLength<34) && (shirtSleeve>=9.63 && shirtSleeve<10.13) ) {
size = "2XL";
}
else if ((shirtWidth>=28) && (shirtLength>=34) && (shirtSleeve>=10.13) ) {
size = "3XL";
}
else {
size = "NA";
}
console.log(size);

// |--------------------------------------------------------------------------------\

/*
 * Programming Quiz - Navigating the Food Chain
 *
 * Use a series of ternary operator to set the category to one of the following:
 *   - "herbivore" if an animal eats plants
 *   - "carnivore" if an animal eats animals
 *   - "omnivore" if an animal eats plants and animals
 *   - undefined if an animal doesn't eat plants or animals
 *
 * Notes
 *   - use the variables `eatsPlants` and `eatsAnimals` in your ternary expressions
 *   - `if` statements aren't allowed ;-)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have the variables `eatsPlants`, `eatsAnimals`
 * - Your code should include ternary statements. Do not use if....else statement. 
 * - Your code should produce the expected output
 */
 
// change the values of `eatsPlants` and `eatsAnimals` to test your code
// const eatsPlants = false;
// const eatsAnimals = true;
// let category;

// // your code goes here
// herbivore = category ? eatsPlants : eatsAnimals
// omnivore = category ? eatsPlants : eatsAnimals
// carnivore = category ? eatsPlants : eatsAnimals
// omnivore = category ? eatsPlants : eatsAnimals
// undefined = category ? eatsPlants : eatsAnimals

// change the values of `eatsPlants` and `eatsAnimals` to test
const eatsPlants = false;
const eatsAnimals = true;
let category;

// Determine the category using nested ternary operators
category = (eatsPlants && !eatsAnimals) ? "herbivore" :
           (!eatsPlants && eatsAnimals) ? "carnivore" :
           (eatsPlants && eatsAnimals) ? "omnivore" :
           "undefined";

//  Explanation:
    // If eatsPlants is true and eatsAnimals is false, category becomes "herbivore".
    // If eatsPlants is false and eatsAnimals is true, category becomes "carnivore".
    // If both are true, category becomes "omnivore".
    // If both are false, category becomes "undefined".

// Output the result
console.log(`The animal is a ${category}.`);
// 
// Expected Output
// Eats Plants	Eats Animals	Expected Output
// true      	false	         "herbivore"
// true	        true	         "omnivore"
// false	    true	         "carnivore"
// false	    false	          undefined


// |--------------------------------------------------------------------------------\
// Directions:

// Write a switch statement to set the average salary of a person based on their
//  type of completed education.

// Afterwards, print the following to the console.

// In 2015, a person with __________ earned an average of __________/year.

// Fill in the blanks with the type of education and the expected average salary. 
// Make sure to use correct grammar in your printed statement, and watch out for
//  any extra or missing characters (including spaces and punctuation marks). 
// For help, refer to the findings above.

// In 2015, a person with a Bachelor's degree earned an average of $59,124/year.

//     TIP: To print out the average salary with commas (i.e. 59,124),
//  use the toLocaleString() method and pass it the locale "en-US". For example, 
// salary.toLocaleString("en-US").


// change the value of `education` to test your code
const education = "no high school diploma";

// set the value of this based on a person's education
let salary = 0;

// your code goes here
switch (education) {
    case "no high school diploma":
        salary = 25636;
        break;
    case "high school diploma":
        salary = 35256;
        break;
    case "Associate's degree":
        salary = 41496;
        break;
    case "Bachelor's degree":
        salary = 59124;
        break;
    case "Master's degree":
        salary = 69732;
        break;
    case "Professional degree":
        salary = 89960;
        break;
    case "Doctoral degree":
        salary = 84396;
        break;
}

console.log("In 2015, a person with "+education+" earned an average of $"+salary.toLocaleString("en-US")+"/year.");



// |----------------------------------------------------------------------------|

/*
 * Programming Quiz: JuliaJames
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `x` with a starting value of `1`
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should use a conditional statement
 * - Your code should increment `x` by `1` each time the loop executes
 * - Your code should produce the expected output
 */
// Directions:

// Write a while loop that:

//     Loop through the numbers 1 to 20
//     If the number is divisible by 3, print "Julia"
//     If the number is divisible by 5, print "James"
//     If the number is divisible by 3 and 5, print "JuliaJames"
//     If the number is not divisible by 3 or 5, print the number


//  have to do this one backwards becasue if it includes a 3 or a 5 it would print that 
// before making it to 3 and 5 , so start at 3and 5 , then 5 , then 3 , then number 
let x = 1;

// while loop with a stop condition
while (x <= 20) {
    if (x % 3 === 0 && x % 5 === 0) {
        console.log("JuliaJames");
    }else if (x % 5 === 0) {
        console.log("James");
    }else if (x % 3 === 0) {
        console.log("Julia");
    }
    else {
        console.log(x);
    }
    // increment x at the end of each loop
    x = x + 1 ; 
}

// |----------------------------------------------------------------------------|