let firstP = document.getElementById("title");




let array = ['a', 'b', 'c']


for (let index = 0; index < 20; index++) {
let p = document.createElement('p');
p.innerHTML = "new paragraph"; 
test.appendChild(p);
}

console.log(test);


let divBox = document.querySelectorAll('.box');
console.log(divBox);

divBox.forEach(el => el.style.border = "10px solid #000000")