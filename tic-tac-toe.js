let music = new Audio("./assets/music.mp3")
let audioTurn = new Audio("./assets/ting.mp3")
let gameover = new Audio("./assets/gameover.mp3")
let turn = "X";
let isgameover = false;

//function to change the turn:

const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

//function to check for win:

const checkWin = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    let line = document.getElementById("line");

    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    wins.forEach((e, ind) => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&
            (boxtext[e[2]].innerText === boxtext[e[1]].innerText) &&
            (boxtext[e[0]].innerText !== "")) {
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + " Won";
            isgameover = true;
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "200px";
            if (ind === 0) {
                line.style.display = "block"
                line.style.top = "-348px"
                line.style.left = "215px"
            }
            if (ind === 3) {
                line.style.display = "block"
                line.style.transform = "rotate(90deg)";
                line.style.top = "-207px";
                line.style.left = "78px";
            }
            if (ind === 1) {
                line.style.display = "block"
                line.style.top = "-207px";
                line.style.left = "215px";
            }
            if (ind === 2) {
                line.style.display = "block"
                line.style.top = "-72px";
                line.style.left = "215px";
            }
            if (ind === 4) {
                line.style.display = "block"
                line.style.transform = "rotate(90deg)";
                line.style.top = "-207px";
                line.style.left = "215px";
            }
            if (ind === 5) {
                line.style.display = "block"
                line.style.transform = "rotate(90deg)";
                line.style.top = "-207px";
                line.style.left = "352px";
            }
            if (ind === 6) {
                line.style.display = "block"
                line.style.transform = "rotate(45deg)";
                line.style.top = "-200px";
                line.style.left = "170px";
                line.style.width = "500px";
            }
            if (ind === 7) {
                line.style.display = "block"
                line.style.transform = "rotate(-45deg)";
                line.style.top = "-205px";
                line.style.left = "160px";
                line.style.width = "500px";
            }
        }

    })
}

//game logic:
// music.play();

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener("click", () => {
        if (boxtext.innerText === "") {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();

            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerHTML = "Turn for " + turn;
            }
        }
    })
})

document.getElementById("reset").addEventListener("click", () => {
    let boxtexts = document.querySelectorAll(".boxtext");
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });

    turn = "X";
    isgameover = false;

    document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = ""

})


