import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../components/Header.css'
import { Link, useNavigate } from 'react-router-dom';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { userInquiryApi } from '../service/allApi';


function Header() {

    const [inputs,setInputs]=useState({
        username:'',
        email:'',
        contact:'',
        services:'',
        msg:''
    })
    // const [inquiryInputs,setInquiryInputs]=useState({})

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate()

    const setData=(e)=>{
        const {value,name}=e.target
        // console.log(value,name);
        setInputs({...inputs,[name]:value})

    }

    const handleAdd=async()=>{
            const result=await userInquiryApi(inputs)
            if(result.status>=200 && result.status<300){
                // console.log(result);
                setShow(false)
            } 
    }


    return (
        <div >

            <Navbar expand="lg" className="bg-body-tertiary navbar_section " >
                <Container fluid>
                    <Link to={''} style={{textDecoration:'none'}}>
                    <Navbar.Brand className='title ' href="#action1" >
                        <i className="fa-solid fa-b fa-flip text-success me-4 "></i>
                        Bellissimo</Navbar.Brand>
                        </Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />

                </Container>
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-4 my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link onClick={() => navigate('')} className='nav_menu' href="">Home</Nav.Link>
                        <Nav.Link onClick={() => navigate('/about')} className='nav_menu' href="">About</Nav.Link>
                        <Nav.Link onClick={() => navigate('/service')} className='nav_menu' href="">Service</Nav.Link>
                        <Nav.Link onClick={() => navigate('/gallery')} className='nav_menu' href="">Gallery</Nav.Link>
                        <Nav.Link onClick={handleShow} className='nav_menu' href="">Inquiry</Nav.Link>

                    </Nav>

                </Navbar.Collapse>
            </Navbar>



            <Modal show={show} onHide={handleClose} >
                <Modal.Header className='modal_header' closeButton>
                    <Modal.Title className='text-white' style={{ fontFamily: 'Croissant One, serif' }}>Inquiry Form</Modal.Title>
                </Modal.Header>

                <Modal.Body className='modal_header'>
                    <label  for="inputName" className='form-label mt-2'>Name</label>
                    <input onChange={(e)=>setData(e)} type="text" name="username" id="inputName" className='form-control' placeholder='Enter Your Name' />

                    <label for="inputEmail" className='form-label mt-2'>Email</label>
                    <input onChange={(e)=>setData(e)}  type="text" name="email" id="inputEmail" className='form-control' placeholder='Enter Email' />

                    <label for="inputNumber" className='form-label mt-2'>Contact Number</label>
                    <input onChange={(e)=>setData(e)} type="text" name="contact" id="inputNumber" className='form-control' placeholder='Enter Your Contact Number' />

                    <label for="inputPackage" className='form-label mt-2'>Package</label>
                    <select onChange={(e)=>setData(e)}  required name='services' className='dropdown w-100 form-control mt-2' id="inputPackage">
                        <option className='dropdown-item disabled' aria-disabled="true" value='select'>...Select...</option>
                        <option className='dropdown-item' value={'facial'}>Facial</option>
                        <option className='dropdown-item' value={'hydraFacial'}>Hydra Facial</option>
                        <option className='dropdown-item' value={'bridalMakeup'}>Bridal MakeUp</option>
                        <option className='dropdown-item' value={'threading'}>Threading</option>
                        <option className='dropdown-item' value={'nail'}>Nail Extension and Nail Design</option>
                        <option className='dropdown-item' value={'hairCut'}>Hair Cut</option>
                        <option className='dropdown-item' value={'hairColor'}>Hair Color</option>
                        <option className='dropdown-item' value={'hairTreatment'}>Hair Treatment</option>
                        <option className='dropdown-item' value={'skinCare'}>Skin Care</option>
                        <option className='dropdown-item' value={'manicure'}>Manicure</option>
                        <option className='dropdown-item' value={'pedicure'}>Pedicure</option>
                    </select>

                    <label for="inputMessage" className='form-label mt-2'>Message</label>
                    <textarea onChange={(e)=>setData(e)}  name="msg" id="inputMessage" cols="10" rows="5" className='form-control' placeholder='Enter Your Contact Address'></textarea>                    

                </Modal.Body>

                <Modal.Footer className='modal_header'>
                    <Button variant="secondary" onClick={handleClose} style={{ fontFamily: 'Playfair Display, serif' }}>Close</Button>
                    <Button onClick={handleAdd} variant="success"style={{ fontFamily: 'Playfair Display, serif' }}>Add</Button>
                </Modal.Footer>
               

            </Modal>


        </div>
    )
}

export default Header