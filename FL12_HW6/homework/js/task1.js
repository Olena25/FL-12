var a = parseInt(prompt("Enter a", ""));
var b = parseInt(prompt("Enter b", ""));
var c = parseInt(prompt("Enter c", ""));

if (isNaN(a) || a === null || isNaN(b) || b === null || isNaN(c) || c === null) {
    console.log("Invalid input data");
} else {
    console.log("find discriminant");
    var d = (b * b) - (4 * a * c);
    console.log("discriminant = ", d);
    if (d < 0) {
        console.log("- no solution ");
    } else if (d ==+ 0) {
        var x = -(b / 2 * a);
        console.log("x1=x2=", x);
    } else {
        var x1 = (-b + Math.sqrt(d)) / 2 * a;
        var x2 = (-b - Math.sqrt(d)) / 2 * a;
        console.log("x1=", x1);
        console.log("x2=", x2);
    }
}