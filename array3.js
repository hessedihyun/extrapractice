'use strict'

let arr = new Array(10);

for(let i=0; i<arr.length; i++){
    arr[i] = new Array(10);
    for(let j=0; j<arr.length;j++){
        arr[i][j] = i+j+1;
    }
}

let [ar1, ar2, ar3, ar4, ar5, ar6, ar7, ar8, ar9, ar10] = arr;
let k=``;

for(let j=0; j<arr.length; j++){

    for(let i=0; i<arr.length; i++){
        k += `${ar1[i]} `;
    }
    console.log(`ar${j} 배열 : ${k}`);
}

