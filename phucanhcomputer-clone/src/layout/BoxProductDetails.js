import React,{useContext,useEffect} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import {ProductContext}  from '../contexts/ProductContext';
import Spinner from 'react-bootstrap/Spinner';
import ReactImageMagnify from '@blacklab/react-image-magnify';
import Button from 'react-bootstrap/Button';
const BoxProductDetails = ({AddProductItem}) => {
    const {id} = useParams();
    const {
        productState:{
            products,
            productLoading
        }, getProductsbyId
    }=useContext(ProductContext);
    useEffect(() => getProductsbyId(id), []);
    let body = null;
    let title = null;
    if(productLoading){
        body=(
            <Spinner animation="border" role="status" size="sm">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        );
    } else if(products.length > 0){
        let urlLinkProduct = `/productdetails/${products[0]._id}`;
        title=(
            <li> <Link to={urlLinkProduct}>{products[0].nameProduct}</Link> </li>
        );
        body = (
                products.map(product=>(
                    <>
                        <BoxContainerProductDetails>
                            <TitleProductDetails>
                                <h3>{product.nameProduct}</h3>
                            </TitleProductDetails>
                            <BoxImageCartProductDetails>
                                <BoxImageZoomProductDetails>
                                    <BoxImageZoomProduct>
                                        <ReactImageMagnify
                                            imageProps={{
                                                alt: `${product.nameProduct}`,
                                                isFluidWidth: true,
                                                src:`${product.ImageurlProduct}`
                                            }}
                                            magnifiedImageProps={{
                                                src: `${product.ImageurlProduct}`,
                                                width: 1200,
                                                height: 1200
                                            }}
                                            portalProps ={{
                                                horizontalOffset : 10
                                            }}
                                        />
                                    </BoxImageZoomProduct>
                                    <BoxImageProduct>
                                        <img src={product.ImageurlProduct} alt={product.nameProduct}/>
                                        <img src={product.ImageurlProductIn} alt={product.nameProduct}/>
                                        <img src={product.ImageurlProductAfter} alt={product.nameProduct}/>
                                        <img src={product.ImageurlProductBefore} alt={product.nameProduct} />
                                    </BoxImageProduct>
                                </BoxImageZoomProductDetails>
                                <BoxPriceBuyProductDetails>
                                    <BoxPriceProductDetails>
                                        <PriceDefault>
                                            <p>Gi?? ni??m y???t</p>
                                            <h5>{product.priceProduct}</h5>
                                        </PriceDefault>
                                        <PriceBuy>
                                            <p>Gi?? B??n</p>
                                            <h5>{product.priceProduct}</h5>
                                            <span> Gi?? c?? VAT </span>
                                        </PriceBuy>
                                    </BoxPriceProductDetails>
                                    <BoxContentBuyProductDetails>
                                        <p>B???o h??nh: Chi??nh ha??ng 12 tha??ng, ta??i n??i s???? du??ng. ??????i m????i 30 nga??y</p>
                                        <p>Giao h??ng t???n n??i mi???n ph?? theo ch??nh s??ch v???n chuy???n <Link to=''>Xem chi ti???t</Link></p>
                                        <BoxButtonsProduct>
                                            <Button variant="danger" className="btn" onClick={() => AddProductItem(product)}>Th??m s???n ph???m gi??? h??ng</Button>
                                            <Button variant="primary" className="btn">Mua ngay</Button>
                                        </BoxButtonsProduct>
                                        <BoxItemGift>
                                            <ul>
                                                <li><i class="fas fa-hand-point-right"></i>  Gi???m ?????n 400K + 20% ram Laptop t???ng k??m b??? qu?? 3 tri???u khi mua Laptop Gaming</li>
                                                <li><i class="fas fa-hand-point-right"></i>  S????m Laptop Gaming Dell nh????n b???? qua?? c????c ??i??nh</li>
                                                <li><i class="fas fa-hand-point-right"></i>  Gi???m t???i 20% khi mua linh ki???n, ph??? ki???n k??m laptop</li>
                                                <li><i class="fas fa-hand-point-right"></i>  ??u ????i gi???m t???i 600.000 VN?? khi mua ph???n m???m Windows - Office - Di???t virut</li>
                                                <li><i class="fas fa-hand-point-right"></i>  Khuy???n m???i si??u HOT: PC si??u ch???t - Rinh G???p Qu?? To</li>
                                                <li><i class="fas fa-hand-point-right"></i>  Gi???m t???i 20% khi mua thi????t bi?? v??n pho??ng</li>
                                            </ul>
                                        </BoxItemGift>
                                        <BoxGiftProductDetails>
                                            <h5>??u ????i v?? qu?? t???ng khuy???n m??i:</h5>
                                            <ul>
                                                <li></li>
                                            </ul>
                                        </BoxGiftProductDetails>
                                    </BoxContentBuyProductDetails>
                                </BoxPriceBuyProductDetails>
                                <BoxAddressConmitProductDetails>
                                    <BoxAddressProductDetails>
                                        <span>??ang co??n ha??ng ta??i:</span>
                                        <p><i class="fas fa-star"></i>235 Ho??ng Qu???c Vi???t, C??? Nhu???, B???c T??? Li??m, H?? N???i, Vietnam</p>
                                    </BoxAddressProductDetails>
                                    <BoxConmitProductDetails>
                                        <h5>Th??nh An cam k???t</h5>
                                        <p><i class="fas fa-star"></i>100% s???n ph???m ch??nh h??ng</p>
                                        <p><i class="fas fa-star"></i>100% gi?? c???nh tranh so v???i th??? tr?????ng</p>
                                        <h5>Ch??nh s??ch b??n h??ng v?? b???o h??nh</h5>
                                        <p><i class="fas fa-star"></i>Mua h??ng tr??? g??p l??i su???t 0%<Link to=''>Chi ti???t</Link></p>
                                        <p><i class="fas fa-star"></i>Giao h??ng nhanh 2h v?? mi???n ph?? giao h??ng t??? 500.000??<Link to=''>Chi ti???t</Link></p>
                                        <p><i class="fas fa-star"></i>??u ????i v??ng d??nh cho kh??ch h??ng doanh nghi???p<Link to=''>Chi ti???t</Link></p>
                                        <p><i class="fas fa-star"></i>?????i m???i s???n ph???m ?????n 30 ng??y <Link to=''>Chi ti???t</Link></p>
                                        <p><i class="fas fa-star"></i>D???ch v??? b???o h??nh chuy??n nghi???p, uy t??n <Link to=''>Chi ti???t</Link></p>
                                    </BoxConmitProductDetails>
                                </BoxAddressConmitProductDetails>
                            </BoxImageCartProductDetails>
                            
                        </BoxContainerProductDetails>
                        <BoxContentProductDetails>
                            <TitleContentProductDetails>
                                <h4>?????c ??i???m n???i b???t</h4>
                            </TitleContentProductDetails>
                            <ContentProductDetails>
                                <p>{product.descriptionProduct}</p>
                            </ContentProductDetails>
                        </BoxContentProductDetails>
                    </>
                ) )
        );
    }
    return(
        <container>
            <Locationbar>
                <ul>
                    <liActive> <Link to='/'>Trang ch???</Link></liActive>
                    <li> <Link to='/'>Danh s??ch s???n ph???m</Link></li>
                    <li> <Link to='/'>S???n ph???m</Link></li>
                    {title}
                </ul>
            </Locationbar>
            {body}

        </container>
    );
}
const Locationbar = styled.div`
    height:35px;
    clear:both;
    ul{
        max-width:100vw;
        list-style: none;
        padding:0;
        display:flex;
        float:left;
        font-size:14px;
        li{
            
            display:inline;
            ::before{
                padding: 8px;
                color: black;
                content: '/';
            }
            a{
                color: #0275d8;
                text-decoration: none;
                font-size:14px;
            }
            :hover a{
                color: #01447e;
                text-decoration: underline;
            }
        }
    }
`;
const BoxContainerProductDetails = styled.div`
    width:100%;
    height:800px;
`;


