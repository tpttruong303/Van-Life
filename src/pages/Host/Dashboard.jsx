import { requireAuth } from "../../utils"

export async function loader({request}) {
     const pathname = new URL(request.url).pathname
     return await requireAuth(pathname)
}

function Dashboard() {
     return (
          <div>
               <h1>Host Dashboard</h1>
          </div>
     )
}

export default Dashboard 