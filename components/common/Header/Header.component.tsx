import Image from "next/image";
import { Container, Nav, Navbar } from "react-bootstrap";
import { HeaderWrap } from "./Header.styled";

const HeaderComponent = () => {
  return (
    <HeaderWrap>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <div className="logo">
              <Image
                src={"/assets/img/logo.svg"}
                width={267}
                height={44}
                alt={"logo"}
              />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="mainMenuWrap">
            <Nav className="ms-auto mainMenu">
              <Nav.Link href="#home">About Us</Nav.Link>
              <Nav.Link href="#link">How to Use</Nav.Link>
              <Nav.Link href="#link" className="mapBtn">
                <Image
                  src={"/assets/img/mapBtn.svg"}
                  width={166}
                  height={30}
                  alt="map btn"
                />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </HeaderWrap>
  );
};

export default HeaderComponent;
