import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// sections for this page
import Images from "./index-sections/Images.js";
import Download from "./index-sections/Download.js";
import CoffeeSection from "./index-sections/CoffeeSection.js";
import SandwichSection from "./index-sections/SandwichSection.js";
import CardCoffee from "./index-sections/CardCoffee.js";
import CardSandwich from "./index-sections/CardSandwich.js";
import CarouselCustomer from "./index-sections/CarouselCustomer.js";
import Navbars from "./index-sections/Navbars.js";

function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
          <Images />
          <SandwichSection />
          {/* <CardSandwich /> */}
          <CoffeeSection />
          {/* <CardCoffee /> */}
          <CarouselCustomer />
          {/* <Download /> */}
          {/* <Navbars /> */}
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Index;
