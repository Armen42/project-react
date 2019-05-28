import React from 'react'
import logo from './logo.png'
import './header.css'

const Header  = ()=>{
    return(
        <div className = 'Header'> 
         <img className ="Header-logo" alt="logo" src={logo}/>
        
        </div>
        
    )
}
export default Header