const BoxImageZoomProductDetails = styled.div`
    width:500px;
    
`;
const BoxImageProduct = styled.div`
    width:100%;
    height:150px;
    display:flex;
    justify-content:space-around;
    img{
        width:150px;
        height:100px;
        border:0.3px solid gray;
    }
`;
const BoxImageZoomProduct = styled.div`
    width:100%;
    height:500px;
    border:0.5px solid gray;
`;
const BoxImageCartProductDetails = styled.div`
    display:flex;
    justify-content:space-between;
`;
const TitleProductDetails = styled.div`
    clear:both;
    width:100%;
    text-align:left;

`;
const BoxPriceBuyProductDetails = styled.div`
    width:50%;
    height:100px;
    text-align:left;
    margin:15px;
    
`;
const BoxPriceProductDetails = styled.div`
    background-color:#f0f0f0;
    width:100%;
`;
const PriceDefault = styled.div`
    display:flex;
    p{
        padding:10px;
        font-weight:600;
    }
    h5{
        font-size:25px;
        font-weight:600;
        padding:10px;
    }
`;
const PriceBuy = styled.div`
    display:flex;
    p{
        padding:10px;
        font-weight:600;
    }
    span{
        font-size:11px;
        margin-top:25px;
    }
    h5{
        font-size:25px;
        font-weight:600;
        padding:10px;
    }
`;
const BoxContentBuyProductDetails = styled.div`
    padding:10px;
`;
const BoxButtonsProduct = styled.div`
    width:100%;
    height:80px;
    display:flex;
    justify-content:space-around;
    button{
        width:40%;
        padding:20px;
        border-radius:2%;
        font-size:18px;
    }
    margin-bottom:20px;
`;
const BoxItemGift = styled.div`
    ul{
        list-style:none;
        li{
            font-color:#d211a8;
        }
    }
`;
const BoxGiftProductDetails = styled.div`
    margin-top:20px;
    padding-top:10px;
    border-top:0.5px solid gray;
    h5{
        color:red;
    }
    ul{
        list-style:none;
    }
`;
const BoxAddressConmitProductDetails = styled.div`
    width:32%;
    max-width:300px;
    
`;
const BoxAddressProductDetails = styled.div`
    border:0.5px solid #fde303;
    padding:15px;
    margin-bottom:20px;
    span{
        color:red;
    }
    p{
        text-align:left;
        i{
            color:yellow;
        }
    }
`;
                       
const BoxConmitProductDetails = styled.div`
    border:0.5px solid gray;
    padding:15px;
    h5{
        color:red;
    }
    p{
        text-align:left;
        i{
            color:yellow;
        }
        a{
            padding-left:5px;
        }
    }
`;
const BoxContentProductDetails = styled.div`
    width:80%;
`;
const TitleContentProductDetails = styled.div`
    width:100%;
    h4{
        padding:10px;
        border-bottom:0.5px solid gray;
        text-align:left;
    }
`;
const ContentProductDetails = styled.div`
    width:80%;
    margin:auto !important;
    padding:5px;
    p{
        text-align:justify;
    }
`;
export default BoxProductDetails;