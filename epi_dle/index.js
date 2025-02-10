const translations = {
    en: {
        subtitle: "Guess Epitech student of today",
        characters: "Characters",
        quotes: "Quotes",
        images: "Images",
        wantMore: "Want more?",
        settings: "Settings",
        goToSettings: "Add/Modify Datas",
        close: "Close",
        lang: "🇫🇷",
        wip: "Work in Progress..."
    },
    fr: {
        subtitle: "Devine l'étudiant d'Epitech du jour",
        characters: "Personnages",
        quotes: "Citations",
        images: "Images",
        wantMore: "Vous en voulez encore ?",
        settings: "Paramètres",
        goToSettings: "Ajouter/Modifie les données",
        close: "Fermer",
        lang: "🇬🇧",
        wip: "En travaux..."
    }
};

function update_language(lang) {
    document.getElementById("subtitle").innerText = translations[lang].subtitle;
    document.getElementById("characters").innerText = translations[lang].characters;
    document.getElementById("quotes").innerText = translations[lang].quotes;
    document.getElementById("images").innerText = translations[lang].images;
    document.getElementById("wantMore").innerText = translations[lang].wantMore;
    document.getElementById("settings").innerText = translations[lang].settings;
    document.getElementById("lang").innerText = translations[lang].lang;
    document.getElementById("goToSettings").innerText = translations[lang].goToSettings;
    document.getElementById("closePopup").innerText = translations[lang].close;
    document.getElementById("wip1").innerText = translations[lang].wip;
    document.getElementById("wip2").innerText = translations[lang].wip;
    document.getElementById("wip3").innerText = translations[lang].wip;
    localStorage.setItem("language", lang);
}

function toggle_popup() {
    let popup = document.getElementById("popup-container");
    popup.style.display = popup.style.display === "flex" ? "none" : "flex";
}

function toggle_language() {
    let current_lang = localStorage.getItem("language") || "en";
    let new_lang = current_lang === "en" ? "fr" : "en";
    document.documentElement.lang = new_lang;
    update_language(new_lang);
}

document.addEventListener("DOMContentLoaded", () => {
    let lang = localStorage.getItem("language") || "en";
    update_language(lang);
});