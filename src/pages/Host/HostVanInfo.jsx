import { useOutletContext } from "react-router-dom"

function HostVanInfo() {

     const vanInfo = useOutletContext()

     return (
          vanInfo && <div className="detail-info">
               <span><b>Name:</b> {vanInfo.name}</span>
               <span><b>Category:</b> {vanInfo.type}</span>
               <span><b>Description:</b> {vanInfo.description}</span>
               <span><b>Visibility:</b> Public</span>
          </div>
     )
}

export default HostVanInfo