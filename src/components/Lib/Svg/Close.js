import React from 'react'

function Close({ className }) {
	return (
		<svg
			className={className}
			width='15'
			height='15'
			viewBox='0 0 15 15'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<rect
				x='1'
				y='13'
				width='17'
				height='1.5'
				transform='rotate(-45 1 13)'
				fill='#00094A'
			/>
			<rect
				x='1.99998'
				y='1'
				width='17'
				height='1.5'
				transform='rotate(45 1.99998 1)'
				fill='#00094A'
			/>
		</svg>
	)
}

export default Close
