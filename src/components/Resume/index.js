import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Resume() {
  return (
    <section>
      <Container>
        <Row className="section-title">
          <Col>
            <h1 id="resume">Resume</h1>
          </Col>
        </Row>
        <Row>
          <Col className="md" style={{padding: "20px"}}>
            <a
              className="href-links"
              href="https://docs.google.com/document/d/1CdX1Qr8EKW16Y7FmVG9AFbVxzf1_l5HV/edit?usp=sharing&ouid=115667110176725207034&rtpof=true&sd=true"
              download
              target="_blank"
              rel="noreferrer noopener"
            >
              Click Here to Download Resume
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
