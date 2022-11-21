import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import { Button, Form, Container, Row, Col } from "react-bootstrap";

export default function ContactForm() {
  //declare formState to be empty strings
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  //deconstruct formState
  const { name, email, message } = formState;

  //declare error message for validator to an empty string
  const [errorMessage, setErrorMessage] = useState("");

  //form input handler
  function handleChange(e) {
    //validate email, name and message
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);

      //isvalid conditional statement
      if (!isValid) {
        setErrorMessage("Please enter a valid email.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required`);
      } else {
        setErrorMessage("");
      }
    }

    //conditional statment for error message
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  return (
    <section>
      <Container>
        <Row className="section-title">
          <Col>
            <h1 id="about">Contact Me</h1>
          </Col>
        </Row>
        <Row>
          <Col className="contact-text">
            <p>
              Any questions?
              <br />
              <br />
              Let's connect and see how I can be of service to you!
              <br />
              <br />
              It would be a pleasure to get to know you and answer any questions
              or concerns.
            </p>
            <br />

            <h3>
              <a
                className="href-links"
                href="https://docs.google.com/document/d/1CdX1Qr8EKW16Y7FmVG9AFbVxzf1_l5HV/edit?usp=sharing&ouid=115667110176725207034&rtpof=true&sd=true"
                download
                target="_blank"
                rel="noreferrer noopener"
              >
                Also, have a look at my resume.
              </a>
            </h3>

            <p>
              Email:{" "}
              <a className="href-links" href="mailto:bin.ostrowski@gmail.com">
                bin.ostrowski@gmail.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a className="href-links" href="tel:+12314090693">
                (231) 409-0693
              </a>
            </p>
          </Col>
          <Col className="md form">
            <Form
              action="https://formsubmit.co/bin.ostrowski@gmail.com"
              method="POST"
              target="_blank"
              className="form"
            >
              <Form.Group className="mb-3">
                <Form.Label htmlFor="name">Name:</Form.Label>
                <Form.Control
                  placeholder="Enter Name"
                  type="text"
                  defaultValue={name}
                  onChange={handleChange}
                  name="name"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="email">Email Address:</Form.Label>
                <Form.Control
                  type="email"
                  defaultValue={email}
                  onChange={handleChange}
                  name="email"
                  required
                  placeholder="Enter Email"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="message">Message:</Form.Label>
                <Form.Control
                  name="message"
                  defaultValue={message}
                  onChange={handleChange}
                  rows="5"
                  type="message"
                  placeholder="Enter Message"
                  required
                />
              </Form.Group>

              {/* conditional render error message (short circuit for if statment) */}
              {errorMessage && (
                <div>
                  <p className="error-text">{errorMessage}</p>
                </div>
              )}
              <div className="d-grid gap-2">
                <Button type="submit" variant="light">
                  Send
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
