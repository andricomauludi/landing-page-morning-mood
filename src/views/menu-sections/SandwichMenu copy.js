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


function SandwichMenu() {
  const [datsa, setData] = useState(null);

  const [pills, setPills] = React.useState("2");
  // const dispatch = useDispatch();
  // const data = useSelector((state) => state.sandwich); // Assuming 'counter' is a state property in Redux
 
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8090/api/product/sandwich');
        const datsa = await response.json();
     
        setData(datsa);
        const datas = datsa.data;
        
      } catch (error) {
      }
    };
    if (datsa == null) {
      fetchData()
      
      
    }
    else{
      console.log(datsa);
      return (
        <>
          <IndexNavbar />
          <div className="wrapper">
            <SandwichHeader />
            <div className="section section-about-us">
              <Container>
                {console.log(datsa.data)}
                {Object.entries(datsa.data[0]).map(([key, value]) => (
                    <p key={value}>
                    {key} : {value}
                    </p>
                  ))}
                <Row className="ml-auto mr-auto text-center">
                  {/* {datsa.data.map((item, index) => (
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
                  ))} */}
                </Row>
                {/* {datsa.data.map((item, index) => (
                  // {Object.entries(datas).map((item, index) => (
                  <div key={item.ID}>
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
                                <Button
                                  className="btn-round mr-1"
                                  style={{ backgroundColor: "#00005A" }}
                                  href="/menu"
                                  size="lg"
                                  target="_blank"
                                >
                                  <span style={{ color: "#FDF502" }}>
                                    View Our Sandwich Menus
                                  </span>
                                </Button>
                              </Col>
                            </Row>
                          </Col>
                        </TabPane>
                      </TabContent>
                    </Row>
                  </div>
                ))} */}
    
                {/* <div className="separator separator-primary"></div> */}
    
                {/* <TableComponent /> */}
              </Container>
            </div>
    
            <DarkFooter />
          </div>
        </>
      );

    }
    
    // dispatch(getSandwichLists());
    
   
  }, [datsa]);
  
  
}

export default connect()(SandwichMenu);
