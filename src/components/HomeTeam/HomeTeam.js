import React from 'react'
import './HomeTeam.scss'

function HomeTeam() {
    return (
        <section className='hometeam'>
            <div className='container'>
                <h2 className='hometeam__heading'>
                    <small className='hometeam__small-heading'>НАША</small>
                    КОМАНДА
                </h2>

                <p className='hometeam__paragraph'>
                    Pet owners, Film geeks, Sports Junkies? It’s obvious, the
                    team work is splendid, for they are all either beer nuts or
                    caffeine addicts.
                </p>

                <ul className='hometeam__list'>
                    <li className='hometeam__item'>
                        <figure className='hometeam__item-figure'>
                            <img
                                className='hometeam__item-figure-img'
                                src='https://via.placeholder.com/285x285'
                                alt='Team member'
                                width='285'
                                height='285'
                            />
                            <figcaption className='hometeam__item-figcaption'>
                                Sinfdoshim Maftun
                                <small className='hometeam__item-small-figcaption'>
                                    Smm manager
                                </small>
                            </figcaption>
                        </figure>
                    </li>
                    <li className='hometeam__item'>
                        <figure className='hometeam__item-figure'>
                            <img
                                src='https://via.placeholder.com/230x250'
                                alt='Team member'
                                width='230'
                                height='250'
                            />
                            <figcaption className='hometeam__item-figcaption'>
                                Sinfdoshim Maftun
                                <small className='hometeam__item-small-figcaption'>
                                    Smm manager
                                </small>
                            </figcaption>
                        </figure>
                    </li>
                    <li className='hometeam__item'>
                        <figure className='hometeam__item-figure'>
                            <img
                                src='https://via.placeholder.com/220x245'
                                alt='Team member'
                                width='220'
                                height='245'
                            />
                            <figcaption className='hometeam__item-figcaption'>
                                Sinfdoshim Maftun
                                <small className='hometeam__item-small-figcaption'>
                                    Smm manager
                                </small>
                            </figcaption>
                        </figure>
                    </li>
                    <li className='hometeam__item'>
                        <figure className='hometeam__item-figure'>
                            <img
                                src='https://via.placeholder.com/210x240'
                                alt='Team member'
                                width='210'
                                height='240'
                            />
                            <figcaption className='hometeam__item-figcaption'>
                                Sinfdoshim Maftun
                                <small className='hometeam__item-small-figcaption'>
                                    Smm manager
                                </small>
                            </figcaption>
                        </figure>
                    </li>
                    <li className='hometeam__item'>
                        <figure className='hometeam__item-figure'>
                            <img
                                src='https://via.placeholder.com/205x220'
                                alt='Team member'
                                width='205'
                                height='220'
                            />
                            <figcaption className='hometeam__item-figcaption'>
                                Sinfdoshim Maftun
                                <small className='hometeam__item-small-figcaption'>
                                    Smm manager
                                </small>
                            </figcaption>
                        </figure>
                    </li>
                    <li className='hometeam__item'>
                        <figure className='hometeam__item-figure'>
                            <img
                                src='https://via.placeholder.com/220x220'
                                alt='Team member'
                                width='220'
                                height='220'
                            />
                            <figcaption className='hometeam__item-figcaption'>
                                Sinfdoshim Maftun
                                <small className='hometeam__item-small-figcaption'>
                                    Smm manager
                                </small>
                            </figcaption>
                        </figure>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default HomeTeam
