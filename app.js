// DECLARING VARIABLES (let cons t var)

// let x = 98;
// x = 50;
// console.log(x);

// const a = 90;
// const A = 90;
// // a = 87; Can not reassign a constant varaiable
// console.log(a);

//rules of namin Vars
// 1. var names must be logical
// const b = 908765432
// const accountNumber = 9087652542
// var can start with letters _ , can not start with numbers, %
// let myName = 'John'
// compound var - camelCasing (pascal casing) my_account_number
// let age = 90;
// let myAccountNumber = 927827267;


// //reserved keywords

// let myTime = "8AM";
// myTime = "9AM";
// console.log(myTime);
// // let let  = 'ade'
// var time = "9AM";
// var time = "10AM";
// console.log(time);
// const countryOfBirth = "Ghana";
// console.log(countryOfBirth);
// let currentLocation = "Ikeja";
// console.log(currentLocation);

// PRIMITIVE - strings, numbers, boolean, null, undefined
// <------- STRINGS --------->
// quotations  ''  " "

// const firstName = "Adam";
// const lastName = "Sandler";
// const middleName = "Owen";

// // console.log(typeof firstName, firstName);

// // string property length, join and string methods

// console.log(lastName.length);

// // string concatenation (join strings + )
// const fullName = firstName + " " + lastName + " " + middleName;
// console.log(fullName);
// console.log(fullName.length);

// // string METHODS- functions that can be performed on strings
// //formatting strings - toLowerCase, toUpperCase, trim, trimStart trimEnd

// console.log(fullName.toUpperCase());
// console.log(fullName.toLowerCase());
// const myName = "        wale        ";
// console.log(myName, myName.length);

// const result = myName.trim();
// console.log(result, result.length);

// //searh a string includes, indexOf, lastIndexOf
// const email = "adamowen@google.com";
// console.log(email.includes("@google"));

// // startsWith, endsWith
// console.log(email.startsWith("Adam"));
// console.log(email.endsWith("9"));

// console.log(email.indexOf("o"));
// console.log(email.lastIndexOf("o"));
// //replace and ReplaceAll
// console.log(email.replace("adamowen@google.com", "#"));
// console.log(email.replaceAll("o", "#"));

// // charAt (0)
// console.log(email.charAt("10"));

// console.log(email.concat(" is my email"));
// // console.log('my email is ' + email);
// // You can reah via email @ adamowen@google.com, i am always available

// // extracting portions of a string slice(start, end), substring substr(start, length)
// console.log(email);
// console.log(email.slice(2));
// console.log(email.substring(2));

// console.log(email.substr(0, 5));

// //COMPLEX  - OBJECTS (object, arrays)

// // <------ NUMBERS ----->
// const myAge = 65;
// console.log(typeof myAge);
// // math operators + - / *     ** %

// console.log(5 / 5);
// console.log(3 % 2);

// console.log(8.2 % 2);
// console.log(50 % 5);
// console.log(2 % 1);

// console.log(6 ** 2);

// // order of operation
// 7 * 5 + 4 * 2;
// // BEDMAS
// console.log((2 * 4) / 36 - 5 ** 2);

// let likes = 0;

// likes = likes + 1;
// // likes += 1;
// // likes = likes + 1;
// // likes += 1;
// // likes = likes - 1;
// likes++;
// likes--;
// likes++;
// likes++;

// // likes -= 1;

// let savings = 10000;
// savings = savings + 5000;
// savings = savings + 2000;
// savings = savings - 250;
// // savings = savings + 100000
// savings += 100000;
// savings -= 20000;
// // savings /= 2

////
//
//
//
//

// //template literals - allows us to format in variables insde of strings
// const country = "Finland";
// const population = 30000000;
// const language = "Finnish";

// // The country finland has a population of 30000000 and the language spoken is finnish

// const summary =
//   "The Country " +
//   country +
//   " has a population of " +
//   population +
//   " the language spoken is " +
//   language;
// // console.log(summary);

// //  n=backticks ` ${nameofVariable} `
// const summary2 = `The country ${country} has a population of ${population} and the language spoken is ${language} `;

// const author = "Ghost";
// const title = "Shadow demon";
// const year = 1997;

// // The book shadow demon was written by ghost in the yaer 1997
// const bookDescription = `The book ${title} was written by ${author} in the year ${year} `;

// // <------ BOOLEAN true false ------>
// // = ==
// // == loose equality operator ()
// // === strict eqality operator(care about data types)
// // comparison operators < > <= >= ==

