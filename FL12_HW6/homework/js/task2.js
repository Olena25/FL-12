var a = parseInt(prompt("Enter a", ""));
var b = parseInt(prompt("Enter b", ""));
var c = parseInt(prompt("Enter c", ""));

if( isNaN(a) || a === null || isNaN(b) || b === null || isNaN(c) || c === null){
    alert('input values should be ONLY numbers');
} else if( a <= 0 || b <= 0 || c <= 0){
  alert( "A triangle must have 3 sides with a positive definite length" );
}
if (( a>c && b>c && a+b<c) || (a>b && c>b && a+c<b) || (b<a && c<a && c+b>a)) {
    alert("Triangle doesn’t exist");
} 

if (a===b===c) {
    alert("equivalent triangle");
} else if( a===b || a===c ||b===c) {
    alert("isosceles triangle ");
}else if( a!==b && b!==c && a!==c ) {
    alert("scalene triangle ");
}

