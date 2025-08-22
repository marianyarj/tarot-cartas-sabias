import React, { useEffect, useState, useRef } from 'react';
import { getAllCards } from '../services/cardTarotServices'
import CardDetailArcane from '../components/CardDetailArcane';
import CardDetailGoddess from '../components/CardDetailGoddess';

function TarotReading() {
    const [availableCards, setAvailableCards] = useState([]);
    const [cards, setCards] = useState([null, null, null]);
    const titleCard = ["pasado", "presente", "futuro"];
    const [selectedGoddess, setSelectedGoddess] = useState([null, null, null]);
    const [fixedButton, setFixedButton] = useState(false);
    const titleRef = useRef(null);

    const getAllCardsRandom = async () => {
        try {
            const response = await getAllCards();
            //console.log(response);
            //console.log(typeof (response));
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
            //console.log("allCardsRandom:", allCardsRandom);
            setAvailableCards(allCardsRandom);
        };
        fetchCards();
    }, []);

    const handleClick = (idx) => {
        const remainingCards = availableCards.filter(c => !cards.includes(c));
        //console.log("remainingCards:", remainingCards);
        const randomCard = remainingCards[Math.floor(Math.random() * remainingCards.length)];
        const newCards = [...cards];
        newCards[idx] = randomCard;
        setCards(newCards);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (titleRef.current) {
                const titleBottom = titleRef.current.getBoundingClientRect().bottom + window.scrollY;
                setFixedButton(window.scrollY > titleBottom);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <section className='w-full mt-18 text-mustard text-xl'>
                <h3 ref={titleRef} className='bg-midnight md:text-2xl space-y-4 p-16 sm:p-20 md:px-32 lg:px-48 xl:px-80 2xl:px-120'>Ven y explora tu <span className='font-semibold underline'>pasado</span>, comprende tu <span className='font-semibold underline'>presente</span> y descubre tu <span className='font-semibold underline'>futuro</span>.</h3>

                <div className={`mt-18 flex justify-end mr-4 xl:px-35 ${fixedButton ? 'fixed top-4 right-0 z-50' : ''}`}>
                    <button
                        onClick={() => {
                            setCards([null, null, null]);
                            setSelectedGoddess([null, null, null]);
                        }}
                        className='hover:bg-midnight hover:text-mustard bg-mustard text-midnight font-bold border-2 border-solid border-mustard cursor-pointer py-3 px-6 rounded-lg'
                    >
                        Nueva lectura
                    </button>
                </div>
                <div>
                    {cards.map((card, idx) => (
                        <div key={idx} className="py-10 sm:mx-20 md:mx-32 lg:mx-48 xl:mx-72" >
                            <h3 className='bg-midnight text-mustard text-center font-bold py-4 uppercase text-2xl border-b-4 border-mustard rounded-tl-xl rounded-b-lg'>{titleCard[idx]}</h3>
                            {card ? (
                                <div className='p-18 lg:p-12 xl:p-20 bg-midnight flex flex-col justify-center rounded-b-xl'>

                                    <CardDetailArcane cardArcane={card} />
                                    <div className='mt-8 md:mt-12 xl:mt-16 text-center'>
                                        {!selectedGoddess[idx] && (
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
                                        )}
                                        <div className='mt-18'>
                                            {selectedGoddess[idx] && <CardDetailGoddess cardGoddess={selectedGoddess[idx]} />}
                                        </div>

                                    </div>
                                </div>
                            ) : (
                                <p className='bg-midnight text-mustard text-center font-bold py-4 cursor-pointer rounded-br-xl' onClick={() => handleClick(idx)}>Haz clic para conocer tu {titleCard[idx]}.</p>
                            )}
                        </div>

                    ))}

                </div>
            </section>
        </>
    )
}

export default TarotReading;
