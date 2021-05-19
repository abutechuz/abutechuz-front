import React from 'react'
import Container from '../Container/Container'
import './ServiceWork.scss'
import IconIdea from '../Lib/Svg/IconIdea'
import IconResearch from '../Lib/Svg/IconResearch'
import IconDesign from '../Lib/Svg/IconDesign'
import IconPrototype from '../Lib/Svg/IconPrototype'
import IconDevelop from '../Lib/Svg/IconDevelop'
import IconReview from '../Lib/Svg/IconReview'
import IconTest from '../Lib/Svg/IconTest'
import IconLaunch from '../Lib/Svg/IconLaunch'

function ServiceWork() {
    return (
        <section className='service-work'>
            <Container>
                <h2 className='service-work__heading'>How we work</h2>
            </Container>
            <div className='service-work__list-wrapper'>
                <Container>
                    <ul className='service-work__list'>
                        <li className='service-work__item'>
                            <IconIdea />
                            idea
                        </li>
                        <li className='service-work__item'>
                            <IconResearch />
                            research
                        </li>
                        <li className='service-work__item'>
                            <IconDesign />
                            design
                        </li>
                        <li className='service-work__item  '>
                            <IconPrototype />
                            prototype
                        </li>
                        <li className='service-work__item'>
                            <IconDevelop />
                            develop
                        </li>
                        <li className='service-work__item'>
                            <IconReview />
                            review
                        </li>
                        <li className='service-work__item'>
                            <IconTest />
                            test
                        </li>
                        <li className='service-work__item '>
                            <IconLaunch />
                            launch
                        </li>
                    </ul>
                </Container>
            </div>
        </section>
    )
}

export default ServiceWork
