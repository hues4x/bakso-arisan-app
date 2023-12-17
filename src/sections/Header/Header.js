import React, { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../assets/icons/logo.png";
import moon from "../../assets/icons/moon.png";
import light from "../../assets/icons/light.png";
import "./Header.css";
import { UserContext } from "../../App";

const Header = () => {
  const { isDark, SetIsDark } = useContext(UserContext);

  return (
    <header
      className={`header ${isDark ? 'dark':'light'}`}
    >
      <div className="container">
        <Navbar expand="lg">
          <Navbar.Brand  href="#home">
              <img
                src={logo}
                alt=""
                className="logo img-fluid"
                // onClick={() => scroll.scrollToTop()}
              />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-center align-items-center">
            <button className={`primaryBtn ${isDark?'dark':'light'}`}>Buy bakso</button>
            <Nav.Link href="#about">Docs</Nav.Link>
            <Nav.Link href="#tokenomics">Audit</Nav.Link>
            <div className='d-flex justify-content-center nightMode'>
                <button className={`moon ${isDark ? '':'light'}`} onClick={()=>SetIsDark(false)} >
              <img src={light} alt="moon" />
              </button>
              <span className='slashSpan'>/</span>
              <button className={`moon ${isDark ? 'dark':''}`} onClick={()=>SetIsDark(true)}>
              <img src={moon} alt="moon" />
              </button>
            </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;
