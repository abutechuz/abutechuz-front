import React from 'react'
import Container from '../Container/Container'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import './Partners.scss'
import SpaceX from '../../assets/images/spacex.png'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function Partners() {
    const settings = {
        className: 'partners__slider',
        dots: true,
        centerMode: true,
        infinite: true,
        slidesToShow: 1,
        speed: 500,
        rows: 2,
        slidesPerRow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1385,
                settings: {
                    slidesToShow: 1,
                    slidesPerRow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    slidesPerRow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
        ],
    }

    return (
        <section className='partners'>
            <Container>
                <h2 className='partners__heading'>
                    <small className='partners__heading-small'>МЫ</small>
                    БЛАГОДАРНЫ ИМ
                </h2>
                <p className='partners__paragraph'>
                    Наша миссия - распространять образование, которое можно
                    получить где угодно и к которому можно получить доступ где
                    угодно.
                </p>

                <Slider {...settings}>
                    <a className='partners__slider-link' href='#link'>
                        <img src={SpaceX} alt='Rasm ' />
                    </a>
                    <a className='partners__slider-link' href='#link'>
                        <img src={SpaceX} alt='Rasm ' />
                    </a>
                    <a className='partners__slider-link' href='#link'>
                        <img src={SpaceX} alt='Rasm ' />
                    </a>
                    <a className='partners__slider-link' href='#link'>
                        <img src={SpaceX} alt='Rasm ' />
                    </a>
                    <a className='partners__slider-link' href='#link'>
                        <img src={SpaceX} alt='Rasm ' />
                    </a>
                    <a className='partners__slider-link' href='#link'>
                        <img src={SpaceX} alt='Rasm ' />
                    </a>
                    <a className='partners__slider-link' href='#link'>
                        <img src={SpaceX} alt='Rasm ' />
                    </a>
                    <a className='partners__slider-link' href='#link'>
                        <img src={SpaceX} alt='Rasm ' />
                    </a>
                    <a className='partners__slider-link' href='#link'>
                        <img src={SpaceX} alt='Rasm ' />
                    </a>
                    <a className='partners__slider-link' href='#link'>
                        <img src={SpaceX} alt='Rasm ' />
                    </a>
                    <a className='partners__slider-link' href='#link'>
                        <img src={SpaceX} alt='Rasm ' />
                    </a>
                    <a className='partners__slider-link' href='#link'>
                        <img src={SpaceX} alt='Rasm ' />
                    </a>
                    <a className='partners__slider-link' href='#link'>
                        <img src={SpaceX} alt='Rasm ' />
                    </a>
                    <a className='partners__slider-link' href='#link'>
                        <img src={SpaceX} alt='Rasm ' />
                    </a>
                    <a className='partners__slider-link' href='#link'>
                        <img src={SpaceX} alt='Rasm ' />
                    </a>
                    <a className='partners__slider-link' href='#link'>
                        <img src={SpaceX} alt='Rasm ' />
                    </a>
                    <a className='partners__slider-link' href='#link'>
                        <img src={SpaceX} alt='Rasm ' />
                    </a>
                    <a className='partners__slider-link' href='#link'>
                        <img src={SpaceX} alt='Rasm ' />
                    </a>
                    <a className='partners__slider-link' href='#link'>
                        <img src={SpaceX} alt='Rasm ' />
                    </a>
                    <a className='partners__slider-link' href='#link'>
                        <img src={SpaceX} alt='Rasm ' />
                    </a>
                </Slider>

                <Link className='partners__link' to='/become-partner'>
                    стать партнёром
                </Link>
            </Container>
        </section>
    )
}

export default Partners
