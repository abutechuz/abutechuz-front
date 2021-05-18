import React from 'react'
import './SinglePortfolio.scss'
import PortfolioDesc from '../../components/PortfolioDesc/PortfolioDesc'
import PortfolioIntro from '../../components/PortfolioIntro/PortfolioIntro'
import PortfolioPlan from '../../components/PortfolioPlan/PortfolioPlan'
import PortfolioSlider from '../../components/PortfolioSlider/PortfolioSlider'
import PortfolioFeautures from '../../components/PortfolioFeautures/PortfolioFeautures'
import PortfolioResult from '../../components/PortfolioResult/PortfolioResult'
import PortfolioTech from '../../components/PortfolioTech/PortfolioTech'

function SinglePortfolio() {
    return (
        <>
            <PortfolioIntro />
            <PortfolioDesc />
            <PortfolioPlan />
            <PortfolioSlider />
            <PortfolioFeautures />
            <PortfolioResult />
            <PortfolioTech />
        </>
    )
}

export default SinglePortfolio
