import { Link } from "react-router-dom"
import banner from "../assets/banner_aboutpage.png"

function About() {
     return (
          <main className="main-about">
               <img src={banner}/>
               <div className="main-content">
                    <h2 className="title">
                         Don’t squeeze in a sedan when you could relax in a van.
                    </h2>
                    <p className="description">
                         Our mission is to enliven your road trip with the perfect travel van rental. 
                         Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                         (Hitch costs extra 😉)
                    </p>
                    <p className="description">
                         Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
                    </p>
                    <div className="about-vans">
                         <div className="title-container">
                              <h2>Your destination is waiting.</h2>
                              <h2>Your van is ready.</h2>
                         </div>
                         <Link to="/vans">Explore our vans</Link>
                    </div>
               </div>
          </main>
     )
}

export default About