
const startPage = document.getElementById('startPage')
const gamePage = document.getElementById('gamePage')
const startButton = document.getElementById('startButton')
const inputName = document.getElementById('inputName')
const yourName = document.getElementById('yourName')
const pcPick = document.getElementById('pcPick')
const iconsPC = document.getElementById('iconsPC')
const paper = document.getElementById('paper')
const scissor = document.getElementById('scissor')
const rock = document.getElementById('rock')
const myScore = document.getElementById('myScore')
const pcScore = document.getElementById('pcScore')
const playAgain = document.getElementById('playAgain')

let signs = ["./paper.jpg", "./scissors.jpg", "./rock.jpg"]
let myScr = 0
let pcScr = 0


startButton.addEventListener('click', startGame)
paper.addEventListener('click', pickedPapper)
scissor.addEventListener('click', pickedScissor)
rock.addEventListener('click', pickedRock)
playAgain.addEventListener('click', playOneMore)

function startGame() {
    if (!!inputName.value) {
        startPage.style.display = 'none'
        gamePage.style.display = 'block'
        yourName.innerText = inputName.value
    }

}
function randomSign() {
    let random = Math.floor(Math.random() * signs.length)
    pcPick.src = signs[random]
    return random
}

function pickedPapper() {
    iconsPC.style.display = 'block'
    let random = randomSign()
    if (signs[random] === signs[1]) {
        pcScr++
        pcScore.innerText = `${pcScr}`
    }
    if (signs[random] === signs[2]) {
        myScr++
        myScore.innerText = `${myScr}`
    }
    paper.removeEventListener('click', pickedPapper)
    scissor.removeEventListener('click', pickedScissor)
    rock.removeEventListener('click', pickedRock)
}

function pickedScissor() {
    iconsPC.style.display = 'block'
    let random = randomSign()
    if (signs[random] === signs[2]) {
        pcScr++
        pcScore.innerText = `${pcScr}`
    }
    if (signs[random] === signs[0]) {
        myScr++
        myScore.innerText = `${myScr}`
    }
    paper.removeEventListener('click', pickedPapper)
    scissor.removeEventListener('click', pickedScissor)
    rock.removeEventListener('click', pickedRock)
}

function pickedRock() {
    iconsPC.style.display = 'block'
    let random = randomSign()
    if (signs[random] === signs[0]) {
        pcScr++
        pcScore.innerText = `${pcScr}`
    }
    if (signs[random] === signs[1]) {
        myScr++
        myScore.innerText = `${myScr}`
    }
    paper.removeEventListener('click', pickedPapper)
    scissor.removeEventListener('click', pickedScissor)
    rock.removeEventListener('click', pickedRock)
}

function playOneMore() {
    iconsPC.style.display = 'none'
    paper.addEventListener('click', pickedPapper)
    scissor.addEventListener('click', pickedScissor)
    rock.addEventListener('click', pickedRock)
}