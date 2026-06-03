// MUSIC

document.addEventListener("click", () => {

document
.getElementById("bgMusic")
.play();

}, { once:true });


// LOADING

window.addEventListener("load",()=>{

setTimeout(()=>{

const loading =
document.getElementById(
"loading-screen"
);

loading.style.opacity="0";

setTimeout(()=>{

loading.style.display="none";

},1000);

},2500);

});


// FLOATING HEARTS

setInterval(()=>{

const heart =
document.createElement("div");

heart.innerHTML="❤️";

heart.classList.add("heart");

heart.style.left=
Math.random()*100+"vw";

heart.style.fontSize=
Math.random()*20+15+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},6000);

},700);


// FALLING PETALS

setInterval(()=>{

const petal =
document.createElement("div");

petal.innerHTML="🌹";

petal.classList.add("petal");

petal.style.left=
Math.random()*100+"vw";

petal.style.animationDuration=
Math.random()*5+5+"s";

document.body.appendChild(petal);

setTimeout(()=>{

petal.remove();

},10000);

},900);


// YES & NO

const yesBtn =
document.getElementById(
"yesBtn"
);

const noBtn =
document.getElementById(
"noBtn"
);

let scale = 1;

noBtn.addEventListener(
"click",
()=>{

yesBtn.style.transform=
`scale(${scale})`;

noBtn.style.position=
"relative";

noBtn.style.left=
(Math.random()*300-150)
+"px";

noBtn.style.top=
(Math.random()*100-50)
+"px";

}
);


// SHOW POPUP

yesBtn.addEventListener(
"click",
()=>{

document
.getElementById("popup")
.classList.add("show");

}
);


// NEXT PAGE

document
.getElementById(
"continueBtn"
)
.addEventListener(
"click",
()=>{

window.location.href=
"login.html";

}
);