import React from 'react'
import Truck from '../icon/Truck'

export default function TopHeader() {
  return (
    <div className='h-16 w-full flex items-center gap-5 pl-5 sm:pl-16 lg:pl-32 bg-background text-foreground text-xs sm:text-base font-semibold'>
        <Truck className="size-4 sm:size-6 aspect-square"/>
        <h1>Free Shipping and Free Return</h1>
    </div>
  )
}
