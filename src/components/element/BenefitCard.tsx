import React from 'react'

type Props = {
    index: number
    title: string
    description: string
    className?: string
}

export default function BenefitCard({ index, title, description, className }: Props) {
    return (
        <div className={`h-36 w-64 flex-none bg-white text-foreground flex flex-col justify-end gap-2 border-top-hover rounded-md px-2 pb-2 ${className}`}>
            <h3>0{index + 1}</h3>
            <h1 className='text-xl font-bold'>{title}</h1>
            <p>{description}</p>
        </div>
    )
}
