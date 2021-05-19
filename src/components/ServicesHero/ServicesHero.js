import React from 'react'
import Container from '../Container/Container'
import IconNext from '../Lib/Svg/IconNext'
import './ServicesHero.scss'

function ServicesHero() {
    return (
        <section className='services-hero'>
            <Container>
                <h2 className='services-hero__heading'>UX & UI design</h2>
                <p className='services-hero__paragraph'>
                    Derazamning tagida bir tup o’rik oppoq bo’lib gulladi.
                    Biznikini sovuq urib ketdi :)
                </p>

                <a className='services-hero__create-link' href='#link'>
                    Create project
                    <IconNext />
                </a>
            </Container>
        </section>
    )
}

export default ServicesHero
