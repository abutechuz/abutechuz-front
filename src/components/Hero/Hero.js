import React from 'react'
import Container from '../Container/Container'
import './Hero.scss'

/* Svg Icons: */
import PlayButton from '../Lib/Svg/PlayButton'

function Hero() {
	return (
		<section className='hero'>
			<Container>
				<div className='hero__container'>
					<div className='hero__text-wrapper'>
						<h1 className='hero__heading'>Izlamasdan topamiz</h1>
						<p className='hero__desc'>
							Abutech has been eligible to provide the best of services to our
							clients across the world remaining to our.
						</p>

						<button className='hero__watch-video'>
							Смотреть видео
							<PlayButton className='hero__watch-video-icon' />
						</button>
					</div>
				</div>
			</Container>
		</section>
	)
}

export default Hero
