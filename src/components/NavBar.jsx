import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const NavBar = () => {
    const pageLocation = useLocation();
    return (
        <>
            <nav className='mt-18 items-center box-border w-full flex flex-col'>
                <h1 className='drop-shadow text-left text-4xl font-lato text-mustard md:text-6xl md:col-start-1 md:col-end-3 md:row-start-1'>
                    <span className='font-lavishly text-7xl md:text-9xl drop-shadow-lg'>C</span>artas
                </h1>
                <h1 className='drop-shadow text-4xl font-lato text-mustard md:text-6xl md:col-start-2 md:row-start-2 xl:col-end-2 '><span className='font-lavishly text-7xl col-start-3 md:text-9xl drop-shadow-lg'>S</span>ábias</h1>
                <ul className='flex flex-col gap-8 mt-12 md:flex md:flex-row md:row-start-1 md:gap-4 md:col-end-8 xl:col-start-[-3] xl:row-start-2  2xl:col-end-[-5]'>
                    <li><Link to="/" className={`hover:bg-midnight hover:text-mustard cursor-pointer py-3 px-6 whitespace-nowrap text-lg md:text-2xl rounded-lg ${pageLocation.pathname === "/" ? "bg-mustard border-2 border-solid border-mustard text-midnight font-bold" : "bg-sea border-2 border-solid border-mustard  text-mustard font-bold"} `}>Todas las cartas</Link></li>
                    <li><Link to="/tarotreading" className={`hover:bg-midnight hover:text-mustard cursor-pointer py-3 px-6 whitespace-nowrap text-lg md:text-2xl rounded-lg ${pageLocation.pathname === "/tarotreading" ? "bg-mustard border-2 border-solid border-mustard text-midnight font-bold" : "bg-sea border-2 border-solid border-mustard text-mustard font-bold"} `}>Hacer Lectura</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar