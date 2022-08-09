//EX1:
function convert_celsius_to_Fahrenheit(celsius) {
    var fahrenheit = (9 * celsius / 5) + 32;
    return fahrenheit;

}

document.getElementById("convert").onclick = function () {
    var celsius = parseFloat(document.getElementById("temp_celsius").value);
    if (celsius || celsius == 0) {
        document.getElementById("temp_fahr").innerHTML = convert_celsius_to_Fahrenheit(celsius);
    }
    else {
        alert("The temparature informed is invalid");
    }
}


//EX2:
//document.getElementById("anos_copa").innerHTML = '';
/* for (var a = 2022; a <= 2050; a += 4) {
    document.getElementById("anos_copa").innerHTML += '<li>' + a + '</li>';
}
 */

//ou

var currentYear = 2022;
document.getElementById("anos_copa").innerHTML = "";
while (currentYear <= 2050) {
    document.getElementById("anos_copa").innerHTML += '<li>' + currentYear + '</li>';
    currentYear += 4;
}



//EX3:

document.getElementById("calculate").onclick = function () {
    //var message = "";
    //var grade1 = parseInt(document.getElementById("grade1").value);
    //var grade2 = parseInt(document.getElementById("grade2").value);
    //var absences = parseInt(document.getElementById("absences").value);

    /* if (grade1 && grade2 && absences || grade1 == 0 || grade2 == 0 || absences == 0) {
        var presences = parseFloat(absences / 20 * 100).toFixed(2);
        var average = parseFloat((grade1 + grade2) / 2).toFixed(1);

        message += 'presences: ' + presences.toString() + ' %<br />';
        message += 'average: ' + average.toString() + '<br />';

        if (presences >= 70 && average >= 6.5) {
            message += 'Approved!';
        }
        else {
            message += 'Failed, ';
            if (presences < 70 && average >= 6.5) {
                message += ' for absences(assiduity: ' + presences.toString() + ' %)';
            } else if (presences >= 70 && average < 6.5) {
                message += ' insufficient grade (' + average.toString() + ')';
            }
            else {
                message += ' for absences (assiduity: ' + presences.toString() + ' %), and insufficient grade (' + average.toString() + ')';
            }
        }
    }
    else {
        if (!grade1) {
            message += 'Need Grade 1!<br />';
        }

        if (!grade2) {
            message += 'Need Grade 2!<br />';
        }

        if (!absences) {
            message += 'Need absences number! <br />';
        }
    } */

    //document.getElementById("result").innerHTML = message;

    //OTHER SOLUTION:
    var grade1 = parseFloat(document.getElementById("grade1").value);
    var grade2 = parseFloat(document.getElementById("grade2").value);
    var absences = document.getElementById("absences").value;
    var totalClasses = 20;

    if (grade1 == "" || grade2 == "" || absences == "") {
        alert("All fields must be filled!");
    }
    else {
        var average = (grade1 + grade2) / 2;
        var presence = (totalClasses - absences) / totalClasses;

        var result;
        if (average < 6.5 && presence < 0.7) {
            result = "The student has failed because of insufficient grade and too many absences!"
        } else if (average < 6.5) {
            result = "The student has failed because of insufficient grade!"
        } else if (presence < 0.7) {
            result = "The student has failed because too many absences!"
        } else {
            result = "The student has been approved!"
        }
        document.getElementById("result").innerHTML = result;
    }


};


//EX4:
var sales = [
    {
        'student': 'Jason Gomes',
        'date': '10/06/2018',
        'amount': 34.99,
        'refundRequested': null

    },
    {
        'student': 'Carlos Blue',
        'date': '10/06/2018',
        'amount': 29.99,
        'refundRequested': null

    },
    {
        'student': 'Martin Heyes',
        'date': '11/06/2018',
        'amount': 39.99,
        'refundRequested': '13/06/2018'

    },
    {
        'student': 'Isabella Hopkins',
        'date': '11/06/2018',
        'amount': 29.99,
        'refundRequested': null

    },
    {
        'student': 'Andrew Walt',
        'date': '12/06/2018',
        'amount': 34.99,
        'refundRequested': null

    }
];


document.getElementById("course_sales").innerHTML = "";
var totalSales = 0.0;
for (var a = 0; a < sales.length; a++) {
    var sale = sales[a];

    if (!sale.refundRequested) {
        var line = "<tr>";
        line += "<td>" + sale.student + "</td>";
        line += "<td>" + sale.date + "</td>";
        line += "<td>" + sale.amount.toString() + "</td>";
        line += "</tr>";
        document.getElementById("course_sales").innerHTML += line;

        totalSales += sale.amount;
    }
}

document.getElementById("total_sold").innerHTML = totalSales;
