var container = document.getElementById("container");
var bx        = document.getElementById("bx");

function bxFollow(e){
    bx.style.left = e.clientX + "px";
    bx.style.top  = e.clientY + "px";
}

container.addEventListener("mousemove", bxFollow);