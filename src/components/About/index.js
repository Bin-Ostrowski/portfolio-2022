import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import portrait from "../../assets/img/portrait.jpg";

export default function About() {
    return (
      <section>
        <Container>
          <Row className="section-title">
            <Col  >
            <h1 id="about">About Me</h1>
            </Col>
          </Row>
          <Row>
            <Col className='md'>
            <p>Full-stack web developer leveraging knowledge in creating intuitive and 
            concise web applications focused on the user’s engagement. Known for
             resourceful problem solving with dedication to creating dry, scalable
              applications. Thrives in the ever-changing industry while supporting 
              a quality-driven team in pursuit of building maintainable web 
              applications everyone enjoys using.  </p>
            </Col>
            <Col>
            <img src={ portrait } style ={{ width: "50" }} alt="portrait" />
            </Col>
          </Row>
        </Container>
      </section>
    );
  };
