import React from 'react';
import './Project.css'
import ReactPlayer from 'react-player'


function Project (){
    return(
        <>
        <div className='container pC'>
                <img className='Ptitle' src={require('../img/PROJECT.png')} alt="" ></img>
                <h2 className='PHouseT'>House Coffee</h2>
                <div className='H1C'>
                    <img className='HLogo' src={require('../img/好室咖啡拷貝.png')} alt="" ></img>
                    <div className='CT1'>
                        <p>連鎖咖啡店</p>
                        <p>簡介 : </p>
                        <p>在瀏覽多間知名的連鎖咖啡的官網後，我們探討現代人的生活型態，在緊湊的步調、消費的習慣改變，以及年輕人追求的流性趨勢。因此我們思考了一間好的並且有未來性發展的咖啡店需以什麼樣的經營模式而讓他的知名度越來越響亮。並且相比全球知名的星巴克又有什麼不同的特色和創意。</p>
                        <p>此網站由 6 人團隊運用前端及後端技術， 供使用者加入會員、購買商品、餐飲訂購、文章欣賞及找尋店家。另設有後台供管理員修改店家相關資訊。</p>
                        <br/>
                        <p>設計理念：</p>
                        <p>&ensp;1.以寵物友善咖啡廳最為主要風格</p>
                        <p>&ensp;2.顧客可以在官網中訂購餐點，不會跳轉至其他外送平台</p>
                        <p>&ensp;3.迅速且流暢的購物流程</p>
                        <p>&ensp;4.簡潔的視覺介面，凸顯商品的特色與亮點</p>
                        <p>&ensp;5.網路動線清楚明瞭</p>
                        <p>&ensp;6.不只是間咖啡廳，也像為顧客提供相關咖啡資訊</p>
                        <br/>
                        <p>主要負責內容：</p>
                        <p>&ensp;1.網頁UI/UX設計</p>
                        <p>&ensp;2.品牌設計(顏色、LOGO 和風格）</p>
                        <p>&ensp;3.以RWD響應式網頁呈現畫面及資料，前端畫面設計及串接API資料部分</p>
                        <p>&ensp;4.後端配合前端畫面進行後端串接API設計與開發，並搭配資料庫預存程序處理相關資料</p>        
                </div>
                </div>

                <div className='H2C'>
                <ReactPlayer url='https://www.youtube.com/watch?v=_vK3Zscn5W0&t=2039s' />
                <iframe width="560" height="315" src="https://www.youtube.com/embed/_vK3Zscn5W0?start=2039" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                 </div>

        </div>
        </>
    )
}
    export default Project