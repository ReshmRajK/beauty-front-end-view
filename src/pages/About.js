import React from 'react'
import '../pages/About.css'
import Card from 'react-bootstrap/Card';

function About() {
    return (
        <div style={{}} className='about_section d-flex align-items-center'>
            <div className='container w-100'>
                <div>
                    <p className='text-center text-white fs-1 about_title'>About Us</p>
                    <p className='text-white mt-3 about_content'>A beauty salon is an establishment that offers a variety of cosmetic treatments
                        and cosmetic services for men and women.   Beauty salons may offer a variety of services including
                        professional hair cutting and styling, manicures and pedicures, and often cosmetics, makeup and makeovers
                        A beauty salon may just offer hair care & hair styling services, or nail services,
                        manicures and pedicures. Most businesses classified as beauty salons offer a combination of hair styling
                        and nail services. In addition, beauty salons may offer skin care services performed by estheticians,
                        including facials, exfoliating scrubs and anti-aging techniques. A business that just offers the skin care
                        and esthetician services is generally referred to as a spa or day spa. Many beauty salons also offer
                        cosmetic services such as makeup application, eye beautification, and general makeovers and cosmetic instruction.
                        Some beauty salons also include retail sales of beauty products for consumers. Hair care and styling products
                        may include shampoos, conditioners, styling gels, sprays, coloring products, and tools used for hair care.
                        Skin care products may include lotions, exfoliants, anti-acne products, tanning and bronzing products,
                        and herbal or chemical solutions. Nail care products may include nail polish, acrylic nails, and nail care tools.
                        General cosmetic products may include makeup and eye beautification products.</p>
                </div>

                <div>
                    <p className='text-white text-center fs-1 team_section'>Our Team</p>
                    <div className='d-flex justify-content-center flex-wrap gap-3'>
                        <Card style={{ width: '18rem' }} className='mb-5'>
                            <Card.Img variant="top" src="https://i.postimg.cc/Qd1Xp74T/facial.webp" style={{ width: '100%', height: '250px' }} />
                            <Card.Body style={{ height: '5rem' }}>
                                <Card.Title className='text-center card_title'>Facial</Card.Title>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }} className='mb-5'>
                            <Card.Img variant="top" src="https://i.postimg.cc/qBWqypJW/hair.jpg" style={{ width: '100%', height: '250px' }} />
                            <Card.Body style={{ height: '5rem' }}>
                                <Card.Title className='text-center card_title'>Hair Cut and Hair Treatment</Card.Title>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }} className='mb-5'>
                            <Card.Img variant="top" src="https://i.postimg.cc/TwmSsjbV/hairclr.webp" style={{ width: '100%', height: '250px' }} />
                            <Card.Body style={{ height: '5rem' }}>
                                <Card.Title className='text-center card_title'>Hair Color</Card.Title>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }} className='mb-5'>
                            <Card.Img variant="top" src="https://i.postimg.cc/P59SkpT2/manicure.jpg" style={{ width: '100%', height: '250px' }} />
                            <Card.Body style={{ height: '5rem' }}>
                                <Card.Title className='text-center card_title'>Manicure</Card.Title>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }} className='mb-5'>
                            <Card.Img variant="top" src="https://i.postimg.cc/tCXqh70S/pedicurecopy.jpg" style={{ width: '100%', height: '250px' }} />
                            <Card.Body style={{ height: '5rem' }}>
                                <Card.Title className='text-center card_title'>Pedicure</Card.Title>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }} className='mb-5'>
                            <Card.Img variant="top" src="https://i.postimg.cc/wBDZfcLh/nail.jpg" style={{ width: '100%', height: '250px' }} />
                            <Card.Body style={{ height: '5rem' }}>
                                <Card.Title className='text-center card_title'>Nail Design and Extension</Card.Title>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }} className='mb-5'>
                            <Card.Img variant="top" src="https://i.postimg.cc/wThWdT7p/hydrafacial.jpg" style={{ width: '100%', height: '250px' }} />
                            <Card.Body style={{ height: '5rem' }}>
                                <Card.Title className='text-center card_title'>Hydra Facial</Card.Title>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }} className='mb-5'>
                            <Card.Img variant="top" src="https://i.postimg.cc/kXpWZ0ym/threadcopy.jpg" style={{ width: '100%', height: '250px' }} />
                            <Card.Body style={{ height: '5rem' }}>
                                <Card.Title className='text-center card_title'>Threading</Card.Title>
                            </Card.Body>
                        </Card>


                    </div>

                </div>

            </div>


        </div>
    )
}

export default About