import React from "react";
import Project from "../Project";

export default function Portfolio({currentProject}) {

  return (
    <section>
      <h1 id="portfolio">Portfolio</h1>
      <Project currentProject={currentProject}></Project>
    </section>
  );
}
