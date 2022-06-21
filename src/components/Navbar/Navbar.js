import React from 'react'
import { useSelector } from 'react-redux'
import SubNavbar from '../SubNavbar/SubNavbar'
import './Navbar.css'

function Navbar() {
  
  const count = useSelector(state => state.count)
  return (
    <div className='navbar'>
    <div >Navbar</div>
    <SubNavbar count = {count} />
    </div>
  )
}


export default Navbar