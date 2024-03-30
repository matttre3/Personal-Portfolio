import Typewriting from "./components/Typewriting";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const menuBoxes = Array.from(document.getElementsByClassName("box"));
    const checkpoints = Array.from(
      document.getElementsByClassName("checkpoint")
    );

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const dataRef = entry.target.getAttribute("data-ref");

        if (entry.isIntersecting) {
          menuBoxes.forEach((box) => {
            const boxDataRef = box.getAttribute("data-ref");
            if (boxDataRef === dataRef) {
              box.classList.add("active");
            } else {
              box.classList.remove("active");
            }
          });
        }
      });
    });

    checkpoints.forEach((checkpoint) => {
      sectionObserver.observe(checkpoint);
    });
  }, []);

  useEffect(() => {
    const elementsToAnimate =
      document.getElementsByClassName("dash-animate-me");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("dash-animation");
          observer.unobserve(entry.target);
        }
      });
    });

    for (let i = 0; i < elementsToAnimate.length; i++) {
      observer.observe(elementsToAnimate[i]);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="nav-boxes">
        <div className="box" data-ref="1"></div>
        <div className="box" data-ref="2"></div>
        <div className="box" data-ref="3"></div>
        <div className="box" data-ref="4"></div>
      </div>

      <section className="hero">
        <div className="container">
          <div className="heading checkpoint" data-ref="1">
            <h1>
              Hi👋, I'm
              <span className="firstName"> Matteo </span>
              and
              <br />
              I'm a
              <span className="typewriter">
                {" "}
                <Typewriting />
              </span>
            </h1>
          </div>
        </div>
      </section>

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

      <section className="about">
        <div className="container">
          <div className="titleContainer checkpoint" data-ref="3">
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
                ABOUT
              </text>
            </svg>
            <h2>ABOUT</h2>
          </div>
          <div className="info">
            <div className="text">
              <h3>Get to know me!</h3>
              <p>
                I'm Matteo, 25 years young, and my journey so far has been
                <strong> anything but ordinary</strong>.
              </p>

              <p>
                It all began with a passion for both{" "}
                <strong>graphic design</strong> and{" "}
                <strong>computer science.</strong> <br /> Despite exploring the
                captivating world of marketing during university, my heart
                remained steadfastly drawn to these two disciplines. It was the
                perfect blend of creativity and technicality that intrigued me
                the most.
              </p>

              <p>
                As a <strong>front-end developer</strong> and{" "}
                <strong>UI designer</strong>, I bridge the realms of{" "}
                <strong>code</strong> and <strong>creativity</strong> to craft
                seamless digital experiences. While I may not fit the
                traditional mold of a designer confined to an Illustrator
                artboard, my passion lies in the intricate dance of stylesheets,
                meticulously adjusting font sizes and pondering layouts to
                ensure every pixel serves a purpose. I'm committed to creating
                fluent user experiences while staying fashion able, blending
                innovation with usability to craft designs that are both
                <strong> functional</strong> and
                <strong> aesthetically compelling</strong>.
              </p>
            </div>

            <div className="tools">
              <div className="tools-logos">
                <img src="/html.png" alt="html logo" />
                <img src="/css.png" alt="css logo" />
                <img src="/js.png" alt="js logo" />
                <img src="/git.png" alt="git logo" />
                <img src="/ts.png" alt="ts logo" />
                <img src="/react.png" alt="react logo" />

                <img src="/bootstrap.png" alt="bootstrap logo" />
                <img src="/tailwind.png" alt="tailwind logo" />
                <img src="/sass.png" alt="sass logo" />
                <img src="/npm.png" alt="npn logo" />
                <img src="/postgres.png" alt="postgresql logo" />
                <img src="/node.png" alt="node logo" />
                <img src="/wordpress.png" alt="wordpress logo" />

                <img src="/figma.png" alt="figma logo" />
                <img src="/xd.png" alt="xd logo" />
                <img src="/ps.png" alt="photoshop logo" />
                <img src="/ae.png" alt="ae logo" />
                <img src="/premier.png" alt="premiere logo" />
              </div>
            </div>
          </div>
          <a href="" className="cv-button">
            Download CV
          </a>
        </div>
      </section>

      <section className="projects">
        <div className="container">
          <div className="titleContainer checkpoint" data-ref="4">
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
                CONTACTS
              </text>
            </svg>
            <h2>CONTACTS</h2>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
