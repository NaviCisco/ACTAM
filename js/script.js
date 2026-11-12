// MODEL
step = 0
keys = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
volume = 13
store = keys

// CONTROLLER

index = 0

function toggleLED(event) {
    id = event.target.index
    keys[id] = !keys[id]
    render()
}

keys.forEach(createKey)

// The previous line is short for the following lines.
/*
createKey("red")
createKey("red")
createKey("red")
createKey("red")
createKey("yellow")
createKey("yellow")
createKey("yellow")
createKey("yellow")
*/

function nextStep() {
    step = (step + 1) % 16
    render()
}

setInterval(nextStep, 100) 

// Always call the render function at the beginning, otherwise, clicking on one key will cause all the other keys' leds to
// turn off except the one that has been clicked!
render()

// VIEW


/* Select the first key, look for the led id of that key and toggle that. */
// console.log(document.querySelectorAll(".key")[0].querySelector(".led").classList.toggle("active-led"))

/*
function toggleLED(event) {
    // Without the "event" parameter you need to specify which key to address
    // document.querySelectorAll(".key")[0].querySelector(".led").classList.toggle("active-led")

    // With the "event" parameter, the engine automatically detects which key has been clicked.
    event.target.querySelector(".led").classList.toggle("active-led")
}
*/

/* Instead of manually creating divs by copy-pasting them, automate the process. */

function renderKey(k, i) { // k = current key value i.e., True or False; i = key index
    document.querySelectorAll(".key")[i].classList.toggle("active-key", step == i)
    // Focus on all LEDs and select the one with index [k.index] 
    document.querySelectorAll(".led")[i].classList.toggle("active-led", keys[i])
}

function render() {
    keys.forEach(renderKey)
}

function save() {
    store = keys.slice()
}

function load() {
    keys = store.slice()
    // render()
}

function reset() {
    step = 0
}

function createKey(color) {
    k = document.createElement("div")
    k.classList.add("key")
    if (index < 4) {
        color = "red"
    } else if (index < 8) {
        color = "orange"
    } else if (index < 12) {
        color = "yellow"
    } else {
        color = "white"
    }
    k.classList.add(color)
    k.onclick = toggleLED // Each key can react to clicks natively.
    k.index = index
    l = document.createElement("led")
    l.classList.add("led")
    l.classList.add("active-led")
    k.appendChild(l)
    document.querySelector("#bar").appendChild(k)
    console.log(index)
    index += 1
}

document.querySelector("#save").onclick = save
document.querySelector("#load").onclick = load
document.querySelector("#reset").onclick = reset