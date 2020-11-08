import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    const today = new Date();
    return (
      <div className="footer-background">
        <footer className="footer mt-auto py-3 px-4">
            <h5>
              "If you work really hard and you're kind, amazing things will
              happen"
            </h5>
            <a
              href="https://www.facebook.com/aislingsmccaffrey"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="This is an external link (opens in a new tab)"
            >
              <i
                className="fab fa-facebook-square social-media facebook"
                id="facebook"
              ></i>
            </a>
            <a
              href="https://www.linkedin.com/in/aisling-s-mccaffrey/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="This is an external link (opens in a new tab)"
            >
              <i className="fab fa-linkedin social-media" id="linkedin"></i>
            </a>
            <a
              href="https://github.com/a-mccaffrey"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="This is an external link (opens in a new tab)"
            >
              <i className="fab fa-github-square social-media" id="github"></i>
            </a>
            <a
              href="https://www.instagram.com/a_mccaffrey/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="This is an external link (opens in a new tab)"
            >
              <i
                className="fab fa-instagram-square social-media"
                id="instagram"
              ></i>
            </a>
            <p>
              Copyright &copy; {today.getFullYear()} Aisling McCaffrey All Rights Reserved
            </p>
        </footer>
      </div>
    );
  }
}

export default Footer;
