import { Link } from "react-router-dom"

function Header() {
     return (
          <header>
               <Link to="/">#VANLIFE</Link>
               <nav>
                    <Link to="/about">About</Link>
                    <Link to="/vans">Vans</Link>
               </nav>
          </header>
     )
}

export default Header