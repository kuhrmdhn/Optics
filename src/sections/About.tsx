import ChecklistItem from '@/components/element/ChecklistItem'
import Heading from '@/components/element/Heading'
import HeadingBody from '@/components/element/HeadingBody'
import SectionPage from '@/components/element/SectionPage'
import SubHeading from '@/components/element/SubHeading'
import Image from 'next/image'
import React from 'react'

export default function About() {
    return (
        <SectionPage id='about' className='h-fit sm:h-[120svh] pt-16 lg:pt-24 flex flex-col gap-7 lg:flex-row lg:justify-around items-center'>
            <div className='w-5/6 lg:w-2/5 h-1/3 sm:h-1/2 lg:h-full relative'>
                <Image src="/images/new-arrival.jpg" alt="New Product" width={900} height={1600} className='h-full aspect-auto object-cover object-center' />
                <a className='w-fit absolute bottom-0 left-1/2 -translate-x-1/2 text-background text-xs' href="https://www.freepik.com/free-photo/eyeglasses-book-vase-tulips-table_8135679.htm#fromView=search&page=1&position=32&uuid=660bdab4-1781-4951-aa3d-e6865434275e">Image by KamranAydinov on Freepik</a>
            </div>
            <div className='w-11/12 lg:w-2/5 h-3/5 lg:h-full flex flex-col gap-5 lg:gap-0 lg:justify-evenly'>
                <SubHeading className='h-fit w-fit flex items-center gap-2'>
                    <h3>About</h3>
                    <h3>Us</h3>
                </SubHeading>
                <Heading className='h-fit lg:h-1/6 font-normal'>
                    <h1>Our Commitment to Quality Eyewear</h1>
                </Heading>
                <HeadingBody className='h-fit'>
                    <p>Eget nam congue neque nunc vel viverra lorem massa urna. Magna proin pellentesque cras amet et. Sit in mattis quam nec tellus.</p>
                </HeadingBody>
                <section className="flex flex-col gap-5">
                    {checkedData.map((checked, index) => (
                        <ChecklistItem
                            key={index}
                            title={checked.title}
                            description={checked.description}
                        />
                    ))}
                </section>
            </div>
        </SectionPage>
    )
}

const checkedData = [
    {
        title: "Vision Clarity",
        description: "Vestibulum facilisis velit amet lacus. Metus sapien eu lorem dictumst at bibendum gravida auctor."
    },
    {
        title: "Vision Clarity",
        description: "Vestibulum facilisis velit amet lacus. Metus sapien eu lorem dictumst at bibendum gravida auctor."
    },
    {
        title: "Vision Clarity",
        description: "Vestibulum facilisis velit amet lacus. Metus sapien eu lorem dictumst at bibendum gravida auctor."
    },
]