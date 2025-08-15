import React, { useEffect, useState } from 'react'
import { getAllCards } from '../services/cardTarotServices'
import { useNavigate, Outlet } from 'react-router-dom';
import CardGrid from '../components/CardGrid';

function Home() {
    const [cardsTarot, setCardsTarot] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCards = async () => {

            try {
                const allCardsData = await getAllCards();
                console.log(allCardsData);
                setCardsTarot(allCardsData);
            } catch (error) {
                console.log(error + " >> error al traer en home");
            }
        }
        fetchCards();

    }, []);
    const cardClick = (cardId) => {
        navigate(`/carddetail/${cardId}`);
    }
    return (
        <>
            <section className='w-full mt-18'>
                <div className='bg-midnight text-mustard py-12 space-y-4 px-12 -mx-12 md:text-2xl md:-mx-20 xl:-mx-80 md:py-16 md:px-20 xl:px-80 xl:py-24'>
                    <h2 >
                        Ven a conocer el mundo de las mujeres que han dejado huella y siguen haciendo historia en la tecnología y ciencia.</h2>
                    <h2 >Con Cartas Sábias podrás explorar una baraja de tarot para descubrir a estas Diosas contemporáneas.</h2>
                    <h2 > Solo tienes que hacer clic en una carta para conocer más detalles sobre ella.</h2>
                </div>
            </section>
            <CardGrid cards={cardsTarot} onCardClick={cardClick} showName={true} />

            <Outlet />
        </>
    )
}

export default Home