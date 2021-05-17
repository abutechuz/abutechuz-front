import React from 'react'
import './PortfolioIntro.scss'
import Container from '../Container/Container'

function PortfolioIntro() {
    return (
        <section className='portfolio-intro'>
            <Container>
                <div className='portfolio-intro__info'>
                    <h1 className='portfolio-intro__heading'>
                        A platform to help people find home
                    </h1>
                    <p className='portfolio-intro__info-text'>
                        Here goes some text that describes the main theme
                    </p>
                </div>
                <ul className='portfolio-intro__bottom-list'>
                    <li className='portfolio-intro__bottom-item'>
                        <h3 className='portfolio-intro__bottom-heading'>
                            client
                        </h3>
                        <p className='portfolio-intro__bottom-paragraph'>
                            Twinkle LLC
                        </p>
                    </li>
                    <li className='portfolio-intro__bottom-item'>
                        <h3 className='portfolio-intro__bottom-heading'>
                            team
                        </h3>
                        <p className='portfolio-intro__bottom-paragraph'>
                            12 members
                        </p>
                    </li>
                    <li className='portfolio-intro__bottom-item'>
                        <h3 className='portfolio-intro__bottom-heading'>
                            platforms
                        </h3>
                        <p className='portfolio-intro__bottom-paragraph'>
                            iOS, Andriod, Web
                        </p>
                    </li>
                    <li className='portfolio-intro__bottom-item'>
                        <h3 className='portfolio-intro__bottom-heading'>
                            industry
                        </h3>
                        <p className='portfolio-intro__bottom-paragraph'>
                            Real estate
                        </p>
                    </li>
                    <li className='portfolio-intro__bottom-item'>
                        <h3 className='portfolio-intro__bottom-heading'>
                            Time
                        </h3>
                        <p className='portfolio-intro__bottom-paragraph'>
                            6 weeks
                        </p>
                    </li>
                    <li className='portfolio-intro__bottom-item'>
                        <h3 className='portfolio-intro__bottom-heading'>
                            Release
                        </h3>
                        <p className='portfolio-intro__bottom-paragraph'>
                            2020
                        </p>
                    </li>
                </ul>
            </Container>
        </section>
    )
}

export default PortfolioIntro
