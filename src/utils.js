import { redirect } from "react-router-dom"

export async function requireAuth(pathname) {

     const isLoggedIn = localStorage.getItem("isLoggedIn")
     if (isLoggedIn === "false" || !isLoggedIn) {
          const response = redirect(
               `/login?message=You must log in to access that page&path=${pathname}`
          )
          response.body = true
          return response
     }

     return null
}

export function initializeApp() {
     localStorage.setItem("isLoggedIn", false)
}