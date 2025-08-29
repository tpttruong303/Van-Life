import { Outlet, Link } from "react-router-dom"


function HostLayout() {
     return (
          <div className="host-layout">
               <nav>
                    <Link to="/host">Dashboard</Link>
                    <Link to="/host/income">Income</Link>
                    <Link to="/host/vans">Vans</Link>
                    <Link to="/host/review">Reviews</Link>
               </nav>
               <Outlet />
          </div>
     )
}

export default HostLayout