function makeNumber(string){
    let stringNumber = '';
    for(var i=0; i < string.length; i++){
        let char = string[i];
        if(parseInt(char)){
            stringNumber = stringNumber + char;
        }
    }
    return stringNumber;
}
console.log(makeNumber('erer384jjjfd123'));
