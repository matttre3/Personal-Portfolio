
import Typewriting from "./components/Typewriting";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    const menuBoxes = document.getElementsByClassName('box')
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
      <section className="hero">

        <div className="nav-boxes">
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div>


        <div className="container">
          <div className="heading">
            <h1>Hi👋, i'm 
              <span className="firstName"> Matteo</span>
              <br />
              and im a 
              <span className='typewriter'> <Typewriting/></span> 
              </h1>
            
          </div>
          
        </div>
      </section>
      <section className="projects">
        <div className="container">
         <div className="titleContainer">
            <svg height="120" stroke='#212427' stroke-width="2" className="text-line dash-animate-me" width="100%"><text x="50%" dominant-baseline="middle" text-anchor="middle" y="50%">PROJECTS</text></svg>
            <h2>PROJECTS</h2>
         </div> 
        </div>
      </section>
      
    </>
  );
}

export default App;
