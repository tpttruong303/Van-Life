import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function VanDetail() {

     const params = useParams()
     const [vanInfo, setVanInfo] = useState(null)

     async function fetchVanData() {
          const response = await fetch(`/api/vans/${params.id}`)
          const data = await response.json()
          setVanInfo(data.vans)
     }

     useEffect(() => {
          fetchVanData()
     }, [params.id])

     let styles = {}
     vanInfo ?  styles = {
               backgroundColor: vanInfo.type === "simple" ? "#E17654" : vanInfo.type === "luxury" ? "#161616" : "#115E59",
          } : null
          

     return (
          <div className="main-van-detail">
               {vanInfo && <div className="main-content">
                    <img src={vanInfo.imageUrl} />
                    <span style={styles}>{vanInfo.type}</span>
                    <h2>{vanInfo.name}</h2>
                    <h3>
                         ${vanInfo.price}
                         <span>/day</span>
                    </h3>
                    <p>{vanInfo.description}</p>
                    <button>Rent this van</button>
               </div>}
          </div>
     )
}

export default VanDetail