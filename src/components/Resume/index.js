import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const skills = [
  "React",
  "JavaScript",
  "CSS",
  "MongoDB",
  "Node.js",
  "Express.js",
  "MySQL",
  "jQuery",
  "Apollo",
  "GraphQL",
  "Mongoose",
  "React-Router-Dom",
  "JSON Web Token",
  "DotENV",
  "Chakra-UI",
  "BCRYPT",
  "Sequelize",
  "Handlebars",
  "Session",
  "Testing",
  "Jest",
  "Bootstrap",
  "Regex",
];

// sort skills alphabeticaly
const sortedSkills = skills.sort();

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
          <Col className="md" style={{ padding: "30px" }}>
            <h3>
              <a
              className="href-links"
              href="https://docs.google.com/document/d/1CdX1Qr8EKW16Y7FmVG9AFbVxzf1_l5HV/edit?usp=sharing&ouid=115667110176725207034&rtpof=true&sd=true"
              download
              target="_blank"
              rel="noreferrer noopener"
            >
              Click Here to Download Resume
            </a>
              </h3>
          </Col>
        </Row>
        <Row>
          <Col style={{ padding: "30px" }}>
            <h3>Skills & Technologies:</h3>
            <ul className="skills-container">
              
              {sortedSkills.map((skill, i) => (
                <li className="skills"key={i}>{skill}</li>
              ))}
              
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
