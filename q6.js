var a = Number(prompt());
var b = Number(prompt());
var c = Number(prompt());

var marks = (3 * a) + b - (2 * c);

if (marks < 0) marks = 0;

var totalQ = a + b + c;

if (totalQ > 50) {
    marks = marks - 10;
}

var result;

if (marks >= 60) {
    result = "PASS";
} else {
    result = "FAIL";
}

alert(marks + ", " + result);
