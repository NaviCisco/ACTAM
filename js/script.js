score = 0

function add_circle() {
    e = document.createElement("div")
    e.classList.add("circle")
    e.style.left = Math.random() * window.innerWidth
    if(Math.random() < 0.5) {
        e.classList.add("red")
        e.type = 1 // This line creates a new property "type" for the object "e" on the go. In this case "type" is an integer.
    } else {
        e.classList.add("green")
    }
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
}

function move_circle(circle) {
    circle.style.top = "100px"
    
}

setInterval(add_circle, 1000)