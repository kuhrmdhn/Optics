import localFont from 'next/font/local';
import React from 'react'

const poppins = localFont({
    src: "../../fonts/Poppins-Medium.ttf",
    variable: "--font-poppins",
    weight: "500",
});

export default function Logo() {
    return (
        <div className={`${poppins.variable} font-semibold text-xl sm:text-3xl text-white`}>
            OPTICS
        </div>
    )
}
