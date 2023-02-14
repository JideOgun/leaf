import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";

function Navigation({ currentPage, handlePageChange }) {

  return (
    <Navbar>
      <Container className="navContainer">
        <Nav className="navbar-nav mr-auto">
          <Nav.Link
            id="topNewsLink"
            className="navbar-nav-item"
            href="Top News"
            onClick={() => handlePageChange("Top News")}
          >
            Top News
          </Nav.Link>
          <Nav.Link
            id="categoriesLink"
            className="navbar-nav-item"
            href="Categories"
            onClick={() => handlePageChange("Categories")}
          >
            Categories
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
