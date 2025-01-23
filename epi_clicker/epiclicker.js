(function(){
let epicoin = 0;
let passiveIncome = 0;
let upgrades = [
    { name: "Auto Clicker", cost: 10, increment: 1 },
    { name: "Code Line", cost: 50, increment: 5 },
    { name: "Debugger", cost: 100, increment: 10 }
];
let writingSpeed = 100;
let messageQueue = [];

function updateDisplay() {
    document.getElementById("epicoin-count").innerText = epicoin;
    document.getElementById("passive-income").innerText = passiveIncome;
}

function clickButton() {
    epicoin += 1;
    updateDisplay();
    writeCode();
}


function writeCode() {
    const codeSnippets = [
        "int putchar(int c);",
        "int puts(const char *str);",
        "size_t strlen(const char *str);",
        "void putnbr(int n);",
        "int getnbr(void);",
        "int strcmp(const char *s1, const char *s2);",
        "char *strcpy(char *dest, const char *src);",
        "char *strcat(char *dest, const char *src);"
    ];
    const randomSnippet = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
    let codeDisplay = document.getElementById("code-display");
    codeDisplay.innerText += randomSnippet + "\n";
    setTimeout(() => {
        codeDisplay.scrollTop = codeDisplay.scrollHeight;
    }, 0);
}

function purchaseUpgrade(index) {
    if (epicoin >= upgrades[index].cost) {
        epicoin -= upgrades[index].cost;
        passiveIncome += upgrades[index].increment;
        upgrades[index].cost *= 2;
        updateDisplay();
        showMessage(`Purchased ${upgrades[index].name}!`);
    } else {
        showMessage(`Not enough coin to buy ${upgrades[index].name}!`);
    }
}

function showMessage(message) {
    messageQueue.push(message);
    if (messageQueue.length === 1) {
        displayNextMessage();
    }
}

function displayNextMessage() {
    if (messageQueue.length > 0) {
        const message = messageQueue[0];
        const messageElement = document.createElement("div");
        messageElement.className = "scrolling-message";
        messageElement.innerText = message;
        document.body.appendChild(messageElement);

        messageElement.addEventListener("animationend", () => {
            document.body.removeChild(messageElement);let epicoin = 0;
            let passiveIncome = 0;
            let upgrades = [
                { name: "Auto Clicker", cost: 10, increment: 1 },
                { name: "Code Line", cost: 50, increment: 5 },
                { name: "Debugger", cost: 100, increment: 10 }
            ];
            let writingSpeed = 100;
            let messageQueue = [];
            
            function updateDisplay() {
                document.getElementById("epicoin-count").innerText = epicoin;
                document.getElementById("passive-income").innerText = passiveIncome;
            }
            
            function clickButton() {
                epicoin += 1;
                updateDisplay();
                writeCode();
            }
            
            function writeCode() {
                const codeSnippets = [
                    "int putchar(int c);",
                    "int puts(const char *str);",
                    "size_t strlen(const char *str);",
                    "void putnbr(int n);",
                    "int getnbr(void);",
                    "int strcmp(const char *s1, const char *s2);",
                    "char *strcpy(char *dest, const char *src);",
                    "char *strcat(char *dest, const char *src);"
                ];
                const randomSnippet = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
                let codeDisplay = document.getElementById("code-display");
                codeDisplay.innerText += randomSnippet + "\n";
                setTimeout(() => {
                    codeDisplay.scrollTop = codeDisplay.scrollHeight;
                }, 0);
            }
            
            function purchaseUpgrade(index) {
                if (epicoin >= upgrades[index].cost) {
                    epicoin -= upgrades[index].cost;
                    passiveIncome += upgrades[index].increment;
                    upgrades[index].cost *= 2;
                    updateDisplay();
                    showMessage(`Purchased ${upgrades[index].name}!`);
                } else {
                    showMessage(`Not enough coin to buy ${upgrades[index].name}!`);
                }
            }
            
            function showMessage(message) {
                messageQueue.push(message);
                if (messageQueue.length === 1) {
                    displayNextMessage();
                }
            }
            
            function displayNextMessage() {
                if (messageQueue.length > 0) {
                    const message = messageQueue[0];
                    const messageElement = document.createElement("div");
                    messageElement.className = "scrolling-message";
                    messageElement.innerText = message;
                    document.body.appendChild(messageElement);
            
                    messageElement.addEventListener("animationend", () => {
                        document.body.removeChild(messageElement);
                        messageQueue.shift();
                        displayNextMessage();
                    });
                }
            }
            
            function generatePassiveIncome() {
                epicoin += passiveIncome;
                updateDisplay();
            }
            
            setInterval(generatePassiveIncome, 1000);
            
            updateDisplay();
            messageQueue.shift();
            displayNextMessage();
        });
    }
}

function generatePassiveIncome() {
    epicoin += passiveIncome;
    updateDisplay();
}


document.getElementById('click').addEventListener('click', clickButton);
document.getElementById('acupgrade').addEventListener('click', function(){
    purchaseUpgrade(0)
});
document.getElementById('codelineupgrade').addEventListener('click', function(){
    purchaseUpgrade(1)
});

document.getElementById('debuggrade').addEventListener('click', function(){
    purchaseUpgrade(2)
});
setInterval(generatePassiveIncome, 1000);

updateDisplay();
})();
