const prompt = require('prompt-sync')();
const num1 = prompt('Enter num1: ');
const operation = prompt('Enter operation: ');
const num2 = prompt('Enter num2: ');
if (operation === '*'){
    console.log(`Answer = ${num1*num2}`)
}else if (operation === '+'){
    console.log(`Answer = ${num1+num2}`)
}else if (operation === '-'){
    console.log(`Answer = ${num1-num2}`)
}else if (operation === '/'){
    console.log(`Answer = ${num1/num2}`)
}else{
    console.log('incorrect operation')
}