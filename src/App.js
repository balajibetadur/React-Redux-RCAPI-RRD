import React from 'react'
import Contact from './components/ReactRouter/Contact'
import Feed from './components/ReactRouter/Feed'
import Home from './components/ReactRouter/Home'
import Profile from './components/ReactRouter/Profile'
import Error from './components/ReactRouter/Error'
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <div>
        <div><Link to = "/">Home</Link></div>
        <div><Link to = "/profile">Profile</Link></div>
        <div><Link to = "/feed">Feed</Link></div>
        <div><Link to = "/contact">Contact</Link></div>
    </div>
    
      <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />}>
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App