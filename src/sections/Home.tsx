import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Eye from '../components/icon/Eye'

export default function HomeSection() {
    return (
        <section id='home' className='bg-background h-[100svh] pt-36 w-full flex items-center justify-evenly'>
            <div className='w-5/6 sm:w-1/2 lg:w-1/3 sm:h-1/2 lg:h-full flex flex-col justify-center'>
                <SubHeading />
                <Heading />
                <HeadingBody />
                <span className='flex gap-5'>
                    <Button className='bg-darkBlue hover:bg-darkBlue/80 sm:p-6 rounded-full text-xs'>Browse for Men</Button>
                    <Button className='bg-lightBlue hover:bg-lightBlue/80 sm:p-6 rounded-full text-xs'>Browse for Women</Button>
                </span>
            </div>
            <Model />
        </section>
    )
}

function Heading() {
    return (
        <div className="w-full h-1/6 sm:h-1/4 text-foreground text-3xl sm:text-4xl lg:text-5xl font-semibold">
            <h1>Perfect Glasses for</h1>
            <h1>Your Style</h1>
        </div>
    )
}

function SubHeading() {
    return (
        <div className='w-4/5 sm:w-3/5 h-10 sm:h-1/6 text-darkGold flex justify-between items-center font-semibold text-xs sm:text-sm'>
            <Eye className="w-4 lg:w-6 h-4 lg:h-6" />
            <h3>OPTICS</h3>
            <h3>-</h3>
            <h3>GLASSES</h3>
            <h3>&</h3>
            <h3>EYEWEAR</h3>
        </div>
    )
}

function HeadingBody() {
    return (
        <div className='text-justify h-1/6 sm:h-1/3 lg::h-1/4 w-full text-xs sm:text-base'>
            <p>Discover the latest trends in eyewear that suit your personality. We offer a variety of styles for every occasion, combining fashion with comfort. Explore our collection and find the perfect pair that complements your look.</p>
        </div>
    )
}

function Model() {
    return (
        <figure className="w-2/5 sm:h-1/2 lg:h-full hidden sm:flex justify-center relative">
            <Image src={"/images/model.jpg"} alt='Model Picture' width={300} height={700} className='sm:w-4/5 lg:w-3/4 aspect-auto' />
            <figcaption className='absolute bottom-0 text-background text-xs'>
                <a target='_blank' href="https://www.freepik.com/free-photo/street-fashion-pretty-woman-with-red-manicure-transperent-glasses-sitting-table_9185061.htm#fromView=search&page=3&position=4&uuid=0abcf8f7-9ecd-420c-971a-2d904077fadd">Image by diana.grytsku on Freepik</a>
            </figcaption>
        </figure>
    )
}