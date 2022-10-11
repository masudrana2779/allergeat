import Image from "next/image";
import Link from "next/link";
import { Container, Nav, Navbar } from "react-bootstrap";
import { HeaderWrap } from "./Header.styled";

const HeaderComponent = () => {
  return (
    <HeaderWrap>
      <Navbar expand="lg">
        <Container>
          <Link href="/">
            <a>
              <div className="logo">
                <Image
                  src={"/assets/img/logo.svg"}
                  width={267}
                  height={44}
                  alt={"logo"}
                />
              </div>
            </a>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="mainMenuWrap">
            <Nav className="ms-auto mainMenu">
              <Link href="/about-us">About Us</Link>
              <Link href="/how-to-use">How to Use</Link>
              <Link href="/map">
                <a className="mapBtn">
                  <Image
                    src={"/assets/img/mapBtn.svg"}
                    width={166}
                    height={30}
                    alt="map btn"
                  />
                </a>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </HeaderWrap>
  );
};

export default HeaderComponent;
