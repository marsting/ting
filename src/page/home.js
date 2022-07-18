import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { useEffect } from 'react';
import React from 'react';
import { render } from 'react-dom';
import { DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import About from './About';
import Contact from './Contact';
import Reseume from './Reseume';
import Project from './Project';
import './home.css';

<script crossorigin src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/4.0.9/fullpage.min.js"></script>
<link rel="stylesheet" type="text/css" href="fullpage.css" />



function Home (){
   
    return(
        <>
      <About/>
            {/* <div className='color-change-2x'>    
            <h1 className='tracking-in-expand'>welcome my web</h1>
           </div> */}
       {/* <Reseume/> */}
       {/* <Project/> */}
       {/* <Contact/> */}
        </>
    )
}
    export default Home