const AboutSection = () => {
  return (
    <section id="about" className="about">
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
              perfect blend of creativity and technicality that intrigued me the
              most.
            </p>

            <p>
              As a <strong>front-end developer</strong> and{" "}
              <strong>UI designer</strong>, I bridge the realms of{" "}
              <strong>code</strong> and <strong>creativity</strong> to craft
              seamless digital experiences. While I may not fit the traditional
              mold of a designer confined to an Illustrator artboard, my passion
              lies in the intricate dance of stylesheets, meticulously adjusting
              font sizes and pondering layouts to ensure every pixel serves a
              purpose. I'm committed to creating fluent user experiences while
              staying fashion able, blending innovation with usability to craft
              designs that are both
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
        <a
          href="/resume-romano-matteo.pdf"
          download="resume-romano-matteo"
          className="cv-button"
        >
          Download CV
        </a>
      </div>
    </section>
  );
};

export default AboutSection;
