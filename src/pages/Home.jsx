import React, { useEffect, useState } from 'react'
import { getAllCards } from '../services/cardTarotServices'
import { useNavigate, Outlet } from 'react-router-dom';

function Home() {
    const [cardsTarot, setCardsTatot] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCards = async () => {

            try {
                const allCardsData = await getAllCards();
                console.log(allCardsData);
                setCardsTatot(allCardsData);
            } catch (error) {
                console.log(error + " >> error al traer en home");
            }
        }
        fetchCards();
    }, []);

    const cardClick = (cardId) => {
        navigate(`/carddetail/${cardId}`);
    }
    return (
        <>
            <ul>
                {cardsTarot.map(card => (
                    <li key={card.id} onClick={() => cardClick(card.id)}>{card.arcaneName} {card.arcaneDescription}</li>
                ))}
            </ul>
            <Outlet />
        </>
    )
}

export default Home