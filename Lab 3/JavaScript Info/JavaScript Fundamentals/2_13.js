// 1
let i = 3;
while (i) {
  alert( i-- );
}
// answer 1
//when i becomes 0, the condition becomes falsy, and the loop stops



// 2
let i = 0;
while (++i < 5) alert( i ); // 1)

let i = 0;
while (i++ < 5) alert( i ); // 2)
// answer: NO because 1) 1 2 3 4      2) 1 2 3 4 5


// 3
for (let i = 0; i < 5; i++) alert( i ); //1)

for (let i = 0; i < 5; ++i) alert( i ); //2)
// answer: Yes 


// 4
for(let i=2;i<=10;i+=2){
    alert(i);
}

//5
let i = 0;
while (i < 3) {
    alert( `number ${i}!` );
    i++;
}


//6
while (true){
    let num = prompt("Enter a number greater than 100?");
    if(num>=100){
        break;
    }
}

//7
let num = prompt("");
for(let i=2;i<=num;i++){
    let ok = true;
    for(let j=2;j<i;j++){
        if(i%j==0){
            ok=false;
            break
        }
    }
    if(ok)alert(i);
}