/*
 * Programming Quiz: Bank Accounts 1
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have an object `savingsAccount` 
 * - Your `savingsAccount` object should have the `balance` and `interestRatePercent` property
 * - Your `savingsAccount` object should have a `printAccountSummary()` method
 * - Your `printAccountSummary()` method should return the EXACT expected message.
  * - Be careful about the punctuation, spacing, and spelling of the printed message.
 */


const savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
    // your code goes here
    
    
    printAccountSummary: function() { return "Welcome!\nYour balance is currently $" + savingsAccount.balance + " and your interest rate is " + savingsAccount.interestRatePercent + "%."
}
}
savingsAccount.deposit(10000000)
savingsAccount.withdraw(10000990)
console.log(savingsAccount.printAccountSummary());

//|-----------------------------------------------------------------------|


/*
 * Programming Quiz: Facebook Friends
 */

/*
Directions:

Create an object called facebookProfile. The object should have 3 properties:

    your name
    the number of friends you have, and
    an array of messages you've posted (as strings) -- include at least two messages.

The object should also have 4 methods:

    postMessage(message) - adds a new message string to the array
    deleteMessage(index) - removes the message corresponding to the index provided
    addFriend() - increases the friend count by 1
    removeFriend() - decreases the friend count by 1
    
    
 * QUIZ REQUIREMENTS
 * - Your code should have an object `facebookProfile`
 * - The `facebookProfile` object should have the `name` (string), `friends` (number), and `messages` (array of strings) property
 * - Your `facebookProfile` object should have the `postMessage()`, `deleteMessage()`, `addFriend()` and `removeFriend()` method
 * - Carefully implement the desired functionality of each method, as decribed above
 */


// your code goes here
const facebookProfile = {
    name: "Shawn",
    friends: 10,
    messages: ["I am learning JavaScript","Oneday I will succeed"],
    postMessage: function(message){
        facebookProfile.messages.push(message);
    },
    deleteMessage: function(index){
        // In the following splice() method call,
        // - argument 1 = index from where the element has to be deleted
        // - argument 2 = count of elements to be deleted
        facebookProfile.messages.splice(index, 1);
    },
    addFriend: function(){
        facebookProfile.friends = facebookProfile.friends + 1;
        //friends += 1; // this statement is equivalent to the above
    },
    removeFriend: function(){
        if(facebookProfile.friends>0)
            facebookProfile.friends = facebookProfile.friends - 1;
    }
};
