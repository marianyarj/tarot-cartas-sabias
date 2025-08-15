import React from 'react'
import cardBack from '../assets/cardback.svg'

export default function CardGrid({ cards, onCardClick, showName }) {

    return (
        <ul className="w-full mt-18 grid justify-items-center md:grid-cols-2 md:gap-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {cards.map((card) => (
                <li
                    key={card.id}
                    onClick={() => onCardClick(card.id)}
                    className="relative cursor-pointer mb-4 scale-95 hover:scale-110 transition-transform duration-300 ease-in-out overflow-hidden"
                >
                    <img src={cardBack} alt={card.arcaneName} />
                    {showName && (
                        <p className="tracking-wide absolute bottom-0 left-0 w-full text-center text-xl text-mustard font-bold bg-midnight bg-opacity-50 py-4 rounded-b-lg border-b-2 border-mustard">
                            {card.arcaneName}
                        </p>
                    )}
                </li>
            ))}
        </ul>
    );
}