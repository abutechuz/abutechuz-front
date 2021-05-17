import React from 'react'
import './SinglePortfolio.scss'
import PortfolioDesc from '../../components/PortfolioDesc/PortfolioDesc'
import PortfolioIntro from '../../components/PortfolioIntro/PortfolioIntro'

function SinglePortfolio() {
    return (
        <>
            <PortfolioIntro />
            <PortfolioDesc />
        </>
    )
}

export default SinglePortfolio
