import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function Images() {
  return (
    <>
      <div className="section section-images" style={{ "background-color": "#FDFD95","margin-bottom":"-250px"}}>
        <Container>
          <Row>
            <Col md="12">
              <div className="hero-images-container justify-content-end">
                <img
                  style={{"max-height":"500px","margin-left":"300px"}}
                  alt="..."
                  src={require("assets/img/logo-morning-mood.png")}
                ></img>
              </div>
              {/* <div className="hero-images-container-1">
                <img
                style={{"max-height":"500px","margin-right":"300px"}}
                  alt="..."
                  src={require("assets/img/kopi3.png")}
                ></img>
              </div> */}
              <div className="hero-images-container-2">
                <img
                  alt="..."
                  src={require("assets/img/kopi3.png")}
                ></img>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Images;
