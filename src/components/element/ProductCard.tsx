import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
  title: string
  sortDescription: string
  image: string
  imageSource?: string
  source?: string
  price: number
}

export default function ProductCard({ title, sortDescription, image, imageSource, source, price }: Props) {
  const productPrice = price.toLocaleString("en-US", { style: "currency", currency: "USD" })
  return (
    <section className='h-72 lg:h-80 w-64 lg:w-72 flex-none p-5 bg-white rounded-md flex flex-col justify-between'>
      <div className='h-14 flex flex-col justify-center font-semibold'>
        <h1 className="text-xl">{title}</h1>
        <p className='font-light text-sm'>{sortDescription}</p>
      </div>
      <div className='h-[150px] w-full relative'>
        <Image src={image} alt="product1" width={1000} height={1500} className='h-full w-full object-cover object-center rounded' />
        <a href={imageSource}>{source}</a>
      </div>
      <div className="h-10 w-full flex text-lg justify-between items-center">
        <h2 className="font-semibold">{productPrice}</h2>
        <Link className='underline underline-offset-8 text-darkBlue' href="/">Wear it!</Link>
      </div>
    </section>
  )
}


// https://www.freepik.com/free-photo/glasses-with-slightly-rounded-frame_58425687.htm#fromView=search&page=1&position=4&uuid=5b56a14f-e721-4290-86fe-3dea7f2c9f08