// // console.log(6 == 5);
// // console.log("6" == 6);
// // console.log("6" === 6);

// // logical operators  and && or ||  not !
// // t and f
// // console.log(2 == 2 && 5 < 4);
// // console.log(0 === "0" && 7 > 6);
// // console.log(6 > 4 && 5 < 9);
// // console.log(6 < 5 || 4 > 3);

// // console.log("A" === "A");
// // console.log(5 != 5);

// // password is 7  username  is 5 == quam12 f or t
// // quam12 1234ab
// // password.length <7 && username.length < 5 -- please t

// //null and undefined

// let customer = null;
// // console.log(customer);

// // let age;

// // console.log(age);

// //NaN = not a Number
// // console.log(4 / "hello");

// // variables and rules naming them
// // strings, string properties(length, concatenation)
// // string methods(toUppercase, toLowerCase, trim, replace, replaceAll, concat, indexOf,
// //lastIndexOf, startsWith, endsWith, includes, charAt, slice, substring, substr)
// //nubers - operators, order of operations (bedmos)
// // template literals = ${nameof Var}
// // booleans true and false comparison and logical operators
// // null, undefined, NaN

// const user = "Kelvin001";
// const followers = 650;
// const following = 200;
// const impression = "25M+";

// // the user
// const monthlyActivity = The user ${user} has ${followers} followers and has a monthly impression of ${impression};

// // control flow -
// // console.log("a");
// // console.log("b");
// // console.log("c");

// //conditional statement - if if else else if switch
// //IF STATEMENT if(condition){block of code}
// if (false) {
//   console.log("yes it is");
// }

// if (true) {
//   console.log("HERE");
// }

// // min password length is 10

// // if (password.length < 10) {
// //   console.log("Minimum password length is 10");
// // }

// // if else  if(condition){block of code} else{another block of code}

// if (false) {
//   console.log("YES");
// } else {
//   console.log("NO");
// }

// const password = "78gkyyt2000";
// // 10 , thank for registering

// if (password.length < 10) {
//   console.log("Minimum password length is 10");
// } else {
//   console.log("Thank you for registering");
// }

// const tayosHeight = 56;
// const kelvinHeight = 56;

// // write an if else statment to determin who has the highr height
// // if tayo is taller than kelvin log Tayo is taller than kelvin to the console and
// //otherwise
// if (tayosHeight > kelvinHeight) {
//   console.log("Tayo is taller");
// } else if (kelvinHeight > tayosHeight) {
//   console.log("Kelvin is taller");
// } else {
//   console.log("They are the same height");
// }

// const age = 9;
// //  >= 18 adult , you are not  an adult

// if (age < 18) {
//   console.log("You are not an adult");
// } else {
//   console.log("You are an adult");
// }

// // if a num is negative or positive
// const num = 8;

// if (num > 0) {
//   console.log(`${num} is a POSTIVE number `);
// } else {
//   console.log(${num} is a NEGATIVE number);
// }
// //else if
// // postive, negative, zero

// if (num > 0) {
//   console.log(`${num} is a POSTIVE number `);
// } else if (num < 0) {
//   console.log(`${num} is a NEGATIVE number `);
// } else {
//   console.log("The Number is ZERO");
// }

// Mian club 18 and 60, children park < 18, polo club> 60, secrete club 100

// const userAge = -20;
// if ( userAge >= 18 && userAge <= 60) {
//    console.log("You belong in the main Club");
// } else if (userAge < 18 && userAge == 100) {
//    console.log("you belongs to the secret club");
// } else if (userAge > 60) {
//    console.log("You belings to the polo club");
// } else {
//    console.log("invalid age, try agan");
// }

// const valuation = 1000000;
// if (valuation <= 3000000 && valuation > 0) {
//   console.log("you are not elegible for a loan");
// } else if (valuation > 15000000) {
//   console.log("you are elegible for any amount between 15m - 30m");
// } else if (valuation > 6000000) {
//   console.log("You are eligible for a loan betwen 6m - 15m");
// } else if (valuation > 3000000) {
//   console.log("you are eligible for a loan between 3m - 5m");
// } else {
//   console.log("invalid amount, try again");
// }

////CODING CHALLENGE

//There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks 😉
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

// // Data 1
// const dolphinsScores1 = [96, 108, 89];
// const koalasScores1 = [88, 91, 110];

