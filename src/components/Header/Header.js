import React, { useState } from 'react'
import './Header.scss'
import Container from '../Container/Container'
import { Link, NavLink } from 'react-router-dom'
/* Svg Icons: */
import LogoImg from '../Lib/Svg/Logo'
import PhoneCall from '../Lib/Svg/PhoneCall'
import Hamburger from '../Lib/Svg/Hamburger'
import Close from '../Lib/Svg/Close'

function Header() {
	const elHumburger = React.useRef()

	const [x, setx] = useState(false)

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

					<div
						className='site-header__background-effect'
						onClick={() =>
							elHumburger.current.classList.remove(
								'site-header__menu-list-open'
							)
						}></div>

					<button
						className='site-header__hamburger'
						onClick={() => {
							if (x) {
								elHumburger.current.classList.remove(
									'site-header__menu-list-open'
								)
								elHumburger.current.classList.add(
									'site-header__menu-list-close'
								)
								setx(false)
							} else {
								elHumburger.current.classList.add('site-header__menu-list-open')
								elHumburger.current.classList.remove(
									'site-header__menu-list-close'
								)
								setx(true)
							}
						}}>
						<span className='site-header__hamburger-text-menu'>МЕНЮ</span>
						<span className='site-header__hamburger-text-close'>ЗАКРЫТЬ</span>
						<Hamburger className='hamburger__icon' />
						<Close className='close__icon' />
					</button>

					<ul className='site-header__menu-list'>
						<li className='site-header__menu-item'>
							<Link className='site-header__menu-link' to='/' exact>Главная</Link>
						</li>

						<li className='site-header__menu-item'>
							<Link className='site-header__menu-link' to=''>Сервисы</Link>
						</li>

						<li className='site-header__menu-item'>
							<Link className='site-header__menu-link' to='/articles'>Ресурсы</Link>
						</li>

						<li className='site-header__menu-item'>
							<Link className='site-header__menu-link' to='/projects'>Проекты</Link>
						</li>

						<li className='site-header__menu-item'>
							<Link className='site-header__menu-link' to='/contacts'>Контакты</Link>
						</li>
					</ul>
				</div>
			</Container>
		</header>
	)
}

export default Header
