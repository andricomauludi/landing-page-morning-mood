import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
  Row,
  Col,
} from "reactstrap";

function IndexNavbar() {
  const location = useLocation();
  console.log(location.pathname);
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [wordColor, setWordColor] = React.useState("#FDF502");
  const [logoDisplay, setLogoDisplay] = React.useState("hidden");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (location.pathname=="/index") {
        if (
          document.documentElement.scrollTop > 899 ||
          document.body.scrollTop > 899
        ) {
          setNavbarColor("");
          setWordColor("#00005A");
          setLogoDisplay("visible");
        } else if (
          document.documentElement.scrollTop < 900 ||
          document.body.scrollTop < 900
        ) {
          setNavbarColor("navbar-transparent");
          setLogoDisplay("hidden");
          setWordColor("#FDF502");
        }
        
      }else{        
        if (
          document.documentElement.scrollTop > 299 ||
          document.body.scrollTop > 299
        ) {
          setNavbarColor("");
          setWordColor("#00005A");
          setLogoDisplay("visible");
        } else if (
          document.documentElement.scrollTop < 300 ||
          document.body.scrollTop < 300
        ) {
          setNavbarColor("navbar-transparent");
          setLogoDisplay("visible");
          setWordColor("#FDF502");
        }

      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar
        className={"fixed-top " + navbarColor}
        expand="lg"
        style={{ backgroundColor: "#F0F08D" }}
      >
        <Container>
          <Collapse
            className="justify-content-center"
            isOpen={collapseOpen}
            navbar
          >
            <Container>
              <Nav navbar style={{ display: "block" }}>
                <Row
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: "auto",
                    alignSelf: "center",
                  }}
                >
                  <Col
                    lg="4"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginLeft: "auto",
                      alignSelf: "center",
                    }}
                  >
                    <a href="/menu" id="menu-navbar">
                      <h4 style={{ color: wordColor }}>Our Menu</h4>
                    </a>
                  </Col>
                  <Col
                    lg="4"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginLeft: "auto",
                      alignSelf: "center",
                    }}
                  >
                    <a href="/index">
                      <img
                        style={{ maxHeight: "80px" ,"visibility":logoDisplay}}
                        alt="..."
                        src={require("assets/img/logo-morning-mood.png")}
                      ></img>
                    </a>
                  </Col>
                  <Col
                    lg="4"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginLeft: "auto",
                      alignSelf: "center",
                    }}
                  >
                    <a href="/aboutus">
                      <h4
                      style={{color:wordColor}}
                      >About Us</h4>
                    </a>
                    <NavItem></NavItem>
                  </Col>
                  {/* <Col lg="3" style={{display: 'flex',  justifyContent:'center', alignItems:'center', marginLeft: "auto", alignSelf:"center" }}>
                  <Row>
                  <NavItem>
                    <NavLink
                      href="https://twitter.com/CreativeTim?ref=creativetim"
                      target="_blank"
                      id="twitter-tooltip"
                    >
                      <i className="fab fa-twitter"></i>
                      <p className="d-lg-none d-xl-none">Twitter</p>
                    </NavLink>
                    <UncontrolledTooltip target="#twitter-tooltip">
                      Follow us on Twitter
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="https://www.facebook.com/CreativeTim?ref=creativetim"
                      target="_blank"
                      id="facebook-tooltip"
                    >
                      <i className="fab fa-facebook-square"></i>
                      <p className="d-lg-none d-xl-none">Facebook</p>
                    </NavLink>
                    <UncontrolledTooltip target="#facebook-tooltip">
                      Like us on Facebook
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
                      target="_blank"
                      id="instagram-tooltip"
                    >
                      <i className="fab fa-instagram"></i>
                      <p className="d-lg-none d-xl-none">Instagram</p>
                    </NavLink>
                    <UncontrolledTooltip target="#instagram-tooltip">
                      Follow us on Instagram
                    </UncontrolledTooltip>
                  </NavItem>

                  </Row>
                </Col> */}
                </Row>
              </Nav>
            </Container>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
