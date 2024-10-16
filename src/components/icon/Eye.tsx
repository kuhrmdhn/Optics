import Image from 'next/image'
import React from 'react'

export default function Eye({ ...props }) {
    return <Image src="/icons/eye.svg" alt='Eye Icon' width={50} height={50} {...props} />
}
