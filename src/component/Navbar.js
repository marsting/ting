import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React from 'react';
import './Navbar.css'

function Navbar (){
    const routeChange = () =>{ 
        let path = `/contact`; 
       
      }
    
    return(
        <>
        <div className='nav'>
        <div className='navLine'>
            <p className='titleN'> CHU</p>
            <div className='NBtn'>
         
                <div className='pinkN'></div>
                <button onClick={routeChange} className='yellowN'></button>
                <div className='blueN'></div>
            </div>
        </div>
        </div>
        </>
    )
}
    export default Navbar