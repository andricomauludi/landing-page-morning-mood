import React from "react";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

import SandwichHeader from "components/Headers/SandwichHeader";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DarkFooter from "components/Footers/DarkFooter";
import { connect, useSelector } from "react-redux";
import TableComponent from "components/Widgets/TableComponent";
import { useDispatch } from "react-redux";
import { getSandwichLists } from "../../actions/productAction";


function SandwichMenu() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.sandwich); // Assuming 'counter' is a state property in Redux
  console.log(data);

  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    dispatch(getSandwichLists());
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <SandwichHeader />
        <div
          className="section section-about-us"
        >
          <Container>
            <Row className="ml-auto mr-auto text-center">
              <Col md="4">
                <Button
                  className="btn-menu-specific"
                >
                  <a href="/menu/sandwich" id="menu-navbar">
                    <img
                      alt="..."
                      
                      src={require("assets/img/sandwich2.png")}
                    ></img>
                    <h1 style={{ color: "#00005A" }}>Sambal Matah</h1>
                  </a>
                </Button>
              </Col>
              <Col md="4">
                <Button
                  className="btn-menu-specific"
                >
                  <a href="/menu/sandwich" id="menu-navbar">
                    <img
                      alt="..."
                      
                      src={require("assets/img/sandwich2.png")}
                    ></img>
                    <h1 style={{ color: "#00005A" }}>Sambal Matah</h1>
                  </a>
                </Button>
              </Col>
              <Col md="4">
                <Button
                  className="btn-menu-specific"
                >
                  <a href="/menu/sandwich" id="menu-navbar">
                    <img
                      alt="..."
                      
                      src={require("assets/img/sandwich2.png")}
                    ></img>
                    <h1 style={{ color: "#00005A" }}>Barbeque</h1>
                  </a>
                </Button>
              </Col>            
            </Row>
            
            <div className="separator separator-primary"></div>

            {/* <TableComponent /> */}
          </Container>
        </div>

        <DarkFooter />
      </div>
    </>
  );
}

export default connect()(SandwichMenu);
