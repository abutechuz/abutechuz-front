import React from 'react'
import ServicesHero from '../../components/ServicesHero/ServicesHero'
import ServiceVideo from '../../components/ServiceVideo/ServiceVideo'
import ServiceHelp from '../../components/ServiceHelp/ServiceHelp'
import ServiceWork from '../../components/ServiceWork/ServiceWork'
import ServiceContact from '../../components/ServiceContact/ServiceContact'

function SingleService() {
    return (
        <>
            <ServicesHero />
            <ServiceVideo />
            <ServiceHelp />
            <ServiceWork />
            <ServiceContact />
        </>
    )
}

export default SingleService
