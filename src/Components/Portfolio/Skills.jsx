import React from "react";

import "../../styles/skills.scss";

import {
  ReactJs,
  Redux,
  Python,
  Sass,
  Javascript,
  Html5,
  CssThree,
  Nodedotjs,
  Express,
  Mysql,
  Mongodb,
  Flutter,
} from "@icons-pack/react-simple-icons";

function Skills() {
  return (
    <section className="skills-section">
      <div className="section-title">Skills</div>
      <div className="skills-content">
        <h3 className="skill-title">Frontend</h3>
        <div className="skills-infos">
          <div className="skill-group">
            <div className="skill">
              <Html5 color="#E34F26" size={50} />
            </div>
            <p className="skill-info">HTML</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <CssThree color="#1572B6" size={50} />
            </div>
            <p className="skill-info">CSS</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Javascript color="#F7DF1E" size={50} />
            </div>
            <p className="skill-info">JS</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <ReactJs color="#61DAFB" size={50} />
            </div>
            <p className="skill-info">React.js</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Redux color="#764ABC" size={50} />
            </div>
            <p className="skill-info">Redux</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Sass color="#CC6699" size={50} />
            </div>
            <p className="skill-info">SASS</p>
          </div>
        </div>
        <h3 className="skill-title">Backend</h3>
        <div className="skills-infos">
          <div className="skill-group">
            <div className="skill">
              <Nodedotjs color="#339933" size={50} />
            </div>
            <p className="skill-info">Node.js</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Express color="#000000" size={50} />
            </div>
            <p className="skill-info">Express</p>
          </div>
        </div>
        <h3 className="skill-title">Database</h3>
        <div className="skills-infos">
          <div className="skill-group">
            <div className="skill">
              <Python color="#276DC3" size={50} />
            </div>
            <p className="skill-info">Python</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Mysql color="#4479A1" size={50} />
            </div>
            <p className="skill-info">My-SQL</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Mongodb color="#47A248" size={50} />
            </div>
            <p className="skill-info">MongoDB</p>
          </div>
        </div>
        <h3 className="skill-title">Mobile</h3>
        <div className="skills-infos">
          <div className="skill-group">
          <div className="skill">
            <Flutter color="#276DC3" size={50} />
            </div>
            <p className="skill-info">Flutter</p>
          </div>
          <div className="skill-group">
            <div className="skill">
            <ReactJs color="#276DC3" size={50} />
            </div>
            <p className="skill-info">React Native</p>
          </div>
        </div>
      </div>
      <div className="section-title">Previous Projects </div>
    </section>
  );
}
export default Skills;