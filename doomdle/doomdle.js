///////////////////////////////////////////////////////////////////////////////
///   ______ _____  ________  ________ _      _____        
///   |  _  \  _  ||  _  |  \/  |  _  \ |    |  ___|       
///   | | | | | | || | | | .  . | | | | |    | |__         
///   | | | | | | || | | | |\/| | | | | |    |  __|        
///   | |/ /\ \_/ /\ \_/ / |  | | |/ /| |____| |___        
///   |___/  \___/  \___/\_|  |_/___/ \_____/\____/   
///
///////////////////////////////////////////////////////////////////////////////

// INPUT
const input = document.getElementById("doomdle-input");
input.setAttribute("autocomplete", "off");

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
suggestions_container.style.display = "none";
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
            (character.name.toLowerCase().startsWith(query.toLowerCase())) &&
            !selected_characters.includes(character.name) // Without already select
    );

    // Display suggestions
    matches.forEach((character, index) => {
        const suggestion = document.createElement("div");
        suggestions_container.style.display = "block";
        suggestions_container.style.width = "287px";
        suggestions_container.style.backgroundColor = "#444444bb";
        suggestions_container.style.color = "#F81010";
        suggestions_container.style.overflowY = "scroll";
        suggestions_container.style.maxHeight = "200px";
        suggestion.style.paddingTop = "5px";
        suggestion.style.paddingBottom = "5px";
        suggestion.style.borderBottom = "1px solid #ccc";
        suggestion.textContent = `${character.name}`;
        suggestion.style.cursor = "pointer";
        suggestion.dataset.index = index;
        suggestion.addEventListener("click", () => {
            display_stats(character);
            selected_characters.push(character.name); // Add to already select
            suggestions_container.innerHTML = ""; // Clear suggestions after selection
            suggestions_container.style.display = "none";
            input.value = ""; // clear input
        });
        suggestions_container.appendChild(suggestion);
    });

    // If no match
    if (matches.length === 0 && query.trim() !== "")
        suggestions_container.style.display = "none";
    return matches; // return filtered result
}

// Display stats
function display_stats(character) {
    const box = document.createElement("div");
    let isCorrect = false;

    box.className = "stat-container";
    const statBoxes = [];

    for (const [key, value] of Object.entries(character)) {
        const stat_box = document.createElement("div");
        stat_box.className = "stat-box";
        stat_box.style.fontFamily = "EternalUI";
        stat_box.style.fontSize = "16px";

        if (typeof value === "string") {
            stat_box.innerHTML = value.replaceAll(", ", " ");
        } else {
            stat_box.innerHTML = value;
        }

        if (datas[key] == null) {
            if (value == solution.id) {
                complete_quest(4, 1);
                stat_box.classList.add("green");
                isCorrect = true;
            }
            continue;
        } else if (datas[key] == "str") {
            const v = value.split(",").map((x) => x.trim().toLowerCase());
            const solutionValues = solution[key].split(", ").map((x) => x.trim().toLowerCase());
            const matchCount = v.filter((item) => solutionValues.includes(item)).length;

            if (matchCount === v.length) {
                stat_box.classList.add("green");
            } else if (matchCount > 0) {
                stat_box.classList.add("yellow");
            }
        } else if (datas[key] == "int") {
            const guessedValue = Number(value);
            const solutionValue = Number(solution[key]);

            if (guessedValue === solutionValue) {
                stat_box.classList.add("green");
            } else if (guessedValue < solutionValue) {
                stat_box.style.backgroundImage =
                    "url('https://cdn.pixabay.com/photo/2013/07/12/12/29/arrow-145783_640.png')";
            } else {
                stat_box.style.backgroundImage =
                    "url('https://cdn.pixabay.com/photo/2013/07/12/12/29/arrow-145782_1280.png')";
            }
        }

        statBoxes.push(stat_box);
        box.appendChild(stat_box);
    }

    statBoxes.forEach((stat_box, index) => {
        stat_box.style.animationDelay = `${index * 0.05}s`;
    });
    stats_display.prepend(box);

    if (isCorrect) {
        input.disabled = true;
        input.value = "";
        input.placeholder = "New character tomorrow!";
    }
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
            selected_characters.push(selected_character.name);  // Add to list of selected
            suggestions_container.innerHTML = "";  // Clear suggestions
            input.value = "";  // Clear input
        } else if (matches.length > 0) {
            // If no one selected take first
            const first_character = matches[0];
            display_stats(first_character);
            selected_characters.push(first_character.name);
            suggestions_container.innerHTML = "";
            input.value = "";
        }
        suggestions_container.style.display = "none";
        event.preventDefault(); // Protect from default use of Enter
    }
});

// Highlight Selected Suggestion
function highlight_selected() {
    const suggestion_divs = suggestions_container.children;
    for (let i = 0; i < suggestion_divs.length; i++) {
        if (i === current_selection_index) {
            suggestion_divs[i].style.color = "#FFFFFF";
            suggestion_divs[i].style.backgroundColor = "#F81010";
        } else {
            suggestion_divs[i].style.color = "";
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
console.log(`Today ${solution["name"]}, Yesterday ${character_of_yesterday()["name"]}`);

