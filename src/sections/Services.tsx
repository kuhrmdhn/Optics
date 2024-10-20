import BenefitCard from '@/components/element/BenefitCard'
import Heading from '@/components/element/Heading'
import HeadingBody from '@/components/element/HeadingBody'
import SectionPage from '@/components/element/SectionPage'
import ServiceCard from '@/components/element/ServiceCard'
import SubHeading from '@/components/element/SubHeading'
import EyeExam from '@/components/icons/EyeExam'
import LensFitting from '@/components/icons/LensFitting'
import LensUpgrade from '@/components/icons/LensUpgrade'
import VirtualTryOn from '@/components/icons/VirtualTryOn'
import React from 'react'

export default function Services() {
    return (
        <SectionPage id="services" className='h-[100svh] lg:h-[170svh] w-full px-10 pt-10 lg:pt-20 flex flex-col justify-around'>
            <div className='h-2/5 w-full'>
                <section className='h-1/5 w-full'>
                    <SubHeading className='gap-3'>Full service</SubHeading>
                    <Heading>Our Services</Heading>
                </section>
                <ServiceLists />
            </div>
            <div className="h-1/2 w-full flex flex-col justify-between">
                <section className="h-2/5 w-full flex flex-col lg:flex-row justify-evenly items-center">
                    <div className='w-full lg:w-2/5 h-full flex flex-col'>
                        <SubHeading className='gap-3'>Why Choose Us</SubHeading>
                        <Heading>Discover the Benefits of Choosing Us</Heading>
                    </div>
                    <div className='w-full lg:w-1/4 h-full flex items-end'>
                        <HeadingBody>Eget nam congue neque nunc vel viverra lorem massa urna. Magna proin pellentesque cras amet et. Sit in mattis quam nec tellus.</HeadingBody>
                    </div>
                </section>
                <section className="h-1/2 w-full">
                    <BenefitList />
                </section>
            </div>
        </SectionPage>
    )
}

function ServiceLists() {
    return (
        <ul className='w-full h-4/5 flex lg:justify-around items-center gap-7 overflow-y-auto overflow-hide'>
            {serviceData.map((service, index) => (
                <li key={index}>
                    <ServiceCard
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                    />
                </li>
            ))}
        </ul>
    )
}

const serviceData = [
    {
        icon: <EyeExam />,
        title: "Eye Exam",
        description: "Vestibulum facilisis velit amet lacus."
    },
    {
        icon: <LensUpgrade />,
        title: "Lens Upgrades",
        description: "Vestibulum facilisis velit amet lacus."
    },
    {
        icon: <LensFitting />,
        title: "Lens Fitting",
        description: "Vestibulum facilisis velit amet lacus."
    },
    {
        icon: <VirtualTryOn />,
        title: "Virtual Try On",
        description: "Vestibulum facilisis velit amet lacus."
    },
]


function BenefitList() {
    return (
        <div className="flex flex-row justify-around items-center lg:items-start h-full w-full overflow-hide overflow-y-auto gap-5 lg:gap-0">
            {benefitData.map((benefit, index) => (
                <BenefitCard
                    key={index}
                    index={index}
                    title={benefit.title}
                    description={benefit.description}
                    className={index % 2 == 0 ? "lg:self-end lg:justify-self-end" : "lg:self-start lg:justify-self-start"}
                />
            ))}
        </div>
    )
}


const benefitData = [
    {
        title: "Unparalleled Selection",
        description: "Lorem viverra eget mauris nunc. Nullam lorem tincidunt viverra."
    },
    {
        title: "Premium Quality",
        description: "Lorem viverra eget mauris nunc. Nullam lorem tincidunt viverra."
    },
    {
        title: "Expert Guidance",
        description: "Lorem viverra eget mauris nunc. Nullam lorem tincidunt viverra."
    },
    {
        title: "Personalized Service",
        description: "Lorem viverra eget mauris nunc. Nullam lorem tincidunt viverra."
    },
]