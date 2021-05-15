import React from 'react'
import './Header.scss'
import Container from '../Container/Container'
import { Link, NavLink } from 'react-router-dom'
/* Svg Icons: */
import LogoImg from '../Lib/Svg/Logo'
import PhoneCall from '../Lib/Svg/PhoneCall'
import Hamburger from '../Lib/Svg/Hamburger'

function Header() {
	const elHumburger = React.useRef()

	return (
		<header className='site-header'>
			<Container>
				<div className='site-header__wrapper' ref={elHumburger}>
					<NavLink className='logo' to='/'>
						<LogoImg className='logo__img' />
					</NavLink>

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

						<Link className='site-header__request-button' to='/survey'>
							ОСТАВИТЬ ЗАЯВКУ
						</Link>
					</div>

					<div className='site-header__background-effect'></div>

					<button
						className='site-header__hamburger'
						onClick={() =>
							elHumburger.current.classList.toggle(
								'site-header__menu-list-open'
							)
						}>
						МЕНЮ
						<Hamburger className='hamburger__icon' />
					</button>

					<ul className='site-header__menu-list'>
						<li className='site-header__menu-item'>
							<Link className='site-header__menu-link'>Главная</Link>
						</li>

						<li className='site-header__menu-item'>
							<Link className='site-header__menu-link'>О нас</Link>
						</li>

						<li className='site-header__menu-item'>
							<Link className='site-header__menu-link'>Сервисы</Link>
						</li>

						<li className='site-header__menu-item'>
							<Link className='site-header__menu-link'>Ресурсы</Link>
						</li>

						<li className='site-header__menu-item'>
							<Link className='site-header__menu-link'>Проекты</Link>
						</li>

						<li className='site-header__menu-item'>
							<Link className='site-header__menu-link'>Контакты</Link>
						</li>
					</ul>
				</div>
			</Container>
		</header>
	)
}

export default Header
