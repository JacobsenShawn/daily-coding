//  * Programming Quiz: Murder Mystery
//     Starter Code

// * QUIZ REQUIREMENTS
//  * 1. Your code should have four variables - `room`, `suspect`, `weapon`, and `solved`
//  * 2. Your code should include a conditional statement
//  * 3. The variable `suspect` should use one of the provided values
//  * 4. The variable `weapon` should be based on the `room` ???????
//  * 5. Your code should produce the expected output when the case is solved:
//  __________ did it in the __________ with the __________!
//  * Example: Mr. Parkes did it in the dining room with the knife!


// /* ****************************************** */
// /* TESTING LOGIC */ 
// // Change the value of `room` and `suspect` to test your code

// const room = "billiards room";
// const suspect = "Mr. Parkes"; 

// /* ****************************************** */

// /* IMPLEMENTATION LOGIC*/

// // Initial values
// let weapon = "";
// let solved = false;

// * To help solve this mystery, write a combination of conditional statements that:
// * 1. sets the value of weapon based on the room and
// * 2. sets the value of solved to true if the value of room matches the suspect's room

// if (/* your conditional goes here */) {  
// } else if (/* your conditional goes here */) { 
// } else if (/* your conditional goes here */) {
// } else {
    
// // The code below will run only when `solved` is true
// if (solved) {
// 	console.log(/* your message goes here*/);
// } else {
//   console.log("The case is not solved!")
// }
// /* ****************************************** */



// // Worked  - Case Not solved (to solve change room)
// // Example input - you can change these to test different scenarios
// let room = "billiards room"; // e.g., "dining room", "gallery", etc.
// let suspect = "Ms. Van Cleve"; // e.g., "Mr. Parkes", "Mrs. Sparr", etc.

// let weapon = "";
// let solved = false;

// // Assign weapon based on the room
// if (room === "ballroom") {
//   weapon = "poison";
// } else if (room === "gallery") {
//   weapon = "trophy";
// } else if (room === "billiards room") {
//   weapon = "pool stick";
// } else if (room === "dining room") {
//   weapon = "knife";
// }

// // Check if the suspect was in that room
// if (suspect === "Mr. Parkes" && room === "dining room") {
//   solved = true;
// } else if (suspect === "Ms. Van Cleve" && room === "gallery") {
//   solved = true;
// } else if (suspect === "Mrs. Sparr" && room === "billiards room") {
//   solved = true;
// } else if (suspect === "Mr. Kalehoff" && room === "ballroom") {
//   solved = true;
// }

// // Output the result
// if (solved) {
//   console.log(`${suspect} did it in the ${room} with the ${weapon}!`);
// } else {
//   console.log("The case is not solved!");
// }


// // Worked  - Solved one way 
// // Example input - you can change these to test different scenarios
// let room = "billiards room"; // e.g., "dining room", "gallery", etc.
// let suspect = "Ms. Van Cleve"; // e.g., "Mr. Parkes", "Mrs. Sparr", etc.

// let weapon = "";
// let solved = false;

// // Assign weapon based on the room
// if (room === "gallery") {       *** Changed to gallery ***
//   weapon = "poison";
// } else if (room === "gallery") {
//   weapon = "trophy";
// } else if (room === "billiards room") {
//   weapon = "pool stick";
// } else if (room === "dining room") {
//   weapon = "knife";
// }

// // Check if the suspect was in that room
// if (suspect === "Mr. Parkes" && room === "dining room") {
//   solved = true;
// } else if (suspect === "Ms. Van Cleve" && room === "gallery") {
//   solved = true;
// } else if (suspect === "Mrs. Sparr" && room === "billiards room") {
//   solved = true;
// } else if (suspect === "Mr. Kalehoff" && room === "ballroom") {
//   solved = true;
// }

// // Output the result
// if (solved) {
//   console.log(`${suspect} did it in the ${room} with the ${weapon}!`);
// } else {
//   console.log("The case is not solved!");
// }