import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import OwlCarousel from 'react-owl-carousel';
import './SlideProductCategory.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BoxListCategoryProduct from './BoxListCategoryProduct';
import ImgSlideLeft1 from '../image/SlideShow/SlideProductCategory/Slide1.jpg';
import ImgSlideLeft2 from '../image/SlideShow/SlideProductCategory/Slide2.jpg';
import ImgSlideLeft3 from '../image/SlideShow/SlideProductCategory/Slide3.jpg';
import ImgSlideRight1 from '../image/SlideShow/SlideProductCategory/Slide21.jpg';
import ImgSlideRight2 from '../image/SlideShow/SlideProductCategory/Slide22.jpg';
import ImgSlideRight3 from '../image/SlideShow/SlideProductCategory/Slide23.jpg';
import ImgDell from '../image/Product/250_44395_dell_vostro_5410_ha2.jpg';
import {useContext,useEffect} from 'react';
import {SupplierContext} from '../contexts/SupplierContext';
import Spinner from 'react-bootstrap/Spinner';
const SlideProductCategory = (props) => {
    const {
        supplierState:{
            suppliers,
            supplierLoading
        },
        getSuppliersClient
    } = useContext(SupplierContext);
    useEffect(() => getSuppliersClient(), []);
    let bodysupplier = null;
    if(supplierLoading){
        return(
            <Spinner animation="border" role="status" size="sm" style={{margin:"auto",marginTop:"200px"}}>
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        );
    }
    else if(suppliers.length > 0) {
        bodysupplier = (
            suppliers.map(supplier =>(
                <li><Link to=""><img style={{width:"100px",height:"auto"}} src={supplier.ImageLogoSupplier} alt={supplier.nameSupplier} /></Link></li>
            ))
        );
    }

    return (
        <container>
            <Locationbar>

            </Locationbar>
            <SlideShow>
                <SlideLeft>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={ImgSlideLeft1}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={ImgSlideLeft2}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={ImgSlideLeft3}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </SlideLeft>
                <SlideRight>
                    <Carousel>
                        <Carousel.Item >
                            <img
                                className="d-block w-100"
                                src={ImgSlideRight1}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img
                                className="d-block w-100"
                                src={ImgSlideRight2}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={ImgSlideRight3}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </SlideRight>
            </SlideShow>
            <BrandBox>
                <TitleBrand>
                    <h3>Thương hiệu</h3>
                </TitleBrand>
                <ul>
                    <OwlCarousel className='owl-theme' loop autoplay margin={10} items={5} nav>
                        {bodysupplier}
                    </OwlCarousel>
                </ul>
            </BrandBox>
            <SlideProductBox>
                <Tabs defaultActiveKey="laptopconceptd" transition={false} id="noanim-tab-example" className="mb-5">
                    <Tab eventKey="laptopconceptd" title="Laptop Concept">
                        <OwlCarousel className='owl-theme' loop autoplay margin={10} items={6} nav>
                            <div className='item'>
                                <BoxProductItem>
                                    <ProductDeal className='container'>
                                        <Link to='/'>
                                            <img src={ImgDell} alt="Laptop Dell"/>
                                            <LargeDiscountItem className='large-discount'></LargeDiscountItem>
                                            <BoxNew className="box-new">New</BoxNew>
                                            <BoxInstallment className="box-new">Trả góp 0%</BoxInstallment>
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
                                            </Link>
                                        </ContentProductItemDeal>
                                    </ProductDeal>
                                    <BoxOverlayProductItem>
                                        <RadiusButtonCard>
                                            <Link to='/' className="btn" alt="btn btn-card">Thêm vào giỏ hàng</Link>
                                        </RadiusButtonCard>
                                    </BoxOverlayProductItem>
                                </BoxProductItem>
                            </div>
                            <div className='item'>
                                <BoxProductItem>
                                    <ProductDeal className='container'>
                                        <Link to='/'>
                                            <img src={ImgDell} alt="Laptop Dell"/>
                                            <LargeDiscountItem className='large-discount'></LargeDiscountItem>
                                            <BoxNew className="box-new">New</BoxNew>
                                            <BoxInstallment className="box-new">Trả góp 0%</BoxInstallment>
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
                                            </Link>
                                        </ContentProductItemDeal>
                                    </ProductDeal>
                                    <BoxOverlayProductItem>
                                        <RadiusButtonCard>
                                            <Link to='/' className="btn" alt="btn btn-card">Thêm vào giỏ hàng</Link>
                                        </RadiusButtonCard>
                                    </BoxOverlayProductItem>
                                </BoxProductItem>
                            </div>
                            <div className='item'>
                                <BoxProductItem>
                                    <ProductDeal className='container'>
                                        <Link to='/'>
                                            <img src={ImgDell} alt="Laptop Dell"/>
                                            <LargeDiscountItem className='large-discount'></LargeDiscountItem>
                                            <BoxNew className="box-new">New</BoxNew>
                                            <BoxInstallment className="box-new">Trả góp 0%</BoxInstallment>
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
                                            </Link>
                                        </ContentProductItemDeal>
                                    </ProductDeal>
                                    <BoxOverlayProductItem>
                                        <RadiusButtonCard>
                                            <Link to='/' className="btn" alt="btn btn-card">Thêm vào giỏ hàng</Link>
                                        </RadiusButtonCard>
                                    </BoxOverlayProductItem>
                                </BoxProductItem>
                            </div>
                            <div className='item'>
                                <BoxProductItem>
                                    <ProductDeal className='container'>
                                        <Link to='/'>
                                            <img src={ImgDell} alt="Laptop Dell"/>
                                            <LargeDiscountItem className='large-discount'></LargeDiscountItem>
                                            <BoxNew className="box-new">New</BoxNew>
                                            <BoxInstallment className="box-new">Trả góp 0%</BoxInstallment>
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
                                            </Link>
                                        </ContentProductItemDeal>
                                    </ProductDeal>
                                    <BoxOverlayProductItem>
                                        <RadiusButtonCard>
                                            <Link to='/' className="btn" alt="btn btn-card">Thêm vào giỏ hàng</Link>
                                        </RadiusButtonCard>
                                    </BoxOverlayProductItem>
                                </BoxProductItem>
                            </div>
                            <div className='item'>
                                <BoxProductItem>
                                    <ProductDeal className='container'>
                                        <Link to='/'>
                                            <img src={ImgDell} alt="Laptop Dell"/>
                                            <LargeDiscountItem className='large-discount'></LargeDiscountItem>
                                            <BoxNew className="box-new">New</BoxNew>
                                            <BoxInstallment className="box-new">Trả góp 0%</BoxInstallment>
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
                                            </Link>
                                        </ContentProductItemDeal>
                                    </ProductDeal>
                                    <BoxOverlayProductItem>
                                        <RadiusButtonCard>
                                            <Link to='/' className="btn" alt="btn btn-card">Thêm vào giỏ hàng</Link>
                                        </RadiusButtonCard>
                                    </BoxOverlayProductItem>
                                </BoxProductItem>
                            </div>
                            <div className='item'>
                                <BoxProductItem>
                                    <ProductDeal className='container'>
                                        <Link to='/'>
                                            <img src={ImgDell} alt="Laptop Dell"/>
                                            <LargeDiscountItem className='large-discount'></LargeDiscountItem>
                                            <BoxNew className="box-new">New</BoxNew>
                                            <BoxInstallment className="box-new">Trả góp 0%</BoxInstallment>
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
                                            </Link>
                                        </ContentProductItemDeal>
                                    </ProductDeal>
                                    <BoxOverlayProductItem>
                                        <RadiusButtonCard>
                                            <Link to='/' className="btn" alt="btn btn-card">Thêm vào giỏ hàng</Link>
                                        </RadiusButtonCard>
                                    </BoxOverlayProductItem>
                                </BoxProductItem>
                            </div>
                            <div className='item'>
                                <BoxProductItem>
                                    <ProductDeal className='container'>
                                        <Link to='/'>
                                            <img src={ImgDell} alt="Laptop Dell"/>
                                            <LargeDiscountItem className='large-discount'></LargeDiscountItem>
                                            <BoxNew className="box-new">New</BoxNew>
                                            <BoxInstallment className="box-new">Trả góp 0%</BoxInstallment>
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
                                            </Link>
                                        </ContentProductItemDeal>
                                    </ProductDeal>
                                    <BoxOverlayProductItem>
                                        <RadiusButtonCard>
                                            <Link to='/' className="btn" alt="btn btn-card">Thêm vào giỏ hàng</Link>
                                        </RadiusButtonCard>
                                    </BoxOverlayProductItem>
                                </BoxProductItem>
                            </div>
                            <div className='item'>
                                <BoxProductItem>
                                    <ProductDeal className='container'>
                                        <Link to='/'>
                                            <img src={ImgDell} alt="Laptop Dell"/>
                                            <LargeDiscountItem className='large-discount'></LargeDiscountItem>
                                            <BoxNew className="box-new">New</BoxNew>
                                            <BoxInstallment className="box-new">Trả góp 0%</BoxInstallment>
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
                                            </Link>
                                        </ContentProductItemDeal>
                                    </ProductDeal>
                                    <BoxOverlayProductItem>
                                        <RadiusButtonCard>
                                            <Link to='/' className="btn" alt="btn btn-card">Thêm vào giỏ hàng</Link>
                                        </RadiusButtonCard>
                                    </BoxOverlayProductItem>
                                </BoxProductItem>
                            </div>
                        </OwlCarousel>
                    </Tab>
                    <Tab eventKey="laptopgirl" title="Laptop mỏng, nhẹ">
                        <BoxListCategoryProduct />
                    </Tab>
                    <Tab eventKey="top10laptop" title="Top 10 laptop bán chạy">

                    </Tab>
                </Tabs>

            </SlideProductBox>
        </container>
    );
}
const Locationbar = styled.div`
    width: 100%;
    height:35px;

`;
const SlideShow = styled.div`
    width:100%;
    height:320px;
    display:flex;
`;
const SlideLeft = styled.div`
    width:55vw;
    heigth:100% auto;
    div{
        width:100%;
    }
`;
const SlideRight = styled.div`
    width:35vw;
    margin-left:10px;
    height:100% auto;
    div{
        width:100%;
    }
`;
const BrandBox = styled.div`
    width:100%;
    margin-top:20px;
    border: 1px solid #dddddd;
    h3{
        width:100%;
        padding:25px;
    }
    ul{
        width:80%;
        margin:auto;
        margin-bottom:30px;
        display:flex;
        height:80px;
        list-style:none;
        padding:0;
        justify-content:space-around;
        li{
            width:150px;
            height:100%;
        }
    }
`;
const TitleBrand = styled.div`
`;
const SlideProductBox = styled.div`
    margin-top:50px;
    box-shadow: 2px 2px 3px 3px #888888;
`;
const BoxProductItem = styled.div`
    width:250px;
    height:400px;
    margin:auto;
`;
const ProductDeal= styled.div`
    a{
        img{
            width:100%;
            height:100%;
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
    font-weight:300;
`;
const BoxInstallment =styled.span`
    max-width:100px;
    width:100px;
    height:30px;
    color:white;
    background-color:#0a62ac;
    position:absolute;
    border-radius: 5px;
    right:5px;
    bottom:180px;
    font-weight:300;
    font-style: italic;
    font-size:14px;
    line-height:28px;
`;
const TitleItemDeal = styled.span`
    float:left;
    padding-bottom:5px;
`;
const PriceItemDealSell = styled.span`
    font-size:16px;
    float:left;
    color:red;
    i{
        font-size:13px;
        font-weight:600;
    }
`;
const PriceItemDeal = styled.span`
    font-size:16px;
    float:left;
    i{
        font-size:13px;
        font-weight:600;
    }
`;
const BoxOverlayProductItem = styled.div`
    position: absolute;
    width:100%;
    height:100%;
    background-color: rgba(0,0,0,0.5);
    top:0;
    left:0;
    right:0;
    bottom:0;
    display:none;
    ${BoxProductItem}:hover &{
        display:block;
    }
`;
const RadiusButtonCard = styled.div`
    margin:100px auto !important;
    width:200px;
    height:50px;
    background-color: red;
    a{
        color:white;
        width:100%;
        height:100%;
        line-height:30px;
    }

`;
export default SlideProductCategory;