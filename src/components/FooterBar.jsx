import React from 'react'

const FootBar = () => {
    return (
        <>
            <div className='border-t-2 border-mustard bg-midnight py-12 -mx-20 md:-mx-40 lg:mx-60 xl:-mx-80'>
                <section className='md:text-2xl text-mustard font-bold text-center'>
                    <p>Este proyecto ha sido desarrollado como parte del programa de formación de <a href="https://factoriaf5.org/" target="_blank">FactoriaF5</a></p>
                    <p>© 2025 <a href="https://github.com/marianyarj" target="_blank">Mariany</a> | <a href="https://github.com/CeliaMi/stem-tarot/blob/main/README.md" target="_blank">Tarot STEM</a></p>
                    <div className='flex justify-center'>
                        <img className='w-30 mt-4'
                            src="https://femcoders.factoriaf5.org/wp-content/uploads/2021/12/Logo-FemCodersF5-color-300x224.png"
                            alt="logo femcoders factoriaf5" />
                    </div>
                </section>
            </div>
        </>
    )
}

export default FootBar