import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo_full from '../assets/logo-full.png';
import Image_profile from '../assets/profile.png';
import { AiOutlineMenu, AiOutlineDown } from "react-icons/ai";

const Navbar_menu = (prop) => {
    return (
        <Navbar bg="white" expand="lg">
            <Container fluid='xl'>
                <Navbar.Brand href="#home">
                    <img
                        src={Logo_full}
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" >
                    <AiOutlineMenu
                        color="royalblue"
                    />
                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="me-auto" style={{ gap: '50px', marginLeft: '10%' }}>
                        <Nav.Link href="#explore-products">Explore products</Nav.Link>
                        <Nav.Link href="#product-design">Product design</Nav.Link>
                        <Nav.Link href="#procing">Procing <i class="bi bi-hdd-stack"></i></Nav.Link>
                    </Nav>
                  
                    <Nav.Link href="#link" style={{marginLeft: '10%' }} >Logout</Nav.Link>
                        <NavDropdown
                            title={
                                <img
                                    src={Image_profile}
                                    width="30"
                                    height="30"
                                    className="d-inline-block align-center "
                                />
                            }
                            style={prop.width < 991 ? { marginLeft: '10%' }:{marginLeft: '10px'}}
                            id="basic-nav-dropdown">
                            <NavDropdown.Item href="#">Profile</NavDropdown.Item>

                        </NavDropdown>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
};

export default Navbar_menu;
