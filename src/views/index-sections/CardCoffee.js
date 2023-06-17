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

function CardCoffee() {
  return (
    <div className="section" style={{ "background-color": "#FDF502" }}>
      <Container>
        <Row>
          <Col>
            <Card style={{ width: "20rem" }}>
              <CardImg
                alt="..."
                className="rounded img-raised"
                src={require("assets/img/header-kopi.jpg")}
                top
              ></CardImg>
              <CardBody>
                <CardTitle tag="h4">Originale</CardTitle>
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
                src={require("assets/img/header-kopi.jpg")}
                top
              ></CardImg>
              <CardBody>
                <CardTitle tag="h4">Luxurious Caramel</CardTitle>
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
                src={require("assets/img/header-kopi.jpg")}
                top
              ></CardImg>
              <CardBody>
                <CardTitle tag="h4">Sumptuous Hazelnut</CardTitle>
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

export default CardCoffee;
