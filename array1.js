'use strict'
const array1 = new Array(10);
// console.log(array1);

for(let i=0; i<array1.length; i++){
    array1[i] = new Array(10);

    for(let j=0; j<array1.length;j++){
        array1[i][j] = i+j+1;
    }
}

console.log(array1);
