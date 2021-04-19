let cloud = document.getElementById("cloud");
let green = document.getElementById("green");
let grey = document.getElementById("grey");
let par = document.getElementById("par");

cloud.addEventListener("click", el => {
    console.log("i'm cloud");
    console.log("i'm cloud");
    par.innerHTML = "i'm cloud";
    el.stopPropagation();
});

grey.addEventListener("click", el => {
    console.log("i'm grey");
    par.innerHTML = "i'm grey";
    el.stopPropagation();
});

green.addEventListener("click", el => {
    console.log("i'm green");
    par.innerHTML = "i'm green";
});