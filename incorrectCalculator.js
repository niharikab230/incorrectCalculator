// want to create a function that multiplies basic numbers and gives nonsensical input with either true of false included

//created new branch to work with


let numArr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//for this particular project, array not necessary as index = numbers but leaving to simulate more complex project
//boolean would also result in true without needing console.log
let numArr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let string = ['cookie', 'window', 'heart', 'butterfly', 'arrow', 'lectern', 'glasses', 'tetrahedron', 'clover', 'scissors'];


let num1 = numArr1[Math.floor(Math.random() * 10)];
let num2 = numArr2[Math.floor(Math.random() * 10)];
let str = string[Math.floor(Math.random() * 10)];

console.log((`${num1} + ${num2} = ${str}`));

if (num1 === 0 && num2 === 0 && str === 'cookie') {
    console.log('True');
} else if (num1 === 1 && num2 === 1 && str === 'window') {
    console.log('True');
} else if (num1 === 2 && num2 === 2 && str === 'heart') {
    console.log('True');
} else if (num1 === 3 && num2 === 3 && str === 'butterfly') {
    console.log('True');
} else if (num1 === 4 && num2 === 4 && str === 'arrow') {
    console.log('True');
} else if (num1 === 5 && num2 === 5 && str === 'lectern') {
    console.log('True');
} else if (num1 === 6 && num2 === 6 && str === 'glasses') {
    console.log('True');
} else if (num1 === 7 && num2 === 7 && str === 'tetrahedron') {
    console.log('True');
} else if (num1 === 8 && num2 === 8 && str === 'clover') {
    console.log('True');
} else if (num1 === 9 && num2 === 9 && str === 'scissors') {
    console.log('True');
} else {
    console.log('False');
}


//switch case does not appear to work for this project - perhaps due to multiple input - further research required
/*switch (num1, num2, str) {
    case [0, 0, 'cookie']:
        console.log('True');
        break;
    case [1, 1, 'window']:
        console.log('True');
        break;
    case [2, 2, 'heart']:
        console.log('True');
        break;
    case [3, 3, 'butterfly']:
        console.log('True');
        break;
    case [4, 4, 'arrow']:
        console.log('True');
        break;
    case [5, 5, 'lectern']:
        console.log('True');
        break;
    case [6, 6, 'glasses']:
        console.log('True');
        break;
    case [7, 7, 'tetrahedron']:
        console.log('True');
        break;
    case [8, 8, 'clover']:
        console.log('True');
        break;
    case [9, 9, 'scissors']:
        console.log('True');
        break;
    default:
        console.log('False');
        break;
}*/

