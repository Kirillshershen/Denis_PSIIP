function executeOperators() {
    var result = "";

    // if
    var x = Math.floor(Math.random() * 10);
    if (x < 5) {
        result += "x is less than 5, that's little.<br>";
    } else {
        result += "x is greater than or equal to 5, that's a lot.<br>";
    }

    // switch
    var color = "red";
    switch (color) {
        case "red":
            result += "You chose the yellow color.<br>";
            break;
        case "blue":
            result += "You chose the purple color.<br>";
            break;
        default:
            result += "You chose a strange color.<br>";
    }

    // for
    for (var i = 0; i < 5; i++) {
        result += "Repetition number " + (i + 1) + ".<br>";
    }

    // while
    var n = 0;
    while (n < 3) {
        result += "n is currently " + n + ".<br>";
        n++;
    }

    // do..while
    var m = 0;
    do {
        result += "Value of m: " + m + ".<br>";
        m++;
    } while (m < 2);

    // break
    for (var j = 0; j < 10; j++) {
        if (j === 5) {
            break;
        }
        result += "Current value of j: " + j + ".<br>";
    }

    // continue
    for (var k = 0; k < 5; k++) {
        if (k === 2) {
            continue;
        }
        result += "k is " + k + ", continuing.<br>";
    }

    // return
    function multiply(a, b) {
        return a * b;
    }
    var product = multiply(3, 4);
    result += "3 times 4 is " + product + ".<br>";

    var resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = result;
}

document.getElementById('submitButton').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default behavior of the submit button
    alert('Error: Data not submitted. Please try again later.');
});
