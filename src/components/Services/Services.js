import React from 'react'
import Container from '../Container/Container'
import { Link } from 'react-router-dom'
import './Services.scss'

/* Svg Icons: */
import NextArrow from '../Lib/Svg/NextArrow'

function Services() {
	return (
		<section className='services'>
			<Container>
				<div className='services__wrapper'>
					<h2 className='services__heading'>
						ЧТО МЫ{' '}
						<span className='services__heading-highlighted'>ПРЕДЛАГАЕМ</span>
					</h2>

					<ul className='services__list'>
						<li className='services__item services__item-programming'>
							<Link className='services__link'>
								<h3 className='services__title'>Программные обеспечеия</h3>
								<p className='services__desc'>
									В них входять веб-сайты, админ панели, телеграм-боты,
									системные решение и много другие
								</p>

								<NextArrow className='services__next-arrow-icon' />
							</Link>
						</li>

						<li className='services__item services__item-design'>
							<Link className='services__link'>
								<h3 className='services__title'>
									UX & UI <br /> дизайн
								</h3>
								<p className='services__desc'>
									Lorem ipsum dolor sit amet, consec tet ur adipiscing elit.
									Donec elementum tellus.
								</p>

								<NextArrow className='services__next-arrow-icon' />
							</Link>
						</li>

						<li className='services__item services__item-marketing'>
							<Link className='services__link'>
								<h3 className='services__title'>
									SMM и <br /> маркетинг
								</h3>
								<p className='services__desc'>
									Lorem ipsum dolor sit amet, consec tet ur adipiscing elit.
									Donec elementum tellus.
								</p>

								<NextArrow className='services__next-arrow-icon' />
							</Link>
						</li>

						<li className='services__item services__item-branding'>
							<Link className='services__link'>
								<h3 className='services__title'>Брендинг</h3>
								<p className='services__desc'>
									Lorem ipsum dolor sit amet, consec tet ur adipiscing elit.
									Donec elementum tellus.
								</p>

								<NextArrow className='services__next-arrow-icon' />
							</Link>
						</li>

						<li className='services__item services__item-production'>
							<Link className='services__link'>
								<h3 className='services__title'>Продакшн и продвижение</h3>
								<p className='services__desc'>
									Lorem ipsum dolor sit amet, consec tet ur adipiscing elit.
									Donec elementum tellus.
								</p>

								<NextArrow className='services__next-arrow-icon' />
							</Link>
						</li>

						<li className='services__item services__item-service'>
							<Link className='services__link'>
								<h3 className='services__title'>
									Дизайн <br /> сервисы
								</h3>
								<p className='services__desc'>
									Lorem ipsum dolor sit amet, consec tet ur adipiscing elit.
									Donec elementum tellus.
								</p>

								<NextArrow className='services__next-arrow-icon' />
							</Link>
						</li>
					</ul>
				</div>
			</Container>
		</section>
	)
}

export default Services
