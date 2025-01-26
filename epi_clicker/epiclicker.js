/////////////////////////////////////////////////////////////////////////////////////////////
///   ___________      .__  ________    _____      _____  ___________ _________
///   \_   _____/_____ |__|/  _____/   /  _  \    /     \ \_   _____//   _____/
///    |    __)_\____ \|  /   \  ___  /  /_\  \  /  \ /  \ |    __)_ \_____  \ 
///    |        \  |_> >  \    \_\  \/    |    \/    Y    \|        \/        \
///   /_______  /   __/|__|\______  /\____|__  /\____|__  /_______  /_______  /
///           \/|__|              \/         \/         \/        \/        \/ 
///
///   ___________      .___________ .__  .__        __                         
///   \_   _____/_____ |__\_   ___ \|  | |__| ____ |  | __ ___________         
///    |    __)_\____ \|  /    \  \/|  | |  |/ ___\|  |/ // __ \_  __ \        
///    |        \  |_> >  \     \___|  |_|  \  \___|    <\  ___/|  | \/        
///   /_______  /   __/|__|\______  /____/__|\___  >__|_ \\___  >__|           
///           \/|__|              \/             \/     \/    \/               
///   
/////////////////////////////////////////////////////////////////////////////////////////////

// Complete quest
function complete_quest(id, number) {
    // Find datas in LocalStorage
    let dailyQuests = JSON.parse(localStorage.getItem("DailyQuests")) || [];

    // Find quest with id 
    dailyQuests = dailyQuests.map(quest => {
        if (quest.name.id === id) {
            if (quest.name.number > 0) {
                quest.name.number -= number;
            }
            if (quest.name.number <= 0) {
                quest.name.number = 0;
                quest.completed = true; // Completed
            }
        }
        return quest;
    });

    localStorage.setItem("DailyQuests", JSON.stringify(dailyQuests));
}

(function () {
    let epicoin = 0;
    let passiveIncome = 0;
    let upgrades = [
        { name: "Auto Clicker", cost: 10, increment: 1 },
        { name: "Code Line", cost: 50, increment: 5 },
        { name: "Debugger", cost: 100, increment: 10 },
        { name: "Vivicaty's Help", cost: 1000, increment: 100 },
    ];
    let writingSpeed = 100;
    let message_queue = [];

    function updateDisplay() {
        document.getElementById("epicoin-count").innerText = epicoin;
        document.getElementById("passive-income").innerText = passiveIncome;
    }

    function clickButton() {
        epicoin += 1;
        complete_quest(1, 1);
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
            complete_quest(2, 1);
            passiveIncome += upgrades[index].increment;
            upgrades[index].cost *= 2;
            updateDisplay();
            showMessage(`Purchased ${upgrades[index].name}!`);
        } else {
            showMessage(`Not enough coin to buy ${upgrades[index].name}!`);
        }
    }

    function showMessage(message) {
        message_queue.push(message);
        if (message_queue.length === 1) {
            displayNextMessage();
        }
    }

    function displayNextMessage() {
        if (message_queue.length > 0) {
            // Find same messages
            const current_message = message_queue[0];
            let count = 1;
            for (let i = 1; i < message_queue.length; i++) {
                if (message_queue[i] === current_message) {
                    count++;
                } else {
                    break; // New find
                }
            }

            // Display with count
            const message_to_show = count > 1 ? `${current_message} x${count}` : current_message;

            // Display message
            const message_element = document.createElement("div");
            message_element.className = "scrolling-message";
            message_element.innerText = message_to_show;
            document.body.appendChild(message_element);

            message_element.addEventListener("animationend", () => {
                document.body.removeChild(message_element);
                updateDisplay();
                // Clear queue
                message_queue.splice(0, count);
                displayNextMessage(); // Display next
            });
        }
    }

    function generatePassiveIncome() {
        epicoin += passiveIncome;
        complete_quest(1, passiveIncome);
        updateDisplay();
    }

    document.getElementById('click').addEventListener('click', clickButton);
    document.getElementById('acupgrade').addEventListener('click', function () {
        purchaseUpgrade(0);
    });
    document.getElementById('codelineupgrade').addEventListener('click', function () {
        purchaseUpgrade(1);
    });
    document.getElementById('debuggrade').addEventListener('click', function () {
        purchaseUpgrade(2);
    });

    setInterval(generatePassiveIncome, 1000);

    updateDisplay();
})();
