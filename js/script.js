function add () {
    document.querySelector("#letter2").classList.add("background")
    setTimeout(rem, 1000)
}

function rem () {
    document.querySelector("#letter2").classList.remove("background")
    setTimeout(add, 1000)
}

function toggle () {
    document.querySelector("#letter2").classList.toggle("background")
    setTimeout(rem, 500)
}

function blink () {
    document.querySelector("#letter2").classList.toggle("background")
}

// setInterval(blink, 500)

letter1_top = 0
letter1_vel = 1

function move_Letter1() {
    letter1_top = (letter1_top + letter1_vel) % 200 // Goes Back To 0px Once A Distance Of 200px Has Been Reached
    document.querySelector("#letter1").style.top=letter1_top + "px"
}

move_Letter1()

setInterval(move_Letter1, 30) // Move Letter1 By 1 Pixels Every 30 Milliseconds.

function toggleLetter3() {
    document.querySelector("#letter3").classList.toggle("background")
    setTimeout(toggle, 500)
}

function resetPosition() {
    letter1_top = 0
}

function slowDown() {
    letter1_vel = letter1_vel - 1
}

function speedUp() {
    letter1_vel = letter1_vel + 1
}

document.querySelector("#letter3").onclick = slowDown

document.querySelector("#letter4").onclick = speedUp

function add_e() {
    e = document.createElement("div")
    e.classList.add("letter")
    e.classList.add("odd")
    document.querySelector("#bar").appendChild(e)
}

document.querySelector("#letter5").onclick = add_e