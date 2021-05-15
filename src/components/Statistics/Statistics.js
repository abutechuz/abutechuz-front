import React from 'react'
import Container from '../Container/Container'
import './Statistics.scss'

function Statistics() {
	return (
		<section className='statistics'>
			<Container>
				<div className='statistics__wrapper'>
					<ul className='statistics__list'>
						<li className='statistics__item'>
							<p className='statistics__numbers'>67+</p>
							<h1 className='statistics__heading'>выполненных проектов</h1>
						</li>

						<li className='statistics__item'>
							<p className='statistics__numbers'>40+</p>
							<h1 className='statistics__heading'>человек в команде</h1>
						</li>

						<li className='statistics__item'>
							<p className='statistics__numbers'>230+</p>
							<h1 className='statistics__heading'>бизнесов продвинули</h1>
						</li>

						<li className='statistics__item'>
							<p className='statistics__numbers'>4+</p>
							<h1 className='statistics__heading'>лет опыта на рынке</h1>
						</li>

						<li className='statistics__item'>
							<p className='statistics__numbers'>147k</p>
							<h1 className='statistics__heading'>просмотров на Behance</h1>
						</li>

						<li className='statistics__item'>
							<p className='statistics__numbers'>12</p>
							<h1 className='statistics__heading'>ввыигранных кубков</h1>
						</li>
					</ul>
				</div>
			</Container>
		</section>
	)
}

export default Statistics
