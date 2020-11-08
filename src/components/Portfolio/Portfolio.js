import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Portfolio1 from "../../assets/Modals/coding.png";
import Portfolio2 from "../../assets/Modals/writing.png";
import Portfolio3 from "../../assets/Modals/graphic-design.png";
import Portfolio4 from "../../assets/Modals/animation.gif";
import "./Portfolio.css";
import CodingModal from "../Modals/CodingModal";
import WritingModal from "../Modals/WritingModal";
import GraphicModal from "../Modals/GraphicModal";
import VideoModal from "../Modals/VideoModal";
import { fadeInLeft } from "react-animations";
import Radium, { StyleRoot } from "radium";
import Flickity from "react-flickity-component";

class Portfolio extends Component {
  render() {
    const portfolioItems = [
      {
        title: "Coding",
        image: Portfolio1,
        id: 1,
        Modal: CodingModal,
      },
      {
        title: "Writing",
        image: Portfolio2,
        id: 2,
        Modal: WritingModal,
      },
      {
        title: "Graphic Design",
        image: Portfolio3,
        id: 3,
        Modal: GraphicModal,
      },
      {
        title: "Video/Animation",
        image: Portfolio4,
        id: 4,
        Modal: VideoModal,
      },
    ];

    const styles = {
      fadeInLeft: {
        animation: "x 1s",
        animationName: Radium.keyframes(fadeInLeft, "fadeInLeft"),
      },
    };


    return (
      <StyleRoot>
        <div style={styles.fadeInLeft} className="portfolio">
          <Container className="portfolio-container">
            <div className="carousel-wrapper">
              <h2 className="portfolio-h2">Portfolio</h2>
              <Flickity
                options={{
                  // autoPlay: 4000,
                  pauseAutoPlayOnHover: true,
                  wrapAround: false,
                  fullscreen: true,
                  adaptiveHeight: true,
                }}
                className={"carousel"}
                elementType={"div"} // default 'div'
                disableImagesLoaded={false} // default false
                reloadOnUpdate // default false
                static // default false
              >
                {portfolioItems.map(({ title, image, id, Modal }) => (
                  <div
                    style={{
                      width: "22em",
                      height: "400px",
                      margin: "3em 2em 0 2em",
                      textAlign: "center",
                    }}
                    key={id}
                  >
                    <h4>{title}</h4>
                    <img
                      style={{ height: "200px", margin: "1em" }}
                      src={image}
                      alt=""
                    />
                    {/* Where the magic happens */}
                    {Modal && <Modal />}
                  </div>
                ))}
              </Flickity>
            </div>
          </Container>
        </div>
      </StyleRoot>
    );
  }
}

export default Portfolio;
