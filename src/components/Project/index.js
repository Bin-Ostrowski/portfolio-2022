import React, { useState } from "react";
import { Container, Row, Col, Button} from "react-bootstrap";
import dose from "../../assets/img/dose.png";
import rhythmInRegion from "../../assets/img/rhythm-in-region.jpeg";
import photoPort from "../../assets/img/photoPort.jpg";
import pizzaHunt from "../../assets/img/pizzaHunt.jpg";
import googleBooks from "../../assets/img/google-books.PNG";
import noteTaker from "../../assets/img/noteTaker.jpg";
import deepThoughts from "../../assets/img/deep-thoughts.PNG";
import choreItUp from "../../assets/img/chore-it-up.PNG";

export default function Project() {
  const gitHubIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="black"
      class="bi bi-github"
      viewBox="0 0 16 16"
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
  const projects = [
    {
      name: "Chore It Up",
      deploy: "https://floating-atoll-58183.herokuapp.com/",
      tools: [
        "MERN",
        "All",
        "React",
        "Full Stack",
        "Apollo",
        "GraphQL",
        "JavaScript",
        "CSS",
        "Chakra-UI",
      ],
      github: "https://github.com/Bin-Ostrowski/chore-it-up",
      bio: "Single-page MERN app allowing users within the same group to keep track of chores",
      image: choreItUp,
      alt: "screenshot of chore it up project",
    },
    {
      name: "Google Books",
      deploy: "https://immense-citadel-75341.herokuapp.com/",
      tools: ["MERN", "Full Stack", "Apollo", "GraphQL", "All"],
      github: "https://github.com/Bin-Ostrowski/google-books",
      bio: "Refactored code to set up an Apollo Server to use GraphQL queries and mutations to fetch and modify data, replacing the existing RESTful API.",
      image: googleBooks,
      alt: "screenshot of google books project",
    },
    {
      name: "Deep Thoughts",
      deploy: "https://still-brushlands-78409.herokuapp.com/",
      tools: [
        "MERN",
        "Full Stack",
        "Apollo",
        "GraphQL",
        "JavaScript",
        "CSS",
        "All",
      ],
      github: "https://github.com/Bin-Ostrowski/deep-thoughts",
      bio: "A blog for users to login, store thoughts, reactions, and friends. Deep Thoughts is a full-stack MERN app with an Apollo server using GraphQL.",
      image: deepThoughts,
      alt: "screenshot of deep thoughts project",
    },
    {
      name: "Dose",
      deploy: "https://cryptic-inlet-45736.herokuapp.com/",
      tools: [
        "BCRYPT",
        "FULL-STACK",
        "SEQUELIZE",
        "DOTENV",
        "EXPRESS",
        "HANDLEBARS",
        "SESSION",
        "JEST",
        "MYSQL2",
        "CRON-JOB",
        "TWILIO",
        "REGEX",
        "JS",
        "CSS",
        "BOOTSTRAP",
        "All",
      ],
      github: "https://github.com/kfisch2/dose",
      bio: "A full-stack application to track perscriptions and receive reminders via text message for refils.",
      image: dose,
      alt: "screenshot of dose project",
    },
    {
      name: "Photo Port",
      deploy: "https://bin-ostrowski.github.io/photo-port/",
      tools: ["Front End", "JavaScript", "CSS", "React", "All"],
      github: "https://github.com/Bin-Ostrowski/photo-port/settings/pages",
      bio: "Lyza's Photography Portfolio",
      image: photoPort,
      alt: "screenshot of photo port project",
    },
    {
      name: "Pizza Hunt",
      deploy: "https://salty-citadel-62296.herokuapp.com/",
      tools: ["MEAN", "Full Stack", "Restful-API", "All"],
      github: "https://github.com/Bin-Ostrowski/pizza-hunt",
      bio: "A blog forum for pizza lovers.",
      image: pizzaHunt,
      alt: "screenshot of pizza hunt project",
    },
  //   // {
  //   //   name: "Note Taker",
  //   //   deploy: "https://infinite-sands-67369.herokuapp.com/",
  //   //   tools: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  //   //   github: "https://github.com/Bin-Ostrowski/note-taker",
  //   //   bio: "An app to write and store notes.",
  //   //   image: noteTaker,
  //   //   alt: "screenshot of note taker project",
  //   // },
  //   // {
  //   //   name: "Rhythm in Region",
  //   //   deploy: "https://bin-ostrowski.github.io/rhythm-in-region/",
  //   //   tools: "APIs JS MATERIALIZE CSS HTML",
  //   //   github: "https://github.com/Bin-Ostrowski/rhythm-in-region",
  //   //   bio: "Discover local concerts and artists in prefered genre.",
  //   //   image: rhythmInRegion,
  //   //   alt: "screenshot of rhythm in region project",
  //   // },
  ];

  // array of filter options
  const filterBtn = ["All", "Full Stack", "Front End", "MERN", "MEAN"];

  // declare project state
  const [currentProject, setProject] = useState(projects);

  // set constant state
  const [allProjects, setFilterState] = useState(projects);

  const filterHandler = (filterBtn) => {
    // filter though nested tools array within each project object
    function filterArray(array, filters) {
      const filterKeys = Object.keys(filters);
      return array.filter((item) => {
        // validates all filter criteria
        return filterKeys.every((key) => {
          // ignores non-function predicates
          if (typeof filters[key] !== "function") return true;
          return filters[key](item[key]);
        });
      });
    }

    // define tools array to filter
    const filters = {
      tools: (tools) => {
        if (tools.includes(filterBtn)) return true; // case sensitive
      },
    };

    // filtered results
    const result = filterArray(allProjects, filters);

    // set currentProject with filtered results
    setProject(result);
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          {filterBtn.map((filterBtn, i) => (
            <Button
              key={filterBtn}
              id="full-stack"
              variant="light"
              onClick={() => filterHandler(filterBtn)}
              className="filter-btn"
            >
              {filterBtn}
            </Button>
          ))}
        </Col>
      </Row>
      <Row className="cards-row">
        {currentProject.map((projects, i) => (
          <div className="project-cards " style={{ width: "23rem" }} key={i}>
            <img variant="top" className="project-img" src={projects.image} />
            <div className={"card-background d-flex flex-column"}>
              <h2>{projects.name}</h2>
              <p>{projects.bio}</p>
              <Row className="mt-auto">
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
                   {gitHubIcon}
                  </a>
                </Button>
              </Row>
            </div>
          </div>
        ))}
      </Row>
    </Container>
  );
}
