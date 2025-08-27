import { useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans"
import Header from "./components/Header"
import Footer from "./components/Footer"

import "./server.js"

function App() {

     useEffect(() => {
          const fetchData = async () => {
               const response = await fetch("/api/vans")
               const data = await response.json()
               console.log(data)
          }

          fetchData()    
     }, [])

     return (
          <BrowserRouter>
               <div className="main-container">
                    <Header></Header>
                    <Routes>
                         <Route path="/" element={<Home />}/>
                         <Route path="/about" element={<About />}/>
                         <Route path="/vans" element={<Vans />}/>
                    </Routes>
                    <Footer />
               </div>
          </BrowserRouter>
     )
}

export default App