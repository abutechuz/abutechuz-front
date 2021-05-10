import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../Container/Container'
import './FooterBottom.scss'
import IconNext from '../Lib/Svg/IconNext'

function FooterBottom() {
    return (
        <div className='site-footer__bottom'>
            <Container>
                <div className='site-footer__bottom-header'>
                    <h2 className='site-footer__bottom-heading'>
                        Хотите сделать что-то великое? Позвольте вам помочь.
                    </h2>
                    <p className='site-footer__bottom-paragraph'>
                        Готовы? Свяжитесь сегодня.
                    </p>
                </div>

                <div className='site-footer__bottom-content'>
                    <ul className='site-footer__bottom-left'>
                        <li className='site-footer__bottom-left-item'>
                            <h3 className='site-footer__bottom-left-heading'>
                                Сяжитесь с нами!
                            </h3>
                            <a
                                className='site-footer__bottom-link'
                                href='mailto:info@abutech.com'
                                target='blank'>
                                info@abutech.com
                            </a>
                        </li>
                        <li className='site-footer__bottom-left-item'>
                            <h3 className='site-footer__bottom-left-heading'>
                                Номер телефона
                            </h3>
                            <a
                                className='site-footer__bottom-link'
                                href='tel:+994 94 944 94 84'
                                target='blank'>
                                +994 94 944 94 84
                            </a>
                        </li>
                        <li className='site-footer__bottom-left-item'>
                            <h3 className='site-footer__bottom-left-heading'>
                                Наш офис
                            </h3>
                            <address className='site-footer__bottom-link'>
                                Sebzor street, Xadra square, Tashkent,
                                Uzbekistan
                            </address>
                        </li>

                        <li className='site-footer__bottom-left-item'>
                            <h3 className='site-footer__bottom-left-heading'>
                                Мы в соц.сетях
                            </h3>
                            <div className='site-footer__bottom-link-wrapper'>
                                <a
                                    className='site-footer__bottom-link'
                                    href='#link'>
                                    Facebook
                                </a>
                                <a
                                    className='site-footer__bottom-link'
                                    href='#link'>
                                    Instagram
                                </a>
                                <a
                                    className='site-footer__bottom-link'
                                    href='#link'>
                                    Telegram
                                </a>
                                <a
                                    className='site-footer__bottom-link'
                                    href='#link'>
                                    Behance
                                </a>
                            </div>
                        </li>
                    </ul>
                    <ul className='site-footer__bottom-right'>
                        <li className='site-footer__bottom-right-item'>
                            <Link
                                className='site-footer__bottom-right-link site-footer__bottom-right-link--first'
                                to='/services'>
                                Ознакомиться с услугами
                                <IconNext/>
                            </Link>
                        </li>
                        <li className='site-footer__bottom-right-item'>
                            <Link
                                className='site-footer__bottom-right-link'
                                to='/jobs'>
                                Посмотреть работы
                                <IconNext/>

                            </Link>
                        </li>
                    </ul>
                </div>
            </Container>
        </div>
    )
}

export default FooterBottom
