//1
let user = {};          
user.name = "Jhon";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

//2
function isEmpty(obj) {
    for (let i in obj)return false;
    return true;
}

//3
function sum(obj){
    let s=0;
    for(let i in obj){
        s+=obj[i];
    }
    return s;
}

//4
function multiplyNumeric(obj){
    for(let i in obj){
        if(typeof obj[i] == 'number'){
            obj[key] *= 2;
        }
    }
}