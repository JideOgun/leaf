import {  Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container"
function Navigation({currentPage, handlePageChange}) {
  return (
    <Navbar>
     <Container>

        <Nav className="navbar-nav mr-auto" >
          <Nav.Link className="navbar-nav-item" href="#Projects" onClick={() => handlePageChange('Top News')}>Top News</Nav.Link>
          <Nav.Link className="navbar-nav-item" href="#Projects" onClick={() => handlePageChange('Categories')}>Categories</Nav.Link>
          <Nav.Link className="navbar-nav-item" href="#Projects" onClick={() => handlePageChange('Search')}>
            <button>Search</button> <input></input>
          </Nav.Link>
          <Nav.Link className="navbar-nav-item" href="#Projects" onClick={() => handlePageChange('GB')}>GB</Nav.Link>
          <Nav.Link className="navbar-nav-item" href="#Projects" onClick={() => handlePageChange('USA')}>USA</Nav.Link>
        </Nav>
     </Container>
     
    </Navbar>
  );
}

export default Navigation;
