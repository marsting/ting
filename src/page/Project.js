import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Project.css'
import ReactPlayer from 'react-player'





function Project (){
    const scroll =()=>{
        window.scroll(0,0)
    }
    return(
        <>
        <div className='container pC'>
               <Link to="/project" style={{ textDecoration: 'none' }}>
               <img className='Ptitle' src={require('../img/PROJECT.png')} alt="" ></img>
               </Link> 
                <div className='PSelect'>
                  <Link to="/project/coffee" style={{ textDecoration: 'none' }} onClick={scroll}>
                    <div className='picc'>
                    <img className='BACKP1' src={require('../img/Star 2.png')} alt="" ></img>
                    {/* <img className='BACKP2' src={require('../img/Star 3.png')} alt="" ></img> */}
                    <img className='SLOGO' src={require('../img/好室咖啡拷貝.png')} alt="" ></img>
                    </div>
                    <h2 className='CoffeeT'>COFFEE HOUSE</h2>
                  </Link>
                  <Link to="/project/burner" style={{ textDecoration: 'none' }}>
                    {/* <img className='BACKP1' src={require('../img/Star 2.png')} alt="" ></img> */}
                    <div className='picc'>
                    <img className='BACKP2' src={require('../img/Star 3.png')} alt="" ></img>
                    <img className='BLOGO' src={require('../img/burner.png')} alt="" ></img>
                    </div>
                    <h2 className='BurnerT'>BURNER</h2>
                  </Link>
                </div>
                  <div className='bott'></div>
               

        </div>
        </>
    )
}
    export default Project