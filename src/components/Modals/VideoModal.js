import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import Internships from "../../assets/Video Screenshots/10ThousandInternships.png";
import BOPIS from "../../assets/Video Screenshots/BOPIS.png";
// import Canada2018 from "../../assets/Video Screenshots/Canada2018Budget.png";
import InternationalDecade from "../../assets/Video Screenshots/InternationalDecade.png";
import MountainClimbing from "../../assets/Video Screenshots/Mountain_Climbing.png";
import IntroVid from "../../assets/Video Screenshots/Pivotree_intro_video.png";
import SpousalSponsorship from "../../assets/Video Screenshots/SpousalSponsorship.png";
// import VisitingSarabha from "../../assets/Video Screenshots/VisitingSarabha.png";

class VideoModal extends Component {
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
            Watch
          </Button>
        </div>
        <Modal show={this.state.isOpen} size="xl" onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>
              Video Editing and Animation Work (Click Image to View Video)
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            {/* <!-- BOPIS --> */}
            <div className="row">
              <a
                href="https://www.youtube.com/watch?v=jiNJdm0EKhU"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="This is an external link (opens in a new tab)"
              >
                <img
                  src={ BOPIS }
                  alt="A screenshot of a video introducing the new Pivotree solution - Buy Online, Pickup in Store (BOPIS)"
                  width="50%"
                  className="video-example"
                />
              </a>
            </div>
            {/* <!-- Pivotree Brand Video --> */}
            <div className="row">
              <a
                href="https://www.facebook.com/Pivotree/videos/383657125564816/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="This is an external link (opens in a new tab)"
              >
                <img
                  src={ IntroVid }
                  alt="A screenshot of a video introducing the new Pivotree brand"
                  width="50%"
                  className="video-example"
                />
              </a>
            </div>
            {/* <!-- Mountain Climbing --> */}
            <div className="row">
              <a
                href="https://www.facebook.com/thinkwrap/videos/2271628113116045/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="This is an external link (opens in a new tab)"
              >
                <img
                  src={ MountainClimbing }
                  alt="A screenshot of a video about Black Frida eCommerce needs"
                  width="50%"
                  className="video-example"
                />
              </a>
            </div>
            {/* <!-- 10 Thousand Interships --> */}
            <div className="row">
              <a
                href="https://www.facebook.com/RajLiberal/videos/1364186730358105/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="This is an external link (opens in a new tab)"
              >
                <img
                  src={ Internships }
                  alt="A screenshot of a video introducing the 10 Thousand Interships program"
                  width="50%"
                  className="video-example"
                />
              </a>
            </div>
            {/* <!-- Spousal Sponsorship --> */}
            <div className="row">
              <a
                href="https://www.facebook.com/RajLiberal/videos/1423659797744131/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="This is an external link (opens in a new tab)"
              >
                <img
                  src={ SpousalSponsorship }
                  alt="A screenshot of a video introducing the improvements to the Canadian Spousal Sponsorship program"
                  width="50%"
                  className="video-example"
                />
              </a>
            </div>
            {/* <!-- International Decade --> */}
            <div className="row">
              <a
                href="https://www.facebook.com/RajLiberal/videos/1436337596476351/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="This is an external link (opens in a new tab)"
              >
                <img
                  src={ InternationalDecade }
                  alt="A screenshot of a video discussing Canada's recognition of the International Decade for People of African Descent "
                  width="50%"
                  className="video-example"
                />
              </a>
            </div>
            {/* <!-- Budget 2018 --> */}
            <div className="row">
              <a
                href="https://www.facebook.com/RajLiberal/videos/1435403736569737/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="This is an external link (opens in a new tab)"
              >
                <img
                  src={ BOPIS }
                  alt="A screenshot of a video discussing Canada's 2018 budget"
                  width="50%"
                  className="video-example"
                />
              </a>
            </div>
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

export default VideoModal;
