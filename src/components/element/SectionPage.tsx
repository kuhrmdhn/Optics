import React from 'react'

type Props = React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode
    className?: string
}

export default function SectionPage({ children, className, ...props }: Props) {
    return (
        <section className={`h-[100svh] pt-36 w-full ${className}`} {...props}>
            {children}
        </section>
    )
}
