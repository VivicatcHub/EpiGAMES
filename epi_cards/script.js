////////////////////////////////////////////////////////////////////////////
///   .------..------..------..------..------..------..------..------.
///   |E.--. ||P.--. ||I.--. ||G.--. ||A.--. ||M.--. ||E.--. ||S.--. |
///   | (\/) || :/\: || (\/) || :/\: || (\/) || (\/) || (\/) || :/\: |
///   | :\/: || (__) || :\/: || :\/: || :\/: || :\/: || :\/: || :\/: |
///   | '--'E|| '--'P|| '--'I|| '--'G|| '--'A|| '--'M|| '--'E|| '--'S|
///   `------'`------'`------'`------'`------'`------'`------'`------'
///   .------..------..------..------..------..------..------..------.
///   |E.--. ||P.--. ||I.--. ||C.--. ||A.--. ||R.--. ||D.--. ||S.--. |
///   | (\/) || :/\: || (\/) || :/\: || (\/) || :(): || :/\: || :/\: |
///   | :\/: || (__) || :\/: || :\/: || :\/: || ()() || (__) || :\/: |
///   | '--'E|| '--'P|| '--'I|| '--'C|| '--'A|| '--'R|| '--'D|| '--'S|
///   `------'`------'`------'`------'`------'`------'`------'`------'
///   
////////////////////////////////////////////////////////////////////////////

function get_random_card() {
    let total_weight = cards_data.reduce((sum, card) => sum + (1 / card.value), 0);
    let rand = Math.random() * total_weight;
    let cumulative_weight = 0;
    for (let card of cards_data) {
        cumulative_weight += (1 / card.value);
        if (rand < cumulative_weight) return card;
    }
}

function update_local_storage(card) {
    let cards_collected = JSON.parse(localStorage.getItem('CardsCollected')) || [];

    let existing_card = cards_collected.find(c => c.id === card.id);
    if (existing_card) {
        existing_card.count++;
    } else {
        cards_collected.push({ id: card.id, count: 1 });
    }

    localStorage.setItem('CardsCollected', JSON.stringify(cards_collected));
}

function get_stored_packs() {
    return JSON.parse(localStorage.getItem('storedPacks')) || 0;
}

function update_stored_packs(count) {
    localStorage.setItem('storedPacks', JSON.stringify(count));
}

function are_daily_quests_completed() {
    const daily_quests = JSON.parse(localStorage.getItem('DailyQuests')) || [];
    return daily_quests.every(quest => quest.completed === true);
}

function has_win_pack_today() {
    const last_win = localStorage.getItem('lastWin');
    const today = new Date().toISOString().split('T')[0];
    console.log(last_win, today);
    return last_win === today;
}

const booster = document.getElementById('booster');
const container = document.getElementById('cards-container');
const overlay = document.getElementById('overlay');
let current_index = 0;
let selected_cards = [];
let do_wait = false;

function update_overlay() {
    let stored_packs = get_stored_packs();
    const today = new Date().toISOString().split('T')[0];
    if (are_daily_quests_completed() && !has_win_pack_today()) {
        stored_packs++;
        localStorage.setItem('lastWin', today);
    }
    overlay.textContent = `${stored_packs}`;
    update_stored_packs(stored_packs);
}

update_overlay();

booster.addEventListener('click', () => {
    if (get_stored_packs() <= 0) {
        alert("You have 0 pack looser!");
        return;
    }

    container.innerHTML = '';
    current_index = 0;
    selected_cards = [];

    booster.style.display = 'none';
    container.style.visibility = 'visible';

    let count = 0;
    if (get_stored_packs() >= 10) count = 50;
    else count = 5;

    for (let i = 0; i < count; i++) {
        const random_card = get_random_card();
        selected_cards.push(random_card);
        update_local_storage(random_card);

        const img = document.createElement('img');
        img.src = random_card.image;
        img.alt = random_card.name;
        img.classList.add('card');
        img.style.zIndex = count - i;
        if (i === 0) img.style.display = 'block';
        container.appendChild(img);
    }

    update_stored_packs(get_stored_packs() - (count / 5));

    update_overlay();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 's' || e.key === 'S') {
        let cards = document.querySelectorAll('.card');
        let delay = 0;

        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('slide-out');
                setTimeout(() => {
                    card.style.display = 'none';
                }, 500);
            }, delay);

            delay += 50;
        });

        setTimeout(() => {
            booster.style.display = 'block';
            container.style.visibility = 'hidden';
        }, delay + 500);
    }
});


container.addEventListener('click', () => {
    if (!do_wait) {
        do_wait = true;
        const cards = document.querySelectorAll('.card');
        cards[current_index].classList.add('slide-out');
        setTimeout(() => {
            cards[current_index].style.display = 'none';
            current_index++;
            if (current_index < cards.length) {
                cards[current_index].style.display = 'block';
            } else {
                booster.style.display = 'block';
                container.style.visibility = 'hidden';
            }
            do_wait = false;
        }, 500);
    }
});

