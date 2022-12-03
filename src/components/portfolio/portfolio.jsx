import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/image1.png";
import IMG2 from "../../assets/IMG2.png";
import IMG3 from "../../assets/IMG3.png"

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Application",
    github: "https://github.com/lursmana/redBerry-Test/tree/Prod",
    demo: "https://angry-pike-619737.netlify.app/applicationForm",
  },
  {
    id: 2,
    image: IMG2,
    title: "CryptoApp",
    github: "https://github.com/lursmana/crypto-app",
    demo: "https://eclectic-mochi-3e6c4e.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Travel Advisor",
    github: "https://github.com/lursmana/Second-React-project",
    demo: "https://prismatic-dolphin-23021a.netlify.app/",
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
