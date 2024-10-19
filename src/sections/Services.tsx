import Heading from '@/components/element/Heading'
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
        <SectionPage id="services" className='h-[60svh] lg:h-[80svh] w-full px-10 flex flex-col justify-around pt-24'>
            <div className='h-1/5 w-full'>
                <SubHeading className='gap-3'>Full service</SubHeading>
                <Heading>Our Services</Heading>
            </div>
            <ServiceLists />
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