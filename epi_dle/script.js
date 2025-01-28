/////////////////////////////////////////////////////////////////////////////////////////////
///   ___________      .__  ________    _____      _____  ___________ _________
///   \_   _____/_____ |__|/  _____/   /  _  \    /     \ \_   _____//   _____/
///    |    __)_\____ \|  /   \  ___  /  /_\  \  /  \ /  \ |    __)_ \_____  \ 
///    |        \  |_> >  \    \_\  \/    |    \/    Y    \|        \/        \
///   /_______  /   __/|__|\______  /\____|__  /\____|__  /_______  /_______  /
///           \/|__|              \/         \/         \/        \/        \/ 
///
///   ___________      .__________  .____     ___________                      
///   \_   _____/_____ |__\______ \ |    |    \_   _____/                      
///    |    __)_\____ \|  ||    |  \|    |     |    __)_                       
///    |        \  |_> >  ||    `   \    |___  |        \                      
///   /_______  /   __/|__/_______  /_______ \/_______  /                      
///           \/|__|              \/        \/        \/   
///   
/////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
/// MAIN VARIABLES
////////////////////////////////////////////////////////////

// INPUT
const input = document.getElementById("character-input");
input.setAttribute("autocomplete", "off");  // Whitout suggestions

// STATS
const stats_display = document.getElementById("stats-display");
stats_display.style.display = "flex";
stats_display.style.flexDirection = "column";

// SUGGESTIONS
const suggestions_container = document.createElement("div");
suggestions_container.id = "suggestions";
suggestions_container.style.position = "absolute";
suggestions_container.style.backgroundColor = "#f4f4f4";
suggestions_container.style.border = "1px solid #ccc";
suggestions_container.style.borderRadius = "5px";
suggestions_container.style.marginTop = "5px";
suggestions_container.style.zIndex = "1000";
document.body.appendChild(suggestions_container);

// List with char already choosen
let selected_characters = [];
let current_selection_index = -1; // Index of suggestion

////////////////////////////////////////////////////////////
/// MAIN FUNCTIONS
////////////////////////////////////////////////////////////

// Update Suggestions
function update_suggestions(query) {
    // Clear past suggestions
    suggestions_container.innerHTML = "";
    current_selection_index = -1;  // Clear Selection

    // Filter by name or pseudo without already select
    const matches = characters.filter(
        (character) =>
            (character.first_name.toLowerCase().startsWith(query.toLowerCase()) || character.last_name.toLowerCase().startsWith(query.toLowerCase()) ||
                character.pseudo.toLowerCase().startsWith(query.toLowerCase())) &&
            !selected_characters.includes(character.id) // Without already select
    );

    // Display suggestions
    matches.forEach((character, index) => {
        const suggestion = document.createElement("div");
        suggestion.textContent = `${character.first_name} ${character.last_name} (${character.pseudo})`;
        suggestion.style.padding = "5px";
        suggestion.style.cursor = "pointer";
        suggestion.dataset.index = index;
        suggestion.addEventListener("click", () => {
            display_stats(character);
            selected_characters.push(character.id); // Add to already select
            suggestions_container.innerHTML = ""; // Clear suggestions after selection
            input.value = ""; // clear input
        });
        suggestions_container.appendChild(suggestion);
    });

    // If no match
    if (matches.length === 0 && query.trim() !== "") {
        const no_match = document.createElement("div");
        no_match.textContent = "Ahah noob";
        no_match.style.padding = "5px";
        no_match.style.color = "red";
        suggestions_container.appendChild(no_match);
    }
    return matches; // return filtered result
}

