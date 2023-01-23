let input = document.querySelector('#add');
let btn = document.querySelector('#btn');
let list = document.querySelector('#list');
let contain = document.querySelector('.element-list');
let paginate = document.querySelector('.pagination');


let li ;

btn.addEventListener('click' , ()=>{
    let txt = input.value.trim();
    if(txt === ""){
        alert('My str length');
        
    }else{
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        li = document.createElement('li')
        li.classList.add("mystyle");
        li.innerHTML = txt;
        list.insertBefore(li, list.childNodes[0]);
        pagination();
        input.value = '';
        li.style.color = "#" + randomColor;
        contain.style.backgroundColor = "#" + randomColor;
    }
})




const pagination = () => {
    paginate.innerHTML = "";
let lis = document.querySelectorAll('.mystyle');
  for (let i = 0; i < Math.ceil(lis.length / 5); i++) {
    paginate.innerHTML += `
        <button onclick="Page(${i})">${i + 1}</button>
        `;     
  }
}

const Page = (a) => {
    document.querySelectorAll("li").forEach((a) => a.classList.add("hide"));
  for (let i = a * 5; i < a * 5 + 5; i++) {
    document.querySelectorAll("li")[i].classList.remove("hide");
  }
}








