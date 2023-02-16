// document.write("Java Script")//Вывод информацию в консоль
// console.log("Hello world")  //Вывод информацию в консоль
// console.info("Hello world") //Вывод информацию в консоль
// console.error("Error :)") // Вывод ошибкий 
// console.warn("Preduprezhdenie")//Вывод предкпреждения

// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

// console.log(Math.min(3,2))
// console.log(Math.max(3,2))
// console.log(Math.sqrt(25))


// if(1>2){
//     console.log(3)
// }
// else{
//     console.error("Nevozhmozno")
// }


// var stroka = "2"

// switch(stroka){
//     case "4":
//         console.log("var == 4")
//         break;
//     case "3":
//         console.log("var == 3")
//         break;
//     case "2":
//         console.log("var == 2")
//         break;

// }




// var arr = new Array()
// var arr = [];
// arr.push(2);
// arr.push(true);
// arr.push(2.2);
// arr.push(false);
// arr.push("Hello world");
// console.log(arr)




// var matrix = [[]]
// var x = [1,2,3]
// var t = [4,5,6]
// matrix.push(x)
// matrix.push(t)
// console.log(matrix[1][1])//1 - Массив начинается с 1 а остальные с 0  
// console.log(matrix.length)//Длинна массива 




//Всплывающие окна (alert, prompt, confirm)
// alert("Какой хороший день");
// confirm("Вы человек ?")
// prompt("Сколько тебе лет ?" , 20)



// function info(){
//     console.log("Hello world")
// }

// info()
var cnt = 1;
var last = null;
function saveTag(el){
    // console.log(el.value);
    last = el.value;
}
function buttonSave(el){
    createList(last);
}


function printArr(el){
    console.log(arr);
}

function createList(last){
    var newDiv = document.createElement("div"); // создаем новый элемент div
    newDiv.className = cnt+"chek";
    cnt++;
    var save = '<input id = "bx" onclick = "overLine(this)" type="checkbox"><p class = "Tags" >'+last+'</p><button onclick = "deleteById(this)" class = "del"></button>';
    newDiv.innerHTML = save; // задаем содержимое элемента
    document.body.appendChild(newDiv); // добавляем новый элемент в тело документа
}

function deleteById(el){
    const parent = el.parentNode;
    // parent.appendChild('')

    
    // psave.appendChild('')
    parent.remove();

}

function overLine(el){
    const parent = el.parentNode;
    const p = parent.querySelector("p");
    const node = document.createElement("li");
    const textnode = document.createTextNode("Water");
    // console.log(p.className);
    // p.toggle('NewClass');
    if(p.className=="NewClass"){
        p.className = 'Tags';
    }
    else{
        p.className = 'NewClass';
    }
    
    // p.remove();
    // p.appendChild(textnode);
    // p.remove.textnode();
    
    
    // p.appendChild();
    // p.appendChild(p);
    // p.appendChild('psp');
    // p.addEventListener('click', function() {
    //     p.remove();
    //     // chek.classList.toggle('class');
    // });
    
    // parent.remove();
    // var psave = parent.innerHTML;
    // console.log(psave[0]);
    // console.log("hello");
    
    // if(div.style.display == "none"){
    //     div.style.display == ""
    // }
    // else{
    //     div.style.display == "none"
    // }
    
}
// let ch = document.querySelector(".checkbox")
// ch.addEventListener("click", overLine)

// let cheks = document.querySelectorAll('.chek');
// cheks.forEach((chek) => {
//     const button = chek.querySelector('.checkbox');
//     button.addEventListener('click', function() {
//         chek.classList.toggle('class');
//     });
// });
// var arr = []
// var cnt = 0;
// function buttiCnt(el){
//     cnt++;
//     el.innerHTML = "Вы нажалий на кнопку :" + cnt;
// }



// var x  = document.getElementById() //-- получить обьект 
// x.style.backgroundColor = "blue"