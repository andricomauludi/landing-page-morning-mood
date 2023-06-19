import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function AboutPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div
        className="page-header clear-filter page-header-small"
        filter-color="blue"
      >
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/logo-morning-mood.png") + ")"
          }}
          ref={pageHeader}
        ></div>
         <Container>
            <h1
            style={{color:"#FDF502"}}
            className="title">About Us</h1>
            <div className="text-center">            
            </div>
          </Container>
      </div>
    </>
  );
}

export default AboutPageHeader;
