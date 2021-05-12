import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../Container/Container'
import CalendarIcon from '../../assets/images/calendar.svg'
import NextIcon from '../../assets/images/next-svg.svg'
import './HomeNews.scss'

function HomeNews() {
    return (
        <section className='home-news'>
            <Container>
                <h2 className='home-news__heading'>
                    <small className='home-news__heading-small'>ЧТО</small>
                    НОВОГО
                </h2>

                <ul className='home-news__list'>
                    <li className='home-news__item'>
                        <img
                            className='home-news__item-image'
                            src='http://via.placeholder.com/360x230'
                            alt='Blog post illustration'
                        />

                        <time className='home-news__time'>
                            <img
                                src={CalendarIcon}
                                alt='Calendar illustration'
                                width='14'
                                height='14'
                            />
                            February 28, 2021
                        </time>

                        <h3 className='home-news__item-heading'>
                            5 Ways Technology Has Improved Business Today
                        </h3>

                        <Link className='home-news__more-link' to='/blog'>
                            Read more
                            <img
                            className='home-news__more-link-img'
                                src={NextIcon}
                                alt='Next icon illustration'
                                width='15'
                                height='12'
                            />
                        </Link>
                    </li>
                    <li className='home-news__item'>
                        <img
                            className='home-news__item-image'
                            src='http://via.placeholder.com/360x230'
                            alt='Blog post illustration'
                        />

                        <time className='home-news__time'>
                            <img
                                src={CalendarIcon}
                                alt='Calendar illustration'
                                width='14'
                                height='14'
                            />
                            February 28, 2021
                        </time>

                        <h3 className='home-news__item-heading'>
                            5 Ways Technology Has Improved Business Today
                        </h3>

                        <Link className='home-news__more-link' to='/blog'>
                            Read more
                            <img
                            className='home-news__more-link-img'
                                src={NextIcon}
                                alt='Next icon illustration'
                                width='15'
                                height='12'
                            />
                        </Link>
                    </li>
                    <li className='home-news__item'>
                        <img
                            className='home-news__item-image'
                            src='http://via.placeholder.com/360x230'
                            alt='Blog post illustration'
                        />

                        <time className='home-news__time'>
                            <img
                                src={CalendarIcon}
                                alt='Calendar illustration'
                                width='14'
                                height='14'
                            />
                            February 28, 2021
                        </time>

                        <h3 className='home-news__item-heading'>
                            5 Ways Technology Has Improved Business Today
                        </h3>

                        <Link className='home-news__more-link' to='/blog'>
                            Read more
                            <img
                            className='home-news__more-link-img'
                                src={NextIcon}
                                alt='Next icon illustration'
                                width='15'
                                height='12'
                            />
                        </Link>
                    </li>
                </ul>
            </Container>
        </section>
    )
}

export default HomeNews
