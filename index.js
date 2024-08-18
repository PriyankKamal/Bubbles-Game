function makeBubble() {
    let cluster = "";
 
    for (let i = 1; i <= 152; i++) {
        let rn = Math.floor(Math.random() * 10);
        cluster += `<div class="bubble">${rn}</div>`
    }

    document.querySelector('.panel-bottom').innerHTML = cluster;
}
let timer = 60;


function runTimer() {
    let clearInt = setInterval(() => {
        if (timer >= 0) {
            document.querySelector("#timerVal").innerHTML = timer--
        }
        else {
            clearInterval(clearInt);
            document.querySelector("#main").innerHTML = `<div class="game-over"><h1>GAME OVER</h1> <div class="your-score">Your total score is ${score}</div></div><div id="celeb-img"><img src="./images/mario.gif" alt=""></div> `
            document.querySelector(".game-over").style.backgroundColor = '#fa8231'

        }
    }, 1000)
}


let randHit;
function getNewHit() {
    randHit = Math.floor(Math.random() * 10);
    document.querySelector("#hitVal").textContent = randHit;
    gsap.from("#hitVal", {
        opacity: 0,
        y: -10,
        duration: 0.2,
        delay: 0.2,
    })
}

let score = 0;
function increaseScore() {
    score += 10;
    document.querySelector("#score").textContent = score;
}

document.querySelector(".panel-bottom").addEventListener("click", function (details) {
    console.log(details.target.textContent);
    if (Number(details.target.textContent) === randHit) {
        increaseScore();
        getNewHit();
        makeBubble();
    }
})

setTimeout(runTimer, 6000);




makeBubble();
getNewHit();