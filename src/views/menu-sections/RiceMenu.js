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

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DarkFooter from "components/Footers/DarkFooter";
import { connect, useSelector } from "react-redux";
import TableComponent from "components/Widgets/TableComponent";
import { useDispatch } from "react-redux";
import { getSandwichLists } from "../../actions/productAction";
import RiceHeader from "components/Headers/RiceHeader";


function RiceMenu() {
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
        <RiceHeader />
        <div
          style={{ backgroundColor: "#00005A" }}
          className="section section-about-us"
        >
          <Container>
            <Row className="ml-auto mr-auto text-center">
              <Col md="5">
                <Button
                  // style={{width:"500px",height:"500px", backgroundColor:"#F0F08D"}}
                  className="btn-menu"
                >
                  <a href="/menu/sandwich" id="menu-navbar">
                    <img
                      alt="..."
                      style={{ height: "300px", width: "auto" }}
                      src={require("assets/img/sandwich2.png")}
                    ></img>
                    <h1 style={{ color: "#00005A" }}>Sandwich</h1>
                  </a>
                </Button>
              </Col>
              <Col md="2"></Col>
              <Col md="5">
                <Button className="btn-menu">
                  <img
                    alt="..."
                    style={{ height: "300px" }}
                    src={require("assets/img/kopi1.png")}
                  ></img>
                  <h1>Coffee</h1>
                </Button>
              </Col>
            </Row>
            <Row>
              <Col className="ml-auto mr-auto text-center">
                <Button className="btn-menu">
                  <img
                    alt="..."
                    style={{ height: "300px", width: "auto" }}
                    src={require("assets/img/ricebowl1.png")}
                  ></img>
                  <h1>Chicken Rice</h1>
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

export default connect()(RiceMenu);
