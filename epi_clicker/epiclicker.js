let epicoin = 0;
let passiveIncome = 0;
let upgrades = [
    { name: "Auto Clicker", cost: 10, increment: 1 },
    { name: "Code Line", cost: 50, increment: 5 },
    { name: "Debugger", cost: 100, increment: 10 }
];

function updateDisplay() {
    document.getElementById("epicoin-count").innerText = epicoin;
    document.getElementById("passive-income").innerText = passiveIncome;
}

function clickButton() {
    epicoin += 1;
    updateDisplay();
}

function purchaseUpgrade(index) {
    if (epicoin >= upgrades[index].cost) {
        epicoin -= upgrades[index].cost;
        passiveIncome += upgrades[index].increment;
        upgrades[index].cost *= 2;
        updateDisplay();
        alert(`Purchased ${upgrades[index].name}!`);
    } else {
        alert("Not enough Epicoin!");
    }
}

function generatePassiveIncome() {
    epicoin += passiveIncome;
    updateDisplay();
}

setInterval(generatePassiveIncome, 1000);

updateDisplay();