import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import dose from "../../assets/img/dose.png";
import rhythmInRegion from "../../assets/img/rhythm-in-region.jpeg";
import gitHubIcon from "../../assets/img/GitHub-Dark.png";
import photoPort from "../../assets/img/photoPort.jpg";
import pizzaHunt from "../../assets/img/pizzaHunt.jpg";
import techBlog from "../../assets/img/techBlog.jpg";
import noteTaker from "../../assets/img/noteTaker.jpg";

export default function Project() {
  const projects = [
    {
      name: "Dose",
      deploy: "https://cryptic-inlet-45736.herokuapp.com/",
      tools:
        "BCRYPT SEQUELIZE DOTENV EXPRESS HANDLEBARS SESSION JEST MYSQL2 CRON-JOB TWILIO REGEX JS CSS BOOTSTRAP",
      github: "https://github.com/kfisch2/dose",
      bio: "Dose is a full-stack application where a user can keep track of all their perscriptions in one place and receive reminders via text message for refils.",
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
      name: "Tech Blog",
      deploy: "https://murmuring-headland-96223.herokuapp.com/",
      tools: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      github: "https://github.com/Bin-Ostrowski/tech-blog",
      bio: "A general blog for tech junkies.",
      image: techBlog,
      alt: "screenshot of tech blog project",
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
    <Container id="cards" className="flex-row">
      {currentProject.map((projects, i) => (
        <Stack gap={3}>
          <Card style={{ width: "18rem" }} key={i}>
            <Card.Img
              variant="top"
              src={projects.image}
              style={{ width: "30", height: "20" }}
            />
            <Card.Body className={"card-background"}>
              <Card.Title>{projects.name}</Card.Title>
              {/* <Card.Text>
        Tools Used: {projects.tools}
        </Card.Text> */}
              <Button type="submit" variant="light">
                <a className="deploy-btn"
                  href={projects.deploy}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Deploy Project
                </a>
              </Button>
              <Button type="submit" variant="light">
                <a
                  href={projects.github}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    src={gitHubIcon}
                    style={{ width: "30" }}
                    alt="github icon"
                  />
                </a>
              </Button>
            </Card.Body>
          </Card>
        </Stack>
      ))}
    </Container>
  );
}
