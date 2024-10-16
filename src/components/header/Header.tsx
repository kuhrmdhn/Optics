import React from 'react'
import Logo from '../element/Logo'
import Navigation from './Navigation'

export default function Header() {
    return (
        <header className='h-20 w-full flex items-center justify-between bg-foreground text-white'>
            <section className='w-1/4 h-full flex items-center justify-center'>
                <Logo />
            </section>
            <section className='h-full w-3/4 sm:w-1/2'>
                <Navigation/>
            </section>
        </header>
    )
}
