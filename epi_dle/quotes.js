/////////////////////////////////////////////////////////////////////////////////////////////
///      ___  ____ ____   ____   ____  ___ ___    ___  _____        
///     /  _]|    \    | /    | /    ||   |   |  /  _]/ ___/        
///    /  [_ |  o  )  | |   __||  o  || _   _ | /  [_(   \_         
///   |    _]|   _/|  | |  |  ||     ||  \_/  ||    _]\__  |        
///   |   [_ |  |  |  | |  |_ ||  _  ||   |   ||   [_ /  \ |        
///   |     ||  |  |  | |     ||  |  ||   |   ||     |\    |        
///   |_____||__| |____||___,_||__|__||___|___||_____| \___|        
///                                                                 
///      ___  ____ ____   __  _      ____   __  __  _    ___  ____  
///     /  _]|    \    | /  ]| |    |    | /  ]|  |/ ]  /  _]|    \ 
///    /  [_ |  o  )  | /  / | |     |  | /  / |  ' /  /  [_ |  D  )
///   |    _]|   _/|  |/  /  | |___  |  |/  /  |    \ |    _]|    / 
///   |   [_ |  |  |  /   \_ |     | |  /   \_ |     \|   [_ |    \ 
///   |     ||  |  |  \     ||     | |  \     ||  .  ||     ||  .  \
///   |_____||__| |____\____||_____||____\____||__|\_||_____||__|\_|
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

function create_pop_up() {
    const popup_container = document.createElement("div");
    popup_container.className = "end_popup";

    const popup = document.createElement("div");
    popup.style.background = "white";
    popup.style.padding = "20px";
    popup.style.borderRadius = "10px";
    popup.style.textAlign = "center";
    popup.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.3)";

    const message = document.createElement("p");
    message.textContent = `Bravo ! C'était bien ${solution} qui a prononcé cette phrase culte : "${quote_of_the_day()["quote"]}"`;
    message.style.margin = "15px 0";

    const close_button = document.createElement("button");
    close_button.textContent = "IMAGES";
    close_button.className = "game-card";

    close_button.onclick = () => {
        location.href = 'images.html';
    };

    popup.appendChild(message);
    popup.appendChild(close_button);
    popup_container.appendChild(popup);

    popup_container.onclick = (event) => {
        if (event.target === popup_container) {
            document.body.removeChild(popup_container);
        }
    };
    document.body.appendChild(popup_container);
}

// Display stats
function display_stats(character) {
    const box = document.createElement("div");
    box.className = "stat-container";
    const stat_boxes = [];
    let isCorrect = false;
    const value = `${character["last_name"]} ${character["first_name"]}`;

    const stat_box = document.createElement("div");
    stat_box.className = "stat-box";
    stat_box.innerHTML = value;
    if (value == solution) {
        isCorrect = true;
        complete_quest(0, 1);
        complete_quest(4, 1);
        stat_box.classList.add("green");
    }
    // Ajust images
    stat_box.style.backgroundSize = "contain";
    stat_box.style.backgroundRepeat = "no-repeat";
    stat_box.style.backgroundPosition = "center";
    stat_box.style.height = "50px";
    stat_boxes.push(stat_box);
    box.appendChild(stat_box);
    stats_display.prepend(box);

    if (isCorrect) {
        input.disabled = true;
        input.value = "";
        input.placeholder = "New character tomorrow!";
        create_pop_up();
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

function quote_of_the_day() {
    const date = new Date();
    const day_hash = date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate(); // Unic number every day
    let index = day_hash % quotes.length; // Choose daily character
    if (quotes[index]["id"] == quote_of_yesterday()["id"]) {
        index = (index + 1) % quotes.length;
    }
    return quotes[index]
}

function quote_of_yesterday() {
    const date = new Date();
    date.setDate(date.getDate() - 1);
    const day_hash = date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate();
    const index = day_hash % quotes.length;
    return quotes[index];
}

// Init
generate_daily_quests();
display_daily_quests();
let solution = quote_of_the_day()["author"];
document.getElementById("quote").innerHTML = `${quote_of_the_day()["quote"]}`;
console.log(`Today "${quote_of_the_day()["quote"]}" by ${solution}, Yesterday "${quote_of_yesterday()["quote"]}" by ${quote_of_yesterday()["author"]}`);