const apply = document.querySelector("#apply");
const work = document.querySelector("#work");
const ect = document.querySelector("#ect");
const applyContent = document.querySelector("#applyContent");
const workContent = document.querySelector("#workContent");
const etcContent = document.querySelector("#etcContent");

console.dir(apply)

function applyClick(){
    applyContent.style.display = "block";
    workContent.style.display = "none";
    etcContent.style.display = "none";
    apply.style.color = "black";
    apply.style.backgroundColor = "white";
    work.style.color = "white";
    work.style.backgroundColor = "#1d1d1d";
    etc.style.color = "white";
    etc.style.backgroundColor = "#1d1d1d";
}

function workClick(){
    applyContent.style.display = "none";
    workContent.style.display = "block";
    etcContent.style.display = "none";
    apply.style.color = "white";
    apply.style.backgroundColor = "#1d1d1d";
    work.style.color = "black";
    work.style.backgroundColor = "white";
    etc.style.color = "white";
    etc.style.backgroundColor = "#1d1d1d";
}
function etcClick(){
    applyContent.style.display = "none";
    workContent.style.display = "none";
    etcContent.style.display = "block";
    apply.style.color = "white";
    apply.style.backgroundColor = "#1d1d1d";
    work.style.color = "white";
    work.style.backgroundColor = "#1d1d1d";
    etc.style.color = "black";
    etc.style.backgroundColor = "white";
}


apply.addEventListener("click", applyClick);
work.addEventListener("click", workClick);
etc.addEventListener("click", etcClick);