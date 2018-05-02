document.getElementById("image").addEventListener("mouseover",Over);
document.getElementById("image").addEventListener("mouseout",Out);
document.getElementById("image").addEventListener("click",Click);
document.getElementById("image").addEventListener("contextmenu",Context);

function Over() {
window.alert("Over");
}

function Out() {
window.alert("Out");
}

function Click() {
window.alert("Click");
}

function Context() {
window.alert("Context");
}
