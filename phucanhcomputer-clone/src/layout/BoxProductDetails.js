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
                                            <p>Giá niêm yết</p>
                                            <h5>{product.priceProduct}</h5>
                                        </PriceDefault>
                                        <PriceBuy>
                                            <p>Giá Bán</p>
                                            <h5>{product.priceProduct}</h5>
                                            <span> Giá có VAT </span>
                                        </PriceBuy>
                                    </BoxPriceProductDetails>
                                    <BoxContentBuyProductDetails>
                                        <p>Bảo hành: Chính hãng 12 tháng, tại nơi sử dụng. Đổi mới 30 ngày</p>
                                        <p>Giao hàng tận nơi miễn phí theo chính sách vận chuyển <Link to=''>Xem chi tiết</Link></p>
                                        <BoxButtonsProduct>
                                            <Button variant="danger" className="btn" onClick={() => AddProductItem(product)}>Thêm sản phẩm giỏ hàng</Button>
                                            <Button variant="primary" className="btn">Mua ngay</Button>
                                        </BoxButtonsProduct>
                                        <BoxItemGift>
                                            <ul>
                                                <li><i class="fas fa-hand-point-right"></i>  Giảm đến 400K + 20% ram Laptop tặng kèm bộ quà 3 triệu khi mua Laptop Gaming</li>
                                                <li><i class="fas fa-hand-point-right"></i>  Sắm Laptop Gaming Dell nhận bộ quà cực đỉnh</li>
                                                <li><i class="fas fa-hand-point-right"></i>  Giảm tới 20% khi mua linh kiện, phụ kiện kèm laptop</li>
                                                <li><i class="fas fa-hand-point-right"></i>  Ưu đãi giảm tới 600.000 VNĐ khi mua phần mềm Windows - Office - Diệt virut</li>
                                                <li><i class="fas fa-hand-point-right"></i>  Khuyến mại siêu HOT: PC siêu chất - Rinh Gấp Quà To</li>
                                                <li><i class="fas fa-hand-point-right"></i>  Giảm tới 20% khi mua thiết bị văn phòng</li>
                                            </ul>
                                        </BoxItemGift>
                                        <BoxGiftProductDetails>
                                            <h5>Ưu đãi và quà tặng khuyến mãi:</h5>
                                            <ul>
                                                <li></li>
                                            </ul>
                                        </BoxGiftProductDetails>
                                    </BoxContentBuyProductDetails>
                                </BoxPriceBuyProductDetails>
                                <BoxAddressConmitProductDetails>
                                    <BoxAddressProductDetails>
                                        <span>Đang còn hàng tại:</span>
                                        <p><i class="fas fa-star"></i>235 Hoàng Quốc Việt, Cổ Nhuế, Bắc Từ Liêm, Hà Nội, Vietnam</p>
                                    </BoxAddressProductDetails>
                                    <BoxConmitProductDetails>
                                        <h5>Thành An cam kết</h5>
                                        <p><i class="fas fa-star"></i>100% sản phẩm chính hãng</p>
                                        <p><i class="fas fa-star"></i>100% giá cạnh tranh so với thị trường</p>
                                        <h5>Chính sách bán hàng và bảo hành</h5>
                                        <p><i class="fas fa-star"></i>Mua hàng trả góp lãi suất 0%<Link to=''>Chi tiết</Link></p>
                                        <p><i class="fas fa-star"></i>Giao hàng nhanh 2h và miễn phí giao hàng từ 500.000đ<Link to=''>Chi tiết</Link></p>
                                        <p><i class="fas fa-star"></i>Ưu đãi vàng dành cho khách hàng doanh nghiệp<Link to=''>Chi tiết</Link></p>
                                        <p><i class="fas fa-star"></i>Đổi mới sản phẩm đến 30 ngày <Link to=''>Chi tiết</Link></p>
                                        <p><i class="fas fa-star"></i>Dịch vụ bảo hành chuyên nghiệp, uy tín <Link to=''>Chi tiết</Link></p>
                                    </BoxConmitProductDetails>
                                </BoxAddressConmitProductDetails>
                            </BoxImageCartProductDetails>
                            
                        </BoxContainerProductDetails>
                        <BoxContentProductDetails>
                            <TitleContentProductDetails>
                                <h4>Đặc điểm nổi bật</h4>
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
                    <liActive> <Link to='/'>Trang chủ</Link></liActive>
                    <li> <Link to='/'>Danh sách sản phẩm</Link></li>
                    <li> <Link to='/'>Sản phẩm</Link></li>
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