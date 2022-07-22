import React from 'react';
import {useEffect} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Project.css'
import ReactPlayer from 'react-player'
import { FaRegHandPointRight } from "react-icons/fa";




function ProjectCoffee (){
    useEffect(() => {
        document.querySelector(".navB").style.display="block"
      }, []);
    return(
        <>
        <div className='pC '>
        <Link to="/project" style={{ textDecoration: 'none' }} className="title" >
               <img className='Ptitle' src={require('../img/PROJECT.png')} alt="" ></img>
               </Link> 
                <div className='coffeeHouse pC1'>
                    <div className='H1C'>
                        <img className='HLogo' src={require('../img/好室咖啡拷貝.png')} alt="" ></img>
                        <div className='CT1'>
                            <p>連鎖咖啡店</p>
                            <p>簡介 : </p>
                            <p>在瀏覽多間知名的連鎖咖啡的官網後，我們探討現代人的生活型態，在緊湊的步調、消費的習慣改變，以及年輕人追求的流性趨勢。因此我們思考了一間好的並且有未來性發展的咖啡店需以什麼樣的經營模式而讓他的知名度越來越響亮。並且相比全球知名的星巴克又有什麼不同的特色和創意。</p>
                            <p>此網站由 6 人團隊運用前端及後端技術， 供使用者加入會員、購買商品、餐飲訂購、文章欣賞及找尋店家。另設有後台供管理員修改店家相關資訊。</p>
                            <br/>
                            <p>設計理念：</p>
                            <ul >
                            <li>&ensp;以寵物友善咖啡廳最為主要風格</li>
                            <li>&ensp;顧客可以在官網中訂購餐點，不會跳轉至其他外送平台</li>
                            <li>&ensp;迅速且流暢的購物流程</li>
                            <li>&ensp;簡潔的視覺介面，凸顯商品的特色與亮點</li>
                            <li>&ensp;網路動線清楚明瞭</li>
                            <li>&ensp;不只是間咖啡廳，也像為顧客提供相關咖啡資訊</li>
                            </ul>
                            <br/>
                            <p>主要負責內容：</p>
                            <ul>
                            <li>網頁UI/UX設計</li>
                            <li>品牌設計(顏色、LOGO 和風格）</li>
                            <li>以RWD響應式網頁呈現畫面及資料，前端畫面設計及串接API資料部分</li>
                            <li>後端配合前端畫面進行後端串接API設計與開發，並搭配資料庫預存程序處理相關資料</li>        
                            </ul>
                        </div>
                    </div>
                    <h2 className='PHouseT'>前台頁面</h2>
                    <div className='H2C'>
                        <div className='Video'>
                        {/* <ReactPlayer url='https://www.youtube.com/watch?v=_vK3Zscn5W0&t=2039s' /> */}
                        <iframe width="600" height="430" src="https://www.youtube.com/embed/_vK3Zscn5W0?start=2039" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className='wv'></iframe>
                        <iframe width="500" height="250" src="https://www.youtube.com/embed/_vK3Zscn5W0?start=2039" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className='mv'></iframe>
                        <iframe width="300" height="150" src="https://www.youtube.com/embed/_vK3Zscn5W0?start=2039" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className='smv'></iframe>
                        </div>
                        <div className='CT2'>
                        <div className='list1'>

                            <div className='CT21'>
                                <h4>商品首頁</h4>
                                <ul>
                                <li>商品列表</li>
                                <li>商品分類</li>
                                <li>快速加入購物車</li>
                                <li>收藏商品</li>
                                </ul>
                            </div>
                            <br/>
                            <div className='CT21'>
                                <h4>商品詳細頁面</h4>
                                <ul>
                                <li>加入購物車</li>
                                <li>隨機推薦商品</li>
                                </ul>
                            </div>
                            <br/>
                            <div className='CT21'>
                                <h4>會員區</h4>
                                <ul>
                                <li>使用過的優惠券刪除</li>
                                <li>購買完成後，新增紅利點數</li>
                                <li>稍後付款功能</li>
                                </ul>
                            </div>
                        </div>
                            <div className='CT21 list2'>
                                <h4>購物車</h4>
                                <ul>

                                <li>確認商品</li>
                                <ul className='detaillist'>
                                <li>確認購買的商品</li>
                                <li>新增刪除數量</li>
                                <li>即時更新小計金額</li>
                                <li>連接會員優惠券使用</li>
                                <li>連接會員紅利點數使用</li>
                                </ul>
                                <li>填寫資料</li>
                                <ul className='detaillist'>
                                <li>宅配運費選擇</li>
                                <li>資料填寫驗證</li>
                                <li>收件人與購買人相同自動填寫功能</li>
                                </ul>
                                <li>交易付款</li>
                                <ul className='detaillist'>
                                <li>好室咖啡信用卡頁面</li>
                                <li>依照不同卡別，卡色會變更</li>
                                </ul>
                                </ul>
                            </div>
                            
                        </div>
                     </div>
                     <h2 className='PHouseT'>後台頁面</h2>
                    <div className='H3C'>
                        <div className='Video'>
                        <iframe width="600" height="430" src="https://www.youtube.com/embed/XY5wPt5TFJQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className='wv'></iframe>
                        <iframe width="500" height="250" src="https://www.youtube.com/embed/XY5wPt5TFJQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className='mv'></iframe>
                        <iframe width="300" height="150" src="https://www.youtube.com/embed/XY5wPt5TFJQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className='smv'></iframe>
                        </div>
                        <div className='CT3'>
                            <div className='CT21 list1'>
                                <h4>商品管理</h4>
                                <br/>
                                <p>•商品項目清單</p>
                                <p>•上／下架商品</p>
                                <p>•新增商品</p>
                                <p>•修改商品</p>
                            </div>
                            <div className='CT21 list2'>
                                <h4>訂單管理</h4>
                                <br/>
                                <p>•訂單清單</p>
                                <p>•可更新訂單狀態</p>
                            </div>

                        </div>
                     </div>
                 </div>
                <Link to="/project" style={{ textDecoration: 'none' }}><div className="backbtn"><p>BACK</p></div></Link>
        </div>
        </>
    )
}
    export default ProjectCoffee