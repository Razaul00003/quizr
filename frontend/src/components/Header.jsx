import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector } from "react-redux";

function Header() {
  const { authenticate } = useSelector((state) => state.auth);

  return (
    <Navbar bg="primary navbar-dark text-center align-middle" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand className="text-white">
            <img src="/quizr.png" alt="logo" />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center">
            <LinkContainer to="/">
              <Nav.Link className="text-white">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/profile">
              <Nav.Link className="text-white">Profile</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/rank">
              <Nav.Link className="text-white">Rank</Nav.Link>
            </LinkContainer>
            {authenticate ? (
              <LinkContainer to="/profile">
                <Nav.Link className="text-white" href="#link">
                  <img
                    style={{ height: "50px", width: "50px" }}
                    className=" rounded-circle "
                    src="/avatar.jpg"
                    alt="profile"
                  />
                </Nav.Link>
              </LinkContainer>
            ) : (
              <LinkContainer to="/login">
                <Nav.Link className="text-white">Login</Nav.Link>
              </LinkContainer>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
