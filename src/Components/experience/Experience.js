import React from "react";
import "../experience/experience.css";
import { FaNodeJs } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
const Experience = () => {
  return (
    <section id="Experience">
      <h5>What Skills I Have</h5>
      <h2>Experience</h2>
      {/* put images of skills */}
      <div className="container skill_container">
        <div className="about__bio">
          {/* Already name given */}
          <p>
            I have expertise in back-end development, specializing in Node.js
            for server-side programming. I am proficient in creating robust and
            scalable web applications using frameworks like Express for Node.js
            and leveraging my knowledge of RESTful API design principles. I am
            skilled in working with databases such as MongoDB, MySQL, or
            PostgreSQL. Additionally, I have experience in front-end development
            using HTML, CSS, and JavaScript, with familiarity in frameworks like
            React. I am also familiar with Django and PHP as I have created
            projects in both technologies. Version control using Git and
            collaboration on platforms like GitHub are also part of my skill
            set.
          </p>
          <br />
          <p>
            Moreover, I have a strong interest in the MERN stack, which stands
            for MongoDB, Express, React, and Node.js. I have extensive knowledge
            and experience with Node.js, and I am eager to further develop my
            skills in this technology stack. I am excited about the opportunity
            to leverage the MERN stack's capabilities for building modern and
            dynamic web applications. I am enthusiastic about exploring its
            potential for creating efficient and responsive web solutions.
          </p>
        </div>
        <div className="skill_content">
          <div className="skill_cards">
            <article className="skill_card">
              <FaNodeJs className="skill__icon" style={{ color: "#539e43" }} />
              {/* <small>Projects</small> */}
            </article>
            <article className="skill_card">
              <SiJavascript
                className="skill__icon"
                style={{ color: "#f7e018" }}
              />
            </article>
            <article className="skill_card">
              <SiMongodb className="skill__icon" style={{ color: "#00ed64" }} />
            </article>
            <article className="skill_card">
              <SiReact className="skill__icon" style={{ color: "#61dbfb" }} />
            </article>
            <article className="skill_card">
              <SiHtml5 className="skill__icon" style={{ color: "#ff5722" }} />
            </article>
            <article className="skill_card">
              <TbBrandCpp className="skill__icon" />
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
