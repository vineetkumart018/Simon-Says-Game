//Start Game
let gameSeq = [];
let userSeq = [];
let btns = ["red","yellow","green","purple"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");
//Press any key to start Game
document.addEventListener("keypress", function () {
	if (started == false) {
		started = true;
		levelUp();
	}
}); 
//button Flash when press any key
function btnFlash(btn) {
	btn.classList.add("flash");
	setTimeout(() => {
        btn.classList.remove("flash");
    },250);
}
//button flash when press same color
function userFlash(btn) {
	btn.classList.add("userflash");
	setTimeout(() => {
        btn.classList.remove("userflash");
    },250);
}
//level 2
function levelUp() {
	userSeq=[];
    level++;
	h2.innerText = `Level ${level}`;
	let randomIx = Math.floor(Math.random() * 4);
	let randomColor = btns[randomIx];
	let randbtn = document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
	btnFlash(randbtn);
}
function btnpress(){
    console.log(this);
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);

}
let allBtns=document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click",btnpress);
}
//Matching sequence 
function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{

        h2.innerHTML=`Game Over! <b>Your Score was ${level-1}</b> <br>Press any key to start</br>`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="aqua";
        }, 150);
        resizeTo();
    }
}
//Reset Game
function resizeTo(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}

