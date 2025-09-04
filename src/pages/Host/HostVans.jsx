import { 
     Link, 
     useLoaderData,
     Await
} from "react-router-dom"

import { Suspense } from "react"

import { getHostVans } from "../../api"
import { requireAuth } from "../../utils"

export async function loader({request}) {
     const pathname = new URL(request.url).pathname
     const authResponse = await requireAuth(pathname)

     if (authResponse) return authResponse

     const hostId = "123"
     const vans = getHostVans(hostId)
     return {vans}
}

function HostVans() {
     
     const hostVans = useLoaderData()

     function createHostVanElements(vans) {
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

          return vanElements
     }
     
     return (
          <div className="host-vans">
               <div className="main-content">
                    <h2>Your listed vans</h2>
                    <Suspense fallback={<h2>Loading...</h2>}>
                         <Await resolve={hostVans.vans}> 
                              {(vans) => {

                                   const vanElements = createHostVanElements(vans)

                                   return (
                                        <div className="host-vans-container">
                                             {vanElements}
                                        </div>
                                   )
                              }}
                         </Await>
                    </Suspense>    
               </div>
          </div>
     )
}

export default HostVans