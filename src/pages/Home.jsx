import { Link } from "react-router-dom"

function Home() {
     return (
          <main className="main-home">
               <div className="main-content">
                    <h2>
                         You got the travel plans, we got the travel vans.
                    </h2>
                    <p>
                         Add adventure to your life by joining the #vanlife movement. 
                         Rent the perfect van to make your perfect road trip.
                    </p>
                    <Link className="find-vans" to='/vans'>Find your van</Link>
               </div>
          </main>
     )
}

export default Home