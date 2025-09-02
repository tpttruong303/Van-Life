import { redirect } from "react-router-dom"

export async function requireAuth() {

     const isLoggedIn = localStorage.getItem("isLoggedIn")
     if (isLoggedIn === "false" || !isLoggedIn) {
          const response = redirect(
               "/login?message=You must log in to access that page"
          )
          response.body = true
          return response
     }


}

export function initializeApp() {
     localStorage.setItem("isLoggedIn", false)
}