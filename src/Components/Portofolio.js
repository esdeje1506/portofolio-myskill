import React from "react";
import { Fade } from "react-awesome-reveal";
import Zoom_Img from "../Zoom-Img";

function Portofolio(prop) {
  if (!prop.data) return null;

  const projects = prop.data.portfolio.projects.map((projects, id) => {
    let projectImage = "images/portfolio/" + projects.image;

    return (
      <div key={id} className="columns portfolio-item">
        <div className="item-wrap">
          <Zoom_Img alt={projects.title} src={projectImage} />
          <div style={{ textAlign: "center" }}>{projects.title}</div>
        </div>
      </div>
    );
  });

  return (
    <section id="portfolio">
      <Fade left duration={1000} distance="40px">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check out some of my works</h1>
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {projects}
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}

export default Portofolio;
