import { useRouteError } from "react-router-dom"

function ErrorElement() {
     const error = useRouteError()
     return (
          <div className="main-content">
               <h2>Error: {error.message}</h2>
          </div>
     )
}

export default ErrorElement