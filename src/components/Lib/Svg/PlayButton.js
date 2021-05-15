import React from 'react'

function PlayButton({ className }) {
	return (
		<svg
			className={className}
			width='27'
			height='27'
			viewBox='0 0 27 27'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<circle cx='13.5' cy='13.5' r='13.5' fill='white' />
			<path d='M19 13.7631L10.75 18.5263V9L19 13.7631Z' fill='#00094A' />
		</svg>
	)
}

export default PlayButton
