import React, { useEffect, useState, useRef } from 'react'
import { getCardById } from '../services/cardTarotServices'
import { useParams } from 'react-router-dom';
import cardBack from '../assets/cardback.svg'

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
            <section ref={cardDetailRef} className='grid grid-auto-rows bg-midnight text-mustard mt-18 py-14 space-y-4 px-20 -mx-20 md:text-2xl md:-mx-40 md:py-16 md:px-40 lg:mx-60 xl:-mx-80 xl:px-80 xl:pt-24 xl:pb-40'>
                <h2 className='row-start-1 text-center text-3xl md:text-5xl [word-spacing:0.4em] col-span-full'>
                    {card.arcaneName.split(" ").map((word, i) => (
                        <span key={i}>
                            <span className='font-lavishly text-6xl md:text-8xl'>{word.charAt(0)}</span>
                            {word.slice(1)}{" "}
                        </span>
                    ))}
                </h2>

                <article className='row-start-2 flex flex-col md:flex-row items-center gap-6 mt-8'>
                    <div className='flex flex-col items-center space-y-2'>
                        <h3 className='text-2xl'>Arcano {card.id}</h3>
                        <img src={card.arcaneImage.imageSrc} alt={card.arcaneName} className='w-3xs rounded-lg border-4 border-solid border-mustard' />
                    </div>
                    <p className='flex-1 mt-4  md:text-xl md:ml-6 2xl:text-2xl '>{card.arcaneDescription}</p>
                </article>

                <article className='row-start-3 flex flex-col-reverse md:flex-row items-center gap-6 mt-4'>
                    <p className='flex-1 mt-4 text-end md:text-xl md:mr-6 2xl:text-2xl'>{card.goddessDescription}</p>
                    <div className='flex flex-col items-center space-y-2 mt-4'>
                        <h3 className='text-2xl'>{card.goddessName}</h3>
                        <div className="relative w-3xs mx-auto">
                            <img src={cardBack} alt={card.goddessName} className="w-3xs" />
                            <img
                                src={card.goddessImage.imageSrc}
                                alt={card.goddessName}
                                className="absolute top-51 left-1/2 w-60 h-64 rounded-full border-4 border-solid border-mustard -translate-x-1/2 -translate-y-1/2 object-cover object-top"
                            />
                        </div>
                    </div>
                </article>
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