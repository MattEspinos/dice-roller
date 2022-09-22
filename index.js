function RollSixSidedDice() {
    document.getElementById("dice").autofocus;
    const rolls = [];
    for (let i = 0; i < 5; i++){
        rolls.push(Math.floor(Math.random()*6) + 1)
    }
    document.getElementById("dice").value = rolls
}