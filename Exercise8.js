document.getElementById("First").addEventListener("mouseover",Over);
document.getElementById("First").addEventListener("mouseout",Out);
document.getElementById("First").addEventListener("click",Click);
document.getElementById("First").addEventListener("contextmenu",Context);

function Over() {
First.src="./images/2.png";
}

function Out() {
First.src="./images/3.png";
}

function Click() {
First.src="./images/4.png";
}

function Context() {
First.src="./images/5.png";
}
