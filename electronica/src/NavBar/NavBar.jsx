import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logoa from "/Users/ariel_ya5syar/Desktop/react/electronica/src/assets/logoA.png"
const NavBar = () => {
return(
    
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#logo"><img src={logoa} alt='logoA' width={128}></img>A OTRA DIMENSION</Navbar.Brand>
          <Nav className="navContainer">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#electronica">Electronica</Nav.Link>
            <Nav.Link href="#impresoras3d">Impresoras 3D</Nav.Link>
            <Nav.Link href="#impresiones3d">Impresiones 3D</Nav.Link>
            <Nav.Link href="#cnc">CNC</Nav.Link>
            <Nav.Link href="#contacto">Servicios</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
    )
}
export default NavBar