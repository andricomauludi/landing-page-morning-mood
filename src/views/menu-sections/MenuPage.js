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

import MenuPageHeader from "components/Headers/MenuPageHeader";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DarkFooter from "components/Footers/DarkFooter";
import { connect, useSelector } from "react-redux";
import TableComponent from "components/Widgets/TableComponent";
import { useDispatch } from "react-redux";
import { getRiceLists, getSandwichLists } from "../../actions/productAction";

function MenuPage() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.sandwich); // Assuming 'counter' is a state property in Redux
  const datas = useSelector((state) => state.rice); // Assuming 'counter' is a state property in Redux
  console.log(datas);

  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    dispatch(getSandwichLists());
    dispatch(getRiceLists());
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
        <MenuPageHeader />
        <div
          style={{ backgroundColor: "#00005A" }}
          className="section section-about-us"
        >
          <Container>
            <Row className="ml-auto mr-auto text-center">
              <Col md="5">
                <div
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
                </div>
              </Col>
              <Col md="2"></Col>
              <Col md="5">
                <div className="btn-menu">
                  <a href="/menu/coffee" id="menu-navbar">
                    <img
                      alt="..."
                      style={{ height: "300px" }}
                      src={require("assets/img/kopi1.png")}
                    ></img>
                    <h1 style={{ color: "#00005A" }}>Coffee</h1>
                  </a>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="ml-auto mr-auto text-center">
                <div className="btn-menu">
                  <a href="/menu/rice" id="menu-navbar">
                    <img
                      alt="..."
                      style={{ height: "300px", width: "auto" }}
                      src={require("assets/img/ricebowl1.png")}
                    ></img>
                    <h1 style={{ color: "#00005A" }}>Chicken Rice</h1>
                  </a>
                </div>
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

export default connect()(MenuPage);
