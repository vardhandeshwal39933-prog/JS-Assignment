var base = Number(prompt());
var dist = Number(prompt());
var late = Number(prompt());
var seed = Number(prompt());

var cost = base + dist * 7;

if (late > 15) cost = cost + 20;

if (dist > 10) {
    var extra = Math.floor(cost / 10);
    cost += extra;
}

if (seed % 2 == 0) {
    cost += seed;
} else {
    cost -= seed;
}

while (cost % 5 !== 0) {
    cost++;
}

alert(cost);
