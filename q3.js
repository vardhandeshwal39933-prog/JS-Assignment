var n = Number(prompt());
var k = Number(prompt());

function checkPalindrome(x) {
    var s = x + "";
    var rev = "";
    for (var i = s.length - 1; i >= 0; i--) {
        rev += s[i];
    }
    return s === rev;
}

var res = -1;

for (var add = 0; add <= 100000; add++) {
    var val = n + add;

    if (val % k == 0 && checkPalindrome(val)) {
        res = add;
        break;
    }
}

alert(res);
