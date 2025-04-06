const apply = document.querySelector("#apply");
const work = document.querySelector("#work");
const etc = document.querySelector("#etc");
const applyContent = document.querySelector("#applyContent");
const workContent = document.querySelector("#workContent");
const etcContent = document.querySelector("#etcContent");

function applyClick(){
    apply.className = "button qs this";
    work.className = "button qs";
    etc.className = "button qs";
    applyContent.style.display = "block";
    workContent.style.display = "none";
    etcContent.style.display = "none";
}

function workClick(){
    apply.className = "button qs";
    work.className = "button qs this";
    etc.className = "button qs";
    applyContent.style.display = "none";
    workContent.style.display = "block";
    etcContent.style.display = "none";
}

function ectClick(){
    apply.className = "button qs";
    work.className = "button qs";
    etc.className = "button qs this";
    applyContent.style.display = "none";
    workContent.style.display = "none";
    etcContent.style.display = "block";
}

apply.onclick = applyClick;
work.onclick = workClick;
etc.onclick = ectClick;
