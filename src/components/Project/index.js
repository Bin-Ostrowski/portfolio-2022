import React, { useState } from "react";
import { Container, Row, Button, Card } from "react-bootstrap";
import dose from "../../assets/img/dose.png";
import rhythmInRegion from "../../assets/img/rhythm-in-region.jpeg";
import gitHubIcon from "../../assets/img/GitHub-Dark.png";
import photoPort from "../../assets/img/photoPort.jpg";
import pizzaHunt from "../../assets/img/pizzaHunt.jpg";
import googleBooks from "../../assets/img/google-books.PNG";
import noteTaker from "../../assets/img/noteTaker.jpg";
import deepThoughts from "../../assets/img/deep-thoughts.PNG";

export default function Project() {
  const projects = [
    {
      name: "Google Books",
      deploy: "https://immense-citadel-75341.herokuapp.com/",
      tools: "MERN Apollo GraphQL",
      github: "https://github.com/Bin-Ostrowski/google-books",
      bio: "Refactored code to set up an Apollo Server to use GraphQL queries and mutations to fetch and modify data, replacing the existing RESTful API.",
      image: googleBooks,
      alt: "screenshot of google books project",
    },
    {
      name: "Dose",
      deploy: "https://cryptic-inlet-45736.herokuapp.com/",
      tools:
        "BCRYPT SEQUELIZE DOTENV EXPRESS HANDLEBARS SESSION JEST MYSQL2 CRON-JOB TWILIO REGEX JS CSS BOOTSTRAP",
      github: "https://github.com/kfisch2/dose",
      bio: "A full-stack application to track perscriptions and receive reminders via text message for refils.",
      image: dose,
      alt: "screenshot of dose project",
    },
    {
      name: "Rhythm in Region",
      deploy: "https://bin-ostrowski.github.io/rhythm-in-region/",
      tools: "APIs JS MATERIALIZE CSS HTML",
      github: "https://github.com/Bin-Ostrowski/rhythm-in-region",
      bio: "Discover local concerts and artists in prefered genre.",
      image: rhythmInRegion,
      alt: "screenshot of rhythm in region project",
    },
    {
      name: "Photo Port",
      deploy: "https://bin-ostrowski.github.io/photo-port/",
      tools: "React.js etc...",
      github: "https://github.com/Bin-Ostrowski/photo-port/settings/pages",
      bio: "Lyza's Photography Portfolio",
      image: photoPort,
      alt: "screenshot of photo port project",
    },
    {
      name: "Pizza Hunt",
      deploy: "https://salty-citadel-62296.herokuapp.com/",
      tools: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      github: "https://github.com/Bin-Ostrowski/pizza-hunt",
      bio: "A blog forum for pizza lovers.",
      image: pizzaHunt,
      alt: "screenshot of pizza hunt project",
    },
    {
      name: "Deep Thoughts",
      deploy: "https://still-brushlands-78409.herokuapp.com/",
      tools: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      github: "https://github.com/Bin-Ostrowski/deep-thoughts",
      bio: "A blog for users to login, store thoughts, reactions, and friends. Deep Thoughts is a full-stack MERN app with an Apollo server using GraphQL.",
      image: deepThoughts,
      alt: "screenshot of deep thoughts project",
    },
    {
      name: "Note Taker",
      deploy: "https://infinite-sands-67369.herokuapp.com/",
      tools: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      github: "https://github.com/Bin-Ostrowski/note-taker",
      bio: "An app to write and store notes.",
      image: noteTaker,
      alt: "screenshot of note taker project",
    },
  ];

  // declare project state
  const [currentProject, setProject] = useState(projects);

  return (
    <Container className="flex-row">
      {currentProject.map((projects, i) => (
        <Card className="project-cards " style={{ width: "23rem" }} key={i}>
          <Card.Img
            variant="top"
            className="project-img"
            src={projects.image}
          />
          <Card.Body className={"card-background d-flex flex-column"}>
            <Card.Title>{projects.name}</Card.Title>
            <Card.Text>{projects.bio}</Card.Text>
            <Row  className="mt-auto">
              <Button type="submit" variant="light">
                <a
                  className="deploy-btn"
                  href={projects.deploy}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Deploy Project
                </a>
              </Button>
            </Row>
            <Row className="project-github-btn">
              <Button type="submit" variant="light">
                <a
                  href={projects.github}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img src={gitHubIcon} alt="github icon" />
                </a>
              </Button>
            </Row>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}
