import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function SandwichSection() {
  return (
    <>
      <div className="section" style={{"background-color":"#FDFD95"}}>
        <Container>
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
              <h2 className="title">Our Sandwich</h2>
              <h5>
                Now UI Kit comes with 100 custom icons made by our friends from
                NucleoApp. The official package contains over 2.100 thin icons
                which are looking great in combination with Now UI Kit PRO Make
                sure you check all of them and use those that you like the most.
              </h5>
              <Button
                className="btn-round mr-1"
                color="info"
                href="/nucleo-icons"
                size="lg"
                target="_blank"
              >
                View Demo Icons
              </Button>
              <Button
                className="btn-round"
                color="info"
                href="https://nucleoapp.com/?ref=1712"
                outline
                size="lg"
                target="_blank"
              >
                View All Icons
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SandwichSection;
