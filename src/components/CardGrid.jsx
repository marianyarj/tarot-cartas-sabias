import React from 'react'
import cardBack from '../assets/cardback.svg'

export default function CardGrid({ cards, onCardClick }) {

    return (
        <ul className="w-full mt-18 grid justify-items-center md:grid-cols-2 md:gap-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {cards.map((card) => (
                <li
                    key={card.id}
                    onClick={() => onCardClick(card.id)}
                    className="cursor-pointer mb-4"
                >
                    <img src={cardBack} alt={card.arcaneName} className='scale-95 hover:scale-110 transition-transform duration-300 ease-in-out' />
                </li>
            ))}
        </ul>
    );
}