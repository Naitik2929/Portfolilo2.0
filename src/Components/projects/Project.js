import React from "react";
import startapp from "../../assets/project_video/startapp.webm";
import paybuddy from "../../assets/project_video/paybuddy.webm";
import portfolio from "../../assets/project_video/portfolio.webm";
import medigo from "../../assets/project_video/medigo.webm";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./project.css";

const Project = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false, delay: 7000 }, [
    Autoplay(),
  ]);

  const projects = [
    {
      title: "StartApp: Crowdfunding Platform",
      description:
        "StartApp is a crowdfunding platform where emerging entrepreneurs can create campaigns and receive funding from investors. Join the funding frenzy today!",
      link: "https://github.com/Naitik2929/Startapp-Funding-Platform",
      videoSrc: startapp,
    },
    {
      title: "PayBuddy: Money Manager",
      description:
        "PayBuddy is a simple money management system that works like magic. Say goodbye to financial woes!",
      link: "https://github.com/Naitik2929/PayBuddy_vns",
      videoSrc: paybuddy,
    },
    {
      title: "Medigo: Book Appointment",
      description:
        "Medigo lets you make doctor appointments and connect with patients with a sprinkle of email magic. Experience the doctor hocus pocus!",
      link: "https://github.com/Naitik2929/duhacks2",
      videoSrc: medigo,
    },
    {
      title: "Portfolio: Showcasing My Work",
      link: "https://github.com/Naitik2929/Portfolio",
      // description:
      //   "Portfolio is not just a showcase, it's an awesome show of my skills and creativity. Prepare to be amazed!",
      videoSrc: portfolio,
    },
  ];

  return (
    <section id="project">
      <h5>What I Made</h5>
      <h2>Projects</h2>
      <div className="embla" ref={emblaRef}>
        <div className="container embla__container">
          {projects.map((project, index) => (
            <div className="embla__slide" key={index}>
              <h3 className="project_name">{project.title}</h3>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <video
                  className="embla__slide"
                  autoPlay={true}
                  loop={true}
                  muted={true}
                >
                  <source src={project.videoSrc} type="video/mp4" />
                </video>
              </a>
              {/* <p>{project.description}</p> */}
            </div>
          ))}
        </div>
      </div>
      <div className="git_btn">
        <a
          href="https://github.com/Naitik2929"
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit on Github
        </a>
      </div>
    </section>
  );
};

export default Project;
