let boxes = document.querySelectorAll(".box");
let New = document.querySelector(".new");
let re = document.querySelector(".ree");
let mass = document.querySelector(".mass");
let massage = document.querySelector("#massage");
let contaner = document.querySelector(".contaner");

let turn0 = true;
contaner.classList.remove("hidden");

const winPattants = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const Restart = () => {
    turn0 = true;
    enableboxs();
    mass.classList.add("hide");
    contaner.classList.remove("hidden");
}
re.addEventListener("click",Restart);

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disablebox = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};
const enableboxs = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        contaner.classList.remove("hidden");
    }
};

const showWinnner = (Winner) => {
    massage.innerText = `Conguratulations Winner is ${Winner}`;
    mass.classList.remove("hide");
    contaner.classList.add("hidden");
    disablebox();
};

const checkWinner = () => {
    for(let pattant of winPattants) {

        let pos1Val = boxes[pattant[0]].innerText;
        let pos2Val = boxes[pattant[1]].innerText;
        let pos3Val = boxes[pattant[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("Winner",pos1Val);
                showWinnner(pos1Val);
            }
        }
    }
};

const newgame = () => {
    turn0 = true;
    enableboxs();
    mass.classList.add("hide");
    contaner.classList.remove("hidden");
}
New.addEventListener("click",newgame);