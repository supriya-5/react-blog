
import React from 'react'
import {NavLink} from 'react-router-dom';
import "../App.css"

const Navbar = () => {
  return (
    <>
   <div className='head'>
    <h1 style={{display:"inline"}}>The</h1>
  <h1 style={{display:"inline"}}>Siren</h1>
  </div>

<div className='navigation' style={{marginTop:"35px"}} >
<NavLink to ="/Home" style={{margin:"30px"}}>Home</NavLink>
<NavLink to ="/Category/Tourism" style={{margin:"30px"}}>Tourism</NavLink>
<NavLink to ="/Category/Kpop" style={{margin:"30px"}}>Kpop</NavLink>
<NavLink to ="/Category/Technology" style={{margin:"30px"}}>Technology</NavLink>
<NavLink to ="/Category/Movie" style={{margin:"30px"}}>Movie</NavLink>
<NavLink to ="/Category/Food" style={{margin:"30px"}}>Food</NavLink>
<hr></hr>
</div>
</>
  )
}

export default Navbar