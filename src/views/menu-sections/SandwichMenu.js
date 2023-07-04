import React from "react";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  NavLink,
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  TabContent,
  TabPane,
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
  const [pills, setPills] = React.useState("2");
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
        <div className="section section-about-us">
          <Container>
            <Row className="ml-auto mr-auto text-center">
              <Col md="4">
                <div
                  className="btn-menu-specific"
                  onClick={(e) => {
                    e.preventDefault();
                    setPills("1");
                  }}
                >
                  <img
                    alt="..."
                    src={require("assets/img/sandwich2.png")}
                  ></img>
                  <h1 style={{ color: "#00005A" }}>Sambal Bawang</h1>
                </div>
              </Col>
              <Col md="4">
                <div
                  className="btn-menu-specific"
                  onClick={(e) => {
                    e.preventDefault();
                    setPills("2");
                  }}
                >
                  <img
                    alt="..."
                    src={require("assets/img/sandwich2.png")}
                  ></img>
                  <h1 style={{ color: "#00005A" }}>Sambal Matah</h1>
                </div>
              </Col>
              <Col md="4">
                <div
                  className="btn-menu-specific"
                  onClick={(e) => {
                    e.preventDefault();
                    setPills("3");
                  }}
                >
                  <img
                    alt="..."
                    src={require("assets/img/sandwich2.png")}
                  ></img>
                  <h1 style={{ color: "#00005A" }}>Barbeque</h1>
                </div>
              </Col>
            </Row>

            <div className="separator separator-primary"></div>

            <Row>
              <Col className="ml-auto mr-auto" md="6">
                {/* <h4 className="title text-center">Detail Menu</h4> */}
                <div className="nav-align-center"></div>
              </Col>
              <TabContent className="gallery" activeTab={"pills" + pills}>
                <TabPane tabId="pills1">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row>
                      <Col lg="6" md="12">
                        <div className="icons-container">
                          <div className="hero-images-container">
                            <img
                              alt="..."
                              className="rounded img-raised"
                              src={require("assets/img/sandwich1.jpg")}
                            ></img>
                          </div>
                        </div>
                      </Col>
                      <Col lg="6" md="12">
                        <h2 className="title">Sambal Bawang</h2>
                        <h5>
                          Now UI Kit comes with 100 custom icons made by our
                          friends from NucleoApp. The official package contains
                          over 2.100 thin icons which are looking great in
                          combination with Now UI Kit PRO Make sure you check
                          all of them and use those that you like the most.
                        </h5>
                        <Button
                          className="btn-round mr-1"
                          style={{ backgroundColor: "#00005A" }}
                          href="/menu"
                          size="lg"
                          target="_blank"
                        >
                          <span style={{ color: "#FDF502" }}>
                            View Our Sandwich Menus
                          </span>
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
                <TabPane tabId="pills2">
                  <Col className="ml-auto mr-auto" md="10">
                     <Row>
                      <Col lg="6" md="12">
                        <div className="icons-container">
                          <div className="hero-images-container">
                            <img
                              alt="..."
                              className="rounded img-raised"
                              src={require("assets/img/sandwich1.jpg")}
                            ></img>
                          </div>
                        </div>
                      </Col>
                      <Col lg="6" md="12">
                        <h2 className="title">Sambal Matah</h2>
                        <h5>
                          Now UI Kit comes with 100 custom icons made by our
                          friends from NucleoApp. The official package contains
                          over 2.100 thin icons which are looking great in
                          combination with Now UI Kit PRO Make sure you check
                          all of them and use those that you like the most.
                        </h5>
                        <Button
                          className="btn-round mr-1"
                          style={{ backgroundColor: "#00005A" }}
                          href="/menu"
                          size="lg"
                          target="_blank"
                        >
                          <span style={{ color: "#FDF502" }}>
                            View Our Sandwich Menus
                          </span>
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
                <TabPane tabId="pills3">
                  <Col className="ml-auto mr-auto" md="10">
                     <Row>
                      <Col lg="6" md="12">
                        <div className="icons-container">
                          <div className="hero-images-container">
                            <img
                              alt="..."
                              className="rounded img-raised"
                              src={require("assets/img/sandwich1.jpg")}
                            ></img>
                          </div>
                        </div>
                      </Col>
                      <Col lg="6" md="12">
                        <h2 className="title">Barbeque</h2>
                        <h5>
                          Now UI Kit comes with 100 custom icons made by our
                          friends from NucleoApp. The official package contains
                          over 2.100 thin icons which are looking great in
                          combination with Now UI Kit PRO Make sure you check
                          all of them and use those that you like the most.
                        </h5>
                        <Button
                          className="btn-round mr-1"
                          style={{ backgroundColor: "#00005A" }}
                          href="/menu"
                          size="lg"
                          target="_blank"
                        >
                          <span style={{ color: "#FDF502" }}>
                            View Our Sandwich Menus
                          </span>
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
              </TabContent>
            </Row>

            {/* <TableComponent /> */}
          </Container>
        </div>

        <DarkFooter />
      </div>
    </>
  );
}

export default connect()(SandwichMenu);
