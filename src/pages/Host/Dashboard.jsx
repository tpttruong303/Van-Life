import { Outlet } from "react-router-dom"

function Dashboard() {
     return (
          <div>
               <h1>Host Dashboard</h1>
               <Outlet/>
          </div>
     )
}

export default Dashboard 