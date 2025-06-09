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

