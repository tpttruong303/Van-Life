import { Link, useLoaderData, Form, replace, useActionData, useNavigation} from "react-router-dom"
import { loginUser } from "../api"

export function loginLoader({request}) {
     const message = new URL(request.url).searchParams.get("message")
     return message
}

export async function loginAction({request}) {
     const formData = await request.formData()
     const email = formData.get("email")
     const password = formData.get("password")
     try {
          const auth = await loginUser({email, password})
          localStorage.setItem("isLoggedIn", "true")
          const response = replace("/host")
          response.body = true
          return response
     }
     catch(e) {
          if (e.status == 401) {
               return e.message
          }
          throw e
     }
}

function Login() {

     const message = useLoaderData()
     const authError = useActionData()
     const navigation = useNavigation()

     return (
          <div className="login-form-container">
               <div className="main-content">
                    <h2>Sign in to your account</h2>
                    {(message) && <h4 style={{marginTop: 0, color: "red"}}>{message}</h4>}
                    {(authError) && <h4 style={{marginTop: 0, color: "red"}}>{authError}</h4>}
                    <Form method="post">
                         <input 
                              className="email"
                              placeholder="Email"   
                              name="email"  
                              type="text" 
                         />
                         <input 
                              className="password"
                              placeholder="Password" 
                              name="password"
                              type="password" 
                         />
                         <button 
                              style={{backgroundColor: navigation.state === "submitting" ? "#ff8b3860": "#ff8c38"}}
                              type="submit"
                              disabled={navigation.state === "submitting"}
                         >
                              {navigation.state === "submitting" ? "Logging In..." : "Sign In"}
                         </button>
                    </Form>
                    <span>
                         Don't have an account?
                         <Link to="."> Create one now</Link>     
                    </span>
               </div>
          </div>
     )
}

export default Login