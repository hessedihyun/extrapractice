'use strict'

let arr = new Array(10);

for(let i=0; i<arr.length; i++){
    arr[i] = new Array(10);
    for(let j=0; j<arr.length;j++){
        arr[i][j] = i+j+1;
    }
}

let [ar1, ar2, ar3, ar4, ar5, ar6, ar7, ar8, ar9, ar10] = arr;
// ar1은 arr[0]

for(let i=0; i<arr.length; i++){
    let k =``;
    
    for(let j=0; j<arr.length; j++){
            k += `${arr[i][j]} `;
        }
    
    console.log(`ar${i+1}의 배열 : ${k}\n`);
}

