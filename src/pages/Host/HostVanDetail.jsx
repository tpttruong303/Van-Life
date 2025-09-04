import { 
     Link, 
     Outlet, 
     useLoaderData,
     Await 
} from "react-router-dom"

import { Suspense } from "react"

import { getVan } from "../../api"
import { requireAuth } from "../../utils"

export async function loader({ params, request }) {
     const authResponse = await requireAuth(new URL(request.url).pathname)
     if (authResponse) return authResponse

     const data = getVan(params.id)
     return {data}
}

function HostVanDetail() {

     const hostVanDetail = useLoaderData()

     function createHostVanDetailElement(vanInfo) {

          const styles = vanInfo ? {
               backgroundColor: vanInfo.type === "simple" ? 
               "#E17654" : vanInfo.type === "luxury" ? 
               "#161616" : "#115E59",
          } : null

          return (
               <div>
                    <div className="main-info">
                         <img src={vanInfo.imageUrl}/>
                         <div className="info-text">
                              <div style={styles}>{vanInfo.type}</div>
                              <h2>{vanInfo.name}</h2>
                              <span>${vanInfo.price}<span>/day</span></span>
                         </div>
                    </div>
                    <nav>
                         <Link to=".">Details</Link>
                         <Link to="pricing">Pricing</Link>
                         <Link to="photos">Photos</Link>
                    </nav>
                    <Outlet context={vanInfo}/>
               </div>
          )
     }

     return (
          <div className="host-van-detail">
               <Link to=".." relative="path">&larr; <span>Back to all vans</span></Link>
               <Suspense fallback={<h2>Loading...</h2>}>
                    <Await resolve={hostVanDetail.data}>
                         {(van) => {
                              return createHostVanDetailElement(van)
                         }}
                    </Await>
               </Suspense>
          </div>
     )
}

export default HostVanDetail