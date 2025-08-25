import React, { useState, useEffect } from 'react'
import cardBack from '../assets/cardback.svg'

export default function CardGrid({ cards, onCardClick, showName }) {
    const [page, setPage] = useState(0)
    const [cardsPerRow, setCardsPerRow] = useState(1)

    const rowsPerPage = 2

    // Detecta o número de colunas dependendo do tamanho da tela
    useEffect(() => {
        function updateCardsPerRow() {
            const width = window.innerWidth
            if (width >= 1536) setCardsPerRow(5) // 2xl
            else if (width >= 1280) setCardsPerRow(4) // xl
            else if (width >= 1024) setCardsPerRow(3) // lg/md
            else if (width >= 640) setCardsPerRow(2) // sm
            else setCardsPerRow(1) // xs
        }
        updateCardsPerRow()
        window.addEventListener('resize', updateCardsPerRow)
        return () => window.removeEventListener('resize', updateCardsPerRow)
    }, [])

    const cardsPerPage = cardsPerRow * rowsPerPage
    const totalPages = Math.ceil(cards.length / cardsPerPage)
    const currentCards = cards.slice(page * cardsPerPage, (page + 1) * cardsPerPage)

    return (
        <>
            <ul className="w-full mt-18 mb-18 grid justify-items-center gap-2 p-16 sm:p-20 sm:grid-cols-2 md:px-32 md:grid-cols-3 lg:px-48 xl:px-80 xl:grid-cols-4 2xl:px-120 2xl:grid-cols-5">
                {currentCards.map((card) => (
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
        </>
    )
}
