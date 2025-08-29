import { Link } from "react-router-dom" 

function VanItem({vanObject}) {

     const styles = {
          backgroundColor: vanObject.type === "simple" 
          ? "#E17654" : vanObject.type === "luxury" 
          ? "#161616" : "#115E59",
     }

     return (
          <Link to={`${vanObject.id}`}>
               <div className="van-item">
                    <img className="item-image" src={vanObject.imageUrl}/>
                    <div className="item-details">
                         <h3 className="item-title">{vanObject.name}</h3>
                         <span className="item-price">
                              ${vanObject.price}
                              <span>/day</span>
                         </span>     
                    </div>
                    <span className="item-type" style={styles}>
                         {vanObject.type}
                    </span>
               </div>
          </Link>
     )
}

export default VanItem