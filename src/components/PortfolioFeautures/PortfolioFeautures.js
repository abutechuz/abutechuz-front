import React from 'react'
import Container from '../Container/Container'
import './PortfolioFeautures.scss'

function PortfolioFeautures() {
    return (
        <section className='portfolio-features'>
            <Container>
                <h2 className='portfolio-features__heading'>
                    Main features of the project
                </h2>

                <ul className='portfolio-features__list'>
                    <li className='portfolio-features__item'>
                        <div className='portfolio-features__item-info'>
                            <h3 className='portfolio-features__item-heading'>
                                First main feature
                            </h3>
                            <p className='portfolio-features__item-text'>
                                Vehicula in sit morbi mattis gravida. Gravida at
                                eget auctor elementum. Hac eget viverra ornare
                                mi tortor. Enim nibh lectus nunc pellentesque
                                bibendum blandit euismod eget. Ultrices arcu
                                varius dictum viverra vitae quis risus ac. Urna
                                feugiat sed urna tortor tellus elementum est.
                                Risus.
                            </p>
                        </div>

                        <img
                            className='portfolio-features__item-img'
                            src='https://via.placeholder.com/640x450'
                            alt='Portfolio feautre'
                            width='640'
                            height='450'
                        />
                    </li>
                    <li className='portfolio-features__item'>
                        <div className='portfolio-features__item-info'>
                            <h3 className='portfolio-features__item-heading'>
                                First main feature
                            </h3>
                            <p className='portfolio-features__item-text'>
                                Vehicula in sit morbi mattis gravida. Gravida at
                                eget auctor elementum. Hac eget viverra ornare
                                mi tortor. Enim nibh lectus nunc pellentesque
                                bibendum blandit euismod eget. Ultrices arcu
                                varius dictum viverra vitae quis risus ac. Urna
                                feugiat sed urna tortor tellus elementum est.
                                Risus.
                            </p>
                        </div>

                        <img
                            className='portfolio-features__item-img'
                            src='https://via.placeholder.com/640x450'
                            alt='Portfolio feautre'
                            width='640'
                            height='450'
                        />
                    </li>
                    <li className='portfolio-features__item'>
                        <div className='portfolio-features__item-info'>
                            <h3 className='portfolio-features__item-heading'>
                                First main feature
                            </h3>
                            <p className='portfolio-features__item-text'>
                                Vehicula in sit morbi mattis gravida. Gravida at
                                eget auctor elementum. Hac eget viverra ornare
                                mi tortor. Enim nibh lectus nunc pellentesque
                                bibendum blandit euismod eget. Ultrices arcu
                                varius dictum viverra vitae quis risus ac. Urna
                                feugiat sed urna tortor tellus elementum est.
                                Risus.
                            </p>
                        </div>

                        <img
                            className='portfolio-features__item-img'
                            src='https://via.placeholder.com/640x450'
                            alt='Portfolio feautre'
                            width='640'
                            height='450'
                        />
                    </li>
                </ul>
            </Container>
        </section>
    )
}

export default PortfolioFeautures
