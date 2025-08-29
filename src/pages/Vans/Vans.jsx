import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Vans() {

     const [vansInfo, setVansInfo] = useState([])

     async function fetchVansData() {
          const response = await fetch("/api/vans")
          const data = await response.json()
          setVansInfo(data.vans)
     }

     useEffect(() => {
          fetchVansData()
     }, [])

     const vanListItems = vansInfo.map(van => {
          return (
               <Link to={`${van.id}`}>
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
     })

     return (
          <div className="main-vans">
               <div className="main-content">
                    <h2>Explore your van options</h2>
                    <div className="selection-container">
                         <div className="filter-button-container">
                              <button className="filter-button-simple">Simple</button>
                              <button className="filter-button-luxury">Luxury</button>
                              <button className="filter-button-rugged">Rugged</button>
                         </div>
                         <span>Clear filters</span>
                    </div>
                    <div className="main-vans-container">
                         {vanListItems}
                    </div>
               </div>
          </div>
     )
}

export default Vans