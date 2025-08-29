import { useOutletContext } from "react-router-dom"

function HostVanPhotos() {

     const vanInfo = useOutletContext()

     return (
          vanInfo && <img src={vanInfo.imageUrl} />
     )
}

export default HostVanPhotos