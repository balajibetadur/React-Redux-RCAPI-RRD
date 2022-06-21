import React from 'react'
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from './components/ReactRouter/Profile'
import Home from './components/ReactRouter/Home'
import Blogs from './components/ReactRouter/Blogs'
import NoPage from './components/ReactRouter/NoPage'

function App() {
  return (
    <>
    <BrowserRouter>

    <Link to="/profile">Profile</Link><br/>
    <Link to="/blogs">Blogs</Link>
      <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NoPage />} />
     
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App