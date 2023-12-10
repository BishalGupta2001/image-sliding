let gallery = document.querySelector(".gallery");
let backBtn = document.querySelector("#backBtn");
let frontBtn = document.querySelector("#frontBtn");


frontBtn.addEventListener("click", ()=>{
    setTimeout( ()=> {
    gallery.scrollLeft += 355;
    },1.1);
});

backBtn.addEventListener("click", ()=>{
    setTimeout( ()=> {
    gallery.scrollLeft -= 355;
    },1.1);
});