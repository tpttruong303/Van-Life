import { requireAuth } from "../../utils"

export async function loader({request}) {
     const pathname = new URL(request.url).pathname
     return await requireAuth(pathname)
}

function Income() {
     return (
          <div>
               <h1>Host Income</h1>
          </div>
     )
}

export default Income