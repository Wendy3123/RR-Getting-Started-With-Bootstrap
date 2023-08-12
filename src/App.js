import "./App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function App() {
  return (
    <>
      <div className="App">
        <h1>Bootstrap Website</h1>
      </div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Wendys React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
              <Nav.Link href="#link">Support</Nav.Link>
              <Nav.Link href="#link">About Us</Nav.Link>
              <NavDropdown title="More Info" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Get approved
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Rates</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Funds</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Buy Now</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Loans</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Form Dropdown with favorite movies</Form.Label>
          <Form.Control as="select">
            <option>Barbie</option>
            <option>Mean Girls</option>
            <option>Vampire Diaries</option>
            <option>Lucifer</option>
            <option>Gossip Girls</option>
          </Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default App;
