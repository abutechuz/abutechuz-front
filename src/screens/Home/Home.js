import React from 'react'
import Partners from '../../components/Partners/Partners'
import HomeNews from '../../components/HomeNews/HomeNews'
import Hero from '../../components/Hero/Hero'
import Statistics from '../../components/Statistics/Statistics'

function Home() {
	return (
		<>
			<Hero />
			<Statistics />
			<HomeNews />
			<Partners />
		</>
	)
}

export default Home
