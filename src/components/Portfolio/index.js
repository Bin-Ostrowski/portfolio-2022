import React from "react";
import Project from "../Project";
import { Container, Row, Col } from "react-bootstrap";

export default function Portfolio({ currentProject }) {
  return (
    <section>
      <Container>
        <Row className="section-title">
          <Col>
            <h1 id="portfolio">Portfolio</h1>
          </Col>
        </Row>
        <Row>
          <Col className="md">
            <Project currentProject={currentProject}></Project>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
