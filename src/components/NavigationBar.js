import { Navbar, Container, Nav } from "react-bootstrap"

const NavigationBar = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand href="/">ALBERTFILMS</Navbar.Brand>
          <Nav>
            <Nav.Link href="#trending">MOVIE TREND</Nav.Link>
            <Nav.Link href="#superhero">MOVIE SUPERHERO</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavigationBar
