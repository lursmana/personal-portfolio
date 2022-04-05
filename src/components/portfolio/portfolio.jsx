import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/image1.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Application",
    github: "https://github.com/lursmana/redBerry-Test/tree/Prod",
    demo: "https://angry-pike-619737.netlify.app/applicationForm",
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
