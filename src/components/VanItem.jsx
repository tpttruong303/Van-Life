function VanItem({vanObject}) {

     const styles = {
          backgroundColor: vanObject.type === "simple" ? "#E17654" : vanObject.type === "luxury" ? "#161616" : "#115E59",
     }

     return (
          <div className="van-item">
               <img src={vanObject.imageUrl}/>
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
     )
}

export default VanItem