/*
    Write a function that accepts a String as an argument

    The function should capitalize ONLY every other letter in the string

    The function should then return the converted String.
*/
// notes:
// letter == character
// start capitalizing at index 0

// use cases:
// "hello" => "HeLlO"
// "hEllo World" => "HeLlO WoRlD" (note that the function should convert the letter to lowercase if the letter at an odd index position is capitalized)
// "" => "" (empty input string should return empty output string)
// "Hi John" => "Hi jOhN"

//initialize
const inputString = "Hi John";
let convertedString = ""; //holds the result after capitalizing every other letter in the inputString

//function declaration
function capitalizeLetters(string) {
    //run loop on every letter in the string and check if the index is odd or even using Mod (%) operator
    for (let i = 0 ; i < string.length ; i++) {
        if (i % 2 == 0) {
            convertedString += string[i].toUpperCase();
        } else {
            convertedString += string[i].toLowerCase();
        }
    }
    //return result
    return convertedString;
}

//invoke function
console.log(capitalizeLetters(inputString));