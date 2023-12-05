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

// [답안A] 2차원 배열 변수 없는 식(과정)
// for (let i = 0, str; i<arr.length; i++){
//     str = `ar${i+1} 배열 : `;

//     //switch문 (i=0인 경우, ar1)
//     for(const e of arr[i]){
//         str += e + ' ';
//     }
//     console.log(str + '\n');
// }

// [답안B] 2차원 배열 변수 없는 식(switch case 문)
for (let i = 0, str; i < arr.length; i++) {
    str = `ar${i + 1} 배열 : `;

    switch(i){
        case 0:
            for (const e of ar1) {
            str += e + ' ';
            }
            console.log(str + '\n');
            break;
        case 1:
            for (const e of ar2) {
            str += e + ' ';
            }
            console.log(str + '\n');
            break;
        case 2:
            for (const e of ar3) {
            str += e + ' ';
            }
            console.log(str + '\n');
            break;
        case 3:
            for (const e of ar4) {
            str += e + ' ';
            }
            console.log(str + '\n');
            break;
        case 4:
            for (const e of ar5) {
            str += e + ' ';
            }
            console.log(str + '\n');
            break;
        case 5:
            for (const e of ar6) {
            str += e + ' ';
            }
            console.log(str + '\n');
            break;
        case 6:
            for (const e of ar7) {
            str += e + ' ';
            }
            console.log(str + '\n');
            break;
        case 7:
            for (const e of ar8) {
            str += e + ' ';
            }
            console.log(str + '\n');
            break;
        case 8:
            for (const e of ar9) {
            str += e + ' ';
            }
            console.log(str + '\n');
            break;
        case 9:
            for (const e of ar10) {
                str += e + ' ';
            }
            console.log(str + '\n');
            break;
        }
}

// [답안C] 2차원 배열 변수를 활용한 식
// for(let i=0; i<arr.length; i++){
//     let k =``;
    
//     for(let j=0; j<arr.length; j++){
//             // k += `${arr[i][j]} `;
//             k += `${ar1[j]} `;
//         }
    
//     console.log(`ar${i+1}의 배열 : ${k}\n`);
// }

