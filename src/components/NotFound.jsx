import { Link } from "react-router-dom"

function NotFound() {
     return (
          <div className="not-found-page">
               <div className="main-content">
                    <h2>Sorry, the page you were looking for was not found</h2>
                    <Link to="/">
                         <button>Back to home</button>
                    </Link>
               </div>
          </div>
     )
}

export default NotFound