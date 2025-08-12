import React, { useEffect, useState } from 'react'
import { getCardById } from '../services/cardTarotServices'
import { useParams } from 'react-router-dom';

function CardDetail() {
    const { id } = useParams()
    const [card, setCard] = useState(null);
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
    if (!card) {
        return <p>Carregando...</p>
    }

    return (
        <>
            <h2>{card.arcaneName}</h2>
        </>
    )
}

export default CardDetail