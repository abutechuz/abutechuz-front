import React from 'react'
import Container from '../Container/Container'
import './PortfolioResult.scss'

function PortfolioResult() {
    return (
        <section className='portfolio-result'>
            <Container>
                <img
                    className='portfolio-result__img'
                    src='https://via.placeholder.com/948x466'
                    alt='Portfolio result'
                    width='948'
                    height='466'
                />

                <h2 className='portfolio-result__heading'>
                    Working across all platforms
                </h2>

                <p className='portfolio-result__paragraph'>
                    Ultricies arcu lectus velit vulputate non egestas vulputate
                    lorem sed. Eu, tristique id eu fringilla quis dolor quis at
                    metus. Pellentesque potenti tristique orci neque. Curabitur
                    proin faucibus enim velit eget. At etiam odio sed fringilla
                    cursus. Parturient sollicitudin erat molestie neque.
                </p>
            </Container>
        </section>
    )
}

export default PortfolioResult
