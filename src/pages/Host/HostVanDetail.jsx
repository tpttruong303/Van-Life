import { useState, useEffect } from "react"
import { useParams,Link, Outlet } from "react-router-dom"

function HostVanDetail() {

     const [vanInfo, setVanInfo] = useState(null)
     const params = useParams()

     async function fetchVanData() {
          const res = await fetch(`/api/host/vans/${params.id}`)
          const data = await res.json()
          setVanInfo(data.vans[0])
     }

     useEffect(() => {
          fetchVanData()
     }, [params.id])

     const styles = vanInfo ? {
          backgroundColor: vanInfo.type === "simple" ? 
          "#E17654" : vanInfo.type === "luxury" ? 
          "#161616" : "#115E59",
     } : null

     return (
          <div className="host-van-detail">
               <Link to=".." relative="path">&larr; <span>Back to all vans</span></Link>
               {vanInfo ? <div>
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
               </div> : <h2 className="loading">Loading...</h2>}
          </div>
     )
}

export default HostVanDetail