// // Data Bonus 1
// const dolphinsScores2 = [97, 112, 101];
// const koalasScores2 = [109, 95, 123];

// // Data Bonus 2
// const dolphinsScores3 = [97, 112, 101];
// const koalasScores3 = [109, 95, 106];

// const calcAverage = (scores) => {
//     const sum = scores.reduce((acc, cur) => acc + cur, 0);
//     return sum / scores.length;
// };

// const dolphinsAverage1 = calcAverage(dolphinsScores1);
// const koalasAverage1 = calcAverage(koalasScores1);

// const dolphinsAverage2 = calcAverage(dolphinsScores2);
// const koalasAverage2 = calcAverage(koalasScores2);

// const dolphinsAverage3 = calcAverage(dolphinsScores3);
// const koalasAverage3 = calcAverage(koalasScores3);

// const checkWinner = (dolphins, koalas) => {
//     if (dolphins >= koalas && dolphins >= 100) {
//         if (dolphins === koalas && dolphins >= 100) {
//             console.log("It's a draw!");
//         } else {
//             console.log("Dolphins win!");
//         }
//     } else if (koalas >= dolphins && koalas >= 100) {
//         console.log("Koalas win!");
//     } else {
//         console.log("No team wins!");
//     }
// };

// console.log("Data 1:");
// checkWinner(dolphinsAverage1, koalasAverage1);

// console.log("Data Bonus 1:");
// checkWinner(dolphinsAverage2, koalasAverage2);

// console.log("Data Bonus 2:");
// checkWinner(dolphinsAverage3, koalasAverage3);

// // A - Excellent score, B- Very Good

// const grade = "a";
// switch (grade) {
//   case "A":
//   case "a":
//     console.log("Excellent Score");
//     break;
//   case "B":
//     console.log("Very Good");
//     break;
//   case "C":
//     console.log("Good");
//     break;
//   case "D":
//     console.log("Fair");
//     break;
//   case "E":
//     console.log("Poor");
//     break;
//   case "F":
//     console.log("Fail");
//     break;
//   default:
//     console.log("Not a Valid Grade");
// }

// // arts science social science Technology Law

// // arts -- the deen is prof Fakunle and his office is at
// // arts
// const faculty = "Social Sciences";

// switch (faculty) {
//   case "Arts":
//   case "arts":
//     console.log("Your Deen is Prof. Ngozi and her office is on Floor 3");
//     break;
//   case "Law":
//   case "law":
//     console.log("Your deen is prof Bisi and her office is on floor 2");
//     break;
//   case "Sciences":
//   case "sciences":
//     console.log("Your deen is prof Usman and his office is on floor 2");
//     break;
//   default:
//     console.log("Invalid faculty, try again");
// }

// ternary operator - if else statement

// const yay = 45
// const nah = 65
// if (yay > nah) {
//   console.log ("The yah have it");
// } else {
//   console.log("The Nahs have it");
// }

// condition ? first action : second action
// yay > nah ? console.log("The yay have it") : console.log("The nahs have it");

// // Pass1234$
// // const usersPassword = "Pass1234$";
// // const loginPassword = prompt("Enter Your password : ");

// // usersPassword === loginPassword ? console.log("Login Successful") : console.log("Invalid credentials, try again");

// // password length is greater than 8 -- password is recommeneded
// // password is weak, so change it
// // hint do not use if else statment
// // loginPassword.length > 8
// //   ? console.log("Password is recommended")
// //   : console.log("The password is weak, chanfe it");

// //TYPE CONVERSION AND TYPE COERCION
// // const num1 = Number(prompt("enter first number: "));
// // const num2 = parseInt(prompt("enter second number: "));
// // console.log(num1 + num2);
// // '2' + '2' ='22' // 'hello' '67.9' 'why' /  56 NaN
// // Strings(valid) ---> numbers
// // Number , parseInt, parseFloat, +

// let str1 = "8";
// console.log(typeof str1);
// // const converted = Number(str1);
// // const converted = parseInt(str1);
// // const converted = parseFloat(str1);
// const converted = +str1;

// console.log(typeof converted, converted);

// const alert1 = Number("10000");
// const alert2 = parseInt("56000");
// const alert3 = +"7800";

// console.log(Your total fee is ${alert1 + alert2 + alert3});

// // 5000 + 5000 = 50005000
// // The total amount of transation
// // the total bill is value

// // Numbers to strings
// // 8 ---> '8'

