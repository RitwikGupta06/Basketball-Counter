let currHomeScore = document.getElementById("home-score")
let currAwayScore = document.getElementById("away-score")

function addH1() {
    currHomeScore.textContent = Number(currHomeScore.textContent) + 1
}


function addH2(){
    currHomeScore.textContent = Number(currHomeScore.textContent) + 2
}

function addH3(){
    currHomeScore.textContent = Number(currHomeScore.textContent) + 3
}


function addA1(){
    currHomeScore.textContent = Number(currHomeScore.textContent) + 1
}

function addA2(){
    currHomeScore.textContent = Number(currHomeScore.textContent) + 2
}

function addA3(){
    currHomeScore.textContent = Number(currHomeScore.textContent) + 3
}

function resetAll(){
    currAwayScore.textContent = currHomeScore.textContent = Number(0)
}