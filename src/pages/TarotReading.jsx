import React, { useEffect, useState } from 'react';
import { getAllCards } from '../services/cardTarotServices'
import { useNavigate, Outlet } from 'react-router-dom';



function TarotReading() {
    const [availableCards, setAvailableCards] = useState([]);
    const [cards, setCards] = useState([null, null, null]); // 3 espaços
    const navigate = useNavigate();
    const titleCard = ["pasado", "presente", "futuro"];

    const getAllCardsRandom = async () => {
        try {
            const response = await getAllCards();
            console.log(response);
            console.log(typeof (response));
            const cardsRandom = response.slice();
            for (let i = 0; i < cardsRandom.length; i++) {
                const j = Math.floor(Math.random() * cardsRandom.length);
                [cardsRandom[i], cardsRandom[j]] = [cardsRandom[j], cardsRandom[i]];
            }
            return cardsRandom;
        } catch (error) {
            console.log(error + ">> error en Random")
        }
    }

    useEffect(() => {
        const fetchCards = async () => {
            const allCardsRandom = await getAllCardsRandom();
            console.log("allCardsRandom:", allCardsRandom);
            setAvailableCards(allCardsRandom);
        };
        fetchCards();
    }, []);

    const handleClick = (idx) => {
        // if (cards[idx]) {
        //     // Se a carta já foi escolhida, navegar para o detalhe
        //     navigate(`/carddetail/${idx}`);
        //     return;
        // }

        // Se ainda não foi escolhida, pegar uma carta aleatória
        const remainingCards = availableCards.filter(c => !cards.includes(c));
        console.log("remainingCards:", remainingCards);
        const randomCard = remainingCards[Math.floor(Math.random() * remainingCards.length)];

        const newCards = [...cards];
        newCards[idx] = randomCard;
        setCards(newCards);
    };

    return (
        <>
            <section className='w-full mt-18'>
                <h3 className=' bg-midnight text-mustard py-20 space-y-4 px-20 -mx-20 md:text-2xl md:-mx-20 xl:-mx-80 md:py-16 md:px-20 xl:px-80 xl:py-24'>Ven y explora tu <span className='font-semibold underline'>pasado</span>, comprende tu <span className='font-semibold underline'>presente</span> y descubre tu <span className='font-semibold underline'>futuro</span>.</h3>
                <div className='my-18'>
                    {cards.map((card, idx) => (
                        <div key={idx} className="w-3xs rounded-lg border-4 border-solid border-mustard cursor-pointer mt-16" onClick={() => handleClick(idx)}>
                            <h3 className='bg-midnight text-mustard text-center font-bold py-4 uppercase text-2xl border-b-4 border-mustard rounded-b-lg'>{titleCard[idx]}</h3>
                            {card ? <img className='border-t-4 border-mustard rounded-t-lg' src={card.arcaneImage.imageSrc} alt={card.arcaneName} /> : <p className='bg-midnight text-mustard text-center font-bold py-4'>Haz clic para conocer tu {titleCard[idx]}.</p>}
                        </div>
                    ))}
                </div>
                <Outlet />
            </section>
        </>

    );
}

export default TarotReading;
