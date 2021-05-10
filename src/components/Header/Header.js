import React from 'react'
import './Header.scss'
import Container from '../Container/Container'

/* Svg Icons: */
import LogoImg from '../Lib/Svg/Logo'
import PhoneCall from '../Lib/Svg/PhoneCall'
import Hamburger from '../Lib/Svg/Hamburger'

function Header() {
	return (
		<header className='site-header'>
			<Container>
				<div className='site-header__wrapper'>
					<a className='logo' href=''>
						<LogoImg className='logo__img' />
					</a>

					<div className='site-header__features'>
						<a className='site-header__tel-link' href='tel:+998901234567'>
							<PhoneCall className='site-header__phonecall' />
							+998 90 123 45 67
						</a>

						<select
							className='site-header__select-lang'
							name='select-lang'
							id='select-lang'>
							<option value='uz' selected>
								Uz
							</option>
							<option value='ru'>Ru</option>
							<option value='en'>En</option>
						</select>

						<a className='site-header__request-button' href=''>
							ОСТАВИТЬ ЗАЯВКУ
						</a>
					</div>

					<button className='site-header__hamburger'>
						МЕНЮ
						<Hamburger className='site-header__hamburger-icon' />
					</button>

					<nav className='sitenav'></nav>
				</div>
			</Container>
		</header>
	)
}

export default Header
