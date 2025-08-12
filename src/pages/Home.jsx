import React, { useEffect, useState } from 'react'
import { getAllCards } from '../services/cardTarotServices'

function Home() {
    const [cardsTarot, setCardsTatot] = useState([]);

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const allCardsData = await getAllCards();
                setCardsTatot(allCardsData);
            } catch (error) {
                console.log(error + " >> error al traer en home");
            }
        }
        fetchCards();
    }, []);

    return (
        <>
            <ul>
                {cardsTarot.map(card => (
                    <li key={card.id}>{card.arcaneName}</li>
                ))}
            </ul>
        </>
    )
}

export default Home