// Display stats
function display_stats(character) {
    const box = document.createElement("div");
    box.className = "stat-container";

    // Box for each stats
    for (const [key, value] of Object.entries(character)) {
        if (datas[key] == null) {
            if (value == solution.id) {
                complete_quest(0, 1);
                complete_quest(4, 1);
            }
            continue;
        }
        const stat_box = document.createElement("div");
        stat_box.className = "stat-box";
        stat_box.innerHTML = value.replaceAll(",", " ");
        if (datas[key] == "str") {
            const v = value.split(",");
            let count = 0;

            for (let i = 0; i < v.length; i++) {
                if (solution[key].split(",").includes(v[i])) {
                    count++;
                }
            }
            if (count == v.length) {
                stat_box.classList.add("green");
            } else if (count > 0) {
                stat_box.classList.add("yellow");
            }
        } else if (datas[key] == "date") {
            // Convert dates
            const [day1, month1, year1] = value.split("/").map(Number);
            const [day2, month2, year2] = solution[key].split("/").map(Number);

            const d1 = new Date(year1, month1 - 1, day1);
            const d2 = new Date(year2, month2 - 1, day2);

            // Compare dates
            if (d1 < d2) {
                stat_box.style.backgroundImage =
                "url('https://cdn.pixabay.com/photo/2013/07/12/12/29/arrow-145783_640.png')";
            } else if (d2 < d1) {
                stat_box.style.backgroundImage =
                "url('https://cdn.pixabay.com/photo/2013/07/12/12/29/arrow-145782_1280.png')";
            } else {
                stat_box.classList.add("green");
            }
        } else if (datas[key] == "int") {
            const v1 = Number(value);
            const v2 = Number(solution[key]);

            if (v1 < v2) {
                stat_box.style.backgroundImage =
                    "url('https://cdn.pixabay.com/photo/2013/07/12/12/29/arrow-145783_640.png')";
            } else if (v2 < v1) {
                stat_box.style.backgroundImage =
                    "url('https://cdn.pixabay.com/photo/2013/07/12/12/29/arrow-145782_1280.png')";
            } else {
                stat_box.classList.add("green");
            }
        }
        // Ajust images
        stat_box.style.backgroundSize = "contain";
        stat_box.style.backgroundRepeat = "no-repeat";
        stat_box.style.backgroundPosition = "center";
        box.appendChild(stat_box);
    }
    stats_display.appendChild(box);
}

// If suggestions clicked
input.addEventListener("input", function () {
    const query = this.value.trim();
    if (query) {
        const matches = update_suggestions(query);
        input.dataset.matches = JSON.stringify(matches);
    } else {
        suggestions_container.innerHTML = ""; // clear suggestions
    }
});

// If Keypressed
input.addEventListener("keydown", function (event) {
    const matches = JSON.parse(input.dataset.matches || "[]");

    if (event.key === "ArrowDown") {  // Arrow down
        if (current_selection_index < matches.length - 1) {
            current_selection_index++;
            highlight_selected();
        }
        event.preventDefault(); // Protect from default use of Arrow Down
    }
    if (event.key === "ArrowUp") {  // Arrow up
        if (current_selection_index > 0) {
            current_selection_index--;
            highlight_selected();
        }
        event.preventDefault();  // Protect from default use of Enter
    }
    if (event.key === "Enter") { // If key is Enter
        if (matches.length > 0 && current_selection_index >= 0) {
            const selected_character = matches[current_selection_index];
            display_stats(selected_character);
            selected_characters.push(selected_character.id);  // Add to list of selected
            suggestions_container.innerHTML = "";  // Clear suggestions
            input.value = "";  // Clear input
        } else if (matches.length > 0) {
            // If no one selected take first
            const first_character = matches[0];
            display_stats(first_character);
            selected_characters.push(first_character.id);
            suggestions_container.innerHTML = "";
            input.value = "";
        }
        event.preventDefault(); // Protect from default use of Enter
    }
});

// Highlight Selected Suggestion
function highlight_selected() {
    const suggestion_divs = suggestions_container.children;
    for (let i = 0; i < suggestion_divs.length; i++) {
        if (i === current_selection_index) {
            suggestion_divs[i].style.backgroundColor = "#ddd";
        } else {
            suggestion_divs[i].style.backgroundColor = "";
        }
    }
}

// Place suggestions div
input.addEventListener('focus', function () {
    const inputRect = input.getBoundingClientRect();
    suggestions_container.style.top = `${inputRect.bottom + window.scrollY}px`;
    suggestions_container.style.left = `${inputRect.left + window.scrollX}px`;
});

function character_of_the_day() {
    const date = new Date();
    const day_hash = date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate(); // Unic number every day
    const index = day_hash % characters.length; // Choose daily character
    if (characters[index]["id"] == character_of_yesterday()["id"]) {
        index = (index + 1) % characters.length;
    }
    return characters[index]
}

function character_of_yesterday() {
    const date = new Date();
    date.setDate(date.getDate() - 1);
    const day_hash = date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate();
    const index = day_hash % characters.length;
    return characters[index];
}

// Init
generate_daily_quests();
display_daily_quests();
let solution = character_of_the_day();
console.log(`Today ${solution["pseudo"]}, Yesterday ${character_of_yesterday()["pseudo"]}`);