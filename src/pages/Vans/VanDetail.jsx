import { 
     Link, 
     useLocation, 
     useLoaderData,
     Await 
} from "react-router-dom"

import { Suspense } from "react"

import { getVan } from "../../api"

export async function loader({ params }) {
     const data = getVan(params.id)
     return {data}
}

function VanDetail() {
     const location = useLocation()
     const vanInfo = useLoaderData()

     const prevSearchParams = new URLSearchParams(
          location.state ? location.state.search : ""
     )

     function createVanDetailElement(vanInfo) {

          const styles = vanInfo ? {
               backgroundColor: vanInfo.type === "simple" ? 
               "#E17654" : vanInfo.type === "luxury" ? 
               "#161616" : "#115E59",
          } : null

          return (
               <>
                    <img src={vanInfo.imageUrl} />
                    <span style={styles}>{vanInfo.type}</span>
                    <h2>{vanInfo.name}</h2>
                    <h3>
                         ${vanInfo.price}
                         <span>/day</span>
                    </h3>
                    <p>{vanInfo.description}</p>
                    <button>Rent this van</button>
               </>
          )
     }

     return (
          <div className="main-van-detail">
               <div className="main-content">
                    <Link 
                         to={`..?${prevSearchParams}`} 
                         relative="path"
                    >
                         &larr; 
                         <span>Back to {prevSearchParams.get("type") || "all"} vans</span>
                    </Link>
                    <Suspense fallback={<h2>Loading...</h2>}>     
                         <Await resolve={vanInfo.data}>
                              {(vanDetail) => {
                                   const vanElement = createVanDetailElement(vanDetail)
                                   return vanElement
                              }}
                         </Await>
                    </Suspense>
               </div>
          </div>
     )
}

export default VanDetail