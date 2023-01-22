let input = document.querySelector('#add');
let btn = document.querySelector('#btn');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
let list = document.querySelector('#list');
let contain = document.querySelector('.element-list');
// let li = document.querySelectorAll("li");


let li ;

btn.addEventListener('click' , ()=>{
    let txt = input.value;
    if(txt === ""){
        alert('doldurun')
        
    }else{
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        li = document.createElement('li')
        li.classList.add("mystyle");
        li.innerHTML = txt;
        list.insertBefore(li, list.childNodes[0]);
        input.value = '';
        li.style.color = "#" + randomColor;
        list.style.backgroundColor = "#" + randomColor;
        contain.style.backgroundColor = "#" + randomColor;
    }
})


// let lis = document.querySelectorAll('.mystyle');
// for (let i = countStart; i < countEnd; i++) {
//     console.log(lis[i]);
//     // list += li;
// }

btn1.addEventListener('click',()=>{
    let countStart = 0;
    let countEnd = 4;
    const listItems = list.getElementsByTagName('li');
    
    for (let index = 0; index < listItems.length; index++) {
        listItems[index].classList.add("hide");
        console.log (listItems[index]);
            // listItems[i].classList.add("show");
    }
for (let i = countStart; i < countEnd; i++) {
    console.log (listItems[i]);
        listItems[i].classList.add("show");
        listItems[i].classList.remove("hide");
}
    // list.innerHTML = li;
})

btn2.addEventListener('click',()=>{
    let countStart = 4;
    let countEnd = 8;
    const listItems = list.getElementsByTagName('li');
    
    for (let index = 0; index < listItems.length; index++) {
        listItems[index].classList.add("hide");
        console.log (listItems[index]);
            // listItems[i].classList.add("show");
    }
for (let i = countStart; i < countEnd; i++) {
    console.log (listItems[i]);
        listItems[i].classList.add("show");
        listItems[i].classList.remove("hide");
}
    // list.innerHTML = li;
})
btn3.addEventListener('click',()=>{
    let countStart = 8;
    let countEnd = 12;
    const listItems = list.getElementsByTagName('li');
    
    for (let index = 0; index < listItems.length; index++) {
        listItems[index].classList.add("hide");
        console.log (listItems[index]);
            // listItems[i].classList.add("show");
    }
for (let i = countStart; i < countEnd; i++) {
    console.log (listItems[i]);
        listItems[i].classList.add("show");
        listItems[i].classList.remove("hide");
}
    // list.innerHTML = li;
})









// document.getElementById("list").pagination({
//     dataSource: [1, 2, 3, 4],
//     callback: function(data, pagination) {
        
//         let html = template(data);
//         dataContainer.innerHTML = html;
//     }
// })