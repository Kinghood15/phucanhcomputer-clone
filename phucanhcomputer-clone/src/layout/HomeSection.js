import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ImgBanner from '../image/31_Juld6713ee4c355241a62111c7340d0eaa7.jpg';
// import ActiveTap from './Event';
import ImgTopSaleOff from '../image/TopSaleOff/43820_yoga_slim_9_14_ha2.jpg';
import ImgAcer from '../image/Product/250_42810_nitro_series_an515_2020_ha1.jpg';
import ImgNews from '../image/News/120_9214_banner_bvkm_sinh_vien_t9_2021.jpg';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
const HomeSection = (props) =>{

    return(
        <HomeSection2>
            <TopSaleOff id="TopSaleOff">
                <Bannner>
                    <Link to='./'>
                        <img src={ImgBanner} alt="Happy Birthday sale off"/>
                    </Link>
                </Bannner>
                <Tabs defaultActiveKey="ProductHot" id="uncontrolled-tab-example TabsProduct" style={{backgroundColor:"white",maxHeight:"50px"}}>
                    <Tab eventKey="ProductHot" title="Sản phẩm hot">
                        <ProductList>
                            <Tap2>
                                <TopDeal>
                                    <ProductTopDeal className='container'>
                                        <Link to=''>
                                            <BoxItemSaleOff>
                                                <img src={ImgTopSaleOff} alt="news"/>
                                                <LargeDiscount className='large-discount'></LargeDiscount>
                                            </BoxItemSaleOff>
                                        </Link>
                                        <ContentProductTopDeal>
                                            <Link to=''>
                                                <h5>Laptop Lenovo Yoga Slim 9 14ITL5 82D1004JVN (Core i7 1165G7/ RAM 16Gb/ 1Tb SSD/ 14" 4K IPS 500nits/ Touch/ VGA ON/ Win10/ Shadow Black)</h5>
                                                <PriceItemTopDealSell className='PriceItemTopDealSell'>49.690.000 VNĐ</PriceItemTopDealSell>
                                                <PriceItemTopDeal className='PriceItemTopDeal'>49.990.000 VNĐ</PriceItemTopDeal>
                                            </Link>
                                            <ProductDescriptionTopDeal className='ProductDescriptionTopDeal'>
                                                - Bộ VXL:	Core i7 1165G7 2.8Ghz Up to 4.7Ghz-12Mb
                                                - Cạc đồ họa:	Intel Iris Xe Graphics
                                                - Bộ nhớ:	16Gb
                                                - Ổ cứng/ Ổ đĩa quang:	1Tb SSD/ Không có
                                            </ProductDescriptionTopDeal>
                                        </ContentProductTopDeal>
                                    </ProductTopDeal>
                                </TopDeal>
                                <ListDeal>
                                    <ul>
                                        <li>
                                            <ProductDeal className='container'>
                                                <Link to=''>
                                                    <img src={ImgAcer} alt="laptop-acer"/>
                                                    <LargeDiscountItem className='large-discount'></LargeDiscountItem>
                                                    <BoxNew className="box-new">New</BoxNew>
                                                </Link>
                                                <ContentProductItemDeal>
                                                    <Link>
                                                        <TitleItemDeal className='TitleItemDeal'>
                                                            Laptop Acer Nitro series AN515 56 51N4 NH.QBZSV.002 (Core i5-11300H/8Gb/512Gb SSD/15.6" FHD/GTX1650-4GB/Win10/Black)
                                                        </TitleItemDeal>
                                                        <PriceItemDeal className='PriceItemDeal'>
                                                            <i>Giá niêm yết: </i>
                                                            23.990.000 ₫ 
                                                        </PriceItemDeal>
                                                        <PriceItemDealSell className='PriceItemDealSell'>
                                                            <i>Giá Bán: </i>
                                                            21.490.000 ₫
                                                        </PriceItemDealSell>
                                                        <div>
                                                            <CheckItem className='CheckItem'>Có hàng</CheckItem>
                                                            <Cart className='Cart'> Giỏ hàng</Cart>
                                                        </div>
                                                    </Link>
                                                </ContentProductItemDeal>
                                            </ProductDeal>
                                        </li>
                                        <li>
                                            <ProductDeal className='container'>
                                                <Link to=''>
                                                    <img src={ImgAcer} alt="laptop-acer"/>
                                                    <LargeDiscountItem className='large-discount'></LargeDiscountItem>
                                                    <BoxNew className="box-new">New</BoxNew>
                                                </Link>
                                                <ContentProductItemDeal>
                                                    <Link>
                                                        <TitleItemDeal className='TitleItemDeal'>
                                                            Laptop Acer Nitro series AN515 56 51N4 NH.QBZSV.002 (Core i5-11300H/8Gb/512Gb SSD/15.6" FHD/GTX1650-4GB/Win10/Black)
                                                        </TitleItemDeal>
                                                        <PriceItemDeal className='PriceItemDeal'>
                                                            <i>Giá niêm yết: </i>
                                                            23.990.000 ₫ 
                                                        </PriceItemDeal>
                                                        <PriceItemDealSell className='PriceItemDealSell'>
                                                            <i>Giá Bán: </i>
                                                            21.490.000 ₫
                                                        </PriceItemDealSell>
                                                        <div>
                                                            <CheckItem className='CheckItem'>Có hàng</CheckItem>
                                                            <Cart className='Cart'> Giỏ hàng</Cart>
                                                        </div>
                                                    </Link>
                                                </ContentProductItemDeal>
                                            </ProductDeal>
                                        </li>
                                        <li>
                                            <ProductDeal className='container'>
                                                <Link to=''>
                                                    <img src={ImgAcer} alt="laptop-acer"/>
                                                    <LargeDiscountItem className='large-discount'></LargeDiscountItem>
                                                    <BoxNew className="box-new">New</BoxNew>
                                                </Link>
                                                <ContentProductItemDeal>
                                                    <Link>
                                                        <TitleItemDeal className='TitleItemDeal'>
                                                            Laptop Acer Nitro series AN515 56 51N4 NH.QBZSV.002 (Core i5-11300H/8Gb/512Gb SSD/15.6" FHD/GTX1650-4GB/Win10/Black)
                                                        </TitleItemDeal>
                                                        <PriceItemDeal className='PriceItemDeal'>
                                                            <i>Giá niêm yết: </i>
                                                            23.990.000 ₫ 
                                                        </PriceItemDeal>
                                                        <PriceItemDealSell className='PriceItemDealSell'>
                                                            <i>Giá Bán: </i>
                                                            21.490.000 ₫
                                                        </PriceItemDealSell>
                                                        <div>
                                                            <CheckItem className='CheckItem'>Có hàng</CheckItem>
                                                            <Cart className='Cart'> Giỏ hàng</Cart>
                                                        </div>
                                                    </Link>
                                                </ContentProductItemDeal>
                                            </ProductDeal>
                                        </li>
                                        <li>
                                            <ProductDeal className='container'>
                                                <Link to=''>
                                                    <img src={ImgAcer} alt="laptop-acer"/>
                                                    <LargeDiscountItem className='large-discount'></LargeDiscountItem>
                                                    <BoxNew className="box-new">New</BoxNew>
                                                </Link>
                                                <ContentProductItemDeal>
                                                    <Link>
                                                        <TitleItemDeal className='TitleItemDeal'>
                                                            Laptop Acer Nitro series AN515 56 51N4 NH.QBZSV.002 (Core i5-11300H/8Gb/512Gb SSD/15.6" FHD/GTX1650-4GB/Win10/Black)
                                                        </TitleItemDeal>
                                                        <PriceItemDeal className='PriceItemDeal'>
                                                            <i>Giá niêm yết: </i>
                                                            23.990.000 ₫ 
                                                        </PriceItemDeal>
                                                        <PriceItemDealSell className='PriceItemDealSell'>
                                                            <i>Giá Bán: </i>
                                                            21.490.000 ₫
                                                        </PriceItemDealSell>
                                                        <div>
                                                            <CheckItem className='CheckItem'>Có hàng</CheckItem>
                                                            <Cart className='Cart'> Giỏ hàng</Cart>
                                                        </div>
                                                    </Link>
                                                </ContentProductItemDeal>
                                            </ProductDeal>
                                        </li>
                                        <li>
                                            <ProductDeal className='container'>
                                                <Link to=''>
                                                    <img src={ImgAcer} alt="laptop-acer"/>
                                                    <LargeDiscountItem className='large-discount'></LargeDiscountItem>
                                                    <BoxNew className="box-new">New</BoxNew>
                                                </Link>
                                                <ContentProductItemDeal>
                                                    <Link>
                                                        <TitleItemDeal className='TitleItemDeal'>
                                                            Laptop Acer Nitro series AN515 56 51N4 NH.QBZSV.002 (Core i5-11300H/8Gb/512Gb SSD/15.6" FHD/GTX1650-4GB/Win10/Black)
                                                        </TitleItemDeal>
                                                        <PriceItemDeal className='PriceItemDeal'>
                                                            <i>Giá niêm yết: </i>
                                                            23.990.000 ₫ 
                                                        </PriceItemDeal>
                                                        <PriceItemDealSell className='PriceItemDealSell'>
                                                            <i>Giá Bán: </i>
                                                            21.490.000 ₫
                                                        </PriceItemDealSell>
                                                        <div>
                                                            <CheckItem className='CheckItem'>Có hàng</CheckItem>
                                                            <Cart className='Cart'> Giỏ hàng</Cart>
                                                        </div>
                                                    </Link>
                                                </ContentProductItemDeal>
                                            </ProductDeal>
                                        </li>
                                    </ul>
                                </ListDeal>
                        </Tap2>
                    </ProductList>
                    </Tab>
                    <Tab eventKey="ProductNew" title="Sản phẩm mới">
                        
                    </Tab>
                </Tabs> 
            
            </TopSaleOff>
            <News>
                <BoxListNews>
                    <TitleNews>
                        <i className="far fa-newspaper"></i>
                        Tin Khuyến mại
                        <Link to='./'>
                            Xem tất cả &gt;&gt;
                        </Link>
                    </TitleNews>
                    <ul>
                        <li>
                            <Link to='./'>
                                <img className='news-a-left'src={ImgNews} alt="news"/>
                                <span className='news-a-right'>
                                    <h3>[Khuyến mại] Siêu khuyến mãi - Ưu đãi lớn dành cho Sinh viên</h3>
                                    <span className='news-a-right-time'>31-08-2021, 2:47 pm</span>
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to='./'>
                                <img className='news-a-left'src={ImgNews} alt="news"/>
                                <span className='news-a-right'>
                                    <h3>[Khuyến mại] Siêu khuyến mãi - Ưu đãi lớn dành cho Sinh viên</h3>
                                    <span className='news-a-right-time'>31-08-2021, 2:47 pm</span>
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to='./'>
                                <img className='news-a-left'src={ImgNews} alt="news"/>
                                <span className='news-a-right'>
                                    <h3>[Khuyến mại] Siêu khuyến mãi - Ưu đãi lớn dành cho Sinh viên</h3>
                                    <span className='news-a-right-time'>31-08-2021, 2:47 pm</span>
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to='./'>
                                <img className='news-a-left'src={ImgNews} alt="news"/>
                                <span className='news-a-right'>
                                    <h3>[Khuyến mại] Siêu khuyến mãi - Ưu đãi lớn dành cho Sinh viên</h3>
                                    <span className='news-a-right-time'>31-08-2021, 2:47 pm</span>
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to='./'>
                                <img className='news-a-left'src={ImgNews} alt="news"/>
                                <span className='news-a-right'>
                                    <h3>[Khuyến mại] Siêu khuyến mãi - Ưu đãi lớn dành cho Sinh viên</h3>
                                    <span className='news-a-right-time'>31-08-2021, 2:47 pm</span>
                                </span>
                            </Link>
                        </li>
                    </ul>
                </BoxListNews>
                <BoxListNews>
                    <TitleNews>
                        <i className="far fa-newspaper"></i>
                        Tin Review, Công nghệ
                        <Link to='./'>
                            Xem tất cả &gt;&gt;
                        </Link>
                    </TitleNews>
                    <ul>
                        <li>
                            <Link to='./'>
                                <img className='news-a-left'src={ImgNews} alt="news"/>
                                <span className='news-a-right'>
                                    <h3>[Khuyến mại] Siêu khuyến mãi - Ưu đãi lớn dành cho Sinh viên</h3>
                                    <span className='news-a-right-time'>31-08-2021, 2:47 pm</span>
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to='./'>
                                <img className='news-a-left'src={ImgNews} alt="news"/>
                                <span className='news-a-right'>
                                    <h3>[Khuyến mại] Siêu khuyến mãi - Ưu đãi lớn dành cho Sinh viên</h3>
                                    <span className='news-a-right-time'>31-08-2021, 2:47 pm</span>
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to='./'>
                                <img className='news-a-left'src={ImgNews} alt="news"/>
                                <span className='news-a-right'>
                                    <h3>[Khuyến mại] Siêu khuyến mãi - Ưu đãi lớn dành cho Sinh viên</h3>
                                    <span className='news-a-right-time'>31-08-2021, 2:47 pm</span>
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to='./'>
                                <img className='news-a-left'src={ImgNews} alt="news"/>
                                <span className='news-a-right'>
                                    <h3>[Khuyến mại] Siêu khuyến mãi - Ưu đãi lớn dành cho Sinh viên</h3>
                                    <span className='news-a-right-time'>31-08-2021, 2:47 pm</span>
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to='./'>
                                <img className='news-a-left'src={ImgNews} alt="news"/>
                                <span className='news-a-right'>
                                    <h3>[Khuyến mại] Siêu khuyến mãi - Ưu đãi lớn dành cho Sinh viên</h3>
                                    <span className='news-a-right-time'>31-08-2021, 2:47 pm</span>
                                </span>
                            </Link>
                        </li>
                    </ul>
                </BoxListNews>
            </News>
        </HomeSection2>
    );
}

const HomeSection2 = styled.div`
    clear:both;
    width:90vw;
    max-width:90vw;
    margin: auto;
    padding-top:50px;
`;

const TopSaleOff = styled.div`
    float:left;
    width:1200px;
    max-width:1200px;
    ul{
        li{

        }
    }
`;
const Bannner = styled.div`
    
`;
const ProductList = styled.div`
    width:1200px;
    max-width:1200px;
    border: 0.5px solid #dddddd;
`;

const Tap2 = styled.div`
    width:1200px;
    max-width:1200px;
    border: 0.5px solid #dddddd;
    display:flex;
`;
const TopDeal = styled.div`
    width:500px;
    max-width:500px;
    height:700px;
    max-height:700px;
    ul{
        height:50px;
        background-color:white;
        margin-top:20px;
        li{
            height:100%;
        }
    }
`;
const ProductTopDeal= styled.div`
    padding:10px;
    height:100%;
    border:0.5px solid #dddddd;
    position:relative;
    img{
        width:478px;
        height:478px;
        
    }
`;
const BoxItemSaleOff = styled.div`

`;
const LargeDiscount = styled.span`
    width:80px;
    height:80px;
    border-radius: 100%;
    background-color:red;
    position:absolute;
    left:10px;
    top:10px;
`;
const ContentProductTopDeal = styled.div`
    text-align:left;
    color:black;
    a{
        text-decoration:none;
    }
    h5{
        text-align: justify;
        color: #333;
    }
`;
const PriceItemTopDealSell = styled.span`
    font-weight:700;
    text-align:left;
    font-color:red;
    font-size:25px;
    color:#b00;
`;
const PriceItemTopDeal= styled.span`
    text-decoration: line-through;
    color:#888;
    padding-left:3px;
`;
const ProductDescriptionTopDeal= styled.span`
    float:left;
    text-align:left;
    
`;
const ListDeal = styled.div`
    display:flex;
    ul{
        max-width:700px;
        width:700px;
        max-height:700px;
        margin:0;
        padding:0;
        display:flex;
        align-content:strech;
        flex-wrap:wrap;
        list-style:none;
        li{
            position: relative;
            max-width:calc(100% /3);
            max-height:350px;
            border: 0.5px solid #dddddd;
        }
    }
`;



const ContentProductItemDeal = styled.div`
    text-align:left;
    font-size:13px;
    a{
        text-decoration:none;
        color: #333;
    }
`;
const LargeDiscountItem = styled.span`
    width:50px;
    height:50px;
    border-radius: 100%;
    background-color:#d00000;
    position:absolute;
    left:5px;
    top:5px;
`;
const BoxNew =styled.span`
    width:60px;
    height:30px;
    color:white;
    background-color:#0a62ac;
    position:absolute;
    border-radius: 5px;
    right:5px;
    top:5px;
`;
const TitleItemDeal = styled.span`
    float:left;
    padding-bottom:5px;
`;
const PriceItemDealSell = styled.span`
    font-size:14px;
    float:left;
    color:red;
    i{
        font-size:13px;
        font-weight:400;
    }
`;
const PriceItemDeal = styled.span`
    font-size:14px;
    float:left;
    i{
        font-size:13px;
        font-weight:400;
    }
`;
const CheckItem = styled.span`
    width:50%;
    float:left;
    color:green;
`;
const Cart = styled.span`
    width: 50%;
    float:right;
    text-align:right;
    color:red;
`;
const ProductDeal= styled.div`
`;


const News = styled.div`
    max-width:28%;
    width:28%;
    float:right;
`;
const BoxListNews =styled.div`
    ul{
        max-height:100%;
        padding: 5px 0;
        list-style:none;
        li{
            margin-top:10px;
            margin-bottom:10px;
            max-width:100%;
            max-height:85px;
            height:60px;
            a{
                width:100%;
                color:black;
                text-decoration:none;
                img{
                    width:90px;
                    height:50px;
                    float:left;
                }
                span{
                    float:left;
                    width:380px;
                    padding-left:5px;
                    h3{
                        text-align:left;
                        font-size:15px;
                        margin-bottom:3px;
                    }
                    span{
                        font-size:12px;
                        color:gray;
                        text-align:left;

                    }
                }
            }
        }
    }
`;
const TitleNews = styled.div`
    max-width:100%;
    height:38px;
    max-height:38px;
    color:white;
    line-height:35px;
    background-color:#365899;
    text-align:left;
    i{
        padding:5px;
    }
    a{
        float:right;
        padding-right:10px;
        color:white;
        text-decoration:none;
    }
`;
export default HomeSection;