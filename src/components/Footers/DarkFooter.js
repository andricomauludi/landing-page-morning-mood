/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" style={{ backgroundColor: "#F0F08D" }}>
      <Container>
        <nav>
          <ul>
            <li>
              <a
                href="https://www.creative-tim.com?ref=nukr-dark-footer"
                target="_blank"
              >
                <b>Contact Us</b>
              </a>
            </li>
            <li>
              <a
                href="http://presentation.creative-tim.com?ref=nukr-dark-footer"
                target="_blank"
              >
                <b>About Us</b>
              </a>
            </li>
            <li>
              <a
                href="http://blog.creative-tim.com?ref=nukr-dark-footer"
                target="_blank"
              >
                <b>Location</b>
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          <b>
            © 2023 Morning Mood{" "}
            <a
              href="https://www.invisionapp.com?ref=nukr-dark-footer"
              target="_blank"
            ></a>
            | All rights reserved
            <a
              href="https://www.creative-tim.com?ref=nukr-dark-footer"
              target="_blank"
            ></a>
            .
          </b>
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
