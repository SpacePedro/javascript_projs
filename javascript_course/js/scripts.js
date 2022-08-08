//alert("This ia an alert");


//this is a comment
/*
console.log("Statement 1");

This is a multiline comment

console.log("Statement 2");
*/
//Console.log("sdsd");   ---- case sensitive


//******************************************************************
//Lesson 4 - Working with the DOM
/* console.log(document.getElementById("blue_box").innerHTML);

document.getElementById("blue_box").innerHTML = "<h1>Testing</h1>";

console.log(document.getElementById("blue_box").innerHTML); */


//******************************************************************
//Lesson 5 - Variables

//var user_name = "Pedro Silva";

//console.log(user_name);

//document.getElementById("user_greeting_message").innerHTML = "Hello " + user_name + "!";

//******************************************************************
//Lesson 6 - data types Strings

//******************************************************************
//Lesson 7 - data types Numbers

/* var num1 = 20;
var num2 = 3;

var sum = num1 + num2;
var subtraction = num1 - num2;
var division = num1 / num2;
var multiplication = num1 * num2;

var average = (num1 + num2) / 2; */

//******************************************************************
//Lesson8 - Booleans

/* var orderValue = 2800;

if (orderValue >= 1000) {
    console.log("You are elligible to finance your order!")
}
else {
    console.log("Finance options are not available for orders below 1000$!")
} */



//FUNTIONS

/* function sum_numbers() {
    var num1 = 5;
    var num2 = 2;
    sum = num1 + num2;
    console.log(sum);
}

function sum_args(num1, num2) {
    sum = num1 + num2;
    return sum;
}

var average = sum_args(10, 25) / 2;
console.log(average.toString());

document.getElementById("sum_result").innerHTML = sum_args(-27, 55); */

/* var students = ["John", "Marry", "Paul"];

var courses = ["HTML", "Python", "PHP"];
 */

//OBJECTS

/* var employee = {
    'name': 'James Taylor',
    'yearOfBirth': 1948,
    'ID': 'SBJ0001',
    'role': 'IT Analyst'
};

employee.role = 'IT Manager';
employee.passport = 'KV098988';
 */
/* 
var courses = [
    {
        'title': 'Learn code in Python 3',
        'reviews': 6802,
        'students': 130129,
        'categories': ['programming', 'technology']
    },

    {
        'title': 'Learn PHP -  Beginner to Advanced',
        'reviews': 1204,
        'students': 30521,
        'categories': ['web development', 'programming']
    },

    {
        'title': 'Learn Microsoft Excel 2020',
        'reviews': 4209,
        'students': 18560,
        'categories': ['productivity', 'business']
    }

];
 */

//OBJECT -METHODS

var student = {
    'firstName': 'Marie',
    'lastName': 'Smith',
    'fullName': function () {
        return this.firstName + " " + this.lastName;
    }
};
