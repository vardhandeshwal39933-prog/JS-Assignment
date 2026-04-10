var num = Number(prompt());
var seed = Number(prompt());

var step = 0;

while (step < 3) {
    if (num % 2 == 0) {
        num = Math.floor(num / 2) + seed;
    } else {
        num = num * 3 - seed;
    }
    step++;
}

var ok = false;

if (num >= 100 && num <= 999) {
    var mid = parseInt(num.toString()[1]);
    if (mid === seed) ok = true;
}

if (ok) {
    alert("YES, " + num);
} else {
    alert("NO, " + num);
}
