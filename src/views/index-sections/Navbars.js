import React from "react";

// reactstrap components
import {
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
  Row,
  Col
} from "reactstrap";

// core components

function Navbars() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  return (
    <>
      <div className="section section-navbars">
        <Container id="menu-dropdown">
          <Row>
            <Col md="6">
              <h4>Menu</h4>
              
            </Col>
          </Row>
          <h4>Navigation</h4>
        </Container>
        <div id="navbar">
          <div
            className="navigation-example"
            style={{
              backgroundImage: "url(" + require("assets/img/sandwich1.jpg") + ")"
            }}
          >
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbars;
