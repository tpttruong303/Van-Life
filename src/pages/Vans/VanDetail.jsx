import { Link, useLocation, useLoaderData } from "react-router-dom"
import { getVans } from "../../api"

export async function loader({ params }) {
     const data = await getVans(params.id)
     return data
}

function VanDetail() {
     const location = useLocation()
     const vanInfo = useLoaderData()

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