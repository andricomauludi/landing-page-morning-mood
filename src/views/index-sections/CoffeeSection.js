import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function CoffeeSection() {
  return (
    <>
      <div className="section">
        <Container>
          <Row>
            <Col lg="6" md="12">
              <h2 className="title">Our Coffee</h2>
              <h5>
                Now UI Kit comes with 100 custom icons made by our friends from
                NucleoApp. The official package contains over 2.100 thin icons
                which are looking great in combination with Now UI Kit PRO Make
                sure you check all of them and use those that you like the most.
              </h5>
              <Button
                className="btn-round btn-main mr-1"
                style={{ backgroundColor: "#00005A" }}
                href="/nucleo-icons"
                size="lg"
                target="_blank"
              >
                <span style={{ color: "#FDF502" }}>View Our Coffee Menus</span>
              </Button>
            </Col>
            <Col lg="6" md="12">
              <div className="icons-container">
                <div className="hero-images-container">
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/header-kopi.jpg")}
                  ></img>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CoffeeSection;
