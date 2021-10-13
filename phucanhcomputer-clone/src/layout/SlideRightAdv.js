import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../bootstrap-5.0.2-dist/bootstrap-5.0.2-dist/css/bootstrap.css';
import Slide1 from '../image/SlideShow/Slide1.jpg';
import Slide2 from '../image/SlideShow/Slide2.jpg';
import Slide3 from '../image/SlideShow/Slide3.jpg';
import Slide4 from '../image/SlideShow/Slide4.jpg';
import Slide5 from '../image/SlideShow/Slide5.jpg';
import Slide6 from '../image/SlideShow/Slide6.jpg';
import Slide7 from '../image/SlideShow/Slide7.jpg';
import Slide8 from '../image/SlideShow/Slide8.jpg';
import Slide9 from '../image/SlideShow/Slide9.jpg';
import Slide10 from '../image/SlideShow/Slide10.jpg';
import Slide11 from '../image/SlideShow/Slide11.jpg';
import Slide12 from '../image/SlideShow/Slide12.jpg';
import Slide13 from '../image/SlideShow/Slide13.jpg';
import Slide14 from '../image/SlideShow/Slide14.jpg';
import Slide15 from '../image/SlideShow/Slide15.jpg';
import CTuyenDung from '../image/Tuyendung_350x195copy.jpg';
import Carousel from 'react-bootstrap/Carousel';
import CSachTuyendung from '../image/14_Sep713a1ea1778f80116bec292b7aa455a2.jpg';
const SlideShow = (props) => {
    return(
        <SlideAdv>
            <Slide id="slide">
                <Carousel>
                    <Carousel.Item interval={5000}>
                        <img className="d-block w-100"  style={{widht:"100%",border:"0.5px solid gray"}} src={Slide1} alt="QUÉT VNPAY - GIẢM NGAY 5%" />
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img className="d-block w-100"  style={{widht:"100%",border:"0.5px solid gray"}} src={Slide2} alt="LÀM VIỆC TẠI GIA - NIỀM VUI NHÂN BA" />
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img className="d-block w-100"  style={{widht:"100%",border:"0.5px solid gray"}} src={Slide3} alt="LÀM ĐỈNH CHƠI CHẤT - NHẸ KHỎE CHUẨN GRAM" />
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img className="d-block w-100"  style={{widht:"100%",border:"0.5px solid gray"}} src={Slide4} alt=" ASUS Zenbook 13 OLED (UX325EA)" />
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img className="d-block w-100"  style={{widht:"100%",border:"0.5px solid gray"}} src={Slide5} alt="SẮM GAMING NITRO 5 ĐỈNH - NHẬN CODE GAME KHỦNG" />
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img className="d-block w-100"  style={{widht:"100%",border:"0.5px solid gray"}} src={Slide6} alt="ĐẲNG CẤP TRÊN TAY - NHẬN NGAY QUÀ CHẤT" />
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img className="d-block w-100"  style={{widht:"100%",border:"0.5px solid gray"}} src={Slide7} alt="THÊM TUỔI MỚI - QUÀ PHƠI PHỚI" />
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img className="d-block w-100"  style={{widht:"100%",border:"0.5px solid gray"}} src={Slide8} alt="GAMING SIÊU CHẤT - GIÁ LUÔN TỐT NHẤT" />
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img className="d-block w-100"  style={{widht:"100%",border:"0.5px solid gray"}} src={Slide9} alt="BIG SALE - MÀN HÌNH GIEND" />
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img className="d-block w-100"  style={{widht:"100%",border:"0.5px solid gray"}} src={Slide10} alt="BUILD PC CHẤT - RINH GẤP QUÀ TO" />
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img className="d-block w-100"  style={{widht:"100%",border:"0.5px solid gray"}} src={Slide11} alt="SẮM GALAXY GIÁ MÊ LY" />
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img className="d-block w-100"  style={{widht:"100%",border:"0.5px solid gray"}} src={Slide12} alt="MUA DESKTOP - AIO LENOVO" />
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img className="d-block w-100"  style={{widht:"100%",border:"0.5px solid gray"}} src={Slide13} alt="GIẢM GIÁ PHẦN MỀM - VẬN HÀNH CỰC ÊM" />
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img className="d-block w-100"  style={{widht:"100%",border:"0.5px solid gray"}} src={Slide14} alt="HỘI NGHỊ DỄ DÀNG - NHẬN NGAY QUÀ VÀNG" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100"  style={{widht:"100%",border:"0.5px solid gray"}} src={Slide15} alt="CHÍNH SÁCH TRẢ GÓP 0%" />
                    </Carousel.Item>
                </Carousel>
                <CarouselCaption>
                    <BoxCaption>
                        <p></p>
                    </BoxCaption>
                    <BoxCaption>
                        <p></p>
                    </BoxCaption>
                    <BoxCaption>
                        <p></p>
                    </BoxCaption>
                    <BoxCaption>
                        <p></p>
                    </BoxCaption>
                </CarouselCaption>
            </Slide>
            <AdvBanner>
                <AdvContent>
                    <iframe max-width="29vw" width="100%" height="215" src="https://www.youtube.com/embed/m43hW0ZledM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </AdvContent>
                <Link to="./">
                <AdvContent>
                    <img style={{maxWidth: "29vw",width:"100%", height:"auto"}} src={CTuyenDung} alt="Tuyendung_350x195copy.jpg" />
                </AdvContent>
                </Link>
                <Link to=''>
                    <img style={{maxWidth: "29vw",width:"100%", height:"auto",paddingTop:"5px"}} src={CSachTuyendung} alt="Chinh sach tuyen dung"/>
                </Link>
            </AdvBanner>
        </SlideAdv>
    );
} 

const SlideAdv = styled.div`
    max-width:90vw;
    width:90vw;
    margin:auto;
`;
const Slide = styled.div`
    max-width:850px;
    width:850px;
    margin-left: 310px;
    height:720px;
    float:left;
    margin-top:-5px;
`;
const CarouselCaption = styled.div`
    height:90px;
    display:flex;
    align-self:flex-start;
    border:0.5px solid gray;
`;
const BoxCaption = styled.div`
    border:0.5px solid gray;
    width:25%;
    height:100%;
`;
const AdvBanner = styled.div`
    width:30%;  
    max-width: 30%;
    max-height:720px;
    float:right;
    padding-top:-25px;
    color:black;
    margin-top:-5px;
    a{
        width:100%;
    }
`;
const AdvContent = styled.div`
    width:100%;
`;
export default SlideShow;