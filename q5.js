var target = Number(prompt());
var seed = Number(prompt());

var avoid = seed + 2;

var i = 1;
var total = 0;

while (true) {
    if (i % avoid != 0) {
        total += i;
    }

    if (total >= target) {
        alert(i + " " + total);
        break;
    }

    i++;
}
