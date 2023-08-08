/*
Problem Statement: Assume s is a string of lower case characters.

Write a program that counts up the number of vowels contained in the string s. Valid vowels are: 'a', 'e', 'i', 'o', and 'u'. For example, if s = 'azcbobobegghakl', your program should print:

Number of vowels: 5
*/

//there are many ways to solve this problem but I will be solving it using two methods only
//Method#1: use for loop
//Method#2: use regex which is the shortest method

//Method#1: uses for loop and charAt() to inspect each character of the string s
//initialize
let s = "azcbobobegghakl";
let vowelCounter = 0;

//function declaration
function countVowels(inputString) {
    //run a for loop to check each character in string s
    for (let i = 0 ; i < inputString.length ; i++) {
        // //Method#1a: use charAt() to check each character is a vowel or not
        // if (inputString.charAt(i) == "a" || inputString.charAt(i) == "e" || inputString.charAt(i) == "i" || inputString.charAt(i) == "o" || inputString.charAt(i) == "u") {
        //     //increase the counter since character is a vowel
        //     vowelCounter = vowelCounter + 1;
        // }
        //Method#1b: use inputString as an array
        if (inputString[i] == "a" || inputString[i] == "e" || inputString[i] == "i" || inputString[i] == "o" || inputString[i] == "u") {
            //increase the counter since character element at position i is a vowel
            vowelCounter = vowelCounter + 1;
        }
    }
    //return the result
    return "Number of vowels: " + vowelCounter;
}

//invoke function
console.log(countVowels(s));

//Method#2: uses regex which is the shortest method
function countVowels(inputString) {
    //use match() and length functions combined to count the vowels
    vowelCounter = inputString.match(/[aeiou]/gi).length;
    return "Number of vowels: " + vowelCounter;
}

console.log(countVowels(s));