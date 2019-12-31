function getMin() {
    let mass = 0
    for (var i = 0; i < arguments.length; i++) {
        mass = arguments[i];
    }
    return Math.min(mass);
}
console.log(getMin(3, 0, -3));