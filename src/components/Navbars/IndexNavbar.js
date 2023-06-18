import React from "react";
import { Link } from "react-router-dom";
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
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
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
        style={{ "background-color": "#F0B90A" }}
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
                    <b>
                      <h4>Our Menu</h4>
                    </b>
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
                    <img
                      style={{ "max-height": "80px" }}
                      alt="..."
                      src={require("assets/img/logo-morning-mood.png")}
                    ></img>
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
                    <b>
                      <h4>About Us</h4>
                    </b>
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
