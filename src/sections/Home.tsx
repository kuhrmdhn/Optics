import Heading from '@/components/element/Heading'
import HeadingBody from '@/components/element/HeadingBody'
import SectionDivide from '@/components/element/SectionDivide'
import SectionPage from '@/components/element/SectionPage'
import SubHeading from '@/components/element/SubHeading'
import { Button } from '@/components/ui/button'
import { Shield, ShoppingBag, SlidersVertical, Truck } from 'lucide-react'
import Image from 'next/image'

export default function HomeSection() {
    return (
        <>
            <SectionPage id="home" className='bg-background flex items-center justify-evenly'>
                <div className='w-5/6 sm:w-2/5 lg:w-1/3 h-5/6 sm:h-1/2 lg:h-full flex flex-col justify-center gap-5 lg:gap-0'>
                    <SubHeading className='w-4/5 sm:w-3/5 h-10 sm:h-1/6 flex justify-between items-center '>
                        <h3>OPTICS</h3>
                        <h3>-</h3>
                        <h3>GLASSES</h3>
                        <h3>&</h3>
                        <h3>EYEWEAR</h3>
                    </SubHeading>
                    <Heading className='w-full h-1/6 sm:h-1/4'>
                        <h1>Perfect Glasses for</h1>
                        <h1>Your Style</h1>
                    </Heading>
                    <HeadingBody className='h-1/6 sm:h-1/3 lg:h-1/4 w-full'>
                        <p>Discover the latest trends in eyewear that suit your personality. We offer a variety of styles for every occasion, combining fashion with comfort. Explore our collection and find the perfect pair that complements your look.</p>
                    </HeadingBody>
                    <span className='flex gap-5 text-xs md:text-base'>
                        <Button className='bg-darkBlue hover:bg-darkBlue/80 p-2 sm:p-6 rounded-full'>Browse for Men</Button>
                        <Button className='bg-lightBlue hover:bg-lightBlue/80 sm:p-6 rounded-full'>Browse for Women</Button>
                    </span>
                </div>
                <Model />
            </SectionPage>
            <HomeDivide />
        </>
    )
}

function Model() {
    return (
        <figure className="w-2/5 sm:w-1/2 lg:w-2/5 sm:h-1/2 lg:h-full hidden sm:flex justify-center relative">
            <Image src={"/images/model.jpg"} alt='Model Picture' width={900} height={1200} className='sm:w-4/5 lg:w-3/4 aspect-auto' />
            <figcaption className='absolute bottom-0 text-background text-xs'>
                <a target='_blank' href="https://www.freepik.com/free-photo/street-fashion-pretty-woman-with-red-manicure-transperent-glasses-sitting-table_9185061.htm#fromView=search&page=3&position=4&uuid=0abcf8f7-9ecd-420c-971a-2d904077fadd">Image by diana.grytsku on Freepik</a>
            </figcaption>
        </figure>
    )
}

function HomeDivide() {
    const divideData = [
        {
            icon: <ShoppingBag />,
            description: "Shop online and collect at one of our stores."
        },
        {
            icon: <SlidersVertical />,
            description: "Free fitting and adjustment in offline store."
        },
        {
            icon: <Shield />,
            description: "We accept most insurance plans, online and offline."
        },
        {
            icon: <Truck />,
            description: "Free shipping and 30-day returns online and offline."
        },
    ]
    return (
        <SectionDivide className='bg-foreground flex justify-evenly items-center text-white font-extralight text-left h-[20svh] lg:h-[30svh]'>
            {divideData.map((divide, index) => (
                <section key={index} className='w-44 lg:w-52 h-28 flex flex-col justify-evenly'>
                    <span>{divide.icon}</span>
                    <p className='text-xs sm:text-sm lg:text-base'>{divide.description}</p>
                </section>
            ))}
        </SectionDivide>
    )
}