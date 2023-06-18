import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function Images() {
  return (
    <>
      <div className="section section-images" style={{ "background-color": "#FDFD95","margin-bottom":"-500px"}}>
        <Container>
          <Row>
              <Col md="3">
                
              </Col>
            <Col md="6">
              <div className="hero-images-container">
                <img
                  style={{"max-height":"300px", display: 'flex',  justifyContent:'center', alignItems:'center',marginRight: "auto",  marginLeft: "auto", alignSelf:"center" }}
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
              {/* <div className="hero-images-container-2">
                <img
                  style={{display: 'flex',  justifyContent:'center', alignItems:'center', marginLeft: "auto", alignSelf:"center" }}

                  alt="..."
                  src={require("assets/img/kopi3.png")}
                ></img>
              </div> */}
            </Col>
            <Col md="3">
              
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Images;
