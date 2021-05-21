import React from "react";

const Home = () => {
    return (
        <div>
            <section>
                <article className="has_line">
                    <div className="article_stripe"></div>
                    <div className="width_limiter main_view">
                        <div className="left_area__main_view">
                            <div className="main_tit">
                                쉽고, 편리한 결제는
                                <br />
                                <em>구매 전환율을 상승</em>시킵니다!
                            </div>
                            <div className="sub_tit">
                                페이플은 사용자에게 쉽고 편리한
                                <br />
                                통합결제 (신용카드, 계좌이체)를 제공함으로써,
                                <br />
                                고객사의 구매 전환율을 높이는 것에 집중합니다.
                            </div>
                        </div>
                        <div className="right_area__main_view">
                            <div className="slider_main_pc_frame">
                                <div className="ratio_setter">
                                    <div className="img_frame"></div>
                                    <div className="swiper-container slider_main_pc">
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <ul className="device_list main_slider_mo">
                                <li className="phone_big">
                                    <div className="swiper-container slider_main_mo">
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide"></div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </article>

                <article>
                    <div className="article_stripe"></div>

                    <div className="tit_box__article width_limiter">
                        <h3 className="main_tit__article fw_md">페이플은 다릅니다!</h3>
                    </div>

                    <div className="width_limiter space_setter__article_content">
                        <ul className="card_icon_thumbnail dp_flex flc_wrap flc_jc_sr">
                            <li>
                                <div className="icon_box"></div>
                                <div className="font fsz_16 fcl_main fw_md has_font_spacer_b_16 align_center">불편함 없는 통합결제</div>
                                <div className="font fsz_12 fcl_txt align_justify">페이플 결제는 회원가입, 앱 설치, 공인인증서 모두 필요없습니다.</div>
                            </li>
                            <li>
                                <div className="icon_box"></div>
                                <div className="font fsz_16 fcl_main fw_md has_font_spacer_b_16 align_center">높은 결제전환율</div>
                                <div className="font fsz_12 fcl_txt align_justify">쉽고 빠른 결제는 사용자를 빠르게 결제완료로 이끕니다.</div>
                            </li>
                            <li>
                                <div className="icon_box">
                                    <img className="icon" src="/html/img/main/cd_icn_03.png" alt="" />
                                </div>
                                <div className="font fsz_16 fcl_main fw_md has_font_spacer_b_16 align_center">쉽고 빠른 개발환경</div>
                                <div className="font fsz_12 fcl_txt align_justify">Javascript, Restful API 만으로도 결제모듈 연동이 가능합니다.</div>
                            </li>
                            <li>
                                <div className="icon_box"></div>
                                <div className="font fsz_16 fcl_main fw_md has_font_spacer_b_16 align_center">모든 플랫폼 지원</div>
                                <div className="font fsz_12 fcl_txt align_justify">페이플의 결제화면은 웹표준을 준수하여 모든 플랫폼에서 이용가능합니다.</div>
                            </li>
                        </ul>
                    </div>
                </article>

                <article className="has_line">
                    <div className="article_stripe"></div>

                    <div className="tit_box__article width_limiter">
                        <h3 className="main_tit__article fw_md">통합결제서비스로 결제전환율을 높이세요.</h3>
                        <h4 className="sub_tit__article">
                            페이플은 사용자의 편리한 결제를 방해하는 모든 요소를 제거한 신용카드 + 계좌이체 통합결제서비스입니다.
                        </h4>
                    </div>

                    <div className="width_limiter space_setter__article_content main_introduce">
                        <div className="left_area__main_introduce">
                            <ul className="device_list tab_ctn_box_img_step">
                                <li className="phone_big">
                                    <div className="area_setter">
                                        <div className="tab_ctn_img_step tab_ctn_img_step_info js_target_tab_ctn_img_step2_info">
                                            <div className="">
                                                <p className="font fsz_12 fcl_main has_font_spacer_b_12 align_center">필요한 결제방식을 선택해주세요.</p>
                                                <p className="font fsz_10 fcl_txt has_font_spacer_b_12 align_center">
                                                    실제 사용된 예시를 살펴 보실수 있습니다.
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className="tab_ctn_img_step js_target_tab_ctn_img_step_2 is_show_ani"
                                            depth="1_1"
                                            onclick="ga('send','event','ex_card_recurring','click','web');"
                                        ></div>
                                        <div
                                            className="tab_ctn_img_step js_target_tab_ctn_img_step_2"
                                            depth="1_2"
                                            onclick="ga('send','event','ex_card_normal','click','web');"
                                        ></div>
                                        <div
                                            className="tab_ctn_img_step js_target_tab_ctn_img_step_2"
                                            depth="2_1"
                                            onclick="ga('send','event','ex_bank_recurring','click','web');"
                                        ></div>
                                        <div
                                            className="tab_ctn_img_step js_target_tab_ctn_img_step_2"
                                            depth="2_2"
                                            onclick="ga('send','event','ex_bank_simple','click','web');"
                                        ></div>
                                        <div
                                            className="tab_ctn_img_step js_target_tab_ctn_img_step_2"
                                            depth="2_3"
                                            onclick="ga('send','event','ex_bank_onetime','click','web');"
                                        ></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="right_area__main_introduce">
                            <div className="card_tab_thumbnail">
                                <div className="btn_box align_left tab_step_module">
                                    <div className="tab_btn_box_step_1">
                                        <div className="btn_tab__note disable_select active js_trigger_tab_btn_step_1" kind="0">
                                            카드결제
                                        </div>
                                        <div className="btn_tab__note disable_select js_trigger_tab_btn_step_1" kind="1">
                                            계좌이체
                                        </div>
                                    </div>
                                    <div className="tab_btn_box_step_2__outter">
                                        <div className="tab_btn_box_step_2 btn_tab__group__outter js_frag_tab_btn_step_2 is_show_ani" kind="0">
                                            <div
                                                className="btn_tab__group disable_select active js_trigger_tab_btn_step_2"
                                                depth="1_1"
                                                onclick="ga('send','event','ex_card_recurring','click','web');"
                                            >
                                                <span>정기결제</span>
                                            </div>
                                            <div
                                                className="btn_tab__group disable_select js_trigger_tab_btn_step_2"
                                                depth="1_2"
                                                onclick="ga('send','event','ex_card_normal','click','web');"
                                            >
                                                <span>앱카드결제</span>
                                            </div>
                                        </div>
                                        <div className="grid grid3 tab_btn_box_step_2 btn_tab__group__outter js_frag_tab_btn_step_2" kind="1">
                                            <div className="grid_inner">
                                                <div
                                                    className="grid_itm btn_tab__group disable_select js_trigger_tab_btn_step_2"
                                                    depth="2_1"
                                                    onclick="ga('send','event','ex_bank_recurring','click','web');"
                                                >
                                                    <span>정기결제</span>
                                                </div>
                                                <div
                                                    className="grid_itm btn_tab__group disable_select js_trigger_tab_btn_step_2"
                                                    depth="2_2"
                                                    onclick="ga('send','event','ex_bank_simple','click','web');"
                                                >
                                                    <span>간편결제</span>
                                                </div>
                                                <div
                                                    className="grid_itm btn_tab__group disable_select js_trigger_tab_btn_step_2"
                                                    depth="2_3"
                                                    onclick="ga('send','event','ex_bank_onetime','click','web');"
                                                >
                                                    <span>일회성결제</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab_ctn_box_step resize">
                                    <div className="tab_ctn_step js_target_tab_ctn_step2_info" kind="0">
                                        <div className="ctn_box">
                                            <div className="font fsz_12 fcl_txt">
                                                <p className="has_font_spacer_b_12 fcl_bold fw_bd">필요한 결제방식을 선택해주세요.</p>
                                                <div className="btn__include_contents js_trigger_tab_btn_step_2" depth="1_1">
                                                    <b className="fcl_bold">정기결제</b>
                                                    <br />
                                                    정기구독, 정기배송을 위한 결제입니다.
                                                    <span className="material-icons y_center">arrow_forward_ios</span>
                                                </div>
                                                <div className="btn__include_contents js_trigger_tab_btn_step_2" depth="1_2">
                                                    <b className="fcl_bold">앱카드결제</b>
                                                    <br />
                                                    온라인 쇼핑몰을 위한 앱카드결제입니다.
                                                    <span className="material-icons y_center">arrow_forward_ios</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab_ctn_step js_target_tab_ctn_step2_info" kind="1">
                                        <div className="ctn_box">
                                            <div className="font fsz_12 fcl_txt">
                                                <p className="has_font_spacer_b_12 fcl_bold fw_bd">필요한 결제방식을 선택해주세요.</p>
                                                <div className="btn__include_contents js_trigger_tab_btn_step_2" depth="2_1">
                                                    <b className="fcl_bold">정기결제</b>
                                                    <br />
                                                    정기구독, 정기배송을 위한 결제입니다.
                                                    <span className="material-icons y_center">arrow_forward_ios</span>
                                                </div>
                                                <div className="btn__include_contents js_trigger_tab_btn_step_2" depth="2_2">
                                                    <b className="fcl_bold">간편결제</b>
                                                    <br />
                                                    재방문 회원을 위한 비밀번호 간편결제입니다.
                                                    <span className="material-icons y_center">arrow_forward_ios</span>
                                                </div>
                                                <div className="btn__include_contents js_trigger_tab_btn_step_2" depth="2_3">
                                                    <b className="fcl_bold">일회성결제</b>
                                                    <br />
                                                    공인인증서없는 실시간계좌이체입니다.
                                                    <span className="material-icons y_center">arrow_forward_ios</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab_ctn_step js_target_tab_ctn_step_2 is_show_ani" depth="1_1">
                                        <div className="ctn_box">
                                            <div className="font fsz_12 fcl_txt">
                                                <p className="has_font_spacer_b_12 fcl_bold fw_bd">정기배송, 유료멤버십 서비스를 운영 중이신가요?</p>
                                                편리한 페이플 카드정기결제로 결제전환율을 높여보세요.
                                                <br />
                                                사용자가 최초 카드등록만하면 이후 결제부터는 가맹점에서 결제요청할 수 있습니다.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab_ctn_step js_target_tab_ctn_step_2" depth="1_2">
                                        <div className="ctn_box">
                                            <div className="font fsz_12 fcl_txt">
                                                <p className="has_font_spacer_b_12 fcl_bold fw_bd">정기결제와 함께 앱카드결제가 필요하신가요?</p>한 번의
                                                결제모듈 연동개발로 정기결제, 앱카드결제 모두 도입이 가능합니다.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab_ctn_step js_target_tab_ctn_step_2" depth="2_1">
                                        <div className="ctn_box">
                                            <div className="font fsz_12 fcl_txt">
                                                <p className="has_font_spacer_b_12 fcl_bold fw_bd">정기배송, 유료멤버십 서비스를 운영 중이신가요?</p>
                                                편리한 페이플 계좌정기결제로 결제전환율을 높여보세요.
                                                <br />
                                                사용자가 최초 계좌등록만하면 이후 결제부터는 가맹점에서 결제요청할 수 있습니다.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab_ctn_step js_target_tab_ctn_step_2" depth="2_2">
                                        <div className="ctn_box">
                                            <div className="font fsz_12 fcl_txt">
                                                <p className="has_font_spacer_b_12 fcl_bold fw_bd">자체 간편결제가 필요하신가요?</p>
                                                페이플이 고객사만의 간편결제가 되어 드립니다.
                                                <br />
                                                고객사의 회원이 최초 계좌등록만 하면 이후에는 결제비밀번호만으로 결제가 완료됩니다.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab_ctn_step js_target_tab_ctn_step_2" depth="2_3">
                                        <div className="ctn_box">
                                            <div className="font fsz_12 fcl_txt">
                                                <p className="has_font_spacer_b_12 fcl_bold fw_bd">PG의 실시간계좌이체는 너무 불편하시죠?</p>
                                                페이플 일회성 계좌이체는 앱 설치, 공인인증서가 필요없기 때문에 사용자가 편리하게 계좌이체로 결제할 수 있는
                                                서비스입니다.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="thumbnail js_target_thumbnail"></div>
                            </div>
                        </div>
                    </div>
                </article>

                <article>
                    <div className="article_stripe"></div>

                    <div className="tit_box__article width_limiter">
                        <h3 className="main_tit__article fw_md">고객사의 결제전환율 상승은 곧 페이플의 목표입니다.</h3>
                        <h4 className="sub_tit__article">
                            오로지 고객사의 결제전환율 상승에 집중한 결과<em></em> <b>금융규제 샌드박스 “혁신금융서비스” 1차에 지정</b>되었습니다.
                        </h4>
                    </div>

                    <div className="width_limiter space_setter__article_content">
                        <ul className="card_name_plate dp_flex flc_al_start flc_jc_sr flc_wrap">
                            <li className="fli_bs_48">
                                <div className="pin"></div>
                                <div className="info_box">
                                    <div className="fsz_12 fw_md has_font_spacer_b_04">금융위원회 금융규제샌드박스 혁신금융서비스 1차</div>
                                    <div className="fsz_10 fcl_sub has_font_spacer_y_12">2019년 4월</div>
                                </div>
                                <div className="bg_box">
                                    <div className="ratio_setter_name_plate"></div>
                                </div>
                            </li>
                            <li className="fli_bs_48">
                                <div className="pin"></div>
                                <div className="info_box">
                                    <div className="fsz_12 fw_md has_font_spacer_b_04">NH디지털챌린지플러스 1기</div>
                                    <div className="fsz_10 fcl_sub has_font_spacer_y_12">2019년 4월</div>
                                </div>
                                <div className="bg_box">
                                    <div className="ratio_setter_name_plate"></div>
                                </div>
                            </li>
                            <li className="fli_bs_48">
                                <div className="pin"></div>
                                <div className="info_box">
                                    <div className="fsz_12 fw_md has_font_spacer_b_04">한국핀테크지원센터 리더스랩 3기</div>
                                    <div className="fsz_10 fcl_sub has_font_spacer_y_12">2019년 1월</div>
                                </div>
                                <div className="bg_box">
                                    <div className="ratio_setter_name_plate"></div>
                                </div>
                            </li>
                            <li className="fli_bs_48">
                                <div className="pin"></div>
                                <div className="info_box">
                                    <div className="fsz_12 fw_md has_font_spacer_b_04">우리은행 위비핀테크랩 3기</div>
                                    <div className="fsz_10 fcl_sub has_font_spacer_y_12">2018년 4월</div>
                                </div>
                                <div className="bg_box">
                                    <div className="ratio_setter_name_plate"></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </article>

                <article className="has_line">
                    <div className="article_stripe"></div>

                    <div className="tit_box__article width_limiter">
                        <h3 className="main_tit__article fw_md">이미 많은 고객사가 페이플과 함께하고 있습니다.</h3>
                        <h4 className="sub_tit__article">
                            페이플은 쉽고 빠른 개발환경과 편리한 통합결제, 그리고 높은 결제전환율을 경험한 많은 고객사와 함께 성장하고 있습니다.
                        </h4>
                    </div>

                    <div className="item_list__random">
                        <div className="flow_slider_inner">
                            <ul className="util_inner">
                                <li>
                                    <p className="company_name">패스트파이브</p>
                                </li>
                                <li>
                                    <p className="company_name">민다</p>
                                </li>
                                <li>
                                    <p className="company_name">TWIP</p>
                                </li>
                                <li>
                                    <p className="company_name">세탁특공대</p>
                                </li>
                                <li>
                                    <p className="company_name">포스타입</p>
                                </li>
                                <li>
                                    <p className="company_name">오픈갤러리</p>
                                </li>
                                <li>
                                    <p className="company_name">셀러허브</p>
                                </li>
                                <li>
                                    <p className="company_name">니콘내콘</p>
                                </li>
                                <li>
                                    <p className="company_name">비엘티특허법률사무소</p>
                                </li>
                                <li>
                                    <p className="company_name">모두의클래스</p>
                                </li>
                                <li>
                                    <p className="company_name">자버</p>
                                </li>
                                <li>
                                    <p className="company_name">뷰티메이커스</p>
                                </li>
                                <li>
                                    <p className="company_name">비디오몬스터</p>
                                </li>
                                <li>
                                    <p className="company_name">클로젯셰어</p>
                                </li>
                                <li>
                                    <p className="company_name">소미</p>
                                </li>
                                <li>
                                    <p className="company_name">온쉬핑</p>
                                </li>
                                <li>
                                    <p className="company_name">렌고</p>
                                </li>
                                <li>
                                    <p className="company_name">알바체크</p>
                                </li>
                                <li>
                                    <p className="company_name">동글</p>
                                </li>
                                <li>
                                    <p className="company_name">오마이카</p>
                                </li>
                                <li>
                                    <p className="company_name">리스틀리</p>
                                </li>
                                <li>
                                    <p className="company_name">픽홈</p>
                                </li>
                                <li>
                                    <p className="company_name">기프티스타</p>
                                </li>
                                <li>
                                    <p className="company_name">딥서치</p>
                                </li>
                                <li>
                                    <p className="company_name">기프티윈</p>
                                </li>
                                <li>
                                    <p className="company_name">크라우드픽</p>
                                </li>
                                <li>
                                    <p className="company_name">투어라이브</p>
                                </li>
                                <li>
                                    <p className="company_name">스넥</p>
                                </li>
                                <li>
                                    <p className="company_name">크런치 프라이스</p>
                                </li>
                                <li>
                                    <p className="company_name">코드잇</p>
                                </li>
                                <li>
                                    <p className="company_name">에어서플라이</p>
                                </li>
                                <li>
                                    <p className="company_name">뉴지스탁</p>
                                </li>
                                <li>
                                    <p className="company_name">민다</p>
                                </li>
                                <li>
                                    And
                                    <br />
                                    You..
                                </li>
                            </ul>
                            <ul className="util_inner">
                                <li>
                                    <p className="company_name">패스트파이브</p>
                                </li>
                                <li>
                                    <p className="company_name">민다</p>
                                </li>
                                <li>
                                    <p className="company_name">TWIP</p>
                                </li>
                                <li>
                                    <p className="company_name">세탁특공대</p>
                                </li>
                                <li>
                                    <p className="company_name">포스타입</p>
                                </li>
                                <li>
                                    <p className="company_name">오픈갤러리</p>
                                </li>
                                <li>
                                    <p className="company_name">셀러허브</p>
                                </li>
                                <li>
                                    <p className="company_name">니콘내콘</p>
                                </li>
                                <li>
                                    <p className="company_name">비엘티특허법률사무소</p>
                                </li>
                                <li>
                                    <p className="company_name">모두의클래스</p>
                                </li>
                                <li>
                                    <p className="company_name">자버</p>
                                </li>
                                <li>
                                    <p className="company_name">뷰티메이커스</p>
                                </li>
                                <li>
                                    <p className="company_name">비디오몬스터</p>
                                </li>
                                <li>
                                    <p className="company_name">클로젯셰어</p>
                                </li>
                                <li>
                                    <p className="company_name">소미</p>
                                </li>
                                <li>
                                    <p className="company_name">온쉬핑</p>
                                </li>
                                <li>
                                    <p className="company_name">렌고</p>
                                </li>
                                <li>
                                    <p className="company_name">알바체크</p>
                                </li>
                                <li>
                                    <p className="company_name">동글</p>
                                </li>
                                <li>
                                    <p className="company_name">오마이카</p>
                                </li>
                                <li>
                                    <p className="company_name">리스틀리</p>
                                </li>
                                <li>
                                    <p className="company_name">픽홈</p>
                                </li>
                                <li>
                                    <p className="company_name">기프티스타</p>
                                </li>
                                <li>
                                    <p className="company_name">딥서치</p>
                                </li>
                                <li>
                                    <p className="company_name">기프티윈</p>
                                </li>
                                <li>
                                    <p className="company_name">크라우드픽</p>
                                </li>
                                <li>
                                    <p className="company_name">투어라이브</p>
                                </li>
                                <li>
                                    <p className="company_name">스넥</p>
                                </li>
                                <li>
                                    <p className="company_name">크런치 프라이스</p>
                                </li>
                                <li>
                                    <p className="company_name">코드잇</p>
                                </li>
                                <li>
                                    <p className="company_name">에어서플라이</p>
                                </li>
                                <li>
                                    <p className="company_name">뉴지스탁</p>
                                </li>
                                <li>
                                    <p className="company_name">민다</p>
                                </li>
                                <li>
                                    And
                                    <br />
                                    You..
                                </li>
                            </ul>
                        </div>
                    </div>
                </article>

                <article>
                    <div className="article_stripe"></div>

                    <div className="tit_box__article width_limiter">
                        <h3 className="main_tit__article fw_md">페이플은 다양한 투자사와 함께하고 있습니다.</h3>
                        <h4 className="sub_tit__article">페이플은 신뢰를 바탕으로 다양한 투자사와 함께합니다.</h4>
                    </div>

                    <div className="width_limiter space_setter__article_content">
                        <ul className="card_res_row_thumbnail">
                            <li>
                                <div className="thumb_box"></div>
                                <div className="ctn_box">
                                    <h4 className="font fsz_10 fcl_sub has_font_spacer_b_8">투자사</h4>
                                    <h2 className="font fsz_16 fcl_main fw_md has_font_spacer_b_12">500스타트업</h2>
                                    <h3 className="font fsz_12 fcl_txt align_justify">
                                        500스타트업은 전 세계에 퍼져 있는 유능한 창업가들을 발굴하고 글로벌 스타트업 생태계의 성장과 창업가의 성공에 기여하는
                                        것을 목표로 하고 있습니다.
                                        <br />
                                        페이플은 2020년 <b>500스타트업</b>으로부터 투자유치를 하였습니다.
                                    </h3>
                                    <div className="btn_box has_spacer_t_24 align_left"></div>
                                </div>
                            </li>

                            <li>
                                <div className="thumb_box"></div>
                                <div className="ctn_box">
                                    <h4 className="font fsz_10 fcl_sub has_font_spacer_b_8">투자사</h4>
                                    <h2 className="font fsz_16 fcl_main fw_md has_font_spacer_b_12">스트롱벤처스</h2>
                                    <h3 className="font fsz_12 fcl_txt align_justify">
                                        스트롱 벤처스는 젊고 열정있는 창업가들이 ‘단단한’ 벤처기업을 (Strong Ventures) 만들 수 있도록 종자 투자금 및 멘토링을
                                        제공하는 창투사 입니다.
                                        <br />
                                        페이플은 2019년 <b>스트롱벤처스</b>로부터 투자유치를 하였습니다.
                                    </h3>
                                    <div className="btn_box has_spacer_t_24 align_left"></div>
                                </div>
                            </li>

                            <li>
                                <div className="thumb_box"></div>
                                <div className="ctn_box">
                                    <h4 className="font fsz_10 fcl_sub has_font_spacer_b_8">투자사</h4>
                                    <h2 className="font fsz_16 fcl_main fw_md has_font_spacer_b_12">프라이머</h2>
                                    <h3 className="font fsz_12 fcl_txt align_justify">
                                        프라이머는 창업가들의 DNA를 새로운 잠재 창업자들에게 전달하고 복제하여, 후배 창업가들의 성공을 돕는 국내 최초의 스타트업
                                        액셀러레이터입니다. <br />
                                        페이플은 <b>프라이머 Season 5 - Batch 14</b>에 선발되었습니다.
                                    </h3>
                                    <div className="btn_box has_spacer_t_24 align_left"></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </article>

                <article className="has_line">
                    <div className="article_stripe"></div>

                    <div className="tit_box__article width_limiter">
                        <h3 className="main_tit__article fw_md">언론에서 전하는 페이플</h3>
                    </div>

                    <div className="width_limiter space_setter__article_content">
                        <ul className="card_list__news">
                            <li>
                                <div className="gutter">
                                    <div className="bg_box">
                                        <div className="ratio_setter_hd"></div>
                                    </div>

                                    <div className="info_box">
                                        <p className="font fsz_10 fcl_sub has_font_spacer_b_4 txt_ellipsis">2019.05.19 News1</p>
                                        <p className="font fsz_16 fw_md fcl_bold has_font_spacer_b_20 txt_ellipsis">
                                            혁신금융 선도하는 핀테크업체, 제2의 '토스' 나올까
                                        </p>
                                        <p className="font fsz_12 fcl_txt has_font_spacer_m_20 txt_threeline align_justify">
                                            김현철 대표는 앞서 NHN한국사이버결제 등 전자결제업체 등에서 근무했던 경력이 'SMS 인증방식의 온라인 간편결제 서비스'
                                            출시에 큰 도움이 됐다고 설명했다. 현행 전자금융거래법시행령에 따라 출금동의를 얻을 수 있는 방법은 서면·전자서명·ARS
                                            방식 등으로 한정돼 있는데, 이에 불편함을 느낀 김 대표가 문자인증 방식을 생각해낸 것이다.
                                        </p>
                                        <div className="align_right"></div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="gutter">
                                    <div className="bg_box">
                                        <div className="ratio_setter_hd"></div>
                                    </div>

                                    <div className="info_box">
                                        <p className="font fsz_10 fcl_sub has_font_spacer_b_4 txt_ellipsis">2020.09.28 파이낸셜뉴스</p>
                                        <p className="font fsz_16 fw_md fcl_bold has_font_spacer_b_20 txt_ellipsis">
                                            온라인결제 스타트업 ‘페이플’ 10억 투자유치
                                        </p>
                                        <p className="font fsz_12 fcl_txt has_font_spacer_m_20 txt_threeline align_justify">
                                            신용카드, 계좌이체 통합 온라인결제(PG) 서비스를 운영 중인 핀테크 스타트업 페이플이 글로벌 벤처캐피털 500스타트업
                                            등으로부터 총 10억여원 규모의 투자를 유치했다고 28일 밝혔다.
                                        </p>
                                        <div className="align_right"></div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="gutter">
                                    <div className="bg_box">
                                        <div className="ratio_setter_hd"></div>
                                    </div>

                                    <div className="info_box">
                                        <p className="font fsz_10 fcl_sub has_font_spacer_b_4 txt_ellipsis">2019.06.24 아이뉴스24</p>
                                        <p className="font fsz_16 fw_md fcl_bold has_font_spacer_b_20 txt_ellipsis">사소한 불편함을 해결해 나가는 게 혁신</p>
                                        <p className="font fsz_12 fcl_txt has_font_spacer_m_20 txt_threeline align_justify">
                                            "작은 업체라 하더라도 그 잠재성은 아무도 모르잖아요. 스타트업과 같이 성장하고 싶었습니다. 페이플은 스타트업을 위한
                                            스타트업인 셈이죠."
                                        </p>
                                        <div className="align_right"></div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="gutter">
                                    <div className="bg_box">
                                        <div className="ratio_setter_hd"></div>
                                    </div>

                                    <div className="info_box">
                                        <p className="font fsz_10 fcl_sub has_font_spacer_b_4 txt_ellipsis">2019.08.26 헤럴드경제</p>
                                        <p className="font fsz_16 fw_md fcl_bold has_font_spacer_b_20 txt_ellipsis">
                                            SMS 인증방식 계좌간편결제…페이플은 어떤 회사?
                                        </p>
                                        <p className="font fsz_12 fcl_txt has_font_spacer_m_20 txt_threeline align_justify">
                                            페이플은 계좌이체 방식의 간편결제 서비스를 제공한다. 계좌이체 출금동의 때 자동응답서비스(ARS) 방식의 번거로움을 줄인
                                            ‘문자메시지(SMS) 방식 출금동의 서비스’로 금융위원회 제1차 혁신금융서비스에 지정됐다. 계좌연결 시간을 1분 가량
                                            단축시켰다. 최종소비자(결제자)도 편하고, 고객사인 전자상거래업체(판매자) 입장에서는 결제이탈률을 크게 낮추는
                                            요인이다.
                                        </p>
                                        <div className="align_right"></div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </article>
            </section>
        </div>
    );
};

export default Home;
