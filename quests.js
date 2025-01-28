/////////////////////////////////////////////////////////////////////////////////////////////
///   ___________      .__  ________    _____      _____  ___________ _________
///   \_   _____/_____ |__|/  _____/   /  _  \    /     \ \_   _____//   _____/
///    |    __)_\____ \|  /   \  ___  /  /_\  \  /  \ /  \ |    __)_ \_____  \ 
///    |        \  |_> >  \    \_\  \/    |    \/    Y    \|        \/        \
///   /_______  /   __/|__|\______  /\____|__  /\____|__  /_______  /_______  /
///           \/|__|              \/         \/         \/        \/        \/ 
///
///   ________         .__.__          ________                          __          
///   \______ \ _____  |__|  | ___.__. \_____  \  __ __   ____   _______/  |_  ______
///    |    |  \\__  \ |  |  |<   |  |  /  / \  \|  |  \_/ __ \ /  ___/\   __\/  ___/
///    |    `   \/ __ \|  |  |_\___  | /   \_/.  \  |  /\  ___/ \___ \  |  |  \___ \ 
///   /_______  (____  /__|____/ ____| \_____\ \_/____/  \___  >____  > |__| /____  >
///           \/     \/        \/             \__>           \/     \/            \/ 
///   
/////////////////////////////////////////////////////////////////////////////////////////////

// Quests 
const quest_pool = [
    {
        id: 0,
        name: "[DLE] - Find the character of today",
        number: 1
    },
    {
        id: 1,
        name: "[Clicker] - Make ¤ cookies",
        number: 100
    },
    {
        id: 2,
        name: "[Clicker] - Buy ¤ upgrades",
        number: 10
    },
    {
        id: 3,
        name: "[Contacts] - Look at our contacts",
        number: 1
    },
    {
        id: 4,
        name: "[DLE] - Find the character of today (in any DLE)",
        number: 1
    }
];

// Complete quest
function complete_quest(id, number) {
    if (number <= 0) {
        return;
    }

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
                if (quest.completed == false) {
                    let quests_container = document.getElementById("quests-container");
                    quests_container.animate(
                        [
                            {
                                /* Position initiale */
                                offset: 0,
                                transform: 'translate(90%, 0)'
                            },
                            {
                                /* Centre de l'écran */
                                offset: 0.2,
                                transform: 'translate(calc(50% - 50vw), 0)'
                            },
                            {
                                /* Battement au centre */
                                offset: 0.5,
                                transform: 'translate(calc(50% - 50vw), 0)'
                            },
                            {
                                /* Retour progressif à l'état normal */
                                offset: 0.8,
                                transform: 'translate(calc(50% - 50vw), 0)'
                            },
                            {
                                /* Retour à la position initiale */
                                offset: 1,
                                transform: 'translate(90%, 0)'
                            }
                        ],
                        {
                            duration: 3000
                        }
                    );
                    // quests_container.classList.remove("quests-finish");
                    // quests_container.classList.add("quests-finish");
                    // quests_container.style.animation = "3s ease-in-out heartBeat";
                }
                quest.completed = true; // Completed
            }
        }
        return quest;
    });

    localStorage.setItem("DailyQuests", JSON.stringify(dailyQuests));
    generate_daily_quests();
    display_daily_quests();
}

// Select 4 random quests
function generate_daily_quests() {
    const date = new Date().toDateString(); // Date
    const storage_date = localStorage.getItem("DailyQuestDate");

    if (storage_date === date) { // Test if quests are old
        return;
    }

    // Choose 4 firsts
    const shuffle_quests = quest_pool.sort(() => Math.random() - 0.5);
    const daily_quests = shuffle_quests.slice(0, 4).map(quest => ({
        name: quest,
        completed: false
    }));

    // Save quests
    localStorage.setItem("DailyQuests", JSON.stringify(daily_quests));
    localStorage.setItem("DailyQuestDate", date);
}

// Display quests
function display_daily_quests() {
    let quests_container = document.getElementById("quests-container");
    if (quests_container == null) {
        quests_container = document.createElement("div");
        quests_container.id = "quests-container";
        document.body.appendChild(quests_container);
    }
    quests_container.innerHTML = "";

    const title = document.createElement("h3");
    title.innerText = "Daily Quests";
    title.style.marginBottom = "10px";
    quests_container.appendChild(title);

    const daily_quests = JSON.parse(localStorage.getItem("DailyQuests")) || [];

    const list = document.createElement("ul");
    list.style.listStyle = "none";
    daily_quests.forEach((quest, index) => {
        const list_item = document.createElement("li");
        let display = quest.name.name;
        list_item.innerText = display.replace("¤", String(quest.name.number));
        list_item.style.marginBottom = "5px";
        list_item.style.textDecoration = quest.completed ? "line-through" : "none";

        list.appendChild(list_item);
    });

    quests_container.appendChild(list);
}

// Init
generate_daily_quests();
display_daily_quests();
