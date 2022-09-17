import React, { useState } from "react";

export default function ContactForm() {

  //initate formState to be empty strings
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  //deconstruct formState
  const { name, email, message } = formState;

  //form input handler
  function handleChange(e) {
    //update setFormState
    //make property name dynamic variable determined by form element.
    //from input value
    setFormState({ ...formState, [e.target.name]: e.target.value });
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
            onChange={handleChange}
            name="name"
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            defaultValue={email}
            onChange={handleChange}
            name="email"
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            defaultValue={message}
            onChange={handleChange}
            rows="5"
          />
          <button type="submit">Send</button>
        </div>
      </form>
    </section>
  );
}
