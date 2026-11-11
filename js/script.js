/* Select the first key, look for the led id of that key and toggle that. */
// console.log(document.querySelectorAll(".key")[0].querySelector(".led").classList.toggle("active-led"))

function toggleLED(event) {
    // Without the "event" parameter you need to specify which key to address
    // document.querySelectorAll(".key")[0].querySelector(".led").classList.toggle("active-led")

    // With the "event" parameter, the engine automatically detects which key has been clicked.
    event.target.querySelector(".led").classList.toggle("active-led")
}

/* Instead of manually creating divs by copy-pasting them, automate the process. */

function createKey(color) {
    k = document.createElement("div")
    k.classList.add("key")
    k.classList.add(color)
    k.onclick = toggleLED // Each key can react to clicks natively.
    l = document.createElement("led")
    l.classList.add("led")
    l.classList.add("active-led")
    k.appendChild(l)
    document.querySelector("#bar").appendChild(k)
}

createKey("red")
createKey("red")
createKey("red")
createKey("red")
createKey("yellow")
createKey("yellow")
createKey("yellow")
createKey("yellow")