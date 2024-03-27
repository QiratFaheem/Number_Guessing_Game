#! /usr/bin/env node
import { match } from "assert";
import inquirer from "inquirer";

console.log("\n\tWelcome to CLI-Number Guessing Game\n")
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([

{
    name: "userGuessNumber",
    type: "number",
    message: "Enter your guess number (Number Limit from 1 to 5):",
},
]);
    
    if(answer.userGuessNumber === randomNumber ){
console.log("Congratulation ! You guess a correct number.");
}
else{
    console.log("Sorry, You guess a wrong number.");

}