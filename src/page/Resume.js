import React from 'react';
import {useEffect} from 'react';
import './Resume.css'
import { ImLinkedin } from "react-icons/im";
import { ImBehance2 } from "react-icons/im";
import { ImInstagram } from "react-icons/im";
import { ImGithub } from "react-icons/im";
import Typed from 'react-typed';

function Resume (){
    const be = ()=>{
        window.open('https://www.behance.net/marsting')
    }
    const ins = ()=>{
        window.open('https://www.instagram.com/ccpm_/')
    } 
    const git = ()=>{
        window.open('https://github.com/marsting/ting')
    }
     const lin = ()=>{
        window.open('https://www.linkedin.com/in/marsting/')
    }
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        document.querySelector(".navB").style.display="block"
      }, []);

    return(
        <>
        <div className='Re' id='Reseume'>
        <div className='title'>
         <img className='Rtitle' src={require('../img/RESUME.png')} alt="" ></img>
        </div>
        <div className='RContent'>
            <div className='Rpic'>
                <div className='typew'><Typed
             
                    strings={["","Hi, I'm Tiana"]}
                    typeSpeed={40}
                   s
                /></div>
                <img className='Rimg' src={require('../img/RP1.png')} alt="" ></img>
                <br/>
                <p>YUNTING CHU</p>
                <p>朱韻婷</p>
                <div className='llink'>
                <a href='' onClick={lin}><ImLinkedin size={40} color="navy" className='m-1'/></a>
                <a href='' onClick={be}><ImBehance2 size={40} color="blue" className='m-1'/></a>
                <a href='' onClick={ins}><ImInstagram size={40} color="deeppink" className='m-1'/></a>
                <a href='' onClick={git}><ImGithub size={40} color="purple" className='m-1'/></a>
                </div>
            </div>
            <div className='RAbout'>
                <h3>About Me</h3>
                <br/>
                <p>&emsp; &emsp; 喜歡接觸新鮮的東西，熱愛旅遊，以及了解各地方的人文氣息和文化特色。
                    勇於接受挑戰，從中得到更多知識與經驗，建立出自己獨一無二的價値。
                    對於新環境的適應力強，在團隊合作中也相處融洽。</p>
                <br/>
                <br/>
                <h3>Experience</h3>
                <br/>
                <p>資展國際 前端就業養成班 588小時<br/>
                Jan 2022 – Jun 2022</p>

                <ul className='Rlist'>
                    <li>好室咖啡網站</li>
                    <li>負責UI/UX規劃</li>
                    <li>品牌設計</li>
                    <li>商品購買頁面製作</li>
                </ul>
                <br/>
                <p>儒億科技股份有限公司  工程師<br/>
                Feb 2020 – Dec 2021</p>

                <ul className='Rlist'>
                    <li>車燈ＣＧ美工設計-Keyshot渲染3D圖，Photoshop仿真車燈視覺設計</li>
                    <li>品牌視覺: 年度公司形象海報、小卡設計</li>
                    <li>專案管理: 責任時間內取得資料並完成專案試驗項目發佈。包含取得車廠SPEC、內容翻譯、試驗挑選、並與相關部門進一步討論完成問題點確認</li>
                    <li>客戶管理: 了解客戶需求，並協助完成專案測試問答，將其準確回報給內部相關部門，共同解決客戶的問題</li>
                    <li>會議企劃：擔任專案負責人，主持跨部門相關會議，確保內部溝通及流程之順暢</li>
                </ul>





            </div>
            <div className='Rex'>
            <h3>Education</h3>
                <br/>
                
                <p>Master Degree 
                </p>
                <ul className='nonstyle'>
                <li>University for the Creative Art</li>
               <li>Design, Innovation & Brand Management</li>
               <li>Sep 2018 – Sep 2019</li>
               <li>Project: Burner Graffiti Museum</li>
                </ul>

                <br/>
                <p>Bachelor</p>
                <ul className='nonstyle'>
                    <li>義守大學</li>
                    <li>創意商品學系</li>
                    <li>Sep 2013 – Jun 2017</li>
                </ul>
               
                <br/>
                <br/>
                <h3>Skill</h3>
                <br/>
                <p>UI/UX Design</p>
                <ul className='Rlist'>
                    <li>Figma</li>
                    <li>Illustrator</li>
                    <li>Photoshop</li>
                    <li>InDesign</li>
                    <li>Illustrator</li>
                </ul>
                <p>Front-end Development</p>
                <ul className='Rlist'>
                    <li>HTML, CSS, Bootstrap</li>
                    <li>JavaScript, React</li>
                    <li>Photoshop</li>
                    <li>GitHub</li>
                    <li>MySQL、node</li>
                </ul>
                <p>Languages</p>
                <ul className='Rlist'>
                    <li>IELTS 6.0</li>
                    <li>TOEIC 745</li>
                </ul>



            </div>
            
         </div>
        </div>
        </>
    )
}
    export default Resume