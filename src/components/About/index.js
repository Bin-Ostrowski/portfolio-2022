import React from 'react';
import portrait from "../../assets/img/portrait.jpg";

export default function About() {
    return (
      <section>
        <h1 id="about">About Me</h1>
        <p>Full-stack web developer leveraging knowledge in creating intuitive and 
            concise web applications focused on the user’s engagement. Known for
             resourceful problem solving with dedication to creating dry, scalable
              applications. Thrives in the ever-changing industry while supporting 
              a quality-driven team in pursuit of building maintainable web 
              applications everyone enjoys using.  </p>
        <img src={ portrait } style ={{ width: "50" }} alt="portrait" />
      </section>
    );
  };
