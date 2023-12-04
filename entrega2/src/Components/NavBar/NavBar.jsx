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
    <Navbar bg="light" data-bs-theme="light">
        <Container>
        <Link to="/"> <div className="navbar-brand"> 
            <div className='navbar-logo'><img  alt="logo" src={logoa} width="70px"  />{' '}</div>
            <h3>A OTRA DIMENSION</h3>
          </div></Link>
                    
            <Nav className="mr-auto">
            <div className="navbar2"> <Link  to="/">Home</Link></div>
            <div className="navbar2"> <Link  to="category/impresoras3d">Impresoras3d</Link></div>
            <div className="navbar2"> <Link  to="category/electronica">Electronica</Link></div>
            <div className="navbar2"> <Link  to="category/impresiones">Accesorios</Link></div>
            <div className="navbar2"> <Link  to="category/cnc">Cnc</Link></div>
            <div className="navbar2"> <Link  to="/cart"><CartWidget/></Link></div>

          </Nav>
        </Container>
      </Navbar>
      </>
  )
}

export default NavBar;