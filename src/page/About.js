import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { useEffect } from 'react';
import React from 'react';
import Typed from 'react-typed';
import { BsChevronDoubleDown } from "react-icons/bs";



import './About.css';




function About (){
    const goto=() =>{
        window.scroll(0,0)
    }
    
   
    return(
        <>
        <div className='ac'>
        
        <div className='acontent'>
            <img className='aimg' src={require('../img/N.png')} alt="" ></img>
        
            <div className='atitle'>
               <p>Hi~ My name is Tiana!</p>
                
               <p>I'm a &nbsp;
                <Typed className='changetext'
                strings={[
                    'Web Designer',
                    'Ｗeb Developer',
                    'Graphic Designer']}
                    typeSpeed={40}
                    backSpeed={50}
                   loop
                     >   
                </Typed>
               </p>
            </div>
           </div>
            
            {/* <Link to="/Reseume" style={{ textDecoration: 'none' }} className='seebtn' onClick={goto}><p>scroll down</p> </Link> */}
            <div class="downarr">
                <div class="chevron"></div>
                <div class="chevron"></div>
                <div class="chevron"></div>
            </div>
        </div>
       

            
       
        </>
    )
}
    export default About