import React from 'react'
import './SinglePortfolio.scss'
import PortfolioDesc from '../../components/PortfolioDesc/PortfolioDesc'
import PortfolioIntro from '../../components/PortfolioIntro/PortfolioIntro'
import PortfolioPlan from '../../components/PortfolioPlan/PortfolioPlan'

function SinglePortfolio() {
    return (
        <>
            <PortfolioIntro />
            <PortfolioDesc />
            <PortfolioPlan />
        </>
    )
}

export default SinglePortfolio
