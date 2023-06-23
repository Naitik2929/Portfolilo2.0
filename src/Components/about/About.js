import React from "react";
import "../about/about.css";
import { FaAward } from "react-icons/fa";
import { ImFolderOpen } from "react-icons/im";
import { BsMusicNoteBeamed } from "react-icons/bs";
const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Active Learner</h5>
              {/* <small></small> */}
            </article>

            <article className="about__card">
              <BsMusicNoteBeamed className="about__icon" />
              <h5>Music Lover</h5>
              {/* <small></small> */}
            </article>

            <article className="about__card">
              <ImFolderOpen className="about__icon" />
              <h5>5+</h5>
              <small>Projects</small>
            </article>
          </div>
          <a
            href="#contact"
            style={{ marginTop: "3rem" }}
            className="btn btn-primary"
          >
            Let's talk
          </a>
        </div>
        <div className="about__bio">
          {/* Already name given */}
          <p>
            Hello, and welcome to my portfolio! , I am currently in my 3rd year
            of computer engineering. I am a passionate web developer with a
            knack for managing both the backend and frontend.
          </p>
          <br />
          <p>
            Currently, I am engaged in my SSIP project, "Triphobo," where I am
            applying my web development skills and expanding my knowledge in the
            MERN stack. Additionally, I have recently embarked on a journey to
            learn data analysis and cloud computing to broaden my skill set even
            further.
          </p>
          <br />
          <p>
            When I'm not immersed in coding, I find joy in pursuing my musical
            interests. I play the piano and am currently learning guitar. My
            ultimate dream is to master Metallica's music and shred some epic
            riffs on the electric guitar. Rock on!
          </p>
          <br />
          <p>
            In my downtime, I also indulge in gaming. If you think you're up for
            a challenge, let's go head-to-head in a 1v1 match in PUBG! I believe
            gaming not only serves as a source of entertainment but also
            sharpens my strategic thinking and problem-solving abilities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
