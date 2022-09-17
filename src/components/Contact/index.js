import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

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
      console.log(isValid);

      //isvalid conditional statement
      if (!isValid) {
        setErrorMessage("Please enter a valid email.");
      } else {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required.`);
        } else {
          setErrorMessage("");
        }
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
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            defaultValue={name}
            onBlur={handleChange}
            name="name"
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            defaultValue={email}
            onBlur={handleChange}
            name="email"
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            defaultValue={message}
            onBlur={handleChange}
            rows="5"
          />
          {/* conditional render error message (short circuit for if statment) */}
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <button type="submit">Send</button>
        </div>
      </form>
    </section>
  );
}
