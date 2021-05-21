import React from "react";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import NotFound from "./components/NotFound/NotFound";
import { Route, Link, Switch } from "react-router-dom";
import img01 from "./assets/fsc_gov_wh_02.png";
import img02 from "./assets/fsec_gov_wh.png";
import img03 from "./assets/logo_full_white.svg";
// import styles from "./styles.css";
import "./style.min.css";


function App() {
    return (
        <div id="root">
            <div id="header">
                <header>
                    <div className="header-bg">
                        <div className="scroll_nav">
                            <div className="percent"></div>
                        </div>
                    </div>
                    <div className="width_limiter dp_flex flc_al_center">
                        <div className="header_logo_box">
                            <Link to="/">홈</Link>
                        </div>
                        <div className="header_menu_area dp_flex">
                            <div className="header_menu_box dp_flex">
                                <nav className="header_menu">
                                    <div className="div js_trigger_mo_menu">
                                        <div className="txt">
                                            <i className="material-icons"> keyboard_arrow_left </i>
                                            <div className="icon_text">카드결제</div>
                                        </div>
                                        <div className="border"></div>
                                    </div>
                                    <div className="header_sub_menu_box">
                                        <ul className="space_setter">
                                            <li>정기결제</li>
                                            <li>앱카드결제</li>
                                        </ul>
                                    </div>
                                </nav>
                                <nav className="header_menu">
                                    <div className="div js_trigger_mo_menu">
                                        <div className="txt">
                                            <i className="material-icons"> keyboard_arrow_left </i>
                                            <div className="icon_text">계좌이체</div>
                                        </div>
                                        <div className="border"></div>
                                    </div>
                                    <div className="header_sub_menu_box">
                                        <ul className="space_setter">
                                            <li>정기결제</li>
                                            <li>간편결제</li>
                                            <li>일회성결제</li>
                                        </ul>
                                    </div>
                                </nav>
                                <nav className="header_menu">
                                    <div className="txt">
                                        <div className="icon_text">URL 링크결제</div>
                                    </div>
                                    <div className="border"></div>
                                </nav>
                                <nav className="header_menu">
                                    <div className="txt">
                                        <div className="icon_text">결제 체험하기</div>
                                    </div>
                                    <div className="border"></div>
                                </nav>
                            </div>

                            <div className="header_menu_box dp_flex right">
                                <nav className="header_menu">
                                    <div className="txt ">
                                        <Link to="/contact" className="icon_text has-highlighter px-4">
                                            Contact
                                        </Link>
                                    </div>
                                    <div className="border"></div>
                                </nav>
                                <nav className="header_menu">
                                    <div className="txt">
                                        <div className="icon_text">결제내역 조회</div>
                                    </div>
                                    <div className="border"></div>

                                    <div className="tool_tip tool_tip__bottom cursor_default js_tg_header_tool_tip has_ani_bounce_bottom">
                                        페이플에서 진행된 결제 내역이 궁금하신가요?
                                        <br />
                                        여기서 확인하세요
                                    </div>
                                </nav>
                            </div>
                        </div>
                        <div className="header_menu_icn y_center">
                            <div className="bar bar1"></div>
                            <div className="bar bar2"></div>
                            <div className="bar bar3"></div>
                            <div className="bar bar4"></div>
                        </div>
                    </div>
                </header>
            </div>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/contact" component={Contact} />
                <Route path="*" component={NotFound} />
            </Switch>

            <footer>
                <div className="footer-top-area">
                    <div className="width-inner dp_flex flc_al_start flc_wrap">
                        <div className="footer-prize dp_flex flc_al_center flc_jc_center flc_wrap">
                            <div className="img-box fli_bs_50">
                                <img src={img01} className="res" alt="" />
                            </div>
                            <div className="info_box fli_bs_50">
                                <div className="fsz_08 fcl_sub ">2019년 4월</div>
                                <div className="fsz_13 fcl_sub_300 fw_md">혁신금융서비스 선정</div>
                            </div>
                        </div>
                        <div className="footer-prize dp_flex flc_al_center flc_jc_center flc_wrap">
                            <div className="img-box fli_bs_50">
                                <img src={img02} className="res" alt="" />
                            </div>
                            <div className="info_box fli_bs_50">
                                <div className="fsz_08 fcl_sub ">2020년 1월</div>
                                <div className="fsz_13 fcl_sub_300 fw_md">핀테크 기업 보안점검 통과</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-middle-area">
                    <div className="width-inner">
                        <div className="footer-info">전자금융거래 이용약관</div>
                        <div className="footer-info">혁신금융서비스 이용약관</div>
                        <div className="footer-info cl fw_bd">개인정보처리방침</div>
                    </div>
                </div>
                <div className="footer-bottom-area">
                    <div className="width-inner">
                        <div className="footer-logo-container-m02 dp_flex flc_wrap flc_jc_sb">
                            <div className="footer-logo">
                                <img src={img03} className="res" alt="" />
                            </div>

                            <button className="fcl_sub_300 fsz_12 btn-footer-info js-trigger--footer-info-for-mobile">
                                사업자정보
                                <span className="material-icons fsz_20">keyboard_arrow_down</span>
                            </button>
                        </div>

                        <div className="dp_flex flc_wrap flc_al_start">
                            <div className="footer-bottom-left m-02 fli_bs_50">
                                <div className="footer-info-box m-02">
                                    <div className="footer-info tit-footer-info">INFORMATION</div>
                                    <div className="footer-info-spt"></div>
                                    <div className="footer-info">상호 : ㈜페이플</div>
                                    <div className="footer-info">대표자 : 김현철</div>
                                    <div className="footer-info-spt"></div>
                                    <div className="footer-info">사업자번호 : 331-87-01049</div>
                                    <div className="footer-info">전자금융업 등록번호 : 02-004-00145</div>
                                    <div className="footer-info-spt"></div>
                                    <div className="footer-info">주소 : 06220 서울시 강남구 테헤란로34길 14, 302호 (역삼동, 정인빌딩)</div>
                                </div>
                            </div>
                            <div className="footer-bottom-right fli_bs_50">
                                <div className="footer-cs-box m-02">
                                    <div className="footer-info tit-footer-info">고객센터</div>
                                    <div className="footer-info-spt"></div>
                                    <div className="footer-info">전화 : 1522-5013</div>
                                    <div className="footer-info">이메일 : help@payple.kr</div>
                                    <div className="footer-info-spt"></div>
                                    <div className="footer-info">운영시간 : 10시~12시, 13시~18시 (주말, 공휴일 휴무)</div>
                                </div>
                            </div>
                        </div>

                        <div className="footer-copy m-02">© Payple Inc. All rights reserved.</div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
