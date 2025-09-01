import { redirect } from "react-router-dom"

export async function requireAuth() {
     const isLoggedIn = false
     if (!isLoggedIn) {
          const response = redirect("/login?message=You must log in to access that page")
          response.body = true
          return response
     }
}