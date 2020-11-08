import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import FamilyPortrait1 from "../../assets/Graphic Design/Family_Portrait_1.png";
import FamilyPortrait2 from "../../assets/Graphic Design/Family_Portrait_2.png";
import InfographicExample1 from "../../assets/Graphic Design/Infographic_Example_1.png";
import RajEventPoster from "../../assets/Graphic Design/Raj_Event_Poster.png";

class GraphicModal extends Component {
  state = {
    isOpen: false,
  };

  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });

  render() {
    return (
      <div>
        <div className="d-flex align-items-center justify-content-center">
          <Button vvariant="primary"
            onClick={this.openModal}
            className="mybuttons">
            Enjoy
          </Button>
        </div>
        <Modal show={this.state.isOpen} size="xl" onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Graphic Design Examples</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            <h4>Case Studies</h4>
            <a
              href="https://info.pivotree.com/hubfs/TGI%20Fridays%20C4HANA%20Case%20Study.pdf"
              target="_blank"
              className="d-block m-3"
              rel="noreferrer noopener"
              aria-label="This is an external link (opens in a new tab)"
            >
              TGI Fridays Case Study
            </a>
            <hr />
            <h4>Infographics</h4>
            <a
              href={ InfographicExample1 }
              target="_blank"
              className="d-block m-3"
              rel="noreferrer noopener"
              aria-label="This is an external link (opens in a new tab)"
            >
              GDPR Explanation for North American Companies
            </a>
            <a
              href="https://pivotree.com/infographic-4-steps-to-strategically-replatform-your-cpq-tool/"
              target="_blank"
              className="d-block m-3"
              rel="noreferrer noopener"
              aria-label="This is an external link (opens in a new tab)"
            >
              Infographic: 4 Steps to Strategically Replatform your CPQ Tool
            </a>
            <hr />
            <h4>Posters</h4>
            <a
              href={ RajEventPoster }
              target="_blank"
              className="d-block m-3"
              rel="noreferrer noopener"
              aria-label="This is an external link (opens in a new tab)"
            >
              Event Poster
            </a>
            <hr />
            <h4>Event Design</h4>
            <a
              href="https://www.instagram.com/p/BOpoElgANv2/"
              target="_blank"
              className="d-block m-3"
              rel="noreferrer noopener"
              aria-label="This is an external link (opens in a new tab)"
            >
              Maple Leaf Ball Shanghai
            </a>
            <a
              href="https://www.instagram.com/p/BOno1Bwgk1G/"
              target="_blank"
              className="d-block m-3"
              rel="noreferrer noopener"
              aria-label="This is an external link (opens in a new tab)"
            >
              Canadian Christmas Party Shanghai
            </a>
            <a
              href="https://www.instagram.com/p/BRyV4JbAnsK/"
              target="_blank"
              className="d-block m-3"
              rel="noreferrer noopener"
              aria-label="This is an external link (opens in a new tab)"
            >
              Inauguration du vol direct Montréal-Shanghai (with the Mayor of
              Montréal and the Minister of Tourism of Québec)
            </a>
            <hr />
            <h4>Art</h4>
            <a
              href={ FamilyPortrait1 }
              target="_blank"
              className="d-block m-3"
              rel="noreferrer noopener"
              aria-label="This is an external link (opens in a new tab)"
            >
              Tattoo-Style Family Portrait #1
            </a>
            <a
              href={ FamilyPortrait2 }
              target="_blank"
              className="d-block m-3"
              rel="noreferrer noopener"
              aria-label="This is an external link (opens in a new tab)"
            >
              Tattoo-Style Family Portrait #2
            </a>
          </Modal.Body>
          <Modal.Footer>
          <Button variant="secondary" onClick={this.closeModal} className="mybuttons">
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default GraphicModal;
