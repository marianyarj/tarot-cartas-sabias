import React from 'react'
import cardBack from '../assets/cardback.svg'

function CardDetailGoddess({ cardGoddess }) {
    if (!cardGoddess) {
        return <p className='text-mustard'>Cargando las Diosas...</p>
    }

    return (
        <>
            <section>
                <article className='row-start-3 flex flex-col-reverse md:flex-row items-center gap-6 mt-4'>
                    <p className='flex-1 mt-4 text-end md:text-xl md:mr-6 2xl:text-2xl'>{cardGoddess.goddessDescription}</p>
                    <div className='flex flex-col items-center space-y-2 mt-4'>
                        <h3 className='text-2xl'>{cardGoddess.goddessName}</h3>
                        <div className="relative w-3xs mx-auto">
                            <img src={cardBack} alt={cardGoddess.goddessName} className="w-3xs" />
                            <img
                                src={cardGoddess.goddessImage.imageSrc}
                                alt={cardGoddess.goddessName}
                                className="absolute top-51 left-1/2 w-60 h-64 rounded-full border-4 border-solid border-mustard -translate-x-1/2 -translate-y-1/2 object-cover object-top"
                            />
                        </div>
                    </div>
                </article>
            </section>
        </>
    )
}

export default CardDetailGoddess