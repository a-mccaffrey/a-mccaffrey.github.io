import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import MyNavbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./index.css";

// import './App.css'; Will separate my CSS later

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyNavbar />
        <div className="page-container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
