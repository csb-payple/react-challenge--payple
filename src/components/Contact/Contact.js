import React from "react";
import "./Contact.css";

const Contact = () => {
    return (
        <div>
            <section>
                <article className="has_line">
                    <div className="article_stripe"></div>
                    <div className="tit_box__article width_limiter">
                        <h3 className="main_tit__article">서비스 가입신청</h3>
                        <div className="sub_tit__article--contact dp_flex">
                            <div className="sub_tit__article">
                                페이플 PG서비스 가입을 위해
                                <br />
                                아래 입력란에 내용을 입력해주세요.
                                <br />
                                <br />
                                입력하신 내용은 담당자 확인 후<br />
                                최대한 빠르고 친절하게 안내해드립니다.
                            </div>
                        </div>
                    </div>

                    <div className="width_limiter pt-32 align_center">
                        <div className="flex_area jc-c">
                            <div className="info_component">
                                <form id="contractForm">
                                    <div className="align_center fsz_20 fw_md pb-20">
                                        <img className="logo_in_text__lg" src="/html/img/common/logo_full.svg" alt="" />
                                        서비스 가입신청
                                    </div>
                                    <div className="tit--has-deco fsz-12 mt-24 mb-8 fw_md">사업자 정보</div>
                                    <div className="form_box__twoline">
                                        <div className="tit__form_box fw_md">
                                            상호명(법인명)
                                            <span className="icn_required">*</span>
                                        </div>
                                        <div className="ctn__form_box">
                                            <div className="input">
                                                <input
                                                    type="text"
                                                    id="com_name"
                                                    name="com_name"
                                                    pattern="[()가-힣]*"
                                                    required
                                                    placeholder="상호명(법인명)을 입력해주세요."
                                                    autocomplete="new-password"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form_box__twoline">
                                        <div className="tit__form_box fw_md">
                                            사업자 구분
                                            <span className="icn_required">*</span>
                                        </div>
                                        <div className="ctn__form_box">
                                            <label className="radio">
                                                <input type="radio" name="com_type" value="" />
                                                <div className="icon"></div>
                                                개인
                                            </label>
                                            <label className="radio">
                                                <input type="radio" name="com_type" value="" />
                                                <div className="icon"></div>
                                                개인사업자
                                            </label>
                                            <label className="radio">
                                                <input type="radio" name="com_type" value="" checked="" />
                                                <div className="icon"></div>
                                                법인
                                            </label>
                                            <label className="radio">
                                                <input type="radio" name="com_type" value="" />
                                                <div className="icon"></div>
                                                비영리단체
                                            </label>
                                        </div>
                                    </div>
                                    <div className="form_box__twoline js-tg--business_type">
                                        <div className="tit__form_box fw_md">
                                            사업자번호
                                            <span className="icn_required">*</span>
                                        </div>
                                        <div className="ctn__form_box">
                                            <div className="input">
                                                <input type="text" name="com_reg_number" required placeholder="123-45-67890" autocomplete="new-password" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tit--has-deco fsz-12 mt-24 mb-8 fw_md mt-20">서비스 정보</div>
                                    <div className="form_box__twoline">
                                        <div className="tit__form_box fw_md">
                                            서비스명(브랜드명)
                                            <span className="icn_required">*</span>
                                            <div className="info__form_box--tit mt-8">
                                                <label className="check ma-0 fsz_sm">
                                                    <input type="checkbox" name="same_as_com_name" value="" className="js-tr-same-as-com-name" />
                                                    <div className="icon"></div>
                                                    상호명과 동일한 경우 체크
                                                </label>
                                            </div>
                                        </div>
                                        <div className="ctn__form_box">
                                            <div className="input">
                                                <input
                                                    type="text"
                                                    id=""
                                                    name=""
                                                    className="js-tg-same-as-com-name"
                                                    required
                                                    placeholder="서비스명(브랜드명)을 입력해주세요."
                                                    autocomplete="new-password"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form_box__twoline">
                                        <div className="tit__form_box fw_md">
                                            결제 페이지 URL
                                            <span className="icn_required">*</span>
                                            <div className="info__form_box--tit mt-8">홈페이지 URL, 상품 페이지 URL, 서비스 페이지 URL 등</div>
                                        </div>
                                        <div className="ctn__form_box">
                                            <div className="input">
                                                <input
                                                    type="text"
                                                    id="com_website"
                                                    name="com_website"
                                                    required
                                                    placeholder="www.payple.kr"
                                                    autocomplete="new-password"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form_box__twoline">
                                        <div className="tit__form_box fw_md">
                                            결제 상품 및 서비스
                                            <span className="icn_required">*</span>
                                            <div className="info__form_box--tit mt-8">예) 의류, 식품 정기배송, 콘텐츠 정기결제 등</div>
                                        </div>
                                        <div className="ctn__form_box">
                                            <div className="input">
                                                <input
                                                    type="text"
                                                    id="com_goods"
                                                    name="com_goods"
                                                    required
                                                    placeholder="결제 상품 및 서비스를 입력해주세요."
                                                    autocomplete="new-password"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tit--has-deco fsz-12 mt-24 mb-8 fw_md mt-20">담당자 정보</div>
                                    <div className="form_box__twoline">
                                        <div className="tit__form_box fw_md">
                                            담당자명 / 직책<span className="icn_required">*</span>
                                        </div>
                                        <div className="ctn__form_box">
                                            <div className="input">
                                                <input
                                                    type="text"
                                                    id="manager_name"
                                                    name="manager_name"
                                                    placeholder="홍길동 / 팀장"
                                                    required
                                                    autocomplete="new-password"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form_box__twoline">
                                        <div className="tit__form_box fw_md">
                                            담당자 휴대전화 번호<span className="icn_required">*</span>
                                        </div>
                                        <div className="ctn__form_box">
                                            <div className="input">
                                                <input
                                                    type="text"
                                                    id="manager_hp"
                                                    name="manager_hp"
                                                    placeholder="010-1234-5678"
                                                    required
                                                    autocomplete="new-password"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form_box__twoline">
                                        <div className="tit__form_box fw_md">
                                            담당자 이메일 주소<span className="icn_required">*</span>
                                        </div>
                                        <div className="ctn__form_box">
                                            <div className="input">
                                                <input
                                                    type="text"
                                                    id="manager_email"
                                                    name="manager_email"
                                                    placeholder="send.me@payple.kr"
                                                    required
                                                    autocomplete="new-password"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tit--has-deco fsz-12 mt-24 mb-8 fw_md mt-20">기타</div>
                                    <div className="form_box__twoline">
                                        <div className="tit__form_box fw_md">문의사항</div>
                                        <div className="ctn__form_box">
                                            <div className="textarea">
                                                <textarea
                                                    id="etc"
                                                    name="etc"
                                                    placeholder="구체적인 문의내용을 기입해주세요.&#10;예) PG 도입 및 변경 문의, 개발연동 문의, 제휴문의, 수수료 문의 등"
                                                    className=""
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form_box__twoline">
                                        <div className="tit__form_box fw_md">
                                            페이플 방문 계기
                                            <div className="info__form_box--tit mt-8">페이플을 알게되신 경로를 선택해주세요.</div>
                                        </div>
                                        <div className="ctn__form_box">
                                            <label className="radio">
                                                <input type="radio" name="recommanded_by" value="" />
                                                <div className="icon"></div>
                                                지인소개
                                            </label>
                                            <label className="radio">
                                                <input type="radio" name="recommanded_by" value="" />
                                                <div className="icon"></div>
                                                포털 검색
                                            </label>
                                            <label className="radio">
                                                <input type="radio" name="recommanded_by" value="" />
                                                <div className="icon"></div>
                                                검색 광고
                                            </label>
                                            <label className="radio">
                                                <input type="radio" name="recommanded_by" value="" />
                                                <div className="icon"></div>
                                                SNS광고
                                            </label>
                                            <label className="radio">
                                                <input type="radio" name="recommanded_by" value="" />
                                                <div className="icon"></div>
                                                기타
                                            </label>
                                        </div>
                                    </div>
                                    <div className="btn_box has_space_bottom align_right">
                                        <div className="btn cl_main btn_rounded btn_modal" id="contractSend">
                                            가입신청 하기
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </div>
    );
};

export default Contact;
