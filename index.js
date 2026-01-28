let currHomeScore = document.getElementById("home-score")
let currAwayScore = document.getElementById("guest-score")

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
    currAwayScore.textContent = Number(currAwayScore.textContent) + 1
}

function addA2(){
    currAwayScore.textContent = Number(currAwayScore.textContent) + 2
}

function addA3(){
    currAwayScore.textContent = Number(currAwayScore.textContent) + 3
}

function resetAll(){
    currAwayScore.textContent = 0
    currHomeScore.textContent = 0
}