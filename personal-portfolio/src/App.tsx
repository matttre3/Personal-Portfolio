
import Typewriting from "./components/Typewriting";
function App() {


  return (
    <>
      <section className="hero">
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
            <svg height="120" stroke='#212427' stroke-width="2" className="text-line" width="100%"><text x="50%" dominant-baseline="middle" text-anchor="middle" y="50%">PROJECTS</text></svg>
            <h2>PROJECTS</h2>
         </div> 
        </div>
      </section>
      
    </>
  );
}

export default App;
