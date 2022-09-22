import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import "./contact.css";

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
    //update setFormState
    //make property name dynamic variable determined by form element.
    //from input value
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  //submit form handler
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <section>
      <h1>Contact Me</h1>
      <Form
        action="https://formsubmit.co/bin.ostrowski@gmail.com"
        method="POST"
        target="_blank"
      >
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label htmlFor="name">Name:</Form.Label>
          <Form.Control
            placeholder="Enter Name"
            type="text"
            defaultValue={name}
            onChange={handleChange}
            name="name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label htmlFor="email">Email address:</Form.Label>
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
        <Form.Group className="mb-3" controlId="formBasicMessage">
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
    </section>
  );
}
