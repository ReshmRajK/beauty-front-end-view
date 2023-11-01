import React from 'react'
import '../pages/LadingPage.css'
import { Col, Container, Row } from 'react-bootstrap'

function LandingPage() {
    return (
        <div style={{ height: '100vh' }} className='landing_section d-flex align-items-center'>
            <Container>
                <Row>
                    <Col lg={6}>
                        <p className='text-white '>We show your skin, hair,
                            and body the care and attention they deserve</p>
                        <p className='text-warning'>" A WOMEN WHO CUTS HER HAIR IS ABOUT TO CHANGE HER LIFE...!" </p>
                        <p className='text-white'>Our mission is to provide the highest quality service,
                            in union with the highest quality products for the well being of our guests and the environment</p>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default LandingPage