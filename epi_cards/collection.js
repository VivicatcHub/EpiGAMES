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

const cardsCollected = JSON.parse(localStorage.getItem('CardsCollected')) || [];
const cardsMap = Object.fromEntries(cardsCollected.map(card => [card.id, card]));
const cardsImg = Object.fromEntries(cards_data.map(card => [card.id, card]));
const Div = document.getElementById("cards-container");

for (let i = 1; i <= 86; i++) {
    let do_display = true;
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');

    if (cardsMap[i]) {
        const img = document.createElement('img');
        img.src = cardsImg[i].image;
        img.alt = `Carte ${i}`;
        img.classList.add('card-img');

        img.addEventListener('click', () => {
            const overlay = document.createElement('div');
            overlay.classList.add('overlay');

            const fullScreenImg = document.createElement('img');
            fullScreenImg.src = img.src;
            fullScreenImg.classList.add('full-screen-img');

            overlay.appendChild(fullScreenImg);
            document.body.appendChild(overlay);

            overlay.addEventListener('click', () => {
                document.body.removeChild(overlay);
            });
        });

        cardElement.appendChild(img);
    } else {
        if (i < 83) cardElement.textContent = i;
        else do_display = false;
    }

    if (do_display) Div.appendChild(cardElement);
}