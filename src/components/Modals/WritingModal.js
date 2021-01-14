import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class WritingModal extends Component {
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
            variant="primary"
            onClick={this.openModal}
            className="mybuttons"
          >
            Read
          </Button>
        </div>
        <Modal show={this.state.isOpen} size="xl" onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Writing Examples</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            <h4>Webpages</h4>
            <a
              href="https://pivotree.com/social-distancing-commerce-enablement-solutions/buy-online-pickup-in-store-bopis-with-curbside-pickup-by-pivotree/"
              target="_blank"
              className="d-block m-3"
              rel="noreferrer noopener"
              aria-label="This is an external link (opens in a new tab)"
            >
              Buy Online Pickup in Store Solution Page
            </a>
            <a
              href="https://pivotree.com/platforms/coveo-for-commerce/"
              target="_blank"
              className="d-block m-3"
              rel="noreferrer noopener"
              aria-label="This is an external link (opens in a new tab)"
            >
              Coveo for Commerce Webpage
            </a>
            <hr />
            <h4>Blog posts</h4>
            <a
              href="https://pivotree.com/3-reasons-for-business-operations-support/"
              target="_blank"
              className="d-block m-3"
              rel="noreferrer noopener"
              aria-label="This is an external link (opens in a new tab)"
            >
              3 Reasons Why Support is Crucial for Omnichannel Commerce Success
            </a>
            <a
              href="https://pivotree.com/our-replatforming-decision-part-1-the-catalyst/"
              target="_blank"
              className="d-block m-3"
              rel="noreferrer noopener"
              aria-label="This is an external link (opens in a new tab)"
            >
              Our CPQ Replatforming Decision – Part 1: The Catalyst
            </a>
            <a
              href="https://pivotree.com/our-replatforming-decision-part-2-the-decision-matrix/"
              target="_blank"
              className="d-block m-3"
              rel="noreferrer noopener"
              aria-label="This is an external link (opens in a new tab)"
            >
              Our CPQ Replatforming Decision – Part 2: The Decision Matrix
            </a>
            <a
              href="https://pivotree.com/our-replatforming-decision-part-3-the-choice/"
              target="_blank"
              className="d-block m-3"
              rel="noreferrer noopener"
              aria-label="This is an external link (opens in a new tab)"
            >
              Our CPQ Replatforming Decision – Part 3: The Choice
            </a>
            <a
              href="https://pivotree.com/sap-cx-breaking-down-barriers-to-purchasing/"
              target="_blank"
              className="d-block m-3"
              rel="noreferrer noopener"
              aria-label="This is an external link (opens in a new tab)"
            >
              How is SAP Customer Experience Helping Brands Break Down Barriers
              to Purchasing?
            </a>
            <a
              href="https://pivotree.com/what-not-to-miss-at-sap-customer-experience-live-2018/"
              target="_blank"
              className="d-block m-3"
              rel="noreferrer noopener"
              aria-label="This is an external link (opens in a new tab)"
            >
              What not to miss at SAP Customer Experience Live 2018
            </a>
            <a
              href="https://pivotree.com/from-hybris-cec-to-sap-c4hana/"
              target="_blank"
              className="d-block m-3"
              rel="noreferrer noopener"
              aria-label="This is an external link (opens in a new tab)"
            >
              From Hybris CEC to SAP C/4HANA: What Does That Mean?
            </a>
            <hr />
            <h4>Product Briefs</h4>
            <a
              href="https://info.pivotree.com/hubfs/Brochure%20Pivotree%20-%20FLASH.pdf/"
              target="_blank"
              className="d-block m-3"
              rel="noreferrer noopener"
              aria-label="This is an external link (opens in a new tab)"
            >
              Full Lifecycle Accelerator with Service & Hosting
            </a>
            <a
              href="https://info.pivotree.com/hubfs/TGI%20Fridays%20C4HANA%20Case%20Study.pdf"
              target="_blank"
              className="d-block m-3"
              rel="noreferrer noopener"
              aria-label="This is an external link (opens in a new tab)"
            >
              Buy Online, Pickup In-store (BOPIS) by Pivotree
            </a>
            <hr />
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

export default WritingModal;
