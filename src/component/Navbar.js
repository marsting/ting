import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React from 'react';
import './Navbar.css'

function Navbar (){

   const ttop=()=>{
    window.scroll(0,0)
     }
    
    return(
        <>
        
        <div className='navB sticky-top'>
          <div className='navLine'>
            <Link to="/ting" style={{ textDecoration: 'none' }}> 
            <p className='titleN'>CHU</p></Link>
            <div className='NBtn'>
               <Link to="/Reseume" style={{ textDecoration: 'none' }} onclick={ttop} ><div className='pinkN' ><p >RESEUME</p></div></Link>
               <Link to="/Project" style={{ textDecoration: 'none' }} onclick={ttop}> <div className='yellowN' ><p >PROJECT</p></div></Link>
               <Link to="/Contact" style={{ textDecoration: 'none' }} onclick={ttop}> <div className='blueN' ><p >CONTACT</p></div></Link>
            </div>
          </div>
          <div className='mnavLine'>
            <Link to="/ting" style={{ textDecoration: 'none' }}> 
            {/* <div className='titleN'> */}
            <p className='titleN'>CHU</p>
            {/* </div> */}
            </Link>
            <div className='NBtn'>
               <Link to="/Reseume" style={{ textDecoration: 'none' }} ><p className="mt" >RESEUME</p></Link>
               <Link to="/Project" style={{ textDecoration: 'none' }} ><p className="mt" >PROJECT</p></Link>
               <Link to="/Contact" style={{ textDecoration: 'none' }} ><p className="mt" >CONTACT</p></Link>
            </div>
          </div>
           
        </div>
        
        </>
    )
}
    export default Navbar