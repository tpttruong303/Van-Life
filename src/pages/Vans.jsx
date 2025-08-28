import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import VanItem from "../components/VanItem"

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

     const vanListItems = vansInfo.map(van => 
          <Link to={`/vans/${van.id}`} key={van.id}>
               <VanItem vanObject={van} />
          </Link>
     )

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
                    <div className="van-list-container">
                         {vanListItems}
                    </div>
               </div>
          </div>
     )
}

export default Vans