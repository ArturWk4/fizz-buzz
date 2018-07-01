function fizbuzz(variable) {
    let result = '';
    if(variable % 3 == 0){
        result = 'Fizz';
    }
    if(variable % 5 == 0) {
        result += 'Buzz';
    }
    return result;
}

console.log('9: ' + fizbuzz(9));
console.log('10: ' + fizbuzz(10));
console.log('15: ' + fizbuzz(15));
