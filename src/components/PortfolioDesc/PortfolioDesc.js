import React from 'react'
import './PortfolioDesc.scss'
import Container from '../Container/Container'
import ListStyle from '../Lib/Svg/ListStyle'
import WebImg from '../Lib/Svg/WebImg'
import GooglePlay from '../../assets/images/googleplay-image.svg'
import AppStore from '../../assets/images/appstore-image.svg'

function PortfolioDesc() {
    return (
        <section className='portfolio-desc__wrapper'>
            <Container>
                <ul className='portfolio-desc__list'>
                    <li className='portfolio-desc__item'>
                        <h3 className='portfolio-desc__item-heading'>
                            Overview
                        </h3>
                        <p className='portfolio-desc__item-desc'>
                            Twinkle was an iconic US company known for video and
                            game rentals. Danish TDC acquired its brand rights
                            to launch a video streaming platform in the Nordics.
                            Now Blockbuster is over 8,000 movies and 350 seasons
                            of TV series.
                        </p>
                    </li>
                    <li className='portfolio-desc__item'>
                        <h3 className='portfolio-desc__item-heading'>
                            Project idea
                        </h3>
                        <p className='portfolio-desc__item-desc'>
                            Create a streaming service that allows viewers in
                            the Nordic region to purchase or rent high-quality
                            movies and TV series.
                        </p>
                    </li>
                    <li className='portfolio-desc__item'>
                        <h3 className='portfolio-desc__item-heading'>
                            Target audience
                        </h3>
                        <p className='portfolio-desc__item-desc'>
                            Viewers across the Nordic region (Denmark, Sweden,
                            Finland, Norway)
                        </p>
                    </li>
                    <li className='portfolio-desc__item'>
                        <h3 className='portfolio-desc__item-heading'>
                            Project challenges
                        </h3>
                        <ul className='portfolio-desc__challanges-list'>
                            <li className='portfolio-desc__challanges-item'>
                                <ListStyle />
                                Create a sophisticated filtering system
                            </li>
                            <li className='portfolio-desc__challanges-item'>
                                <ListStyle />
                                Implement a parental control feature
                            </li>
                        </ul>
                    </li>
                    <li className='portfolio-desc__item'>
                        <h3 className='portfolio-desc__item-heading'>Result</h3>
                        <p className='portfolio-desc__item-desc'>
                            Our team developed a complex search system and
                            created video players for iOS and Android. We’ve
                            designed a completely new UI, built iOS,
                            reengineered Android and Android TV apps, and
                            partially moved to GraphQL.
                        </p>
                    </li>
                </ul>

                <ul className='portfolio-desc__socicals-list'>
                    <li className='portfolio-desc__socials-item'>
                        <a
                            className='portfolio-desc__socials-link'
                            href='#link'>
                            <img
                                src={GooglePlay}
                                alt='Portfolio links'
                                width='180'
                                height='60'
                            />
                        </a>
                    </li>
                    <li className='portfolio-desc__socials-item'>
                        <a
                            className='portfolio-desc__socials-link'
                            href='#link'>
                            <img
                                src={AppStore}
                                alt='Portfolio links'
                                width='180'
                                height='60'
                            />
                        </a>
                    </li>
                    <li className='portfolio-desc__socials-item'>
                        <a
                            className='portfolio-desc__socials-link portfolio-desc__socials-link-website'
                            href='#link'>
                            <WebImg />
                            Visit website
                        </a>
                    </li>
                </ul>
            </Container>
        </section>
    )
}

export default PortfolioDesc
