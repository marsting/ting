import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Project.css'
import ReactPlayer from 'react-player'
import { FaRegHandPointRight } from "react-icons/fa";




function Project (){
    return(
        <>
        <div className='container pC'>
                <img className='Ptitle' src={require('../img/PROJECT.png')} alt="" ></img>
                <div className='PSelect'>
                  <Link to="/project/coffee" style={{ textDecoration: 'none' }}>
                    <h2 className=''><FaRegHandPointRight/>COFFEE HOUSE</h2>
                    <div className='picc'>
                    <img className='BACKP1' src={require('../img/Star 2.png')} alt="" ></img>
                    {/* <img className='BACKP2' src={require('../img/Star 3.png')} alt="" ></img> */}
                    <img className='SLOGO' src={require('../img/好室咖啡拷貝.png')} alt="" ></img>
                    </div>
                  </Link>
                  <Link to="/project/burner" style={{ textDecoration: 'none' }}>
                    <h2 className='BurnerT'><FaRegHandPointRight/>BURNER</h2>
                    {/* <img className='BACKP1' src={require('../img/Star 2.png')} alt="" ></img> */}
                    <div className='picc'>
                    <img className='BACKP2' src={require('../img/Star 3.png')} alt="" ></img>
                    <img className='BLOGO' src={require('../img/burner.png')} alt="" ></img>
                    </div>
                  </Link>
                </div>
               

        </div>
        </>
    )
}
    export default Project