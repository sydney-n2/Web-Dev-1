var i = document.getElementById('instructions');
var p = document.getElementById('popup');

i.onclick = function() {
    if (p.getAttribute("style") == "display: none") {
        p.setAttribute("style", "display: block");
    } else {
        p.setAttribute("style", "display: none"); 
    }
}
/*p.} onmouseleave = function() {
    p.setAttribute("style", "none");
}*/