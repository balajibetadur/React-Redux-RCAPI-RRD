import React from 'react'
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from './components/ReactRouter/Profile'
import Home from './components/ReactRouter/Home'
import Blogs from './components/ReactRouter/Blogs'
import NoPage from './components/ReactRouter/NoPage'
import './App.css'

function App() {
  return (
    <>

    <BrowserRouter>
      <div className = 'menu'>
        
        <Link className = 'menu__option' to="/profile">ProfileSection </Link><br/>
        <Link className = 'menu__option' to="/blogs">Blogs</Link>

      </div>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App