import { useState } from 'react'
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
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
import JacketsPage from './pages/Jackets/JacketsPage';
import SportsPage from './pages/SportsWear/SportsPage';
import LogIn from './components/LogIn';
import Dashboard from './components/Dashboard';
import AddBlog from './components/AddBlog';
import PreviewBlog from './components/PreviewBlog';
import ProtectedRoute from './components/ProtectedRoute';
import LandingPage from './forms/LandingPage';
import WhatsAppFloating from './forms/WhatsAppFloating';

import EnquiryForm from './components/EnquiryForm';


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/uniforms' element={<UniformPage/>} />
      <Route path='/fabric' element={<FabricPage/>} />
      <Route path='/institutionalshoes' element={<ShoesPage/>} />
      <Route path='/socksandaccessories' element={<SocksPage/>} />
      <Route path='/jacketcoats' element={<JacketsPage/>} />
      <Route path='/sportswear' element={<SportsPage/>} />
      <Route path='/blog' element={<BlogSection/>} />
      <Route path="/blog/:id" element={<BlogDetails />} />
      <Route path="/login" element={<LogIn/>} />
      <Route path="/landingpage" element={<LandingPage/>} />
      
      
      <Route path="/add-blog" element={<ProtectedRoute ><AddBlog/></ProtectedRoute>} />
      <Route path="/preview-blog" element={<ProtectedRoute><PreviewBlog/></ProtectedRoute>} />
      <Route path="/form" element={<ProtectedRoute><EnquiryForm/></ProtectedRoute>} />

    </Routes>
    <Footer />
    <WhatsAppFloating />
    </BrowserRouter>
  )
}

export default App
