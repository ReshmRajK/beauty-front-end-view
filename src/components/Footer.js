import React from 'react'
import '../components/Footer.css'
import { Col, Container, Row } from 'react-bootstrap'

function Footer() {
    return (
        <div className='footer_section p-3'>
            <h1 id='heading' className='text-white text-center'>Contact Us</h1>
            <Container>
                <Row>
                    <Col lg={4} className='text-white text-center mt-3'>
                        <h3>Address</h3>
                        <p className='text-center'>Kakkanad</p>
                        <p className='text-center'>Infopark</p>
                        <p className='text-center'>Kochi</p>
                    </Col>
                    <Col lg={4} className='text-white text-center mt-3'>
                        <h3>Location Map</h3>

                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.063944243933!2d76.35753677085471!3d10.011577050968214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c9d4968ed6b%3A0xac7018beb464c0b!2sInfopark%20Kochi!5e0!3m2!1sbn!2sin!4v1698564958576!5m2!1sbn!2sin" 
                        width="250px" height="150" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                    </Col>

                    <Col lg={4} className='text-white text-center mt-3'>
                        <h3>Social Medias</h3>
                        <div className='d-flex justify-content-center gap-5 mt-4'>
                            <i class="fa-brands fa-facebook fa-beat fa-2x text-white"></i>
                            <i class="fa-brands fa-square-instagram fa-beat fa-2x text-white"></i>
                            <i class="fa-brands fa-square-whatsapp fa-beat fa-2x text-white"></i>
                            <i class="fa-brands fa-square-twitter fa-beat fa-2x text-white"></i>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Footer


