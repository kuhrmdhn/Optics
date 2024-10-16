import Link from 'next/link'
import React from 'react'

type Props = {
    link: string
    text: string
    className?: string
}

export default function NavItems({ link = "/", text, className, ...props }: Props) {
    return <Link href={link} className={`hover-underline ${className}`} {...props}>{text}</Link>
}
