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
    "Collect 100 coins",
    "Win 3 games in a row",
    "Play for 30 minutes",
    "Complete a puzzle",
    "Invite a friend to play",
    "Achieve a high score of 5000",
    "Unlock a new character",
    "Craft a rare item",
    "Watch a tutorial video",
    "Customize your profile"
];

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
        progression: 0,
        completed: false
    }));

    // Save quests
    localStorage.setItem("DailyQuests", JSON.stringify(daily_quests));
    localStorage.setItem("DailyQuestDate", date);
}

// Display quests
function display_daily_quests() {
    const quests_container = document.createElement("div");
    quests_container.id = "quests-container";

    const title = document.createElement("h3");
    title.innerText = "Daily Quests";
    title.style.marginBottom = "10px";
    quests_container.appendChild(title);

    const daily_quests = JSON.parse(localStorage.getItem("DailyQuests")) || [];

    const list = document.createElement("ul");
    list.style.listStyle = "none";
    daily_quests.forEach((quest, index) => {
        const list_item = document.createElement("li");
        list_item.innerText = quest.name;
        list_item.style.marginBottom = "5px";
        list_item.style.textDecoration = quest.completed ? "line-through" : "none";

        list.appendChild(list_item);
    });

    quests_container.appendChild(list);
    document.body.appendChild(quests_container);
}

// Init
generate_daily_quests();
display_daily_quests();
