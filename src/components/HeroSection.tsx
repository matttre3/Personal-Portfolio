import Typewriting from "./Typewriting";

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
