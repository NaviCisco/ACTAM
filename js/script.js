score = 0

function add_circle() {
    e = document.createElement("div")
    e.classList.add("circle")
    e.style.left = Math.random() * window.innerWidth
    if(Math.random() < 0.5) { // Math.random() generates a pseudorandom number in the 0-1 range.
        e.classList.add("red")
        e.type = 0 // This line creates a new property "type" for the object "e" on the go. In this case "type" is an integer.
    } else {
        e.classList.add("green")
        e.type = 1
    }
    e.vel = 2 + Math.random() * 8 // Extends the range between 1 and 10
    e.y = 0 // "top" is just a property for object "e" created on the go.
    e.style.top = e.y + "px"
    e.onclick = circle_clicked;
    document.querySelector("#root").appendChild(e)
}

function circle_clicked(event) {
    // alert("You Clicked A Circle!") User-Oriented Message.
    console.log("You Clicked A Circle!") // Developed Oriented Message.
    // console.log(event) Prints a Pointer Event on the Console. A Pointer Event contains a lot of useful information that can be used.
    // event.target.classList.remove("red")
    if(event.target.type == 0) {
        alert("You Just Died My Bro.")
        score = 0 // If The User Dies, The Score Goes Back To Zero.
    } else {
        event.target.classList.remove("green") // This logic turns the green circles into red ones and prints an alert message
        event.target.classList.add("red") // if green circles are clicked.
        event.target.type = 0
        score += 1
    }
    document.querySelector("#score").textContent = score
    document.querySelector("#root").childNodes.forEach(move_cirlce)
}

function move_circle(circle) {
    circle.y = circle.y + circle.vel
    circle.style.top = circle.y + "px"
    if (circle.type == 1 && circle.y > window.innerHeight) {
        console.log("Game Over Lil Fella.")
        document.querySelector("#score").textContent = "Game Over."
    }
}

function falling_circles() {
    document.querySelector("#root").childNodes.forEach(move_circle)
}

setInterval(add_circle, 1000)
setInterval(falling_circles, 30)