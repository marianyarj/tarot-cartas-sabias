import React from 'react'

const FootBar = () => {
    return (
        <>
            <section className='w-full border-t-2 border-mustard'>
                <div className='bg-midnight text-mustard text-center space-y-4 text-xl md:text-2xl p-16 sm:p-20 md:px-32 lg:px-48 xl:px-80 2xl:px-120'>
                    <p>Este proyecto ha sido desarrollado como parte del programa de formación de <a href="https://factoriaf5.org/" target="_blank">FactoriaF5</a></p>
                    <p>© 2025 <a href="https://github.com/marianyarj" target="_blank">Mariany</a> | <a href="https://github.com/CeliaMi/stem-tarot/blob/main/README.md" target="_blank">Tarot STEM</a></p>
                    <div className='flex justify-center'>
                        <img className='w-30 mt-4'
                            src="https://femcoders.factoriaf5.org/wp-content/uploads/2021/12/Logo-FemCodersF5-color-300x224.png"
                            alt="logo femcoders factoriaf5" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default FootBar