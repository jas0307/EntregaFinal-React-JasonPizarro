import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logoa from "../NavBar/logoA.png"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
  return (
    <>
    
    <Navbar bg="light" data-bs-theme="light" className="navb" >
        <Container>
        <Link to="/"> <div className="navbar-brand"> 
            <div className='navbar-logo'><img  alt="logo" src={logoa} width="70px"  />{'A OTRA DIMENSION'}</div>
            
          </div></Link>
                    
          <Nav className="col-md-auto-right">
            <div className="navbar2"> <Link  to="/">HOME</Link></div>
            <div className="navbar2"> <Link  to="category/impresoras3d">IMPRESORAS 3D</Link></div>
            <div className="navbar2"> <Link  to="category/electronica">ELECTRONICA</Link></div>
            <div className="navbar2"> <Link  to="category/accesorios">ACCESORIOS</Link></div>
            <div className="navbar2"> <Link  to="category/cnc">CNC</Link></div>
            
          </Nav>
          <div className="navbar2"> <Link  to="/cart"><CartWidget/></Link></div>
        </Container>
      </Navbar>
      </>
  )
}

export default NavBar;