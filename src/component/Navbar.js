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
               <Link to="/Reseum" style={{ textDecoration: 'none' }}><div className='pinkN'><p>RESEUM</p></div></Link>
               <Link to="/Project" style={{ textDecoration: 'none' }}> <div className='yellowN'><p>PROJECT</p></div></Link>
               <Link to="/Contact" style={{ textDecoration: 'none' }}> <div className='blueN'><p>CONTACT</p></div></Link>
            </div>
        </div>
        </div>
        
        </>
    )
}
    export default Navbar