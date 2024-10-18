import Heading from '@/components/element/Heading'
import ProductCard from '@/components/element/ProductCard'
import SectionPage from '@/components/element/SectionPage'
import SubHeading from '@/components/element/SubHeading'
import React from 'react'

export default function Products() {
  return (
    <SectionPage id="products" className='h-[80svh] sm:h-[60svh] lg:h-[100svh] w-full flex flex-col justify-evenly lg:justify-between pt-16 px-7 lg:px-10'>
      <div className='h-1/5 w-full sm:w-3/4 lg:w-1/2'>
        <SubHeading className='items-center gap-3'>Our Products</SubHeading>
        <Heading>Explore Customer Favorites in Every Style</Heading>
      </div>
      <div className='h-3/4 w-full lg:w-full flex gap-3 lg:justify-between items-center overflow-y-auto overflow-hide'>
        {productData.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            sortDescription={product.sortDescription}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
    </SectionPage>
  )
}


const productData = [
  {
    title: "Eyeglass",
    sortDescription: "lorem ipsum!",
    image: "/images/product-1.jpg",
    price: 575
  },
  {
    title: "Eyeglass",
    sortDescription: "lorem ipsum!",
    image: "/images/product-1.jpg",
    price: 575
  },
  {
    title: "Eyeglass",
    sortDescription: "lorem ipsum!",
    image: "/images/product-1.jpg",
    price: 575
  },
  {
    title: "Eyeglass",
    sortDescription: "lorem ipsum!",
    image: "/images/product-1.jpg",
    price: 575
  },
]