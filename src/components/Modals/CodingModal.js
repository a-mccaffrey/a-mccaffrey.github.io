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
import MERNCO2 from "../../assets/Coding Screenshots/MERNCO2.png";

class CodingModal extends Component {
  state = {
    isOpen: false,
  };

  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });

  render() {
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
              The entirety of aislingmccaffrey.com (including graphics) was
              created from scratch using GitHub, Bootstrap, React, Cloudflare,
              Illustrator, and Photoshop. The below coding projects feature code
              on GitHub, and may be in the form of deployed applications on
              Netlify or Heroku, as well as CLI applications you can download to
              your own computer and use for your own purposes. All links open in
              new tabs.
            </p>
            <h4>Featured Projects</h4>
            {/* <!-- MERN CO2 App --> */}
            {/* Destructuring will be a problem for future me - I am aware this is not as dry as it should be */}
            {/* {data.map(({ title, link, image, id }) => ( */}
            <div>
              <a
                href="https://www.co2tracker.xyz/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="This is an external link (opens in a new tab)"
              >
                <img
                  src={MERNCO2}
                  alt="A screenshot of a full-stack MERN application which measures the CO2 in your air"
                  className="portfolio-example"
                />
                <h5 className="pb-4">
                  MERN CO₂ Tracker (Deployed Application)
                </h5>
              </a>
              <p>
                <a
                  href="https://github.com/DiLiubarets/MERN_CO2"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="This is an external link (opens in a new tab)"
                >
                  Click here for GitHub repository
                </a>
              </p>
              {/* <!-- Recipe Generator App --> */}
              <a
                href="https://aplus-foodies.netlify.app/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="This is an external link (opens in a new tab)"
              >
                <img
                  src={AplusFoodies}
                  alt="A screenshot of recipe generator application"
                  className="portfolio-example"
                />
                <h5 className="pb-4">
                  Recipe Generator (Deployed Application)
                </h5>
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
                <h5 className="pb-4">Appointify (Deployed Application)</h5>
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
                href="https://gabriels-weather-dashboard.netlify.app/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="This is an external link (opens in a new tab)"
              >
                <img
                  src={WeatherDashboard}
                  alt="A screenshot of a weather dashboard. The navbar is the colours of the Irish flag - green, white, and orange."
                  className="portfolio-example"
                />
                <h5 className="pb-4">
                  Gabriel's Weather Dashboard (Deployed Application)
                </h5>
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
                href="https://workday-scheduler.netlify.app/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="This is an external link (opens in a new tab)"
              >
                <img
                  src={WorkScheduler}
                  alt="A screenshot of a work day scheduler - a simple calendar app for scheduling your workday."
                  className="portfolio-example"
                />
                <h5 className="pb-4">
                  Workday Scheduler (Deployed Application)
                </h5>
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
                <h5 className="pb-4">JSON Note Taker (Deployed Application)</h5>
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
