import React, { useEffect, useState, useRef } from 'react'
import { getCardById } from '../services/cardTarotServices'
import { useParams } from 'react-router-dom';

function CardDetail() {
    const { id } = useParams()
    const [card, setCard] = useState(null);
    const cardDetailRef = useRef();
    useEffect(() => {
        const fetchCard = async () => {
            try {
                const oneCardData = await getCardById(id);
                setCard(oneCardData);
            } catch (error) {
                console.log(error + " >> error al traer en one card detail");
            }
        }
        fetchCard();
    }, [id])
    useEffect(() => {
        if (cardDetailRef.current) {
            cardDetailRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [card])
    if (!card) {
        return <p>Carregando...</p>
    }

    return (
        <>
            <div ref={cardDetailRef}>
                <h2>{card.arcaneName}</h2>
            </div>

        </>
    )
}

export default CardDetail