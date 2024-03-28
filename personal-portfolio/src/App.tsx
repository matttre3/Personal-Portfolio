
import Typewriting from "./components/Typewriting";
import { useEffect } from "react";

function App() {


  useEffect(() => {

  const menuBoxes = Array.from(document.getElementsByClassName('box'));
  const checkpoints= Array.from(document.getElementsByClassName('checkpoint'));

  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const dataRef = entry.target.getAttribute('data-ref');
      
      if (entry.isIntersecting) {
        menuBoxes.forEach(box => {
          const boxDataRef = box.getAttribute('data-ref');
          if (boxDataRef === dataRef) {
            box.classList.add('active');
          } else {
            box.classList.remove('active'); 
          }
        });
      }
    })
  })

  checkpoints.forEach(checkpoint => {
    sectionObserver.observe(checkpoint);
  });
  
  },[])

  
  useEffect(() => {
    
    const elementsToAnimate = document.getElementsByClassName('dash-animate-me');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('dash-animation');
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
            <h1>Hi👋, I'm 
              <span className="firstName"> Matteo </span>
              and 
              <br />
              I'm a 
              <span className='typewriter'> <Typewriting/></span> 
              </h1>
          </div>
        </div>
      </section>

      <section className="projects">
        <div className="container">
         <div className="titleContainer checkpoint" data-ref="2">
            <svg height="120" stroke='#212427' stroke-width="2" className="text-line dash-animate-me" width="100%"><text x="50%" dominant-baseline="middle" text-anchor="middle" y="50%">PROJECTS</text></svg>
            <h2>PROJECTS</h2>
         </div> 
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec justo eu orci tempus euismod. </p>
            <div className="project-container">
              <div className="project-card">
                <img src="/src/assets/PORTFOLIO-CARD.png" alt="" />
              </div>
              <div className="project-card">
                <img src="/src/assets/sushe-CARD.png" alt="" />
              </div>
              <div className="project-card">
                <img src="/src/assets/pockeddex-CARD.png" alt="" />
              </div>
              <div className="project-card">
                <img src="/src/assets/JEMIB-CARD.png" alt="" />
              </div>
              <div className="project-card">
                <img src="/src/assets/GAJA-CARD.png" alt="" />
              </div>
              <div className="project-card">
                <img src="/src/assets/pockeddex-CARD.png" alt="" />
              </div>
            </div>
        </div>
      </section>

      <section className="projects">
        <div className="container">
         <div className="titleContainer checkpoint" data-ref="3">
            <svg height="120" stroke='#212427' stroke-width="2" className="text-line dash-animate-me" width="100%"><text x="50%" dominant-baseline="middle" text-anchor="middle" y="50%">ABOUT</text></svg>
            <h2>ABOUT</h2>
         </div> 
        </div>
      </section>

      <section className="projects">
        <div className="container">
         <div className="titleContainer checkpoint" data-ref="4">
            <svg height="120" stroke='#212427' stroke-width="2" className="text-line dash-animate-me" width="100%"><text x="50%" dominant-baseline="middle" text-anchor="middle" y="50%">CONTACTS</text></svg>
            <h2>CONTACTS</h2>
         </div> 
        </div>
      </section>
      
    </>
  );
}

export default App;
