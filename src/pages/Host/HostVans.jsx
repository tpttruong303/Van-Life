import { Link, useLoaderData } from "react-router-dom"

import { getHostVans } from "../../api"

export async function loader() {
     return await getHostVans()
}

function HostVans() {
     
     const vans = useLoaderData()

     const vanElements = vans.map(van => {
          return (
               <Link to={van.id} key={van.id}>
                    <div className="host-van-item" key={van.id}>
                         <img src={van.imageUrl} />
                         <div className="host-van-info">
                              <h3>{van.name}</h3>
                              <p>${van.price}/day</p>
                         </div>
                    </div>
               </Link>
          )
     })
     
     return (
          <div className="host-vans">
               <div className="main-content">
                    <h2>Your listed vans</h2>
                    <div className="host-vans-container">
                         {vanElements}
                    </div>
               </div>
          </div>
     )
}

export default HostVans