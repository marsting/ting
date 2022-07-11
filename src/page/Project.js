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
                   
                    {/* <img className='BACKP1' src={require('../img/Star 2.png')} alt="" ></img> */}
                    {/* <img className='BACKP2' src={require('../img/Star 3.png')} alt="" ></img> */}
                    <div className="toptext">
                    <div>WEB</div>
                    <div>C.2022</div>
                    </div>
                    <img className='pBg' src={require('../img/pBg.png')} alt="" ></img>
                    <img className='SLOGO' src={require('../img/好室咖啡拷貝.png')} alt="" ></img>
                   
                    <h2 className='CoffeeT'>COFFEE HOUSE</h2>
                  </Link>
                  <Link to="/project/burner" style={{ textDecoration: 'none' }}>
                    {/* <img className='BACKP1' src={require('../img/Star 2.png')} alt="" ></img> */}
            
                    {/* <img className='BACKP2' src={require('../img/Star 3.png')} alt="" ></img> */}
                    <div className="toptext">
                    <div>BRAND</div>
                    <div>C. 2019</div>
                    </div>
                    <img className='pBg' src={require('../img/pBg.png')} alt="" ></img>
                    <img className='BLOGO' src={require('../img/burner.png')} alt="" ></img>

                    <h2 className='BurnerT'>BURNER</h2>
                  </Link>
                </div>
                  <div className='bott'></div>
               

        </div>
        </>
    )
}
    export default Project