import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logoa from "../NavBar/logoA.png"
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
return(
    
    <Navbar bg="light"  data-bs-theme="light">
        <Container>
          <Container>
          <Navbar.Brand href="#logo">
            <img  alt="" src={logoa} width="128"  />{' '}
            A OTRA DIMENSION
          </Navbar.Brand>
        </Container>         
          <Nav >
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#electronica">Electronica</Nav.Link>
            <Nav.Link href="#impresoras3d">Impresoras 3D</Nav.Link>
            <Nav.Link href="#impresiones3d">Impresiones 3D</Nav.Link>
            <Nav.Link href="#cnc">CNC</Nav.Link>
            <Nav.Link href="#contacto">Servicios</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
            <Nav.Link href="#cartwidget"><CartWidget /></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
    )
}
export default NavBar