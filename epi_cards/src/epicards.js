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

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, Button } from '@/components/ui/card';
import cardsData from '../data';

// const cardsData = [
//     { id: 1, name: 'Carte 1', image: 'https://via.placeholder.com/150' },
//     { id: 2, name: 'Carte 2', image: 'https://via.placeholder.com/150' },
//     { id: 3, name: 'Carte 3', image: 'https://via.placeholder.com/150' },
//     { id: 4, name: 'Carte 4', image: 'https://via.placeholder.com/150' },
//     { id: 5, name: 'Carte 5', image: 'https://via.placeholder.com/150' },
//     { id: 6, name: 'Carte 6', image: 'https://via.placeholder.com/150' },
//     { id: 7, name: 'Carte 7', image: 'https://via.placeholder.com/150' },
//     { id: 8, name: 'Carte 8', image: 'https://via.placeholder.com/150' },
//     { id: 9, name: 'Carte 9', image: 'https://via.placeholder.com/150' },
//     { id: 10, name: 'Carte 10', image: 'https://via.placeholder.com/150' },
//     { id: 11, name: 'Carte 11', image: 'https://via.placeholder.com/150' },
//     { id: 12, name: 'Carte 12', image: 'https://via.placeholder.com/150' },
//     { id: 13, name: 'Carte 13', image: 'https://via.placeholder.com/150' },
//     { id: 14, name: 'Carte 14', image: 'https://via.placeholder.com/150' },
//     { id: 15, name: 'Carte 15', image: 'https://via.placeholder.com/150' }
// ];

const BoosterOpening = () => {
    const [currentCard, setCurrentCard] = useState(0);
    const [boosterOpened, setBoosterOpened] = useState(false);

    const revealNextCard = () => {
        if (currentCard < cardsData.length - 1) {
            setCurrentCard(currentCard + 1);
        }
    };

    const openBooster = () => {
        setBoosterOpened(true);
    };

    return (
        <div className="flex flex-col items-center p-4">
            {!boosterOpened ? (
                <Button onClick={openBooster} className="mb-4">
                    Ouvrir le Booster
                </Button>
            ) : (
                <motion.div
                    className="stack"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Card className="w-40 h-56">
                        <CardContent>
                            <img
                                src={cardsData[currentCard].image}
                                alt={cardsData[currentCard].name}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </CardContent>
                    </Card>
                </motion.div>
            )}

            {boosterOpened && (
                <Button onClick={revealNextCard} className="mt-4">
                    Révéler la carte suivante
                </Button>
            )}
        </div>
    );
};

export default BoosterOpening;
