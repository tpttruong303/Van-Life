import { Link } from "react-router-dom"

import userIcon from "../assets/user_icon.png"

function Header() {
     return (
          <header>
               <Link to="/">#VANLIFE</Link>
               <nav>
                    <Link to="host">Host</Link>
                    <Link to="about">About</Link>
                    <Link to="vans">Vans</Link>
                    <Link to="login">
                         <img src={userIcon} />
                    </Link>
               </nav>
          </header>
     )
}

export default Header