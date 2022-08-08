//Exercise 1
console.log("Exercise 1: This is ex1.js");

//*******************************************************
//Ex2:
var firstName = "Pedro";
var lastName = "Silva";
var yearOfBirth = 1989;
var age = 2022 - yearOfBirth;

var message = "Hi, my name is " + firstName + " " + lastName + ", I'm " + age.toString() + " years old and I'm learning Javascript!";

document.getElementById("student_message").innerHTML = message;

//*******************************************************
//Ex3:
var num1 = parseInt(document.getElementById("num_1").innerHTML);
var num2 = parseInt(document.getElementById("num_2").innerHTML);
var average = (num1 + num2) / 2;
document.getElementById("result").innerHTML = " " + average.toFixed(2);

//*******************************************************
//Ex4:
console.log("Exercise 4:");
var phone1 = "988866552";
var phone2 = "99087612366";
var phone3 = 876543123;

console.log(phone1.length == 9);
console.log(phone2.length == 9);
console.log(phone3.toString().length == 9);

/* if (phone1.length != 9) {
    console.log("Phone1 is Invalid!");
}
else {
    console.log("Phone1 is Valid!");
}

if (phone2.length != 9) {
    console.log("Phone2 is Invalid!");
}
else {
    console.log("Phone2 is Valid!");
}

if (phone3.toString().length != 9) {
    console.log("Phone3 is Invalid!");
}
else {
    console.log("Phone3 is Valid!");
}
 */
//*******************************************************
//Ex5:
console.log("Exercise 5:");
console.log("32^6 = " + Math.pow(32, 6).toString());
console.log("Another way 32 ** 6 = " + (32 ** 6).toString());


//*******************************************************
//Ex6:
console.log("Exercise 6:");
console.log("var typeof; - Invalid var because uses a reserved keyword...");
console.log("var first-name; - Invalid var because uses not allowed char '-'");
console.log("var 2ndAttempt; - Invalid var because starts with number");
console.log("var full name;  - Invalid var because uses white space");

//*******************************************************
//Ex7:
console.log("Exercise 7:");
var quantity = "25";
var number = 6;
var pressure;
var temperature = null;

console.log(quantity += quantity);
console.log("My Answer quantity: 2525");
console.log((7 + 5) / number + 2);
console.log("My Answer calculus: 4");
console.log(pressure);
console.log("My Answer pressure: undefined");
console.log(temperature);
console.log("My Answer tempreature: null");
console.log(typeof pressure);
console.log("My Answer typeof pressure: undefined");
console.log(typeof temperature);
console.log("My Answer typeof temperature: object");


//*******************************************************
//Ex8:

/* document.getElementById("url_2").innerHTML = "https://" + document.getElementById("url_1").innerHTML.trim();
document.getElementById("url_4").innerHTML = document.getElementById("url_3").innerHTML.replace("https://", ""); */

//OR

var url1 = "https://" + document.getElementById("url_1").innerHTML.trim();
document.getElementById("url_2").innerHTML = url1;

var url2 = (document.getElementById("url_3").innerHTML).replace("https://", "");
document.getElementById("url_4").innerHTML = url2;