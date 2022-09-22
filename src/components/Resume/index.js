import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import resumePdf from "../../assets/resume/resume-2022.jpg";


export default function Resume() {
 
  return (
    <section>
      <Container>
          <Row className="section-title">
            <Col  >
            <h1 id="resume">Resume</h1>
            </Col>
          </Row>
          <Row>
            <Col className='md'>
      <a
        className="href-links"
        href="https://docs.google.com/document/d/1CdX1Qr8EKW16Y7FmVG9AFbVxzf1_l5HV/edit?usp=sharing&ouid=115667110176725207034&rtpof=true&sd=true"
        download
        target="_blank"
        rel="noreferrer noopener"
      >
        Click here to download Resume
      </a>
      </Col>
            <Col>
      {/* //have image be a modal that pops up in larger view */}
      <img src={ resumePdf } style ={{ width: "80" }} alt="resume" />
            </Col>
            </Row>
        </Container>
    </section>
  );
}
