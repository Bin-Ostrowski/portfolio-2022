import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import linkedIn from "../../assets/img/linkedIn.png";
import gitHub from "../../assets/img/GitHub-Dark.png";
import stackOverflow from "../../assets/img/stackoverflow.png";

export default function Nav() {
  const icons = [
    {
      href: "https://linkedin.com/in/robinostrowski",
      img: linkedIn,
      alt: "linkedIn Icon",
    },
    {
      href: "https://github.com/Bin-Ostrowski",
      img: gitHub,
      alt: "GitHub Icon",
    },
    {
      href: "https://stackoverflow.com/users/20006902/bin-ostrowski",
      img: stackOverflow,
      alt: "stack overflow Icon",
    },
  ];

  //declare icon state
  const [currentIcon, setIcon] = useState(icons);

  return (
    <footer>
      <Container>
        <Row className="justify-content-sm-center">
          <Col xs="auto">
            <h2>Let's connect!</h2>
          </Col>
        </Row>

        <Row className="justify-content-sm-center">
          <Col xs="auto">
            {currentIcon.map((icons, i) => (
              <a
                href={icons.href}
                key={i}
                target="_blank"
                rel="noreferrer noopener"
                className="flex-wrap"
              >
                <img src={icons.img} style={{ width: "30" }} alt={icons.alt} />
              </a>
            ))}
          </Col>
        </Row>
        <Row className="justify-content-sm-center">
          <Col xs="auto">
            <div>&copy;2022 by Robin Ostrowski</div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
