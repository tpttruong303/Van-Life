import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
     return (
          <BrowserRouter>
               <div className="main-container">
                    <Header></Header>
                    <Routes>
                         <Route path="/" element={<Home />}/>
                         <Route path="/about" element={<About />}/>
                    </Routes>
                    <Footer />
               </div>
          </BrowserRouter>
     )
}

export default App