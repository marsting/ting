import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Project.css'
import ReactPlayer from 'react-player'
import { FaRegHandPointRight } from "react-icons/fa";




function ProjectCoffee (){
    return(
        <>
        <div className='container '>
                <img className='Ptitle' src={require('../img/PROJECT.png')} alt="" ></img>
                {/* <div className='PSelect'>
                  <div>
                  <h2 className=''><FaRegHandPointRight/>COFFEE HOUSE</h2>
                  <img className='SLOGO' src={require('../img/好室咖啡拷貝.png')} alt="" ></img>
                  </div>
                  <div>
                  <h2 className='BurnerT'><FaRegHandPointRight/>BURNER</h2>
                  <img className='BLOGO' src={require('../img/burner.png')} alt="" ></img>
                  </div>
                </div> */}
                <div className='coffeeHouse'>
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
                    <h2 className='PHouseT'>前台頁面</h2>
                    <div className='H2C'>
                        <div className='Video'>
                        {/* <ReactPlayer url='https://www.youtube.com/watch?v=_vK3Zscn5W0&t=2039s' /> */}
                        <iframe width="800" height="450" src="https://www.youtube.com/embed/_vK3Zscn5W0?start=2039" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className='CT2'>
                            <div className='CT21'>
                                <h4>商品首頁SHOP</h4>
                                <br/>
                                <p>•商品列表</p>
                                <p>•商品分類</p>
                                <p>•快速加入購物車</p>
                                <p>•收藏商品</p>
                            </div>
                            <div className='CT21'>
                                <h4>商品詳細頁面</h4>
                                <br/>
                                <p>•加入購物車</p>
                                <p>•隨機推薦商品</p>
                            </div>
                            <div className='CT21'>
                                <h4>購物車</h4>
                                <br/>
                                <p>•確認商品</p>
                                <p>&ensp;-確認購買的商品</p>
                                <p>&ensp;-新增刪除數量</p>
                                <p>&ensp;-即時更新小計金額</p>
                                <p>&ensp;-連接會員優惠券使用</p>
                                <p>&ensp;-連接會員紅利點數使用</p>
                                <p>•填寫資料</p>
                                <p>&ensp;-宅配運費選擇</p>
                                <p>&ensp;-資料填寫驗證</p>
                                <p>&ensp;-收件人與購買人相同自動填寫功能</p>
                                <p>•交易付款</p>
                                <p>&ensp;-好室咖啡信用卡頁面</p>
                                <p>&ensp;-依照不同卡別，卡色會變更</p>
                            </div>
                            <div className='CT21'>
                                <h4>會員區</h4>
                                <br/>
                                <p>•使用過的優惠券刪除</p>
                                <p>•購買完成後，新增紅利點數</p>
                                <p>•稍後付款功能</p>
                            </div>
                        </div>
                     </div>
                     <h2 className='PHouseT'>後台頁面</h2>
                    <div className='H3C'>
                        <div className='Video'>
                        <iframe width="800" height="450" src="https://www.youtube.com/embed/XY5wPt5TFJQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className='CT3'>
                            <div className='CT21'>
                                <h4>商品管理</h4>
                                <br/>
                                <p>•商品項目清單</p>
                                <p>•上／下架商品</p>
                                <p>•新增商品</p>
                                <p>•修改商品</p>
                            </div>
                            <div className='CT21'>
                                <h4>訂單管理</h4>
                                <br/>
                                <p>•訂單清單</p>
                                <p>•可更新訂單狀態</p>
                            </div>

                        </div>
                     </div>
                 </div>
                <Link to="/project" style={{ textDecoration: 'none' }}><div className="backP"><p>BACK</p></div></Link>
        </div>
        </>
    )
}
    export default ProjectCoffee