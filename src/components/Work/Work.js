import React, { useState } from "react";
import "./Work.css";
import { WORK } from "../../Util/data";
import { Front } from "../../Util/data";
import Button from "../Button/Button";

const Work = () => {
  const [work, setWork] = useState(WORK);
  const [active, isActive] =useState(true);

  return (
    <section id="work">
      <h1>Work</h1>
      <div className="choice">
        <Button condition={`${active ? "btn-act" : "btn-inact"}`} handleClick={() => {setWork(WORK); isActive(true)}} props={"Devops"} />
        <Button condition={`${active ? "btn-inact" : "btn-act"}`} handleClick={() => {setWork(Front); isActive(false)}} props={"Frontend"} />
      </div>

      <div className="work-grid">
        {work.map((project) => (
          <div>
            <h2>{project.title}</h2>
            <p id="desc1">{project.description}</p>
            <p id="desc2">{project.description2}</p>
            <div>
              <a
                href={project.ghlink}
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fab fa-lg fa-github"></i>
              </a>
              <a
                href={project.extlink}
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fas fa-lg fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
