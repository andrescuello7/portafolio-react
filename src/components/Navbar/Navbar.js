import { Container, Navbar, Nav } from "react-bootstrap"
import { useState } from "react"

const Header = () => {
    const [borderButton, setBorderButton] = useState("");
    const [clickme, setClickme] = useState(false);

    const btnBorder = () => {
        if(clickme === false){
            setClickme(true)
            setBorderButton("border-bottom border-primary border-2")
        }else{
            setClickme(false)
            setBorderButton("")
        }
    }
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Nav.Link href="#home" className="navbarTitle">Andres Cuello</Nav.Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home" onClick={() => btnBorder()} className={borderButton}>Home</Nav.Link>
                            <Nav.Link href="#about" onClick={() => btnBorder()} className={borderButton}>About</Nav.Link>
                            <Nav.Link href="#skills" onClick={() => btnBorder()} className={borderButton}>Skills</Nav.Link>
                            <Nav.Link href="#contact" onClick={() => btnBorder()} className={borderButton}>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;