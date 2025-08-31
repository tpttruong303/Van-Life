import { Link } from "react-router-dom"

function Login() {
     return (
          <div className="login-form-container">
               <div className="main-content">
                    <h2>Sign in to your account</h2>
                    <form action="">
                         <input 
                              className="email" 
                              placeholder="Email"     
                              type="text" 
                         />
                         <input 
                              className="password" 
                              placeholder="Password" 
                              type="password" 
                         />
                         <button type="submit">Sign in</button>
                    </form>
                    <span>
                         Don't have an account?
                         <Link to="."> Create one now</Link>     
                    </span>
               </div>
          </div>
     )
}

export default Login