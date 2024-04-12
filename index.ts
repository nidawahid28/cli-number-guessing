#! /usr/bin/env node

import inquirer from "inquirer";

const computerNumber = Math.floor(Math.random() * 10 + 1);
 

const result  = await inquirer.prompt([
    { 
        name: "numberGuessingGame",
        type: "number",
        message: "Please guess a number between 1-10: ",
    }
]);
if(result.numberGuessingGame === computerNumber) {
    console.log("Congtratulations! You guessed right number")
} else {
    console.log("Sorry, You guessed wrong number ")
}

