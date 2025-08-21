import React, { useEffect, useState, useRef } from 'react'
import { getCardById } from '../services/cardTarotServices'
import { useParams } from 'react-router-dom';
import CardDetailArcane from '../components/CardDetailArcane';
import CardDetailGoddness from '../components/CardDetailGoddess';

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
        return <p className='text-mustard'>Cargando...</p>
    }
    return (
        <>
            <section ref={cardDetailRef} className='grid grid-auto-rows bg-midnight text-mustard mt-18 py-14 space-y-4 px-20 -mx-20 md:text-2xl md:-mx-40 md:py-16 md:px-40 lg:mx-60 xl:-mx-80 xl:px-80 xl:pt-24 xl:pb-40'>

                <CardDetailArcane cardArcane={card} />
                <CardDetailGoddness cardGoddess={card} />
                <div className='mt-8 md:mt-12 xl:mt-16 text-center'>
                    <button
                        onClick={() => {
                            const allCards = document.getElementById("allCards");
                            if (allCards) allCards.scrollIntoView({ behavior: "smooth" });
                        }}
                        className='bg-mustard text-midnight hover:bg-midnight hover:text-mustard font-bold border-2 border-solid border-mustard cursor-pointer py-3 px-6 rounded-lg'
                    >
                        Conocer otra Diosa
                    </button>
                </div>

            </section>
        </>
    )
}

export default CardDetail