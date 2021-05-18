import React from 'react'
import Container from '../Container/Container'
import './PortfolioTech.scss'

function PortfolioTech() {
    return (
        <section className='portfolio-tech'>
            <Container>
                <h2 className='portfolio-tech__heading'>Technology stack</h2>

                <p className='portfolio-tech__paragraph'>
                    See the ways how the development teamx implemented client’s
                    requirements
                </p>

                <ul className='portfolio-tech__list'>
                    <li className='portfolio-tech__item'>
                        <h3 className='portfolio-tech__item-heading'>
                            Mobile Architecture
                        </h3>

                        <div className='portfolio-tech__stack'>
                            <div className='portfolio-tech__stack-list'>
                                <h4 className='portfolio-tech__stack-heading'>
                                    iOS
                                </h4>
                                <div className='portfolio-tech__stack-item-wrapper'>
                                    <div className='portfolio-tech__stack-item'>
                                        <img
                                            src='https://via.placeholder.com/70'
                                            alt='Technology'
                                            width='70'
                                            height='70'
                                        />
                                        Swift
                                    </div>
                                    <div className='portfolio-tech__stack-item'>
                                        <img
                                            src='https://via.placeholder.com/70'
                                            alt='Technology'
                                            width='70'
                                            height='70'
                                        />
                                        Xcode
                                    </div>
                                    <div className='portfolio-tech__stack-item'>
                                        <img
                                            src='https://via.placeholder.com/70'
                                            alt='Technology'
                                            width='70'
                                            height='70'
                                        />
                                        App Store
                                    </div>
                                </div>
                            </div>
                            <div className='portfolio-tech__stack-list'>
                                <h4 className='portfolio-tech__stack-heading'>
                                    Android
                                </h4>

                                <div className='portfolio-tech__stack-item-wrapper'>
                                    <div className='portfolio-tech__stack-item'>
                                        <img
                                            src='https://via.placeholder.com/70'
                                            alt='Technology'
                                            width='70'
                                            height='70'
                                        />
                                        Kotlin
                                    </div>
                                    <div className='portfolio-tech__stack-item'>
                                        <img
                                            src='https://via.placeholder.com/70'
                                            alt='Technology'
                                            width='70'
                                            height='70'
                                        />
                                        AS
                                    </div>
                                    <div className='portfolio-tech__stack-item'>
                                        <img
                                            src='https://via.placeholder.com/70'
                                            alt='Technology'
                                            width='70'
                                            height='70'
                                        />
                                        Firebase
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className='portfolio-tech__item'>
                        <h3 className='portfolio-tech__item-heading'>
                            Web Architecture
                        </h3>

                        <div className='portfolio-tech__stack'>
                            <div className='portfolio-tech__stack-list'>
                                <h4 className='portfolio-tech__stack-heading'>
                                    Backend
                                </h4>
                                <div className='portfolio-tech__stack-item-wrapper'>
                                    <div className='portfolio-tech__stack-item'>
                                        <img
                                            src='https://via.placeholder.com/70'
                                            alt='Technology'
                                            width='70'
                                            height='70'
                                        />
                                        Swift
                                    </div>
                                    <div className='portfolio-tech__stack-item'>
                                        <img
                                            src='https://via.placeholder.com/70'
                                            alt='Technology'
                                            width='70'
                                            height='70'
                                        />
                                        Xcode
                                    </div>
                                    <div className='portfolio-tech__stack-item'>
                                        <img
                                            src='https://via.placeholder.com/70'
                                            alt='Technology'
                                            width='70'
                                            height='70'
                                        />
                                        App Store
                                    </div>
                                </div>
                            </div>
                            <div className='portfolio-tech__stack-list'>
                                <h4 className='portfolio-tech__stack-heading'>
                                    Frontend
                                </h4>

                                <div className='portfolio-tech__stack-item-wrapper'>
                                    <div className='portfolio-tech__stack-item'>
                                        <img
                                            src='https://via.placeholder.com/70'
                                            alt='Technology'
                                            width='70'
                                            height='70'
                                        />
                                        NodeJS
                                    </div>
                                    <div className='portfolio-tech__stack-item'>
                                        <img
                                            src='https://via.placeholder.com/70'
                                            alt='Technology'
                                            width='70'
                                            height='70'
                                        />
                                        WebStorm
                                    </div>
                                    <div className='portfolio-tech__stack-item'>
                                        <img
                                            src='https://via.placeholder.com/70'
                                            alt='Technology'
                                            width='70'
                                            height='70'
                                        />
                                        PostgreSQL
                                    </div>
                                    <div className='portfolio-tech__stack-item'>
                                        <img
                                            src='https://via.placeholder.com/70'
                                            alt='Technology'
                                            width='70'
                                            height='70'
                                        />
                                        ES6
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </Container>
        </section>
    )
}

export default PortfolioTech