// const num5 = 90;
// console.log(typeof num5);
// const converted2 = String(num5);
// console.log(typeof converted2);

// //COERCION - force
// console.log(5 + "5"); //0
// console.log(9 + "hello" * 98); //

// // BOOLEANS - true or false
// // TRUTHY AND FALSY VALUES
// // NUMBERS 0- falsy value, null, undefined
// //Strings -

// console.log(Boolean(""));

// // if (null) {
// //   console.log("yes");
// // }

//JAVASCRIPT MATH OBJECT

// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430
// Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// § Value X is between 50 and 300, if it's >= 50 && <= 300 😉

// const bill = 430;

// const tip = bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100);

// console.log(
//   `The bill was ${bill} The tip was ${tip} The total value was ${bill + tip}`
// );

// let num = 42;
// let str = "42";

// console.log(num == str); // true

// let num = 42;
// let str = "The answer is " + num;

//<-----FUNCTIONS-------> they are block of variables that can be reused

// // <------- FUNCTIONS- block of codes that can be resused ------>
// // function functionName (){block of code}
// // invoked or called functionName()
// const myName = "John Doe";
// // function welcomeUser() {
// //   console.log("Welcome User");
// // }

// // welcomeUser();
// // welcomeUser();
// //

// function logYear(year) {
//   console.log("The current year is " + year);
// }
// logYear(1990);

// //jane
// //paramaters - ensure that functions are resuable

// function welcomeUser(name = "user", age = 90) {
//   console.log(welcome ${name} and your age is ${age});
// }

// welcomeUser("ALex", 87);
// welcomeUser("Jane", 76);
// welcomeUser();
// // write a func that logs the description of user in this manner
// // my name is name and i currently stay at location
// // use two diffrent test cases

// // write a func that calculates the age of a user based on their year of birth
// // 2024 - year
// function calcAge(currentyear, yearofBirth) {
//   console.log(Your current age is ${currentyear - yearofBirth});
// }

// calcAge(2039, 1980);

// // number is positive negative or zero

// function testNumber(num) {
//   if (num > 0) {
//     console.log(${num} is a postive number);
//   } else if (num < 0) {
//     console.log(${num} is a negative number);
//   } else {
//     console.log("The number is zero");
//   }
// }
// testNumber(89);
// testNumber(-7);
// testNumber(0);

// // write a function to determine if a number is odd or even  num % 2 === 0
// function oddOrEven(num) {
//   if (num % 2 === 0) {
//     console.log(${num} is even);
//   } else {
//     console.log(${num} is odd);
//   }
// }
// oddOrEven(90);
// oddOrEven(25);
// oddOrEven(6);

// // return keyword in functions --- used to output a value from a func
// //anything after a return keyword in a block of code is inaccessible

// // squares evry number it has a parameter

// function squareNumbers(num) {
//   // console.log(num ** 2);
//   return num ** 2;
// }

// // write a func that is called 'describeCountry' that takes in 3 parameters
// // 'country', 'population' and "capitalCity". Based on this input, the function
// // returns a string with this format : "Nigeria has 6 million people and"
// // its capital city is Abuja'
// // call this function twice with input data
// // store the returned values in variables and log them to the console.

// function describeCountry(country, population, capitalCity) {
//   return ${country} has ${population} million people and the capital city is ${capitalCity};
// }

// const portugal = describeCountry("Portugal", 90, "Lisbon");
// const italy = describeCountry("Italy", 45, "Rome");

// console.log(portugal);

// // Write a function called calcBMI that takes in 2 parameters height, weight. based on this,
// //the func returns
// // a string with this format : 'The height is h and the weight is w, so the BMI is Bmi'
// // call this func twice with differsnt data, then store the returned value in variables
// // and log to the console
// // bmi = weight / (height ** 2)

// const calcBMI = function (height, weight) {
//   const bmi = weight / height ** 2;
//   return The height is ${height} and the weight is ${weight}, so the BMI is ${bmi};
// };

// const test1 = calcBMI(1.6, 60);
// const test2 = calcBMI(1.8, 72);
// console.log(test1, test2);

// //FUNCTION EXPRESSIONS

// const speak = function (name) {
//   console.log("hello " + name);
// };

// speak();

// //hositing - js takes all fun declariotn it takes to the top of page

// greeting();
// //function delation
// function greeting() {
//   console.log("I am greeting");
// }
// //function expression
// const greeting2 = function () {
//   console.log(" I am also greeting");
// };
// greeting2();

