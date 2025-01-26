/////////////////////////////////////////////////////////////////////////////////////////////
///   
///   ___________      .__  ________    _____      _____  ___________ _________    
///   \_   _____/_____ |__|/  _____/   /  _  \    /     \ \_   _____//   _____/    
///    |    __)_\____ \|  /   \  ___  /  /_\  \  /  \ /  \ |    __)_ \_____  \     
///    |        \  |_> >  \    \_\  \/    |    \/    Y    \|        \/        \    
///   /_______  /   __/|__|\______  /\____|__  /\____|__  /_______  /_______  /    
///           \/|__|              \/         \/         \/        \/        \/     
///
///   _________  ________    _______________________  _____________________________
///   \_   ___ \ \_____  \   \      \__    ___/  _  \ \_   ___ \__    ___/   _____/
///   /    \  \/  /   |   \  /   |   \|    | /  /_\  \/    \  \/ |    |  \_____  \ 
///   \     \____/    |    \/    |    \    |/    |    \     \____|    |  /        \
///    \______  /\_______  /\____|__  /____|\____|__  /\______  /|____| /_______  /
///           \/         \/         \/              \/        \/                \/ 
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

complete_quest(3, 1);