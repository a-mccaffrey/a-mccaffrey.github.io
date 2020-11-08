import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./About.css";
import { fadeInLeft } from "react-animations";
import Radium, { StyleRoot } from "radium";
import ProfilePicture from "../../assets/Branding/ProfilePicture.png";

class About extends Component {
  render() {
    const styles = {
      fadeInLeft: {
        animation: "x 1s",
        animationName: Radium.keyframes(fadeInLeft, "fadeInLeft"),
      },
    };
    return (
      <StyleRoot>
        <div style={styles.fadeInLeft} className="about">
          <Container>
            <Card className="about-card">
              <Row>
                <Col sm={4}>
                  <img
                    src={ProfilePicture}
                    alt="Aisling McCaffrey looking professional"
                    id="bio-image"
                    className="mx-auto card-img"
                  />
                </Col>
                <Col sm={8}>
                  <div className="card-body">
                    <h2 className="card-title">About Me</h2>
                    <p className="card-text">
                      I am a B2B marketer with a bachelor degree in
                      International Business and I am close to finishing a
                      full-stack web development certificate from Carleton
                      University. I have been running WordPress sites for my
                      entire career, and I got my coding start when I was 12 in
                      the early days of social media. Earlier this year, I
                      decided to take my passion for web development more
                      seriously since it's the part of my job I enjoy the most.
                      I aim to transition to a role where I can use my
                      experience in marketing, graphic design, and coding to
                      create great web experiences. My knowledge of marketing,
                      web development, and client-centricity will be a great
                      asset to any team. I am immigrating to Luxembourg before
                      the end of 2020, and I'm looking for my next career
                      opportunity. As a citizen of Ireland, I am legally allowed
                      to work in Luxembourg, where I intend to settle with my
                      Luxembourgish partner.
                    </p>
                    <p className="card-text">
                      If you want to learn more about my education, background,
                      and skills, then I invite you to go on an adventure
                      through clicking these buttons (which will open in a new
                      tab):
                    </p>
                    <p className="card-text button-group text-center">
                      <Button
                        href="https://github.com/a-mccaffrey"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="This is an external link (opens in a new tab)"
                        className="body-link btn-circle"
                        data-tooltip
                        title="Aisling's GitHub"
                      >
                        <i className="fab fa-github body-icon"></i>
                      </Button>
                      <Button
                        href="https://www.linkedin.com/in/aisling-s-mccaffrey/"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="This is an external link (opens in a new tab)"
                        className="body-link btn-circle"
                        data-tooltip
                        title="Aisling's LinkedIn"
                      >
                        <i className="fab fa-linkedin body-icon"></i>
                      </Button>
                      <Button
                        href="https://drive.google.com/file/d/1ZrTIoHswNLUD-a1F1gMhvddDmYLHa3cX/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="This is an external link (opens in a new tab)"
                        className="body-link btn-circle"
                        data-tooltip
                        title="Aisling's CV (on Google Drive)"
                      >
                        <i className="fas fa-file body-icon"></i>
                      </Button>
                    </p>
                  </div>
                </Col>
              </Row>
            </Card>
          </Container>
        </div>
      </StyleRoot>
    );
  }
}

export default About;
