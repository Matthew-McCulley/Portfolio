import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Navigation() {
  return (
        <Navbar id="projects">
          <Container className='d-flex flex-row-reverse'>
            <Nav>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Nav.Link href="/Matthew_McCulley_Resume.pdf" target="_blank">Resume</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
  );
}

export default Navigation;