// //arrow functions more modern way
// const myLogger = (a, b, c) => {
//   return a * b * c
// }

//<-----FUNCTIONS-------> they are block of variables that can be reused

// <------- FUNCTIONS- block of codes that can be resused ------>
// function functionName (){block of code}
// invoked or called functionName()
//const myName = "John Doe";
// function welcomeUser() {
//   console.log("Welcome User");
// }

// welcomeUser();
// welcomeUser();
//

//function logYear(year) {
// console.log("The current year is " + year);

//logYear(1990);



// Assignment

// 1. Create a function that takes a number as a parameter, and returns the next number after the number passed e.g i pass in 10 it return 11

// function nextNumber(number) {
//   return number + 1;
// }

//convert to an arrow function
// console.log(nextNumber(10));

// Convert Age to days
//Create a function that takes in age in years and returns the age in days. Note use 365days as the length of the year for this, Also expect only positive integers, negative integers should return an error

// function ageInDays(ageInYears) {
//   if (ageInYears <= 0) {
//     return "Error: Age must be a Positive integer";
//   } else {
//     return ageInYears * 365;
//   }
// }



// console.log(ageInDays(20));

// console.log(ageInDays(40));

// console.log(ageInDays(-5));

// Less than 100
//Given two numbers return true if the sum(addition) of both numbers  is less than 100, otherwise false

// function numLessThan100(num1, num2) {
//   return num1 + num2 < 100;
// }
//convert to an arrow function


// console.log(numLessThan100(30, 10));

// console.log(numLessThan100(70, 60));

// Create a function that takes the numbers of wins, draws, and losses and calculates the number of points a football team has. A win gets 3 points, a draw gets 1 point and a loss gets 0

// function calculatePoints(wins, draws, losses) {
//   return wins * 3 + draws * 1 + losses * 0;
// }
//arrow func
// const wins = 5;
// const draws = 3;
// const losses = 2;
// const totalPoints = calculatePoints(wins, draws, losses);
// console.log("Total points:", totalPoints);


//
//
//
//


//loops and recursion - for, while, do..while loop

// for (initializer; condition; increment ){ block of code }

// for (let i = 0; i < 10; i++) {
//   console.log("The current value of i is : " + i);
// }

// // program that calculates the sum of natural numbers 1 -100
// let sum = 0;
// for (i = 1; i <= 100; i++) {
//   sum += i;
// }
// console.log(sum);

// let x = 0;
// while (x < 5) {
//   console.log(x);
//   x++;
// }

//do.. while -- will run at least once

// let y = 2;
// do {
//   console.log("The value of Y is " + y);
//   y++;
// } while (y < 1);

//complex Data types - ARRAYS, OBJECTS


// <-------ARRAYS------->

// const students = ["Kelvin", "Yomi", "Felix", "Tonia"];
// console.log(students);
// //arrays properties - length
// console.log(students.length);
// console.log(students[2]);

// //change element in an array
//  students[0] = "Ade";
//  students[4] = "Tobi";
// console.log(students);

// // // //ARRAY METHODS - adding push --end, unshift -- add from the start
// students.push("Tayo"); 
// students.push("Christian"); 
// students.unshift("Sylvia"); 
// console.log(students);
// //removing elements from array pop shift
// students.pop();
// console.log(students.pop());
// students.shift();
// console.log(students);

// // more array methods inludes
// console.log(students.includes("Tonia"));
// // console.log(students.reverse());
// const newStudents = students.concat(["Samuel", "Pelumi"]);
// console.log(students.indexOf("Tonia"));

// // // slice,
// console.log(newStudents.slice(0, 2));
// console.log(newStudents.join("+"));
// console.log(students.toString());



//higher array methods -map, sort,  forEach filter, find, reduce
// const cars = ["Toyota", "BMW", "Benz", "Ford", "Mazda"];
// console.log(cars.sort());

// const points = [40, 100, 1, 5, 10, 25];
//  console.log(points.sort());

// const arranged = points.sort((a, b) => a - b);
// console.log(arranged);

// //MAP AND FOREACH
// cars.forEach((car, index) => {
//   console.log(index, "I own a " + car);
// });

// //MAP - iterates over elements in an array and returns a new array
// points.map((point, index) => {
//   console.log(point, index);
// });

// let balance = 80000;
// const transactions = [3000, 45000, -525, -10000, 32000];
// transactions.push(5000)
// transactions.push (4500);
// transactions.pop();


