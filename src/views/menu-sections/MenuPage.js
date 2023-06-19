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
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import MenuPageHeader from "components/Headers/MenuPageHeader";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import CardSandwich from "views/index-sections/CardSandwich";
import DarkFooter from "components/Footers/DarkFooter";

function MenuPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
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
            <Row className="ml-auto mr-auto text-center" >
              <Col md="5">
                <Button 
                // style={{width:"500px",height:"500px", backgroundColor:"#F0F08D"}}
                className="btn-menu"
                >
                  <img
                    alt="..."
                    style={{ height: "300px", width: "auto" }}
                    src={require("assets/img/sandwich1.jpg")}
                  ></img>
                  <h1 style={{"color":"#00005A"}}>
                    Sandwich
                  </h1>
                </Button>
              </Col>
              <Col md="2">
                
              </Col>
              <Col md="5">
                <Button 
                className="btn-menu"
                >
                  <img
                    alt="..."
                    style={{ height: "300px" }}
                    src={require("assets/img/kopi1.png")}
                  ></img>
                  <h1>
                    Coffee
                  </h1>
                </Button>
              </Col>
            </Row>
            <Row>
              <Col className="ml-auto mr-auto text-center" >
                <Button 
                className="btn-menu"
                >
                  <img
                    alt="..."
                    style={{ height: "300px", width: "auto" }}
                    src={require("assets/img/sandwich1.jpg")}
                  ></img>
                  <h1>
                    Chicken Rice
                  </h1>
                </Button>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            
          </Container>
        </div>
        
        <DarkFooter />
      </div>
    </>
  );
}

export default MenuPage;
