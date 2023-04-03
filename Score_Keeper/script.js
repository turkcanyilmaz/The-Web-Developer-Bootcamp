const btnPlayer1 = document.querySelector("#btn-one");
const btnPlayer2 = document.querySelector("#btn-two");
const btnReset = document.querySelector("#btn-reset");

const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");

const select = document.querySelector("select");

function addPoint (player) {
    const currentScore = parseInt(player.textContent);
    player.textContent = currentScore + 1;
}

function resetPoint (player) {
    player.textContent = 0;
    player.style.color = "black"
    btnPlayer1.disabled = false;
    btnPlayer2.disabled = false;
}

function resetSelect(select) {
    select.value = select.querySelector("option").value;
}

btnPlayer1.addEventListener("click", function() {
    addPoint(player1);

    if(parseInt(player1.textContent) === parseInt(select.value)) {
        player1.style.color = "green";
        player2.style.color = "red";
        btnPlayer1.disabled = true;
        btnPlayer2.disabled = true;
    }
});

btnPlayer2.addEventListener("click", function() {
    addPoint(player2);

    if(parseInt(player2.textContent) === parseInt(select.value)) {
        player1.style.color = "red";
        player2.style.color = "green";
        btnPlayer1.disabled = true;
        btnPlayer2.disabled = true;
    }
});

btnReset.addEventListener("click", function() {
    resetPoint(player1);
    resetPoint(player2);
    resetSelect(select);
});
