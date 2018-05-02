document.getElementById("image").addEventListener("mouseover",mouseov);
document.getElementById("image").addEventListener("mouseout",mouseou);
document.getElementById("image").addEventListener("click",clk);
document.getElementById("image").addEventListener("contextmenu",contex);

function mouseov() {
window.alert("Over");
}

function mouseou() {
window.alert("Out");
}

function clk() {
window.alert("Click");
}

function contex() {
window.alert("Context");
}
