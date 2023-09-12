import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <Navbar bg="info" data-bs-theme="dark" className="rounded text-end">
      <Container className="">
        <Row className="w-100">
          <Col className="text-start">
            <Navbar.Brand href="#home">White Board</Navbar.Brand>
          </Col>
          <Col className="">
            <Nav className="me-auto justify-content-end ">
              <Nav.Link href="#features" className="">
                Login
              </Nav.Link>

              <Nav.Link href="#pricing">User</Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Header;
