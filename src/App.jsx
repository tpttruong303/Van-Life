import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans/Vans.jsx"
import VanDetail from "./pages/Vans/VanDetail.jsx"

import HostLayout from "./components/HostLayout.jsx"
import Dashboard from "./pages/Host/Dashboard.jsx"
import Income from "./pages/Host/Income.jsx"
import Review from "./pages/Host/Review.jsx"


import "./server.js"

function App() {

     return (
          <BrowserRouter>
               <Routes>
                    <Route path="/" element={<Layout />}>
                         <Route index element={<Home />}/>
                         <Route path="about" element={<About />}/>

                         <Route path="vans"> 
                              <Route index element={<Vans />}/>
                              <Route path=":id" element={<VanDetail />}/>
                         </Route>
                         
                         <Route path="host" element={<HostLayout />}>
                              <Route index element={<Dashboard />}/>
                              <Route path="income" element={<Income />}/>
                              <Route path="review" element={<Review />}/>
                         </Route>
                    </Route>
               </Routes>
          </BrowserRouter>
     )
}

export default App