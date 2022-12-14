import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import dose from "../../assets/img/dose.png";
import rhythmInRegion from "../../assets/img/rhythm-in-region.jpeg";
import photoPort from "../../assets/img/photoPort.PNG";
import pizzaHunt from "../../assets/img/pizzaHunt.jpg";
import googleBooks from "../../assets/img/google-books.PNG";
import noteTaker from "../../assets/img/noteTaker.jpg";
import deepThoughts from "../../assets/img/deep-thoughts.PNG";
import choreItUp from "../../assets/img/chore-it-up.PNG";

export default function Project() {
  const projects = [
    {
      name: "Chore It Up",
      deploy: "https://enigmatic-ravine-68527.herokuapp.com/",
      tools: [
        "MERN",

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
      tools: ["MERN", "Full Stack", "Apollo", "GraphQL", "JavaScript", "CSS"],
      github: "https://github.com/Bin-Ostrowski/google-books",
      bio: "Refactored code to set up an Apollo Server to use GraphQL queries and mutations to fetch and modify data, replacing the existing RESTful API.",
      image: googleBooks,
      alt: "screenshot of google books project",
    },
    {
      name: "Deep Thoughts",
      deploy: "https://still-brushlands-78409.herokuapp.com/",
      tools: ["MERN", "Full Stack", "Apollo", "GraphQL", "JavaScript", "CSS"],
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
        "Full Stack",
        "Sequelize",
        "DotENV",
        "Express",
        "Handlebars",
        "Session",
        "Jest",
        "MySQL2",
        "CRON-JOB",
        "Twilio",
        "Regex",
        "JavaScript",
        "CSS",
        "Bootstrap",
      ],
      github: "https://github.com/kfisch2/dose",
      bio: "A full-stack application to track perscriptions and receive reminders via text message for refils.",
      image: dose,
      alt: "screenshot of dose project",
    },
    {
      name: "Photo Port",
      deploy: "https://bin-ostrowski.github.io/photo-port/",
      tools: ["Front End", "JavaScript", "CSS", "React"],
      github: "https://github.com/Bin-Ostrowski/photo-port/settings/pages",
      bio: "Lyza's Photography Portfolio",
      image: photoPort,
      alt: "screenshot of photo port project",
    },
    {
      name: "Pizza Hunt",
      deploy: "https://salty-citadel-62296.herokuapp.com/",
      tools: ["MEAN", "Full Stack", "Restful-API", "JavaScript", "CSS"],
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
  const filterBtn = ["Full Stack", "Front End", "MERN", "MEAN"];

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

  // format tools array when returned
  const splitTools = (tools) => {
    const result = tools.join(" · ");
    return result;
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
      {currentProject.map((projects, i) => (
        <Row className="project-container" key={i}>
          <Col>
            <img
              className="project-img"
              src={projects.image}
              alt={projects.alt}
            />
          </Col>
          <Col className="project-description">
            <h2 className="project-title">{projects.name}</h2>
            <p>{projects.bio}</p>
            <h4 className="technologies">Technologies:</h4>
            <p>{splitTools(projects.tools)}</p>

            <Row className="justify-content-md-center">
              <Col>
                <a
                  className="deploy-btn"
                  href={projects.deploy}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Button type="submit" variant="light">
                    Deploy Project
                  </Button>
                </a>
                <a
                  href={projects.github}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Button type="submit" variant="light">
                    GitHub
                  </Button>
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      ))}
    </Container>
  );
}
