import React from 'react'
import './ServiceVideo.scss'
import Container from '../Container/Container'

function ServiceVideo() {
    return (
        <section className='service-video'>
            <Container>
                <h2 className='service-video__heading'>What is UX & UI?</h2>

                <iframe
                    className='service-video__frame'
                    style={{ aspectRatio: '16 /9' }}
                    width='1280'
                    src='https://www.youtube.com/embed/dFC5QN9KW6c'
                    title='YouTube video player'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowfullscreen></iframe>
            </Container>
        </section>
    )
}

export default ServiceVideo
