import { BrowserRouter, Routes, Route } from "react-router-dom"

import Layout from "./components/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import HostLayout from "./components/HostLayout.jsx"

import Vans from "./pages/Vans/Vans.jsx"
import VanDetail from "./pages/Vans/VanDetail.jsx"

import Dashboard from "./pages/Host/Dashboard.jsx"
import Income from "./pages/Host/Income.jsx"
import Review from "./pages/Host/Review.jsx"
import HostVans from "./pages/Host/HostVans.jsx"
import HostVanDetail from "./pages/Host/HostVanDetail.jsx" 
import HostVanInfo from "./pages/Host/HostVanInfo.jsx"
import HostVanPricing from "./pages/Host/HostVanPricing.jsx"
import HostVanPhotos from "./pages/Host/HostVanPhotos.jsx"

import "./server.js"

function App() {

     return (
          <BrowserRouter>
               <Routes>
                    <Route path="/" element={<Layout />}>
                         <Route index element={<Home />}/>
                         <Route path="about" element={<About />}/>
                         <Route path="vans" element={<Vans />} />
                         <Route path="vans/:id" element={<VanDetail />}/>
                         
                         <Route path="host" element={<HostLayout />}>
                              <Route index element={<Dashboard />}/>
                              <Route path="income" element={<Income />}/>
                              <Route path="review" element={<Review />}/>
                              <Route path="vans" element={<HostVans />}/>
                              <Route path="vans/:id" element={<HostVanDetail />}>
                                   <Route index element={<HostVanInfo />}/>
                                   <Route path="pricing" element={<HostVanPricing />}/>
                                   <Route path="photos" element={<HostVanPhotos />}/>
                              </Route>
                         </Route>
                    </Route>
               </Routes>
          </BrowserRouter>
     )
}

export default App