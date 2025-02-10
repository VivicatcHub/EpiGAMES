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
///    ___     ____  ______   ____  _____                           
///   |   \   /    ||      | /    |/ ___/                           
///   |    \ |  o  ||      ||  o  (   \_                            
///   |  D  ||     ||_|  |_||     |\__  |                           
///   |     ||  _  |  |  |  |  _  |/  \ |                           
///   |     ||  |  |  |  |  |  |  |\    |                           
///   |_____||__|__|  |__|  |__|__| \___|                                                               
///                                                                                             
/////////////////////////////////////////////////////////////////////////////////////////////

const datas = {
    img: "img",
    id: null,
    first_name: "str",
    last_name: null,
    pseudo: "str",
    genre: "str",
    ddn: "date",
    taille: "int",
    campus: "str",
    promotion: "int",
    asso: "str"
};

const characters = [
    {
        img: "https://i.pinimg.com/736x/28/95/9c/28959c030ba3d23d564a0eee0206bb5c.jpg",
        id: 0,
        first_name: "Valentin",
        last_name: "GUINET",
        pseudo: "Vivicaty",
        genre: "M",
        ddn: "31/12/2005",
        taille: "169",
        campus: "Lyon",
        promotion: "2029",
        asso: "Delegués,Cobra,Ambassadeur,AnimeTek,HOD"
    },
    {
        img: "https://preview.redd.it/what-kind-of-outfit-is-mikey-wearing-here-v0-atmshue01ye91.jpg?width=720&format=pjpg&auto=webp&s=ac3f4c78500248948cd9153b905babcebb59c808",
        id: 1,
        first_name: "Léonard",
        last_name: "LEROY",
        pseudo: "Léo",
        genre: "M",
        ddn: "12/02/2006",
        taille: "171",
        campus: "Lyon",
        promotion: "2029",
        asso: "Cobra,AnimeTek",
    },
    {
        img: "https://files.catbox.moe/bglc0m.png",
        id: 2,
        first_name: "Evan",
        last_name: "LAFOLIE",
        pseudo: "LORAY",
        genre: "M",
        ddn: "15/05/2006",
        taille: "178",
        campus: "Lyon",
        promotion: "2029",
        asso: "Delegués,AnimeTek,JAM",
    },
    {
        img: "https://files.catbox.moe/lfr9zt.png",
        id: 3,
        first_name: "Ferréol",
        last_name: "JOURDAIN DE MUIZON",
        pseudo: "Fefe",
        genre: "M",
        ddn: "15/04/2004",
        taille: "183",
        campus: "Lyon",
        promotion: "2029",
        asso: "Ambassadeur,AnimeTek,HOD",
    },
    {
        img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        id: 4,
        first_name: "Kylian",
        last_name: "WASZAK",
        pseudo: "K.",
        genre: "M",
        ddn: "20/06/2006",
        taille: "181",
        campus: "Lyon",
        promotion: "2029",
        asso: "AnimeTek,Backtrackers",
    },
    {
        img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        id: 5,
        first_name: "Morgan",
        last_name: "BRETHOME",
        pseudo: ".so",
        genre: "M",
        ddn: "08/05/2006",
        taille: "175",
        campus: "Lyon",
        promotion: "2029",
        asso: "AnimeTek,Backtrackers",
    },
    {
        img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        id: 6,
        first_name: "Gauthier",
        last_name: "CANDELIER",
        pseudo: "NightFox",
        genre: "M",
        ddn: "12/05/2005",
        taille: "187",
        campus: "Lyon",
        promotion: "2029",
        asso: "AnimeTek,GameTek",
    },
    {
        img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        id: 7,
        first_name: "Sacha",
        last_name: "DEFOSSEZ",
        pseudo: "DominusMalfrus",
        genre: "M",
        ddn: "31/08/2006",
        taille: "0",
        campus: "Lyon",
        promotion: "2029",
        asso: "AnimeTek",
    },
    {
        img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        id: 8,
        first_name: "Alexandre",
        last_name: "KUBIACZYK",
        pseudo: "Az0xI",
        genre: "M",
        ddn: "04/03/2006",
        taille: "0",
        campus: "Lyon",
        promotion: "2029",
        asso: "AnimeTek",
    },
    {
        img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        id: 9,
        first_name: "Nadal",
        last_name: "BERTHELON",
        pseudo: "Kuraby",
        genre: "M",
        ddn: "01/01/2000",
        taille: "0",
        campus: "Lyon",
        promotion: "2029",
        asso: "AnimeTek",
    },
    {
        img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        id: 10,
        first_name: "Esteban",
        last_name: "HAZANAS",
        pseudo: "Kuku the Axolotl",
        genre: "M",
        ddn: "13/12/2005",
        taille: "0",
        campus: "Lyon",
        promotion: "2029",
        asso: "AnimeTek",
    },
    {
        img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        id: 11,
        first_name: "Hugo",
        last_name: "ARNAL",
        pseudo: "Kuku the Axolotl",
        genre: "M",
        ddn: "01/01/2000",
        taille: "0",
        campus: "Lyon",
        promotion: "2029",
        asso: "AnimeTek",
    },
    {
        img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        id: 12,
        first_name: "Bastien",
        last_name: "SUKIENNIK",
        pseudo: "Chocolatine-sama",
        genre: "M",
        ddn: "01/01/2000",
        taille: "0",
        campus: "Lyon",
        promotion: "2029",
        asso: "AnimeTek",
    },
    {
        img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        id: 13,
        first_name: "Hector",
        last_name: "CORDAT-BOURSIAC",
        pseudo: "Totor2497",
        genre: "M",
        ddn: "01/01/2000",
        taille: "0",
        campus: "Lyon",
        promotion: "2029",
        asso: "AnimeTek",
    },
    {
        img: "https://i.ytimg.com/vi/N4aRRas6HZY/sddefault.jpg",
        id: 14,
        first_name: "Guillaume",
        last_name: "NAZARET",
        pseudo: "Guigui",
        genre: "M",
        ddn: "27/06/2006",
        taille: "179",
        campus: "Lyon",
        promotion: "2029",
        asso: "AnimeTek,Ambassadeur,HOD,GameTek",
    }
];

