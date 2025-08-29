import { useOutletContext } from "react-router-dom"

function HostVanPricing() {

     const vanInfo = useOutletContext()

     return (
          vanInfo && <h2>${(vanInfo.price).toFixed(2)}<span>/day</span></h2>
     )
}

export default HostVanPricing