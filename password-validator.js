/*
Task
Write a program to prompt the user for a password. The password should meet all
these requirements:
● The password must be at least 8 characters long.
● The password must contain at least one uppercase letter.
● The password must contain at least one number.
● If the password does not meet all the requirements, the program should
keep asking the user for a new password until they provide a valid one
Your application should:
● Use readlineSync.question() to prompt a user for input.
● Prompt a user to enter a password.
● Loop through the password to ensure that it meets the password
requirements, using the appropriate iteration statement(s) to do so. Make
sure you consider how iteration affects top-to-bottom execution of your code
and when a while or do-while loop would be more appropriate.
● Return one of the following statements:
○ If the password meets the requirements, a statement to let the user
know they have been successful
○ If the password does NOT meet the requirements, a statement to let
the user know their password does not meet the requirements
*/

const readline = require("readline-sync");
const message = "Password does NOT meet the requirements";
const isEightCharMessage = `
● The password must be at least 8 characters long.`;
const hasNumberMessage = `
● The password must contain at least one number.`;
const hasUpperMessage = `
● The password must contain at least one uppercase letter.`;

let hasEightChar;
let hasUpper;
let hasNumber;

do {
  hasEightChar = false;
  hasUpper = false;
  hasNumber = false;

  let userPassword = readline.question("Please enter a password: ");

  if (userPassword.length < 8) {
    hasEightChar;
    console.log(
      message + isEightCharMessage + hasNumberMessage + hasUpperMessage
    );
  } else {
    hasEightChar = true;

    for (let char of userPassword)
      if (
        char === char.toUpperCase() &&
        char.toLowerCase() !== char.toUpperCase()
      ) {
        hasUpper = true;
      } else if (Number.isFinite(Number(char))) {
        hasNumber = true;
      }

    if (!hasNumber && hasUpper) {
      console.log(message + hasNumberMessage);
    } else if (hasNumber && !hasUpper) {
      console.log(message + hasUpperMessage);
    }
  }
  // console.log(hasEightChar, hasUpper, hasNumber); //USE TO VERIFY THE BOOLEAN STATE
} while (!(hasEightChar && hasUpper && hasNumber));

console.log("WELCOME!!! Password is successfuly entered");
