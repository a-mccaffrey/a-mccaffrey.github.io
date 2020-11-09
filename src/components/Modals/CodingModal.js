import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import "./Modals.css";
import AplusFoodies from "../../assets/Coding Screenshots/recipe-generator.png";
import Appointify from "../../assets/Coding Screenshots/appointify.png";
import CLIReadme from "../../assets/Coding Screenshots/cli-readme.png";
import EmployeeManager from "../../assets/Coding Screenshots/employee-manager.png";
import EmployeeTracker from "../../assets/Coding Screenshots/employee-tracker.png";
import NoteTaker from "../../assets/Coding Screenshots/note-taker.png";
import WeatherDashboard from "../../assets/Coding Screenshots/Weather-Dashboard.png";
import WorkScheduler from "../../assets/Coding Screenshots/Work-Scheduler.png";

class CodingModal extends Component {
  state = {
    isOpen: false,
  };

  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });

  render() {
    // const data = [
    //   {
    //     title: "Recipe Generator Deployed Application",
    //     link: "https://a-mccaffrey.github.io/aplus-foodies/",
    //     image: "./assets/Coding Screenshots/recipe-generator.png",
    //     alt: "A screenshot of recipe generator application",
    //   },
    //   {
    //     name: "Vuejs",
    //     url: "https://vuejs.org",
    //     description: "The Progressive JavaScript Framework",
    //   },
    //   {
    //     name: "Emberjs",
    //     url: "https://www.emberjs.com",
    //     description:
    //       "Ember.js is an open-source JavaScript web framework, based on the Model–view–viewmodel pattern",
    //   },
    // ];

    return (
      <div>
        <div className="d-flex align-items-center justify-content-center">
          <Button
            className="mybuttons"
            variant="primary"
            onClick={this.openModal}
          >
            Look
          </Button>
        </div>
        <Modal show={this.state.isOpen} size="xl" onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Coding Projects</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            <p className="my-5">
              My entire portfolio (including graphics) was created from scratch
              using GitHub, Bootstrap, React, Illustrator, and Photoshop. I hope
              you enjoy it.
            </p>
            <h4>Featured Projects</h4>
            {/* <!-- Recipe Generator --> */}
            {/* Destructuring will be a problem for future me - I am aware this is not as dry as it should be */}
            {/* {data.map(({ title, link, image, id }) => ( */}
            <div>
              <a
                href="https://a-mccaffrey.github.io/aplus-foodies/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="This is an external link (opens in a new tab)"
              >
                <img
                  src={AplusFoodies}
                  alt="A screenshot of recipe generator application"
                  className="portfolio-example"
                />
                <h5 className="pb-4">Recipe Generator Deployed Application</h5>
              </a>
              <p>
                <a
                  href="https://github.com/a-mccaffrey/aplus-foodies"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="This is an external link (opens in a new tab)"
                >
                  Click here for GitHub repository
                </a>
              </p>
              {/* <!-- Appointify --> */}
              <a
                href="https://floating-inlet-71164.herokuapp.com/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="This is an external link (opens in a new tab)"
              >
                <img
                  src={Appointify}
                  alt="A screenshot of an application with the headline: An open source project for booking doctor's appointments"
                  className="portfolio-example"
                />
                <h5 className="pb-4">Appointify</h5>
              </a>
              <p className="pb-4">
                <a
                  href="https://github.com/a-mccaffrey/covid-doctor-checkup"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="This is an external link (opens in a new tab)"
                >
                  Click here for GitHub repository
                </a>
              </p>
              <hr />
              <h4 className="pt-4">Additional GitHub projects</h4>
              {/* <!-- Weather Dashboard --> */}
              <a
                href="https://a-mccaffrey.github.io/gabriels-weather-dashboard/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="This is an external link (opens in a new tab)"
              >
                <img
                  src={WeatherDashboard}
                  alt="A screenshot of a weather dashboard. The navbar is the colours of the Irish flag - green, white, and orange."
                  className="portfolio-example"
                />
                <h5 className="pb-4">Gabriel's Weather Dashboard</h5>
              </a>
              <p>
                <a
                  href="https://github.com/a-mccaffrey/gabriels-weather-dashboard"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="This is an external link (opens in a new tab)"
                >
                  Click here for GitHub repository
                </a>
              </p>
              {/* <!-- Work Day Scheduler --> */}
              <a
                href="https://a-mccaffrey.github.io/workday-scheduler/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="This is an external link (opens in a new tab)"
              >
                <img
                  src={WorkScheduler}
                  alt="A screenshot of a work day scheduler - a simple calendar app for scheduling your workday."
                  className="portfolio-example"
                />
                <h5 className="pb-4">Workday Scheduler</h5>
              </a>
              <p>
                <a
                  href="https://github.com/a-mccaffrey/workday-scheduler"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="This is an external link (opens in a new tab)"
                >
                  Click here for GitHub repository
                </a>
              </p>
              {/* <!-- Note Taker --> */}
              <a
                href="https://vast-citadel-57216.herokuapp.com/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="This is an external link (opens in a new tab)"
              >
                <img
                  src={NoteTaker}
                  alt="A screenshot of a note taker application."
                  className="portfolio-example"
                />
                <h5 className="pb-4">JSON Note Taker</h5>
              </a>
              <p>
                <a
                  href="https://github.com/a-mccaffrey/JSON-note-taker"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="This is an external link (opens in a new tab)"
                >
                  Click here for GitHub repository
                </a>
              </p>
              {/* <!-- Readme Generator --> */}
              <a
                href="https://github.com/a-mccaffrey/readme-generator"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="This is an external link (opens in a new tab)"
              >
                <img
                  src={CLIReadme}
                  alt="A screenshot of a command line application that generates a useable readme."
                  className="portfolio-example"
                />
                <h5>
                  Readme Generator - Command Line Application (GitHub repo only)
                </h5>
              </a>
              {/* <!-- Employee Summary Template Engine --> */}
              <a
                href="https://github.com/a-mccaffrey/template-engine-employee-summary"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="This is an external link (opens in a new tab)"
              >
                <img
                  src={EmployeeTracker}
                  alt="A screenshot of an employee summary template generated through a command line application."
                  className="portfolio-example"
                />
                <h5>
                  Employee Summary Template Engine - Command Line Application
                  (GitHub repo only)
                </h5>
              </a>
              {/* <!-- MySQL Employee Tracker --> */}
              <a
                href="https://github.com/a-mccaffrey/MySQL-Employee-Tracker"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="This is an external link (opens in a new tab)"
              >
                <img
                  src={EmployeeManager}
                  alt="A screenshot of a command line application that helps track employees within an organization."
                  className="portfolio-example"
                />
                <h5 className="pb-4">
                  MySQL Employee Tracker - Command Line Application (GitHub repo
                  only)
                </h5>
              </a>
            </div>
            {/* ))} */}
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={this.closeModal}
              className="mybuttons"
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default CodingModal;
