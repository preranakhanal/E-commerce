import {BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Shop from './pages/Shop';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>  </Route>
        <Route path="/shop" element={<Shop />}>  </Route>
        <Route path="/cart" element={<Cart />}>  </Route>
        
        {/* Add more routes here */}
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
