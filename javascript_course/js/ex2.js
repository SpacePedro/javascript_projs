//EX1:
function convert_celsius_to_Fahrenheit(celsius) {
    var fahrenheit = (9 * celsius / 5) + 32;
    return fahrenheit;

}

var celsius1 = parseFloat(document.getElementById("celsius_1").innerHTML);
document.getElementById("fahr_1").innerHTML = convert_celsius_to_Fahrenheit(celsius1);

var celsius2 = parseFloat(document.getElementById("celsius_2").innerHTML);
document.getElementById("fahr_2").innerHTML = convert_celsius_to_Fahrenheit(celsius2);

var celsius3 = parseFloat(document.getElementById("celsius_3").innerHTML);
document.getElementById("fahr_3").innerHTML = convert_celsius_to_Fahrenheit(celsius3);


//EX2:
var classification = ["John Hill", "Mary Jane", "Gary Vee", "Paricia Mills", "Helen Hall", "Paul Green"];


document.getElementById("best_students").innerHTML = classification.slice(-3,);

//EX3:

var course = {
    'title': "Learn to Code in Python 3",
    'categories': ['programming', 'technology', 'python'],
    '5_stars_reviews': 420,
    '4_stars_reviews': 80,
    '3_stars_reviews': 33,
    '2_stars_reviews': 20,
    '1_stars_reviews': 4,
    'total_reviews': function () {
        var total = this["5_stars_reviews"] + this["4_stars_reviews"] + this["3_stars_reviews"] + this["2_stars_reviews"] + this["1_stars_reviews"];
        return total;
    }
}

document.getElementById("course_title").innerHTML = course.title;
document.getElementById("main_category").innerHTML = course.categories[0];

var percentage = Math.round((course['5_stars_reviews'] / course.total_reviews() * 100));
document.getElementById("reviews_5_stars").innerHTML = percentage + '%';


//EX4:
var shoppingList = ["Milk", "Butter", "Juice", "Bread", "Beer", "Rice", "Potatoes", "Chocolate"];

var lastElement = shoppingList.pop();
shoppingList.unshift(lastElement);
shoppingList.push("Cheese");
shoppingList.push("Eggs");

console.log(shoppingList);

