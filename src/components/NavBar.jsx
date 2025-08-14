import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const NavBar = () => {
    const pageLocation = useLocation();
    return (
        <>
            <nav className='items-center  box-border w-full flex flex-col md:items-start md:place-items-start md:grid md:grid-cols-6 xl:grid-cols-12'>
                <h1 className='text-left text-4xl font-lato text-mustard md:text-6xl md:col-start-1 md:col-end-3 md:row-start-1'>
                    <span className='font-lavishly text-7xl md:text-9xl'>C</span>artas
                </h1>
                <h1 className='text-4xl font-lato text-mustard md:text-6xl md:col-start-2 md:row-start-2 xl:col-end-2 '><span className='font-lavishly text-7xl col-start-3 md:text-9xl'>S</span>ábias</h1>
                <ul className='flex flex-col gap-8 mt-12 md:flex md:flex-row md:row-start-1 md:gap-4 md:col-end-8 xl:col-start-[-2] xl:row-start-2  2xl:col-end-[-4]'>
                    <li><Link to="/" className={`${pageLocation.pathname === "/" ? "bg-mustard border-2 border-solid border-mustard text-midnight font-bold" : "border-2 border-solid border-mustard  text-mustard font-bold"} py-2 px-4 whitespace-nowrap text-lg rounded-lg`}>Todas las cartas</Link></li>
                    <li><Link to="/tarotreading" className={`${pageLocation.pathname === "/tarotreading" ? "bg-mustard border-2 border-solid border-mustard text-midnight font-bold" : "border-2 border-solid border-mustard text-mustard font-bold"} py-2 px-4 whitespace-nowrap text-lg rounded-lg`}>Hacer Lectura</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar