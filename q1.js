var L = Number(prompt());
var R = Number(prompt());
var K = Number(prompt());

function isPrime(n) {
    if (n < 2) return false;
    for (var i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

var count = 0;

for (var i = L; i <= R; i++) {
    if (i % K !== 0) continue;

    var str = i + "";
    if (str.indexOf("0") !== -1) continue;

    var sum = 0;
    for (var j = 0; j < str.length; j++) {
        sum += Number(str[j]);
    }

    if (isPrime(sum)) count++;
}

alert(count);