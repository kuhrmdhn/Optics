import Image from 'next/image'
import React from 'react'

export default function Truck({ ...props }) {
    return <Image src="/icons/truck.svg" alt='Truck icon' width={50} height={50} {...props} />
}
