import React from "react";
// reactstrap components
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components

function CardSandwich() {
  return (
    <div className="section" style={{ "background-color": "#FDFD95" }}>
      <Container>
        <Row>
          <Col>
            <Card style={{ width: "20rem" }}>
              <CardImg
                alt="..."
                className="rounded img-raised"
                src={require("assets/img/sandwich1.jpg")}
                top
              ></CardImg>
              <CardBody>
                <CardTitle tag="h4">Sambal Matah</CardTitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button
                  color="primary"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  Go somewhere
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "20rem" }}>
              <CardImg
                alt="..."
                className="rounded img-raised"
                 src={require("assets/img/sandwich1.jpg")}
                top
              ></CardImg>
              <CardBody>
                <CardTitle tag="h4">Sambal Bawang</CardTitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button
                  color="primary"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  Go somewhere
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "20rem" }}>
              <CardImg
                alt="..."
                className="rounded img-raised"
                 src={require("assets/img/sandwich1.jpg")}
                top
              ></CardImg>
              <CardBody>
                <CardTitle tag="h4">Barbeque</CardTitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button
                  color="primary"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  Go somewhere
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CardSandwich;