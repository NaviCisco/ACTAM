/* Instead of manually creating divs by copy-pasting them, automate the process. */

function createKey(color) {
    k = document.createElement("div")
    k.classList.add("key")
    k.classList.add(color)
    l = document.createElement("led")
    l.classList.add("led")
    k.appendChild(l)
    document.querySelector("#bar").appendChild(k)
}

createKey("red")
createKey("yellow")
createKey("red")
createKey("yellow")