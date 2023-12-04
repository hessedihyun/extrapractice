'use strict'

let n = 5;

for(let i=0; i<n; i++){
    for(let j=0; j<n; j++){
        if(j<(n-1)-i){
            console.log(` `);
        } else
        console.log(`*`)
    }
}