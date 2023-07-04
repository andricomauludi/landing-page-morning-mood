/*

=========================================================
* Now UI Kit React - v1.5.2
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2023 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/main/LICENSE.md)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
// pages for this kit
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LoginPage from "views/examples/LoginPage.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import MenuPage from "views/menu-sections/MenuPage";
import AboutPage from "views/about-sections/AboutPage";
import IndexExample from "views/examples/IndexExample";

import { Provider } from "react-redux";
import { store } from "reducers/rootreducers";
import SandwichMenu from "views/menu-sections/SandwichMenu";
import RiceMenu from "views/menu-sections/RiceMenu";
import CoffeeMenu from "views/menu-sections/CoffeeMenu";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/index" element={<Index />} />
        <Route path="/indexExample" element={<IndexExample />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/menu/sandwich" element={<SandwichMenu />} />
        <Route path="/menu/rice" element={<RiceMenu />} />
        <Route path="/menu/coffee" element={<CoffeeMenu />} />
        <Route path="/aboutus" element={<AboutPage />} />
        <Route path="/nucleo-icons" element={<NucleoIcons />} />
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/profile-page" element={<ProfilePage />} />
        <Route path="/login-page" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/index" replace />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
