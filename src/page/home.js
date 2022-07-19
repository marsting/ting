import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { useEffect } from 'react';
import React from 'react';
import { render } from 'react-dom';

import { Fullpage, FullpageSection, FullPageSections, FullpageNavigation } from '@ap.cx/react-fullpage';

import About from './About';
import Clickbtn from './Clickbtn';
import './home.css';





function Home (props){
    const SectionStyle ={
     height: '100vh',
     width:'100%',
    padding:'104px',

    }
   
    return(
        <>
        <Fullpage setHHeight={props.setHHeight}>
            <FullPageSections>
                <FullpageSection style={SectionStyle}>
                 <About />
                </FullpageSection>
                <FullpageSection style={SectionStyle}>
                 <Clickbtn/>
                </FullpageSection>
                
            </FullPageSections>
        </Fullpage>
            {/* <div className='color-change-2x'>    
            <h1 className='tracking-in-expand'>welcome my web</h1>
           </div> */}
       
        </>
    )
}
    export default Home