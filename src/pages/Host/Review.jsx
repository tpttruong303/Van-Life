import { requireAuth } from "../../utils"

export async function loader({request}) {
     const pathname = new URL(request.url).pathname
     return await requireAuth(pathname)
}

function Review() {
     return (
          <div>
               <h1>Host Review</h1>
          </div>
     )
}    

export default Review