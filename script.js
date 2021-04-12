// let p = document.createElement("p");
// document.body.appendChild(p);



let firstP = document.getElementById("title");
let body = document.body;
firstP.remove();
// let txt = document.createTextNode(' new title');
let h1 = document.createElement('h1');
h1.innerHTML = " new title"; 
// body.appendChild(h1);
body.firstElementChild = h1;



// firstP.innerHTML = "fkkffkfkfkfk";

let array = ['a', 'b', 'c']


for (let index = 0; index < 20; index++) {
}

// console.log(test);


let divBox = document.querySelectorAll('p .par');
console.log(divBox);

divBox.forEach(el => el.style.border = "10px solid #000000");

for (let index = 0; index < divBox.length; index++) {
    divBox[index].style.border = "10px solid #000000";
    
}

let classBox = document.getElementsByClassName('box');
console.log("classBox", classBox);
for (let index = 0; index < classBox.length; index++) {
    classBox[index].style.border = "10px solid #002200";
}




// Function to change the content of t2
function modifyText() {
    const t2 = document.getElementById("t2");
    if (t2.firstChild.nodeValue == "three") {
      t2.firstChild.nodeValue = "two";
    } else {
      t2.firstChild.nodeValue = "three";
    }
  }
  
//   function printKeyCode(params) {
//       console.log(params.keyCode);
//   }
  // Add event listener to table
  const el = document.getElementById("outside");
//   el.addEventListener("click", modifyText, false);
//   window.addEventListener("keydown", printKeyCode, false);
//   setInterval(function(){ alert("Hello"); }, 3000);

function changeText(params) {
    console.log(params);
    let parp = document.getElementById("parp");
    parp.innerHTML += " new text";
}

let chT = document.getElementById('changeText');
// chT.addEventListener("click", changeText);
let p = document.createElement('p');
p.innerHTML = "new p";

chT.addEventListener("click", (params) => { 
    let p = document.createElement('p');
    p.innerHTML = "new p";
    console.log("hi"); 
    document.getElementById("parp").appendChild(p);
});

chT.addEventListener("mouseenter", (params) => { 
    let p = document.createElement('p');
    p.innerHTML = "new p";
    console.log("hi"); 
    document.getElementById("parp").appendChild(p);
});

window.addEventListener("keydown", (el) => {console.log(el.keyCode);})