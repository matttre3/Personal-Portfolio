const ProjectSection = () => {
  return (
    <section className="projects">
      <div className="container">
        <div className="titleContainer checkpoint" data-ref="2">
          <svg
            height="120"
            stroke="#212427"
            stroke-width="2"
            className="text-line dash-animate-me"
            width="100%"
          >
            <text
              x="50%"
              dominant-baseline="middle"
              text-anchor="middle"
              y="50%"
            >
              PROJECTS
            </text>
          </svg>
          <h2>PROJECTS</h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec
          justo eu orci tempus euismod.{" "}
        </p>
        <div className="project-container">
          <div className="project-card portfolio">
            <img src="/PORTFOLIO-CARD.png" alt="" />
            <a
              href="https://github.com/matttre3/Personal-Portfolio"
              target="_blank"
              className="card-button"
            >
              Discover more
            </a>
          </div>
          <div className="project-card sushe">
            <img src="/SUSHE-CARD.png" alt="" />
            <a
              href="https://github.com/matttre3/sushe-app"
              target="_blank"
              className="card-button"
            >
              Discover more
            </a>
          </div>
          <div className="project-card poke">
            <img src="/POKE-CARD.png" alt="" />
            <a
              href="https://github.com/matttre3/pocketdex-m3"
              target="_blank"
              className="card-button"
            >
              Discover more
            </a>
          </div>
          <div className="project-card jemib">
            <img src="/JEMIB-CARD.png" alt="" />
            <a className="card-button">Discover more</a>
          </div>
          <div className="project-card gaja">
            <img src="/GAJA-CARD.png" alt="" />
            <a
              href="https://www.behance.net/gallery/165243721/UI-Design-Web-development-for-Curlettogajait"
              target="_blank"
              className="card-button"
            >
              Discover more
            </a>
          </div>
          <div className="project-card">
            <img src="/POKE-CARD.png" alt="" />
            <a className="card-button">Discover more</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;