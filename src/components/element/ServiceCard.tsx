import React from 'react'

type Props = {
    icon: React.ReactNode
    title: string
    description: string
}

export default function ServiceCard({ icon, title, description }: Props) {
    return (
        <section className='w-56 h-56 bg-white px-6 flex-none flex flex-col justify-center gap-3 rounded-md text-foreground'>
            <span>{icon}</span>
            <h2 className='text-lg sm:text-xl font-semibold'>{title}</h2>
            <p className='text-sm sm:text-base'>{description}</p>
        </section>
    )
}
