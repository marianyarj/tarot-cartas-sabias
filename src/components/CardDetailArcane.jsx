import React from 'react'

function CardDetailArcane({ cardArcane }) {
    if (!cardArcane) {
        return <p className='text-mustard'>Cargando los arcanos...</p>
    }
    return (
        <>
            <section>
                <h2 className='row-start-1 text-center text-3xl md:text-5xl [word-spacing:0.4em] col-span-full'>
                    {cardArcane.arcaneName.split(" ").map((word, i) => (
                        <span key={i}>
                            <span className='font-lavishly text-6xl md:text-8xl'>{word.charAt(0)}</span>
                            {word.slice(1)}{" "}
                        </span>
                    ))}
                </h2>
                <article className='row-start-2 flex flex-col md:flex-row items-center gap-6 mt-8'>
                    <div className='flex flex-col items-center space-y-2 md:mt-18'>
                        <h3 className='text-2xl'>Arcano {cardArcane.arcaneNumber}</h3>
                        <img src={cardArcane.arcaneImage.imageSrc} alt={cardArcane.arcaneName} className='w-3xs rounded-lg border-4 border-solid border-mustard' />
                    </div>
                    <p className='flex-1 mt-4  md:text-xl 2xl:text-2xl md:mt-18'>{cardArcane.arcaneDescription}</p>
                </article>
            </section>
        </>
    )
}

export default CardDetailArcane