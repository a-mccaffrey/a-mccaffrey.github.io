import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "./Navbar.css";
import NavIcon from "../../assets/Branding/flower-icon.svg";

class MyNavbar extends Component {
  render() {
    return (
      <div>
        <Navbar
          collapseOnSelect
          expand="lg"
          className="navbar-expand-md sticky-top"
        >
          <Container>
            <Navbar.Brand href="/">
              <h3 className="home-button">
                <img
                  src={ NavIcon }
                  alt="A small flower design by Aisling McCaffrey"
                  className="logo"
                />{" "}
                Aisling McCaffrey
              </h3>
            </Navbar.Brand>
            {/* to here is good */}
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="navbar-nav ml-auto flex-nowrap">
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  className="nav-item"
                >
                  <span className="nav-link">Home</span>
                </NavLink>
                <NavLink to="/about" activeClassName="active">
                  <span className="nav-link">About</span>
                </NavLink>
                <NavLink to="/portfolio" activeClassName="active">
                  <span className="nav-link">Portfolio</span>
                </NavLink>
                <NavLink to="/contact" activeClassName="active">
                  <span className="nav-link">Get in Touch</span>
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default MyNavbar;