// //transactions.map((transactions) => {
  
// transactions.map((transaction) => {
//     if (transaction > 0) {
//       console.log(`you have a credit of ${transaction} Naira`);
//   } else {
//     console.log(`you have a debit of ${transaction} Naira`);
//   }
//     return (balance += transaction);
//   });
//   console.log(`the current balance is ${balance}`);
  
//   // filter return every elements that fits a search condition
//   const yourCredits = transactions.filter((transaction) => transaction > 0);
//   console.log(yourCredits);
//   const yourDebits = transactions.filter((transaction) => transaction < 0);
//   console.log(yourDebits);
//    transactions.push(2000000);

//    const fraudAlert  =transactions.find((transaction) => 2000000);
//    console.log(fraudAlert);
//    if (fraudAlert); {
//     console.log("Suspend account");
//    }
  
//   const tests = ["Wale", "Ade", "Bayonle", "Ngozi"];
//   const result = tests.filter((test) => tests.length >= 4);
//   console.log(result);
  
//   // find: returns the first element that fits a search condtion
//   const result2 = tests.filter((test) => tests.length >= 5);
//   console.log(result2);




  // declare a users array with 5 string elements // check the length

// declare another array users2 with 2 elements // check if the first element in the users array and the second element in the

//users2 array are equal using ternary operator // change the first elements in the two arrrays to another value

// loop over the users array using the forEach and log to the //console in this format The current user is ken

// filter the users array and return only elements that the length is more than five // log to the console the reversed filtered array

// class work
// const users1 = ["Goerge", "kelvin", "Ifeanyi", "Adams", "Tayo", "Madrid" ];
// console.log(users1.length);

// const users2 = ["kelvin", "Ifeanyi"];
// console.log(users2.length);
// users1 == users2 ? console.log("true") : console.log("false");  

// users1.push("Kelvin");
// console.log(users1);
// users2.push("Ifeanyi");
// console.log(users2);

// users1.forEach ((users1, index) => {
// console.log(`the current user is : ${users1}`)
// });

// const filteredusers = users1.filter((user1) => user1.length > 5 );
// console.log(filteredusers);

// console.log(users1.reverse());



//reduce in an ARRAY

// const cartPrices = [4000, 3200, 560, 10000];
// const vat =345;

// const total = cartPrices.reduce((Prev,Curr) => {
//   return Prev + Curr;
// }, vat);
// console.log(total) ;

// //ARRAY DESTURCTURING

// const customers = ["jax BRiggs", "Liu Kang", "King Lao","Raiden","Kotal Kahn",];

// console.log(customers);
// const [,,, third] = customers;
// console.log(third);


// //rest...LHS
// //spread ... RHS

// const[,first, ...others] = customers ;
// console.log(others);
// const[...players] = customers;
// console.log(players);

// const developingCountries = ["Nigeria", "Brazil","Ghana","Togo","Iraq"];
// const developedCountries = ["USA","Germany","UK", "switzerland" ];

// const newCountries = [
//   "Afghanistan",
//   ...developedCountries,
//   "Norway",
//   ...developingCountries,
//   "Protugal"
// ];


//array Methods
// declare a veriables called balance set to any number value

// let balance = 3000;


// //creat transactions array consisting of at least 4 credit and 3 debit alerts

// const transactions = [4000, 5000, 10000, 70000, -2000, -76400, -4000,]

// //at some point, a new transaction of 5000 credit was don add it to the end of the transaction array

// transactions.push(5000)
// //debit 50000
//  transactions.pop()


// // genegrate a simple statment account; for every debit and amount has been debited 
// //for credit, amount has been credited


// // transations.map((transactions) => {
  
//    transactions.map((transaction) => {
//       if (transaction > 0) {
//       console.log(`you have a credit of ${transaction} 70000`);
//    } else {
//       console.log(`you have a debit of ${transaction} 2000`);
//     }
//       return (balance += transaction);
//    });
//     console.log(`the current balance is ${balance}`);
    
    
//     //8500
//     const checkAmount = transactions.includes (8500);
//     if (checkAmount) {

//     } else {
//       console.log("NO such amount in your transaction history");
//     };
          

//                //filter
//       const yourCredits = transactions.filter((transaction) => transaction > 0);
//       console.log(yourCredits);
//      const yourDebits = transactions.filter((transaction) => transaction < 0);
//      console.log(yourDebits);

       
//      //claculate the available nalamce for this user using the reduce method 
//       const availableBalance = transactions.reduce((Prev,Curr) => {
//       return Prev + Curr;
//       }, balance);
//       console.log(availableBalance) ;



