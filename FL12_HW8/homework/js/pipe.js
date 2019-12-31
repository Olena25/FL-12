function addOne(x) {
    return x + 1;
  }
function pipe(){
  for (var i = 0; i < arguments.length; i++) {
       let g = arguments[i];
       return (addOne(g));
  }
}
console.log(pipe(1,addOne));
