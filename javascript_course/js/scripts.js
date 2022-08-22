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




//*************************************** */
//Lesson 25 - Browser Object Model (BOM)
//*************************************** */

//var myName = "Tom";

/*
window.onmousemove = function (e) {
    //console.log(e.pageY);
    //console.log(e.pageX);

    if (e.pageY < 5) {
        alert("Don't miss our flash sale. Go to the products section for exclusive discounts.");
    }
} */



//*************************************** */
//Lesson 26 - Date and Time
//*************************************** */


//var dateObj = new Date(); //current date and time

//////////////////////////////////////////////////////////////////////
//Challenge: Calculating date intervals
//If a product is ordered on March 26, 2020 and delivered on April, 02, 2020, how many days does it take to be delivered?
/////////////////////////////////////////////////////////////////////////////////
/* var orderDate = new Date("Mar 26 2020");
var deliveryDate = new Date("Apr 02 2020");

var nrDays = Math.ceil((deliveryDate - orderDate) / 86400000);

document.getElementById("delivery_time").innerHTML = nrDays;

 */

//////////////////////////////////////////////////////////////////////
//Challenge: Calculating date intervals
//If a product is ordered on March 26, 2020 and takes 10 days to deliver the product, calculate the delivery date?
/////////////////////////////////////////////////////////////////////////////////
/* var orderDate = new Date("Mar 26 2020");

//console.log("Initial date: " + orderDate);
//console.log("Number of Days: " + orderDate / 86400000);

var deliveryDate = orderDate / 86400000);
console.log(Date(deliveryDate));

 */



//*************************************** */
//Lesson 27 - tIME mETHODS
//*************************************** */

/* console.log("Message 1");

window.setTimeout(function () {

    console.log("Message 2");

}, 3000);
 */

/* document.getElementById("show-loader").onclick = function () {
    document.getElementById("spinner-loader").style.display = "block";

    window.setTimeout(function () {
        document.getElementById("spinner-loader").style.display = "none";

    }, 2000);
}; */

/* var count = 0;

var timeInterval = window.setInterval(function () {
    console.log(count);
    count++;
    if (count >= 5) {
        window.clearInterval(timeInterval);
    }
}, 1000); */

//Exercise
/*
function add_leading_zero(number) {
    if (number < 10) {
        return "0" + number.toString();
    } else {
        return number.toString();
    }
};

window.setInterval(function () {
    var currentTime = new Date(); //current date and time

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    document.getElementById("hours").innerHTML = add_leading_zero(hours);
    document.getElementById("minutes").innerHTML = add_leading_zero(minutes);
    document.getElementById("seconds").innerHTML = add_leading_zero(seconds);

}, 1000); */



//*************************************** */
//Lesson 28 - Break and Continue
//*************************************** */

//Break
/*
var x = 0;

while (x < 10) {
    console.log(x);
    x++;

    if (x == 5) {
        break;
    }
}
 */

//continue

/* var num = 0;

while (num < 20) {
    num++;

    if (num % 2 != 0) {
        continue;
    }

    console.log(num);
} */


//*************************************** */
//Lesson 29 - Forms
//*************************************** */

/* document.getElementById("show_option").onclick = function () {
    var selectField = document.getElementById("options");
    var selectedOption = selectField.options.selectedIndex;
    var selectedValue = selectField.options[selectedOption];
    //console.log(selectedValue.value);
    //console.log(selectedValue.innerHTML);
    document.getElementById("selected_option").innerHTML = selectedValue.innerHTML;


     var selectedOption = document.getElementById("options").value;
    console.log(selectedOption);
};


document.getElementById("show_radio").onclick = function () {
    var radio = document.getElementsByName("gender");

    var radio_selected;
    for (var a = 0; a < radio.length; a++) {
        if (radio[a].checked) {
            radio_selected = radio[a];
            console.log(radio_selected.value);
            document.getElementById("selected_radio").innerHTML = radio_selected.value;
        }
    }


};


document.getElementById("show_check").onclick = function () {

    var check = document.getElementsByName("interest");

    document.getElementById("selected_check").innerHTML = "<ul>";

    for (var a = 0; a < check.length; a++) {
        if (check[a].checked) {
            document.getElementById("selected_check").innerHTML += "<li>" + check[a].value + "</li>";
        }
    }
    document.getElementById("selected_check").innerHTML += "</ul>";

};
 */




//*************************************** */
//Lesson 29 - The onchange event
//*************************************** */

/* document.getElementById("education_level").onchange = function () {

    var selectField = document.getElementById("education_level");
    var selectedOption = selectField.options.selectedIndex;
    var selectedValue = selectField.options[selectedOption];
    document.getElementById("selected_level").innerHTML = selectedValue.innerHTML;


};


var check = document.getElementsByName("meal");

for (var a = 0; a < check.length; a++) {

    check[a].onchange = function () {

        document.getElementById("selected_check").innerHTML = "<ul>";

        for (var b = 0; b < check.length; b++) {
            if (check[b].checked) {
                document.getElementById("selected_check").innerHTML += "<li>" + check[b].value + "</li>";
            }
        }

        document.getElementById("selected_check").innerHTML += "</ul>";
    };

} */