const quotes = [
    {
        id: 0,
        quote: "OMG ?? POV : moi quand str - 48",
        author: "DEFOSSEZ Sacha",
        destin: "KUBIACZYK Alexandre"
    },
    {
        id: 1,
        quote: "Eggs beacon grits sausage",
        author: "DE MUIZON Ferréol",
        destin: "Nobody"
    },
    {
        id: 2,
        quote: "A demain",
        author: "DEFOSSEZ Sacha",
        destin: "BERTHELON Nadal"
    },
    {
        id: 3,
        quote: "Ahahah 37",
        author: "LEROY Léonard",
        destin: "GUINET Valentin"
    },
    {
        id: 4,
        quote: "Jvai te violer esteban",
        author: "DEFOSSEZ Sacha",
        destin: "HAZANAS Esteban"
    },
    {
        id: 5,
        quote: "Enculé va je t'ai répondu ma daronne a vu le gif sale chien va",
        author: "ARNAL Hugo",
        destin: "HAZANAS Esteban"
    },
    {
        id: 6,
        quote: "Toi quand on veut accéder à ton nom, on est obligé d’utiliser une flèche au lieu d’un point parce que t’es un pointeur",
        author: "GUINET Valentin",
        destin: "LAFOLIE Loray"
    },
    {
        id: 7,
        quote: "Vasy elle me fait peur",
        author: "SUKIENNIK Bastien",
        destin: "DEFOSSEZ Sacha"
    },
    {
        id: 8,
        quote: "Enlève tes chaussures que j'te leche les iepds",
        author: "LEROY Léonard",
        destin: "DE MUIZON Ferréol"
    },
    {
        id: 9,
        quote: "J'ai la gorge sèche en mode je me suis pris des singeries par bakary",
        author: "BERTHELON Nadal",
        destin: "DEFOSSEZ Sacha"
    },
    {
        id: 10,
        quote: "Fils bleue, fils rouge, fils vert… Pour toi ça veut dire « Bonjour » ?",
        author: "LEROY Léonard",
        destin: "LAFOLIE Evan"
    },
    {
        id: 11,
        quote: "Dès que ça n’a plus de seins ça sait plus",
        author: "GUINET Valentin",
        destin: "LAFOLIE Evan"
    },
    {
        id: 12,
        quote: "C’est fou de comparer mon cerveau a du Ray-Tracing",
        author: "LAFOLIE Evan",
        destin: "GUINET Valentin"
    },
    {
        id: 13,
        quote: "Je s'appelle root",
        author: "GUINET Valentin",
        destin: "Nobody"
    },
    {
        id: 14,
        quote: "En soit, si t'es raciste ou gay, ça donne déjà une bonne info sur qui tu est",
        author: "LAFOLIE Evan",
        destin: "GUINET Valentin"
    },
    {
        id: 15,
        quote: "Là tu ken ma grosse caisse",
        author: "LAFOLIE Evan",
        destin: "LEROY Léonard"
    },
    {
        id: 16,
        quote: "Après la mort, j’aimerais spectate la vie",
        author: "GUINET Valentin",
        destin: "LAFOLIE Evan"
    },
    {
        id: 17,
        quote: "Je pensais vraiment pendant un moment que je n’avais rien a manger chez moi. Mais mon cerveau est assez intelligent pour ouvrir tout les placards de la cuisine pour y trouver un pôt de pâtes",
        author: "LAFOLIE Evan",
        destin: "DE MUIZON Ferréol"
    },
    {
        id: 18,
        quote: "Mais moi, je suis une tsundere!",
        author: "HAZANAS Esteban",
        destin: "DEFOSSEZ Sacha"
    },
    {
        id: 19,
        quote: "Real",
        author: "HAZANAS Esteban",
        destin: "Nobody"
    },
    {
        id: 20,
        quote: "T’as volé un fromage là?!",
        author: "LAFOLIE Evan",
        destin: "DE MUIZON Ferréol"
    },
    {
        id: 21,
        quote: "Tu veux pas que je te suce la bite tant qu'on y est",
        author: "ARNAL Hugo",
        destin: "SUKIENNIK Bastien"
    },
    {
        id: 22,
        quote: "Nuggets",
        author: "HAZANAS Esteban",
        destin: "Nobody"
    },
    {
        id: 22,
        quote: "Nuggets",
        author: "HAZANAS Esteban",
        destin: "Nobody"
    },
    {
        id: 23,
        quote: "Ca casse pas trois pattes à un connard",
        author: "CORDAT-BOURSIAC Hector",
        destin: "LEROY Léonard"
    },
    {
        id: 24,
        quote: "Moi quand slurp slurp",
        author: "LEROY Léonard",
        destin: "LAFOLIE Evan"
    },
    {
        id: 25,
        quote: "Tu l’as piston cup la flash mcqueen?",
        author: "LEROY Léonard",
        destin: "LAFOLIE Evan"
    },
    {
        id: 26,
        quote: "Mdrr Sam pk tu met cette react? T’as pas pu terminator la Sarah Connor?",
        author: "LEROY Léonard",
        destin: "LAFOLIE Evan"
    },
    {
        id: 27,
        quote: "Naah j’reste humble 😌 vice-président, met mes quote sale C4 ambulant",
        author: "LEROY Léonard",
        destin: "LAFOLIE Evan"
    },
    {
        id: 28,
        quote: "Y'a mathis qui vas lui Bumblebee le Megatron",
        author: "KUBIACZYK Alexandre",
        destin: "LAFOLIE Evan"
    },
    {
        id: 29,
        quote: "Tkt, c’est un int du moyen orient",
        author: "LEROY Léonard",
        destin: "LAFOLIE Evan"
    },
    {
        id: 30,
        quote: "Je suis d’accord que quelqu’un s’assoit sur mon visage mais il faut que ce soit une meuf",
        author: "GUINET Valentin",
        destin: "LAFOLIE Evan"
    },
    {
        id: 31,
        quote: "Rien à foutre de ta dépression, devient un loup alpha et hurle la nuit à poil dehors",
        author: "LEROY Léonard",
        destin: "BERTHELON Nadal"
    },
    {
        id: 32,
        quote: "Les gars j'suis un meme en fait, y a + de quotes de moi dans ce channel que d'eau au mali",
        author: "LEROY Léonard",
        destin: "Nobody"
    },
    {
        id: 33,
        quote: "Ils comblent l'eau manquante par la semence de leur chef de village c pour ça",
        author: "LEROY Léonard",
        destin: "BERTHELON Nadal"
    },
    {
        id: 34,
        quote: "Ta gueule, Loray !",
        author: "LEROY Léonard",
        destin: "LAFOLIE Evan"
    },
    {
        id: 34,
        quote: "Euh les gars, vous avez songez à, genre, mourir?",
        author: "LAFOLIE Evan",
        destin: "BERTHELON Nadal"
    },
    {
        id: 35,
        quote: "Je reviens, je vais donner un tupperware",
        author: "CORDAT-BOURSIAC Hector",
        destin: "DEFOSSEZ Sacha"
    },
    {
        id: 36,
        quote: "Elle est plus mouillé que la mouille, alors imagine quand elle mouille",
        author: "LEROY Léonard",
        destin: "LAFOLIE Evan"
    },
    {
        id: 37,
        quote: "Non mais ya pas Evan ou Léo, tu veux que j'insulte qui ?",
        author: "GUINET Valentin",
        destin: "DE MUIZON Ferréol"
    },
    {
        id: 38,
        quote: "Faut que je trouve un village avec un mineur",
        author: "LAFOLIE Evan",
        destin: "DE MUIZON Ferréol"
    },
    {
        id: 39,
        quote: "J’vais péter dans ma main et j’vais te frapper après",
        author: "LAFOLIE Evan",
        destin: "GUINET Valentin"
    },
    {
        id: 40,
        quote: "Parce que moi, j'aime bien les trois doigts",
        author: "LEROY Léonard",
        destin: "LAFOLIE Evan"
    },
    {
        id: 41,
        quote: "Viens pour le follow up ou j'te follow up and down",
        author: "LEROY Léonard",
        destin: "GUINET Valentin"
    },
    {
        id: 42,
        quote: "J'vais te gcc a.out",
        author: "LEROY Léonard",
        destin: "GUINET Valentin"
    },
    {
        id: 43,
        quote: "Faudrait penser à trouver une maison de retraite pour lui",
        author: "LEROY Léonard",
        destin: "DE MUIZON Ferréol"
    },
    {
        id: 44,
        quote: "Si il veut que je le suce je le suce",
        author: "LAFOLIE Evan",
        destin: "DE MUIZON Ferréol"
    },
    {
        id: 45,
        quote: "Y a pas God? Tu sais? Le grand méchant barbu qui dit 'tu meurt!",
        author: "GUINET Valentin",
        destin: "LAFOLIE Evan"
    },
    {
        id: 46,
        quote: "C pas du spam! C marin!",
        author: "GUINET Valentin",
        destin: "LEROY Léonard"
    },
    {
        id: 47,
        quote: "Nan, tu suce ton moniteur et il te donne ton permis de voiture",
        author: "LEROY Léonard",
        destin: "LAFOLIE Evan"
    },
    {
        id: 48,
        quote: "C’est vrai…. Férréel!",
        author: "GUINET Valentin",
        destin: "LAFOLIE Evan"
    },
    {
        id: 49,
        quote: "Tu vois la chaise là-bas ? Elle fait un Valentin et demi",
        author: "LAFOLIE Evan",
        destin: "DE MUIZON Ferréol"
    },
    {
        id: 50,
        quote: "Non, lui il est Personne-veut-le-nique",
        author: "GUINET Valentin",
        destin: "LEROY Léonard"
    },
    {
        id: 51,
        quote: "Genre qui se transforme en n’importe quoi et qui a des yeux tout moches?",
        author: "GUINET Valentin",
        destin: "LAFOLIE Evan"
    },
]