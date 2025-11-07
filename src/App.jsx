import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import UniformPage from './pages/Uniform/UniformPage';
import FabricPage from './pages/Fabric/FabricPage';
import ShoesPage from './pages/Shoes/ShoesPage';
import SocksPage from './pages/Socks/SocksPage';
import BlogSection from './components/BlogSection';
import BlogDetails from './components/BlogDetails';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/uniforms' element={<UniformPage/>} />
      <Route path='/fabric' element={<FabricPage/>} />
      <Route path='/shoe' element={<ShoesPage/>} />
      <Route path='/socks' element={<SocksPage/>} />
      <Route path='/blog' element={<BlogSection/>} />
      <Route path="/blog/:id" element={<BlogDetails />} />

    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