//      // loan amount must be <= avaibleBalance *2

//      const checkLoanEligibility = (amount) => { 
//        if (amount <= availableBalance * 2) {
//         console.log ('Yes you are eligible for the loan');
//        } else {
//         console.log("You are not eligile for the loan");
//        }
//      };

//      checkLoanEligibility (5000);
//      checkLoanEligibility (10000);
//      checkLoanEligibility (3000);

// //online transaction
//  //write a function to check the tranferstatus of an amount
//  // amount <= avaiblebalance

//  function transferAmount(amount) {
//    amount <= availableBalance ? console.log("transaction successful") : console.log ("insufficientt funds");
//   }

//  transferAmount(4000);
//  transferAmount(1000);
//  transferAmount(3000);


// //depositAmount --- if depisimount is > limit log ('account rstricted)

// const limit = 20000

// function depositAmount(amount) {
//   amount > limit ? console.log("Account Restricted") : console.log("Deposit successful");
// }

// depositAmount(60000);
// depositAmount(56000);



// OBJECTS
// const person = ["John", "doe", 76, "Developer", "Google", "Seattle", true];

//key: value,
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 45,
//   job: "Backend Engineer",
//   location: "Athens",
//   isMarried: true,
//   friends: ["Peter", "Jane", "Mario"],
//   previousWork: {
//     google: {
//       role: "Software tester",
//       duration: "5 years",
//     },
//     microsoft: {
//       role: "Junior Backend Dev",
//       duration: "6 years",
//     },
//   },
// };

// console.log(person.previousWork.google.role);

// //access properties inside of an object
// // dot notation objName.propertyName , bracket notation objName['propertyName']

// console.log(person.age);
// console.log(person["age"]);
// console.log(person.location.toUpperCase());
// console.log(person["lastName"].toUpperCase());
// console.log(person.friends[0]);

// //add properties to an object

// person.nickName = "Johnny";
// person.canDrive = false;
// console.log(person);

// person.previousWork.konga = {
//   role: "Intern",
//   duration: "6 months",
// };

// // remove property from an object delete

// delete person.age;
// delete person.previousWork.konga;
// console.log(person);

// const book = {
//   title: "Demon Slayer",
//   author: "Ghost Damon",
//   yearPublished: 1995,
//   rating: 4.2,
//   amount: 4.56,
//   similarBooks: [
//     {
//       id: 1,
//       title: "In the Den",
//     },
//     {
//       id: 2,
//       title: "Jungle kids",
//     },
//   ],
//   publisher: "Oxford",
//   description: function () {
//     console.log(
//       `The Book ${this.title} is rated ${this.rating} is written by ${this.author}`
//     );
//   },
//   purchaseBook: function () {
//     console.log(this.amount, this.rating);
//   },
// };

// book.similarauthors = ["John", "Peter", "Mark"];
// book.similarBooks[1].id;

// book.description();
// book.purchaseBook();


// //object methods - functions that are written to act on the obj
// //Object destructuring - allows to pick multiple properties from an object

// const car = {
//   brand: "Benz",
//   numOfDoors: 4,
//   horsePower: "4.5hp",
//   color: "Black",
//   type: "Sedan",
//   similarBrands: {
//     porche: {
//       color1: "black",
//     },
//     bugatti: {
//       color2: "red",
//     },
//   },
// };

// const {brand, numOfDoors, type, color, similarBrands: {porche: {color1},},} = car
// console.log(brand,type)


// //keys. Values
// //object.keys(objectName)

// console.log(Object.keys(car));

// console.log(Object.values(car));

// console.log(Object.entries(car));


// /////
// const students = [
//   {
//     fullName: "Quam IDK",
//     age: 65,
//     role: "Frontend engineer",
//   },
//   {
//     fullName: "Felix Muoka",
//     age: 34,
//     role: "Backend engineer",
//   },
//   {
//     fullName: "Yomi Brown",
//     age: 18,
//     role: "Fullstack engineer",
//   },
//   {
//     fullName: "Kelvin Bassey",
//     age: 22,
//     role: "Product Manager",
//   },
//   {
//     fullName: "Tonia Ezinne",
//     age: 33,
//     role: "Technical writer",
//   },
// ];
// console.log(students);

