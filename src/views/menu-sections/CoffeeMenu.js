import React, { useEffect, useState } from "react";

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
import RiceHeader from "components/Headers/RiceHeader";
import CoffeeHeader from "components/Headers/CoffeeHeader";


function CoffeeMenu() {
  const [datsa, setData] = useState(null);

  const [pills, setPills] = React.useState("2");
  // const dispatch = useDispatch();
  // const data = useSelector((state) => state.sandwich); // Assuming 'counter' is a state property in Redux
  // const datas = data.getSandwichLists;
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8090/api/product/coffee');
        const datsa = await response.json();
     
        setData(datsa);
      
      } catch (error) {
        return (<div>Error {error} </div>);
      }
    };
    console.log(datsa);
    fetchData()
    return;
    // dispatch(getSandwichLists());
   
  }, [datsa]);

  if (!datsa) {
    return (<>
        <CoffeeHeader />
        <h1>Loading ...</h1>
        </>
    );
  }
  const datas = datsa.data
  
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <CoffeeHeader />
        <div className="section section-about-us">
          <Container>
            {/* {Object.entries(datsa.data[0]).map(([key, value]) => (
                <p>
                {key} : {value}
                </p>
              ))} */}
            <Row className="ml-auto mr-auto text-center">
              {datas.map((item, index) => (
                // {Object.entries(datas).map((item, index) => (
                <Col md="4">
                  <div
                    className="btn-menu-specific"
                    onClick={(e) => {
                      e.preventDefault();
                      setPills(index);
                    }}
                  >
                    <img
                      alt="..."
                      src={require("assets/img/" + item.photo)}
                    ></img>
                    <h1 style={{ color: "#00005A" }}>{item.product_name}</h1>
                  </div>
                </Col>
              ))}
            </Row>
            {datas.map((item, index) => (
              // {Object.entries(datas).map((item, index) => (
              <div>
                <Row>
                  <Col className="ml-auto mr-auto" md="6">
                   
                    <div className="nav-align-center"></div>
                  </Col>
                  <TabContent className="gallery" activeTab={"pills" + pills}>
                    <TabPane tabId={"pills" + index}>
                      <Col className="ml-auto mr-auto" md="10">
                        <Row>
                          <Col lg="6" md="12">
                            <div className="icons-container">
                              <div className="hero-images-container">
                                <img
                                  alt="..."
                                  className="rounded img-raised"
                                  // src={require("assets/img/sandwich1.jpg")}
                                  src={require("assets/img/" + item.photo)}
                                ></img>
                              </div>
                            </div>
                          </Col>
                          <Col lg="6" md="12">
                            <h2 className="title">{item.product_name}</h2>
                            <h5>{item.description}</h5>
                            <h5>Rp. {item.price},-</h5>
                            <Button
                              className="btn-round mr-1"
                              style={{ backgroundColor: "#00005A" }}
                              href="/menu"
                              size="lg"
                              target="_blank"
                            >
                              <span style={{ color: "#FDF502" }}>
                                View Our Rice Menus
                              </span>
                            </Button>
                          </Col>
                        </Row>
                      </Col>
                    </TabPane>
                  </TabContent>
                </Row>
              </div>
            ))}

            {/* <div className="separator separator-primary"></div> */}

            {/* <TableComponent /> */}
          </Container>
        </div>

        <DarkFooter />
      </div>
    </>
  );
}

export default connect()(CoffeeMenu);
