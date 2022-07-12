import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React from 'react';
import './Navbar.css'

function Navbar (){
  
    
    return(
        <>
        
        <div className='navB'>
        <div className='navLine'>
            <Link to="/" style={{ textDecoration: 'none' }}> 
            <p className='titleN'>CHU</p></Link>
            <div className='NBtn'>
               <Link to="/Reseume" style={{ textDecoration: 'none' }} className="mN" ><div className='pinkN'><p className="mw">RESEUME</p></div></Link>
               <Link to="/Project" style={{ textDecoration: 'none' }} className="mN" > <div className='yellowN'><p className="mw">PROJECT</p></div></Link>
               <Link to="/Contact" style={{ textDecoration: 'none' }} className="mN" > <div className='blueN'><p className="mw">CONTACT</p></div></Link>
            </div>
           

        </div>
        </div>
        
        </>
    )
}
    export default Navbar