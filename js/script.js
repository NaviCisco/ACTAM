function add_circle() {
    e = document.createElement("div")
    e.classList.add("circle")
    e.style.left = Math.random() * window.innerWidth
    document.querySelector("#root").appendChild(e)
}

setInterval(add_circle, 1000)