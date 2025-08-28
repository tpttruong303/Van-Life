import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans"
import VanDetail from "./pages/VanDetail.jsx"
import Header from "./components/Header"
import Footer from "./components/Footer"

import "./server.js"

function App() {

     return (
          <BrowserRouter>
               <div className="main-container">
                    <Header></Header>
                    <Routes>
                         <Route path="/" element={<Home />}/>
                         <Route path="/about" element={<About />}/>
                         <Route path="/vans" element={<Vans />}/>
                         <Route path="/vans/:id" element={<VanDetail />}/>
                    </Routes>
                    <Footer />
               </div>
          </BrowserRouter>
     )
}

export default App