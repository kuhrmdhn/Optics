"use client"
import React, { useEffect, useState } from 'react'
import Logo from '../element/Logo'
import Navigation from './Navigation'

export default function Header() {
    const [hideTopHeader, setHideTopHeader] = useState(false)
    function handleScroll() {
        const { scrollY } = window
        if (scrollY > 80) {
            setHideTopHeader(true)
        } else {
            setHideTopHeader(false)
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])
    return (
        <header className={`h-20 w-full flex items-center justify-between bg-foreground text-white fixed z-30 duration-500 ${hideTopHeader ? "top-0" : "top-16"}`}>
            <section className='w-1/4 h-full flex items-center justify-center'>
                <Logo />
            </section>
            <section className='h-full w-3/4 sm:w-1/2'>
                <Navigation />
            </section>
        </header>
    )
}
