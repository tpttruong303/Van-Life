import { 
     useSearchParams, 
     useLoaderData, 
     Link,
     Await
} from "react-router-dom"
import { Suspense } from "react"

import { getVans } from "../../api.js"

export async function loader() {
     const vans = getVans()
     return {vans}
}

function Vans() {

     const [searchParams, setSearchParams] = useSearchParams()
     const typeFilter = searchParams.get("type")
     const vansInfo = useLoaderData()

     function handleFilterChange(key, value) {
          setSearchParams(prevParams => {
               if (value === null) prevParams.delete(key)
               else prevParams.set(key, value) 
               return prevParams
          })
     }

     const typeButtons = ["simple", "luxury", "rugged"].map(
          (type) => (
               <button 
                    onClick={() => handleFilterChange("type", type)} 
                    className={`filter-button-${type}`}
                    key={type}
               >
                    {type}
               </button>
          )
     )

     function createVanElement(van) {
          return (
               <Link 
                    key={van.id} 
                    to={van.id} 
                    state={{ search:searchParams.toString() }}
               >
                    <div className="van-item">
                         <img className="item-image" src={van.imageUrl}/>
                         <div className="item-details">
                              <h3 className="item-title">{van.name}</h3>
                              <span className="item-price">
                                   ${van.price}
                                   <span>/day</span>
                              </span>     
                         </div>
                         <span 
                              className="item-type" 
                              style={{
                                   backgroundColor: van.type === "simple" 
                                   ? "#E17654" : van.type === "luxury" 
                                   ? "#161616" : "#115E59"
                              }}
                         >
                              {van.type}
                         </span>
                    </div>
               </Link>
          )
     }

     function createVanListItems(vans) {
          const displayedVans = typeFilter ? 
               vans.filter(
                    van => van.type.toLowerCase() === typeFilter
               ) : vans

          const vanListItems = displayedVans.map(van => createVanElement(van))
          return vanListItems
     }

     return (
          <div className="main-vans">
               <div className="main-content">
                    <h2>Explore your van options</h2>
                    <div className="selection-container">
                         <div className="filter-button-container">
                              {typeButtons}
                         </div>
                         <span onClick={() => handleFilterChange("type", null)}>Clear filters</span>
                    </div>
                    <Suspense fallback={<h2>Loading...</h2>}>
                         <Await resolve={vansInfo.vans}>
                              {(resolvedVansInfo) => {
                                   return (
                                        <div className="main-vans-container">
                                             {createVanListItems(resolvedVansInfo)}
                                        </div>
                                   )
                              }}
                         </Await>
                    </Suspense>
               </div>
          </div>
     )
}

export default Vans