let input = document.querySelector('#add');
let btn = document.querySelector('#btn');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
let list = document.querySelector('#list');
let li = document.querySelector('#li');

btn.addEventListener('click' , ()=>{
    let txt = input.value;
    if(txt === ""){
        alert('doldurun')
        
    }else{
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        let li = document.createElement('li')
        li.innerHTML = txt;
        list.insertBefore(li, list.childNodes[0]);
        input.value = '';
        li.style.color = "#" + randomColor;
        li.style.backgroundColor = "#" + randomColor;
    }
})

btn1.addEventListener('click',()=>{
    for (let i = 0; i < 3; i++) {
        console.log(li.value);
    }
})







// document.getElementById("list").pagination({
//     dataSource: [1, 2, 3, 4],
//     callback: function(data, pagination) {
        
//         let html = template(data);
//         dataContainer.innerHTML = html;
//     }
// })