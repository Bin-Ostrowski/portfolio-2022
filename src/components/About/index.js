import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import portrait from "../../assets/img/portrait.jpg";

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
  "MERN",
  "MEAN",
  "HTML",
  "Mongoose",
  "NPM",
  "GitHub",
  "GitBash",
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

export default function About() {
  return (
    <section>
      <Container>
        <Row className="section-title">
          <Col>
            <h1 id="about">About Me</h1>
          </Col>
        </Row>
        <Row>
          <Col className="md">
            <p>
              Full-stack web developer leveraging knowledge in creating
              intuitive and concise web applications focused on the user’s
              engagement. Known for resourceful problem solving with dedication
              to creating dry, scalable applications. Thrives in the
              ever-changing industry while supporting a quality-driven team in
              pursuit of building maintainable web applications everyone enjoys
              using.{" "}
            </p>
            
        <Row>
          <Col style={{ padding: "30px" }}>
            <h3>Skills & Technologies:</h3>
            <ul className="skills-container">
              {sortedSkills.map((skill, i) => (
                <li className="skills" key={i}>
                  {skill}
                </li>
              ))}
            </ul>
          </Col>
        </Row>
          </Col>
          <Col>
            <img src={portrait} style={{ width: "50" }} alt="portrait" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
