import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { useEffect } from 'react';
import React from 'react';
import { render } from 'react-dom';
import { DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


import About from './About';
import './home.css';




function Home (){
   
    return(
        <>
      <About/>
            <div className='color-change-2x'>
        
            <h1 className='tracking-in-expand'>welcome my web</h1>
       

           </div>
       
        </>
    )
}
    export default Home