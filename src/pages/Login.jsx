import { Link, useLoaderData } from "react-router-dom"

export function loginLoader({request}) {
     const message = new URL(request.url).searchParams.get("message")
     return message
}

function Login() {

     const message = useLoaderData()

     return (
          <div className="login-form-container">
               <div className="main-content">
                    {<h2 style={{color: message ? "red" : "#161616"}}>
                         {message || "Sign in to your account"}
                    </h2>}
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