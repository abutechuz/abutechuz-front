import React from 'react'
import FooterTop from '../FooterTop/FooterTop'
import FooterBottom from '../FooterBottom/FooterBottom'
import './Footer.scss'

function Footer() {
    return (
        <footer className='site-footer'>
            <FooterTop />
            <FooterBottom />
        </footer>
    )
}

export default Footer
