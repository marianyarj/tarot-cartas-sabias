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

                <div className='bg-midnight text-mustard space-y-4 text-xl md:text-2xl p-16 sm:p-20 md:px-32 lg:px-48 xl:px-80 2xl:px-120'>

                    <h2>
                        Ven a conocer el mundo de las mujeres que han dejado huella y siguen haciendo historia en la tecnología y ciencia.
                    </h2>
                    <h2>
                        Con Cartas Sábias podrás explorar una baraja de tarot para descubrir a estas Diosas contemporáneas.
                    </h2>
                    <h2>
                        Solo tienes que hacer clic en una carta para conocer más detalles sobre ella.
                    </h2>
                </div>

            </section>
            <div id="allCards">
                <CardGrid cards={cardsTarot} onCardClick={cardClick} showName={true} />
            </div>


            <Outlet />
        </>
    )
}

export default Home