// console.log(`Number of students is ${students.length}`);

// students.map((student) => {
//   console.log(student.fullName);
// });

// // have a list of the engineers
// const engineers = students.filter((student) =>
//   student.role.includes("engineer")
// );
// console.log(engineers);

// // older than > 30

// const olderStudent = students.filter((students) => students.age >30);
// console.log (olderStudent);

// //list of student < 30

// const Youngstudent = students.filter((students) => students.age < 30);
// console.log(Youngstudent)

// ///
// ////////////;;;;//const studentsRole = students

// students.map((student) => {
//   console.log(student.role);
// });




// const shoppingCart = [
//    {
//     id: 1,
//     item: "Black Hoodie",
//   price: 15000,
//    },
//    {
//     id: 2,
//     item: "Jean",
//     price: 24000,
//    },
//    {
//     id: 3,
//     item: "Sweatshirt",
//     price: 12000,
//    },
//    {
//     id: 4,
//    item: "Cap",
//    price: 7000,
//    },
// ];

// //1. display all of the items and the price in the console
// shoppingCart.map ((cartItem) => {
//   const {item, price} = cartItem;
//   console.log(item, price);
// });


// ///calculate the total price use reduce
// const totalPrice = shoppingCart. reduce((prev, current) => {
//   return prev + current.price
// },0);

// console.log(totalPrice);    



// build a simple ATM machine
// creat a customer that has two properties - pin and balance
// build a simple ATM machine
// creat a customer that has two properties - pin and balance
// const customer = {
//   pin: "1234",
//   balance: 20000,
//   checkBalance: function (pinEntered) {
//     if (pinEntered === this.pin) {
//       console.log(`Your Account balance is ${this.balance}`);
//     } else {
//       console.log("Incorrect Pin");
//     }
//   },
//   withdraw: function (pinEntered, amount) {
//     if (pinEntered === this.pin) {
//       if (amount <= this.balance) {
//         this.balance -= amount;
//         console.log(
//           `You have withdrawn ${amount}. Your new balance is ${this.balance}`
//         );
//       } else {
//         console.log("Insufficient funds");
//       }
//     } else {
//       console.log("Incorrect pin");
//     }
//   },
//   deposit: function (pinEntered, amount) {
//     if (pinEntered === this.pin) {
//       if (amount > 0) {
//         this.balance += amount;
//         console.log(
//           `You have Deposited ${amount}. Your new balance is ${this.balance}`
//         );
//       } else {
//         console.log("Invalid Deposit Amount");
//       }
//     } else {
//       console.log("Incorrect pin");
//     }
//   },
// };

// customer.checkBalance("14567");
// customer.withdraw("1234", 4000);
// customer.deposit("1234", 25000);
// customer.withdraw("1234", 1000);
// customer.withdraw("1234", 45000);
// ///write a function called checkblance that checks if the pin entered is the same as the 
// //withdrawn
// //deposit - check the pin,



// //---------------<ASYNCHRONOUS>>----------------------

// ASYNCHRONOUS JAVASCRIPT---- it allows block of codes to load in the background while other things appear as they are ready
// console.log(1);
// console.log(2);

// setTimeout(() => {
//   console.log(3);
// }, 3000);

// console.log(4);
// console.log(5);



// //---fetching data from an API - Application programming interface
// // ---Method of interacting with API 
// //-- http request method - GET POST PATCH DELETE

// //locations (map, real life location)
// //customers details
// //restaurants details (real time food)
// //payment - process

// //dummy data
// // fetch request

// const apiLink = "https://jsonplaceholder.typicode.com/users";
// //fetch

// const getData = async (url) => {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// getData(apiLink);
// getData ("https://fakestoreapi.com/products");
// // fetch , convert to json

// //local storage- setItem, getitem, clear, removeItem
// localStorage.setItem("theme","dark-theme");
// localStorage.setItem("isLoggedIn",true);

// const isUserLoggedIn = localStorage.getItem("isLoggedIn");
// console.log(isUserLoggedIn);
// localStorage.removeItem("IsLoggedIn");
// localStorage.clear();

//GLOBAL AND LOCAL SCOPED VARIABLES
// const manager = "john";
// console.log(manager + "Global");
// function checkManager() {
//   const branchManager = "Susan";
//   const manager = "ADE";
//   console.log(branchManager);
//   console.log(manager);
// };

// checkManager();

// if (true) {
//   const A = 9;
//   console.log(A);
// };

//console.log(A);






