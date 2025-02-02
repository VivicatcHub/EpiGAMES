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

const cards_data = [
    { "name": "Bulbizarre", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SM35/SM35_FR_1.png", "id": 1, "symbol": "\u25c6", "value": 3 },
    { "name": "Herbizarre", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SM35/SM35_FR_2.png", "id": 2, "symbol": "\u25c6", "value": 3 },
    { "name": "Florizarre", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/BW5/BW5_FR_3.png", "id": 3, "symbol": "\u25c6\u25c6", "value": 4 },
    { "name": "Salamèche", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SWSH4/SWSH4_FR_23.png", "id": 4, "symbol": "\u25c6", "value": 3 },
    { "name": "Reptincel", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SM115/SM115_FR_8.png", "id": 5, "symbol": "\u25c6", "value": 3 },
    { "name": "Dracaufeu", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SWSH4/SWSH4_FR_25.png", "id": 6, "symbol": "\u25c6\u25c6", "value": 4 },
    { "name": "Carapuce", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SM9/SM9_FR_23.png", "id": 7, "symbol": "\u25c6", "value": 3 },
    { "name": "Carabaffe", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SM9/SM9_FR_24.png", "id": 8, "symbol": "\u25c6", "value": 3 },
    { "name": "Tortank", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SM9/SM9_FR_25.png", "id": 9, "symbol": "\u25c6\u25c6", "value": 4 },
    { "name": "Chenipan", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SM115/SM115_FR_1.png", "id": 10, "symbol": "\u25cf", "value": 1 },
    { "name": "Chrysacier", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SM115/SM115_FR_2.png", "id": 11, "symbol": "\u25cf", "value": 1 },
    { "name": "Papilusion", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SM115/SM115_FR_3.png", "id": 12, "symbol": "\u25c6", "value": 3 },
    { "name": "Aspicot", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/XY0/XY0_FR_1.png", "id": 13, "symbol": "\u25cf", "value": 1 },
    { "name": "Coconfort", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/XY1/XY1_FR_4.png", "id": 14, "symbol": "\u25cf", "value": 1 },
    { "name": "Dardargnan", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SM4/SM4_FR_3.png", "id": 15, "symbol": "\u25c6", "value": 3 },
    { "name": "Roucool", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/XY2/XY2_FR_75.png", "id": 16, "symbol": "\u25cf", "value": 1 },
    { "name": "Roucoups", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SV03/SV03_FR_163.png", "id": 17, "symbol": "\u25c6", "value": 3 },
    { "name": "Roucarnage", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SM9/SM9_FR_124.png", "id": 18, "symbol": "\u25c6", "value": 3 },
    { "name": "Rattata", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SM10/SM10_FR_143.png", "id": 19, "symbol": "\u25cf", "value": 1 },
    { "name": "Rattatac", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SM10/SM10_FR_144.png", "id": 20, "symbol": "\u25cf", "value": 2 },
    { "name": "Piafabec", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SM1/SM1_FR_97.png", "id": 21, "symbol": "\u25cf", "value": 1 },
    { "name": "Abo", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/XY1/XY1_FR_47.png", "id": 22, "symbol": "\u25cf", "value": 1 },
    { "name": "Pikachu", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SMP/SMP_FR_SM157.png", "id": 23, "symbol": "\u25c6", "value": 4 },
    { "name": "Raichu", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SV02/SV02_FR_64.png", "id": 24, "symbol": "\u25c6", "value": 3 },
    { "name": "Sabelette", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SM10/SM10_FR_83.png", "id": 25, "symbol": "●", "value": 1 },
    { "name": "Sablaireau", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SWSH8/SWSH8_FR_132.png", "id": 26, "symbol": "●", "value": 1 },
    { "name": "Nidoran Femelle", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/BW9/BW9_FR_40.png", "id": 27, "symbol": "\u25cf", "value": 1 },
    { "name": "Nidorina", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SM9/SM9_FR_55.png", "id": 28, "symbol": "\u25cf", "value": 2 },
    { "name": "Nidoran Mâle", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SM9/SM9_FR_57.png", "id": 29, "symbol": "\u25cf", "value": 1 },
    { "name": "Nidorino", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SM9/SM9_FR_58.png", "id": 30, "symbol": "\u25cf", "value": 2 },
    { "name": "Melofée", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SV06/SV06_FR_78.png", "id": 31, "symbol": "●", "value": 1 },
    { "name": "Melodelfe", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SWSH4/SWSH4_FR_64.png", "id": 32, "symbol": "●", "value": 2 },
    { "name": "Goupix", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SWSH1/SWSH1_FR_22.png", "id": 33, "symbol": "●", "value": 1 },
    { "name": "Feunard", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SWSH1/SWSH1_FR_23.png", "id": 34, "symbol": "◆", "value": 4 },
    { "name": "Rondoudou", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SWSH3/SWSH3_FR_67.png", "id": 35, "symbol": "●", "value": 1 },
    { "name": "Grodoudou", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SWSH8/SWSH8_FR_111.png", "id": 36, "symbol": "◆", "value": 2 },
    { "name": "Nosférapti", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SM1/SM1_FR_54.png", "id": 37, "symbol": "\u25cf", "value": 1 },
    { "name": "Nosféralto", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SM10/SM10_FR_65.png", "id": 38, "symbol": "●", "value": 1 },
    { "name": "Mystherbe", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SM3/SM3_FR_4.png", "id": 39, "symbol": "●", "value": 1 },
    { "name": "Ortide", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SM3/SM3_FR_5.png", "id": 40, "symbol": "●", "value": 1 },
    { "name": "Rafflesia", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/XY7/XY7_FR_3.png", "id": 41, "symbol": "●", "value": 3 },
    { "name": "Paras", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SWSH3/SWSH3_FR_3.png", "id": 42, "symbol": "●", "value": 1 },
    { "name": "Parasect", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SWSH3/SWSH3_FR_4.png", "id": 43, "symbol": "●", "value": 1 },
    { "name": "Mimitos", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SWSH12/SWSH12_FR_1.png", "id": 44, "symbol": "●", "value": 1 },
    { "name": "Aeromite", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SWSH12/SWSH12_FR_2.png", "id": 45, "symbol": "●", "value": 1 },
    { "name": "Topiqueur", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SWSH3/SWSH3_FR_84.png", "id": 46, "symbol": "●", "value": 1 },
    { "name": "Triopikeur", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SWSH1/SWSH1_FR_93.png", "id": 47, "symbol": "●", "value": 1 },
    { "name": "Miaouss", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SM3/SM3_FR_101.png", "id": 48, "symbol": "●", "value": 1 },
    { "name": "Persian", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SM3/SM3_FR_102.png", "id": 49, "symbol": "●", "value": 1 },
    { "name": "Racaillou", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SM115/SM115_FR_33.png", "id": 50, "symbol": "\u25cf", "value": 1 },
    { "name": "Gravalanche", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/XY2/XY2_FR_46.png", "id": 51, "symbol": "●", "value": 2 },
    { "name": "Grolem", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/XY2/XY2_FR_47.png", "id": 52, "symbol": "●", "value": 3 },
    { "name": "Canarticho", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/XY0/XY0_FR_25.png", "id": 53, "symbol": "●", "value": 1 },
    { "name": "Doduo", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/XY1/XY1_FR_98.png", "id": 54, "symbol": "●", "value": 1 },
    { "name": "Dotrio", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/XY1/XY1_FR_99.png", "id": 55, "symbol": "●", "value": 1 },
    { "name": "Tadmorv", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SM9/SM9_FR_62.png", "id": 56, "symbol": "●", "value": 1 },
    { "name": "Grotadmorv", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SM9/SM9_FR_63.png", "id": 57, "symbol": "●", "value": 1 },
    { "name": "Voltorb", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SWSH2/SWSH2_FR_56.png", "id": 58, "symbol": "\u25cf", "value": 1 },
    { "name": "Electrode", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/XY1/XY1_FR_45.png", "id": 59, "symbol": "\u25cf", "value": 2 },
    { "name": "Noadkoko", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SWSH4/SWSH4_FR_5.png", "id": 60, "symbol": "\u25cf", "value": 2 },
    { "name": "Noeunoeuf", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SWSH4/SWSH4_FR_4.png", "id": 61, "symbol": "\u25cf", "value": 1 },
    { "name": "Magicarpe", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SWSH2/SWSH2_FR_39.png", "id": 62, "symbol": "\u25cf", "value": 1 },
    { "name": "Leviator", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SM9/SM9_FR_30.png", "id": 63, "symbol": "\u25c6", "value": 4 },
    { "name": "Evoli", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SVP/SVP_FR_43.png", "id": 64, "symbol": "\u25cf", "value": 2 },
    { "name": "Aquali", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SWSHP/SWSHP_FR_SWSH072.png", "id": 65, "symbol": "\u25c6", "value": 3 },
    { "name": "Voltali", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SWSHP/SWSHP_FR_SWSH094.png", "id": 66, "symbol": "\u25c6", "value": 3 },
    { "name": "Pyroli", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SMP/SMP_FR_SM186.png", "id": 67, "symbol": "\u25c6", "value": 3 },
    { "name": "Kabuto", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SM9/SM9_FR_77.png", "id": 68, "symbol": "●", "value": 1 },
    { "name": "Lixy", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SV02/SV02_FR_69.png", "id": 69, "symbol": "\u25c6", "value": 3 },
    { "name": "Lixy Shiny S.", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SV4PT5/SV4PT5_FR_135.png", "id": 70, "symbol": "\u2605", "value": 36 },

    { "name": "Bulbizarre Full Art", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SV07/SV07_FR_143.png", "id": 71, "symbol": "\u2605", "value": 30 },
    { "name": "Salamèche Full Art", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SVP/SVP_FR_44.png", "id": 72, "symbol": "\u2605", "value": 30 },
    { "name": "Carapuce Full Art", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SV07/SV07_FR_148.png", "id": 73, "symbol": "\u2605", "value": 30 },
    { "name": "Roucoups Full Art", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SV03/SV03_FR_208.png", "id": 74, "symbol": "\u2605", "value": 30 },
    { "name": "Pikachu Full Art", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SWSH12PT5GG/SWSH12PT5GG_FR_GG30.png", "id": 75, "symbol": "\u2605", "value": 40 },
    { "name": "Raichu Full Art", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SV02/SV02_FR_211.png", "id": 76, "symbol": "\u2605", "value": 30 },
    { "name": "Evoli Full Art", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SV06/SV06_FR_188.png", "id": 77, "symbol": "\u2605", "value": 30 },

    { "name": "Papilusion V Full Art", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SWSH3/SWSH3_FR_177.png", "id": 78, "symbol": "\u2605", "value": 34 },
    { "name": "Dardargnan V Full Art", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SWSH10/SWSH10_FR_161.png", "id": 79, "symbol": "\u2605", "value": 32 },
    { "name": "Roucarnage V Full Art", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SWSH11/SWSH11_FR_188.png", "id": 80, "symbol": "\u2605", "value": 37 },
    { "name": "Feunard V Full Art", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SWSH2/SWSH2_FR_177.png", "id": 81, "symbol": "\u2605", "value": 33 },
    { "name": "Leviator V Full Art", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SWSH7/SWSH7_FR_171.png", "id": 82, "symbol": "\u2605", "value": 38 },

    { "name": "Bulbizarre Full Art S.", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SV3PT5/SV3PT5_FR_166.png", "id": 83, "symbol": "\u2605\u2605\u2605", "value": 160 },
    { "name": "Salamèche Full Art S.", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SV3PT5/SV3PT5_FR_168.png", "id": 84, "symbol": "\u2605\u2605\u2605", "value": 160 },
    { "name": "Carapuce Full Art S.", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SV3PT5/SV3PT5_FR_170.png", "id": 85, "symbol": "\u2605\u2605\u2605", "value": 160 },
    { "name": "Pikachu Full Art S.", "image": "https://assets.pokemon.com/static-assets/content-assets/cms2-fr-fr/img/cards/web/SWSH11/SWSH11_FR_TG05.png", "id": 86, "symbol": "\u2605\u2605\u2605", "value": 140 }
]