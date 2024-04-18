var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']

function logDairy() {
    console.log(dairy.length);
    for (var i = 0; i < dairy.length; i++) {
        console.log(dairy[i]);
    }
    for (var item of dairy) {
        console.log(item);
    }
}

logDairy();