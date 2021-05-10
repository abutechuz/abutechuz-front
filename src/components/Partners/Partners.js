import React from 'react'
import Container from '../Container/Container'
import { Link } from 'react-router-dom'
import TinySlider from 'tiny-slider-react'
import './Partners.scss'

function Partners() {
    const settings = {
        lazyload: true,
        nav: true,
        controls: false,
        mouseDrag: true,
        items: 8,
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

                <TinySlider settings={settings}>
                    <div className='push'>Link 1</div>
                    <div className='push'>Link 2</div>
                    <div className='push'>Link 3</div>
                    <div className='push'>Link 4</div>
                    <div className='push'>Link 5</div>
                    <div className='push'>Link 6</div>
                    <div className='push'>Link 7</div>
                    <div className='push'>Link 8</div>
                    <div className='push'>Link 9</div>
                    <div className='push'>Link 10</div>
                    <div className='push'>Link 11</div>
                </TinySlider>

                <Link className='partners__link' to='/become-partner'>
                    Link
                </Link>
            </Container>
        </section>
    )
}

export default Partners
