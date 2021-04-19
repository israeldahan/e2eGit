let cloud = document.getElementById("cloud");
let green = document.getElementById("green");
let grey = document.getElementById("grey");
let par = document.getElementById("par");
let btn = document.getElementById("btn");
let divDragAndDrop = document.getElementById("divDragAndDrop");

cloud.addEventListener("click", el => {
    console.log("i'm cloud");
    console.log(el);
    par.innerHTML = "i'm cloud";
    el.stopPropagation();
    el.preventDefault();
});

grey.addEventListener("click", el => {
    console.log("i'm grey");
    console.log(el);
    par.innerHTML = "i'm grey";
    el.stopPropagation();
});

green.addEventListener("click", el => {
    console.log("i'm green");
    par.innerHTML = "i'm green";
});

btn.addEventListener("click", el => {
    console.log("i'm btn");
    console.log(el);
    par.innerHTML = "i'm btn";
    el.stopPropagation();
});

divDragAndDrop.addEventListener("mousemove", el => {
    console.log("i'm divDragAndDrop");
    console.log(el);
    par.innerHTML = "i'm divDragAndDrop";
    let newWidth = Math.max(10, el.clientX - divDragAndDrop.offsetLeft) ;
    divDragAndDrop.style.width = newWidth + "px";
    el.stopPropagation();
});
