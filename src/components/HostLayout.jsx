import { Outlet, Link } from "react-router-dom"


function HostLayout() {
     return (
          <div className="host-layout">
               <nav>
                    <Link to=".">Dashboard</Link>
                    <Link to="income">Income</Link>
                    <Link to="vans">Vans</Link>
                    <Link to="review">Reviews</Link>
               </nav>
               <Outlet />
          </div>
     )
}

export default HostLayout