import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link to="/news" className="navbar-brand">News</Link>
        <Nav className="me-auto">
          <Link to="/news/events" className="nav-link">Events</Link>
          <Link to="/news/events/Barak Obama" className="nav-link">Barak Obama Events</Link>
          <Link to="/news/events/Elon Musk" className="nav-link">Elon Musk Events</Link>
          <Link to="/news/Barak Obama" className="nav-link">Barak Obama News</Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
