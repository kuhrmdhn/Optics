import { CircleCheck } from 'lucide-react'
import React from 'react'

type Props = {
  title: string
  description: string
}

export default function ChecklistItem({ title, description }: Props) {
  return (
    <section className='w-full h-20 lg:h-28 flex gap-5 text-foreground'>
      <CircleCheck className='w-10 h-10'/>
      <div className='flex flex-col gap-5 text-justify'>
        <h4 className='text-xl lg:text-2xl'>{title}</h4>
        <p className='text-xs sm:text-base'>{description}</p>
      </div>
    </section>
  )
}
