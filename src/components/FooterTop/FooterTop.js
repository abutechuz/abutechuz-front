import React from 'react'
import Container from '../Container/Container'
import IconDownload from '../Lib/Svg/IconDownload'
import './FooterTop.scss'

function FooterTop() {
    return (
        <div className='site-footer__top'>
            <form className='site-footer__top-form' action='#' method='POST'>
                <Container>
                    <h3 className='site-footer__top-heading'>
                        Хотите заказать услуги?
                    </h3>
                    <p className='site-footer__paragraph'>
                        Reference site about, giving information on its origins,
                        as well as a random Lipsum generator.
                    </p>
                    <div className='site-footer__top-input-wrapper'>
                        <input
                            className='site-footer__top-input'
                            type='text'
                            name='user_type'
                            placeholder='+998 |'
                        />
                        <button className='site-footer__top-input-submit'>
                            отправить
                        </button>
                    </div>
                </Container>
            </form>
            <form className='site-footer__top-form' action='#' method='POST'>
                <Container>
                    <h3 className='site-footer__top-heading'>
                        Ознакомтесь с начальными инструкциями
                    </h3>
                    <p className='site-footer__paragraph'>
                        Reference site about, giving information on its origins
                    </p>
                    <a className='site-footer__top-download-link' href='#link'>
                        <IconDownload /> Скачать бриф
                    </a>
                </Container>
            </form>
        </div>
    )
}

export default FooterTop
