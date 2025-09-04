import { 
     Route, 
     RouterProvider, 
     createBrowserRouter, 
     createRoutesFromElements 
} from "react-router-dom"
import Layout from "./components/Layout"
import HostLayout from "./components/HostLayout.jsx"
import NotFound from "./components/NotFound.jsx"
import ErrorElement from "./components/ErrorElement.jsx"

import Home from "./pages/Home"
import About from "./pages/About"
import Login, {loginLoader, loginAction} from "./pages/Login.jsx"

import Vans, {loader as vansLoader} from "./pages/Vans/Vans.jsx"
import VanDetail, {loader as vanLoader} from "./pages/Vans/VanDetail.jsx"

import Dashboard, {loader as dashboardLoader} from "./pages/Host/Dashboard.jsx"
import Income, {loader as incomeLoader} from "./pages/Host/Income.jsx"
import Review, {loader as reviewLoader} from "./pages/Host/Review.jsx"
import HostVans, {loader as hostVansLoader} from "./pages/Host/HostVans.jsx"
import HostVanDetail, {loader as hostVanLoader} from "./pages/Host/HostVanDetail.jsx" 
import HostVanInfo from "./pages/Host/HostVanInfo.jsx"
import HostVanPricing from "./pages/Host/HostVanPricing.jsx"
import HostVanPhotos from "./pages/Host/HostVanPhotos.jsx"

import "./server.js"
import { requireAuth, initializeApp } from "./utils.js"

localStorage.clear()

const router = createBrowserRouter(createRoutesFromElements(
     <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="about" element={<About />}/>
          <Route 
               path="vans" 
               element={<Vans />} 
               loader={vansLoader}
               errorElement={<ErrorElement />}
          />
          <Route 
               path="vans/:id" 
               element={<VanDetail />}
               loader={vanLoader}
               errorElement={<ErrorElement />}
          />
          <Route 
               path="login" 
               element={<Login />} 
               loader={loginLoader}
               action={loginAction}
               errorElement={<ErrorElement />}
          />
          <Route 
               path="host" 
               element={<HostLayout />}
          >
               <Route 
                    index 
                    element={<Dashboard />}
                    loader={dashboardLoader}     
                    errorElement={<ErrorElement />}     
               />
               <Route 
                    path="income" 
                    element={<Income />}
                    loader={incomeLoader}     
               />
               <Route 
                    path="review" 
                    element={<Review />}
                    loader={reviewLoader}
               />
               <Route 
                    path="vans" 
                    element={<HostVans />}
                    loader={hostVansLoader}
               />
               <Route 
                    path="vans/:id" 
                    element={<HostVanDetail />}
                    loader={hostVanLoader}
               >
                    <Route index element={<HostVanInfo />}/>
                    <Route path="pricing" element={<HostVanPricing />}/>
                    <Route path="photos" element={<HostVanPhotos />}/>
               </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
     </Route>
))

function App() {

     initializeApp()

     return (
          <RouterProvider router={router} />
     )
}

export default App