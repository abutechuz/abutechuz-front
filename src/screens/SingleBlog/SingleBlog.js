import React from 'react'
import './SingleBlog.scss'
import IconNext from '../../components/Lib/Svg/IconNext'
import IconCalendar from '../../components/Lib/Svg/IconCalendar'
import { Link } from 'react-router-dom'
import InstagramIcon from '../../components/Lib/Svg/InstagramIcon'

function SingleBlog() {
    return (
        <>
            <section className='single-blog-post'>
                <div className='container'>Single blog shuhratbeks work</div>
            </section>

            <section className='single-blog-recommended'>
                <div className='container'>
                    <h2 className='single-blog-recommended__heading'>
                        You may also be interested
                    </h2>

                    <ul className='single-blog-recommended__list'>
                        <li className='single-blog-recommended__item'>
                            <img
                                src='https://via.placeholder.com/355x280'
                                alt='People are working'
                                width='355'
                                height='280'
                            />

                            <div className='single-blog-recommended__item-inner'>
                                <div className='single-blog-recommended__item-inner-top'>
                                    <h3 className='single-blog-recommended__item-heading'>
                                        5 steps to protect yourself against
                                        ransomware
                                    </h3>

                                    <p className='single-blog-recommended__item-paragraph'>
                                        Risus scelerisque tincidunt semper
                                        mattis consequat. Scelerisque imperdiet
                                        quam risus tincidunt...
                                    </p>
                                </div>

                                <div className='single-blog-recommended__item-inner-bottom'>
                                    <time className='single-blog-recommended__item-time'>
                                        <IconCalendar />
                                        February 28, 2021
                                    </time>
                                    <Link
                                        className='single-blog-recommended__link'
                                        to='/single-blog/1'>
                                        <IconNext />
                                    </Link>
                                </div>
                            </div>
                        </li>

                        <li className='single-blog-recommended__item'>
                            <img
                                src='https://via.placeholder.com/355x280'
                                alt='People are working'
                                width='355'
                                height='280'
                            />

                            <div className='single-blog-recommended__item-inner'>
                                <div className='single-blog-recommended__item-inner-top'>
                                    <h3 className='single-blog-recommended__item-heading'>
                                        5 steps to protect yourself against
                                        ransomware
                                    </h3>

                                    <p className='single-blog-recommended__item-paragraph'>
                                        Risus scelerisque tincidunt semper
                                        mattis consequat. Scelerisque imperdiet
                                        quam risus tincidunt...
                                    </p>
                                </div>

                                <div className='single-blog-recommended__item-inner-bottom'>
                                    <time className='single-blog-recommended__item-time'>
                                        <IconCalendar />
                                        February 28, 2021
                                    </time>
                                    <Link
                                        className='single-blog-recommended__link'
                                        to='/single-blog/1'>
                                        <IconNext />
                                    </Link>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <section className='single-blog-social'>
                <div className='container'>
                    <div className='single-blog__wrapper'>
                        <h2 className='single-blog-social__heading'>
                            Stay tuned about real IT world
                        </h2>

                        <a
                            className='single-blog-social__link'
                            href='#link'
                            target='__blank'>
                            <InstagramIcon />
                            FOLLOW ON INSTAGRAM
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleBlog
