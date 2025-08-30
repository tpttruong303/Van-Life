import { useEffect, useState } from "react"
import { useParams, Link, useLocation } from "react-router-dom"

function VanDetail() {

     const params = useParams()
     const location = useLocation()
     const [vanInfo, setVanInfo] = useState(null)

     async function fetchVanData() {
          const response = await fetch(`/api/vans/${params.id}`)
          const data = await response.json()
          setVanInfo(data.vans)
     }

     useEffect(() => {
          fetchVanData()
     }, [params.id])

     const styles = vanInfo ? {
          backgroundColor: vanInfo.type === "simple" ? 
          "#E17654" : vanInfo.type === "luxury" ? 
          "#161616" : "#115E59",
     } : null
          
     const prevSearchParams = new URLSearchParams(
          location.state ? location.state.search : ""
     )

     return (
          <div className="main-van-detail">
               {vanInfo ? <div className="main-content">
                    <Link 
                         to={`..?${prevSearchParams}`} 
                         relative="path"
                    >
                         &larr; 
                         <span>Back to {prevSearchParams.get("type") || "all"} vans</span>
                    </Link>
                    <img src={vanInfo.imageUrl} />
                    <span style={styles}>{vanInfo.type}</span>
                    <h2>{vanInfo.name}</h2>
                    <h3>
                         ${vanInfo.price}
                         <span>/day</span>
                    </h3>
                    <p>{vanInfo.description}</p>
                    <button>Rent this van</button>
               </div> : <h2 className="loading">Loading...</h2>}
          </div>
     )
}

export default VanDetail