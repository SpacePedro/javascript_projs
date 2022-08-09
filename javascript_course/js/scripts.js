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

/* var student = {
    'firstName': 'Marie',
    'lastName': 'Smith',
    'fullName': function () {
        return this.firstName + " " + this.lastName;
    }
};
 */


//*************************************** */
//Lesson 16 - Events
//*************************************** */

/* document.getElementById("click-me").onclick = function () {
    alert("You clicked the button");
} */

/* document.getElementById("hover-me").onmouseover = function () {
    alert("You moved the cursor over me");
}

document.getElementById("leave-me").onmouseout = function () {
    alert("You moved the cursor out of me");
}

document.onkeydown = function (event) {
    if (event.keyCode == 65) {
        alert("You've just pressed the 'a' key");
    }
    else {
        console.log("You've just pressed a different key");
    }
};

function show_alert() {
    alert('You clicked the button!');
} */



//*************************************** */
//Lesson 17 - Events - CSS Manipulation
//*************************************** */

/* document.getElementById("color_button").onclick = function () {
    document.getElementById("color_button").style.backgroundColor = "purple";
    document.getElementById("color_button").style.transform = "translateX(100px)";
} */

/* document.getElementById("color_button").onclick = function () {
    this.style.backgroundColor = "purple";
    this.style.transform = "translateX(100px)";
} */

//var button = document.getElementById("color_button");

/* button.onclick = function () {
    button.style.backgroundColor = "purple";
    button.style.transform = "translateX(100px)";
} */

/* button.onmouseover = function () {
    button.style.backgroundColor = "purple";
    button.style.transform = "translateX(100px)";
} */



//*************************************** */
//Lesson 18 - Events - More getElements Methods
//*************************************** */


/* var elements = document.getElementsByClassName("example");
console.log(elements);
elements[0].innerHTML = "Changing the text of the first element"; */

/*
var elements = document.getElementsByTagName("p");
console.log(elements); */




//*************************************** */
//Lesson 19 - Loops - For and For/In loops
//*************************************** */

/* for (var a = 0; a < 5; a += 1) {
    console.log(a);
} */

/* var students = ['Peter', 'Mary', 'Joseph', 'John', 'Charles'];

for (var a = 0; a < students.length; a++) {
    console.log(students[a]);
} */


/* var car = {
    'Year': 2018,
    'Model': 'Evoke',
    'Manufacturer': 'Land Rover',
    'FuelType': 'Diesel'

}

for (var prop in car) {
    console.log(prop + ': ' + car[prop]);
} */

/* var elements = document.getElementsByClassName("example");

for (var a = 0; a < elements.length; a++) {
    elements[a].style.color = "orange";
    elements[a].style.fontWeight = "bold";
} */



//*************************************** */
//Lesson 20 - Loops - while and do/while loops
//*************************************** */

/*
var count = 0;

while (count < 5) {
    console.log(count);
    count++;
} */

/* var count = 10;
do {
    console.log(count);
    count++;
} while (count < 5);
 */


//*************************************** */
//Lesson 21 - Conditionals
//*************************************** */

/* var age = 18;

if (age < 18) {

    console.log('Underage');

} else if (age >= 65) {

    console.log('Senior');

}
else {
    console.log('Adult');
}


grade = 8;
absences = 3;
*/
// Solving the problem with && (and):
/* if (grade >= 7 && absences <= 5) {
    console.log("The student has been approved");
} else {
    console.log("The student has failed");
} */

// Solving the problem with || (or):
/* if (grade < 7 || absences > 5) {
    console.log("The student has failed");
} else {
    console.log("The student has been approved");
}

 */

/* var name = "Pedro";
var name2 = "";

var total = 0;

if (name) {
    console.log("The name is " + name);
} else {
    console.log("The name has not been informed");
}

if (total) {
    console.log("I sold something");
} else {
    console.log("I sold nothing");
}
 */
//ternary if
//console.log(name2 ? "The name is " + name2 : "The name has not been informed");


//var age = 28;

/* if (age < 18) {

    console.log('Underage');

} else if (age >= 65) {

    console.log('Senior');

}
else {
    console.log('Adult');
}
 */
//console.log(age < 18 ? 'Underage' : age >= 65 ? 'Senior' : 'Adult');





//*************************************** */
//Lesson 22 - Nested Loops and conditional
//*************************************** */

/* var isMember = false;
var age = 6;

if (isMember || age >= 65) {
    console.log('Free');
}
else {
    if (age < 18) {
        console.log('$ 6.00');
    } else {
        console.log('$ 12.00');
    }
}
 */

/* var employees = [

    {
        'name': 'Charles Silva',
        'age': 45,
        'children': ['Andrew Silva', 'Maria Silva']

    },

    {
        'name': 'Elizabeth Green',
        'age': 32,
        'children': ['Peter Green']

    },

    {
        'name': 'George Banks',
        'age': 39,
        'children': ['Philipp Banks', 'Rose Banks', 'Tara Banks']

    }

];

document.getElementById("children").innerHTML = "";

for (var a = 0; a < employees.length; a++) {
    var childrenList = employees[a].children;

    for (var b = 0; b < childrenList.length; b++) {
        var child = childrenList[b];
        document.getElementById("children").innerHTML += "<li>" + child + "</li>";
        console.log(child);
    }
}
 */



//*************************************** */
//Lesson 23 - Variable Scope
//*************************************** */
/* var personsName = 'John';

function create_name() {
    var personsName = 'Mary';
    console.log(personsName);
} 

//create_name();

 if (true) {
    var personsName = 'Mary';
    console.log(personsName);
}

console.log(personsName); 

for (var a = 0; a < 3; a++) {
    console.log('Parent loop: ', a);

    for (var b = 0; b < 3; b++) {
        console.log('Child loop: ', b);
    }
} */

/* function create_name() {
    myName = 'Mary';
    console.log(myName);
}

create_name();
console.log(myName); */