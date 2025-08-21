import React, { useEffect, useState } from 'react';
import { getAllCards } from '../services/cardTarotServices'
import CardDetailArcane from '../components/CardDetailArcane';
import CardDetailGoddess from '../components/CardDetailGoddess';

function TarotReading() {
    const [availableCards, setAvailableCards] = useState([]);
    const [cards, setCards] = useState([null, null, null]);
    const titleCard = ["pasado", "presente", "futuro"];
    const [selectedGoddess, setSelectedGoddess] = useState([null, null, null]);

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
        const remainingCards = availableCards.filter(c => !cards.includes(c));
        console.log("remainingCards:", remainingCards);
        const randomCard = remainingCards[Math.floor(Math.random() * remainingCards.length)];
        const newCards = [...cards];
        newCards[idx] = randomCard;
        setCards(newCards);
    };

    return (
        <>
            <section className='w-full mt-18 text-mustard md:text-2xl'>
                <h3 className=' bg-midnight  py-20 space-y-4 px-20 -mx-20 md:text-2xl md:-mx-20 xl:-mx-80 md:py-16 md:px-20 xl:px-80 xl:py-24'>Ven y explora tu <span className='font-semibold underline'>pasado</span>, comprende tu <span className='font-semibold underline'>presente</span> y descubre tu <span className='font-semibold underline'>futuro</span>.</h3>

                <div>
                    {cards.map((card, idx) => (
                        <div key={idx} className="rounded-lg border-4 border-solid border-mustard  my-18" >
                            <h3 className='bg-midnight text-mustard text-center font-bold py-4 uppercase text-2xl border-b-4 border-mustard rounded-b-lg'>{titleCard[idx]}</h3>
                            {card ? (
                                <div className='p-18 bg-midnight flex flex-col justify-center'>
                                    <CardDetailArcane cardArcane={card} />
                                    <div className='mt-8 md:mt-12 xl:mt-16 text-center'>
                                        <button
                                            onClick={() => {
                                                const newSelected = [...selectedGoddess];
                                                newSelected[idx] = cards[idx];
                                                setSelectedGoddess(newSelected);
                                            }}
                                            className='bg-mustard text-midnight hover:bg-midnight hover:text-mustard font-bold border-2 border-solid border-mustard cursor-pointer py-3 px-6 rounded-lg mt-8'
                                        >
                                            Conocer la Diosa
                                        </button>
                                        {selectedGoddess[idx] && <CardDetailGoddess cardGoddess={selectedGoddess[idx]} />}
                                    </div>
                                </div>
                            ) : (
                                <p className='bg-midnight text-mustard text-center font-bold py-4 cursor-pointer' onClick={() => handleClick(idx)}>Haz clic para conocer tu {titleCard[idx]}.</p>
                            )}
                        </div>

                    ))}

                </div>
            </section>
        </>
    )
}

export default TarotReading;
