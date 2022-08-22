//Ex1:

var shipments =
{
    'standard': {
        'leadTime': 7,
        'fee': 2
    },
    'express': {
        'leadTime': 3,
        'fee': 4.5
    }
};


document.getElementById("shipments").onchange = function () {

    var orderDate = new Date(); // current date
    console.log(orderDate.toString("YYYY-MM-DD"));

    var selectField = document.getElementById("shipments");
    var selectedOption = selectField.options.selectedIndex;
    var selectedValue = selectField.options[selectedOption];

    if (selectedValue == "standard") {
        document.getElementById("order_date").innerHTML = orderDate;

        var newDate = new Date();
        newDate.setDate(orderDate.getDate() + shipments.standard[0]);

        document.getElementById("delivery_date").innerHTML = newDate;
        document.getElementById("delivery_fee").innerHTML = (shipments.standard[1].toFixed(2)).toString();
    } else {
        document.getElementById("order_date").innerHTML = orderDate;

        var newDate = new Date();
        newDate.setDate(orderDate.getDate() + shipments.express[0]);

        document.getElementById("delivery_date").innerHTML = newDate;
        document.getElementById("delivery_fee").innerHTML = (shipments.express[1].toFixed(2)).toString();
    }


};