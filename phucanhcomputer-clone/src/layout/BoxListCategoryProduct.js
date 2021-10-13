import React,{useContext,useEffect} from 'react';
import styled from 'styled-components';
import {Link,NavLink} from 'react-router-dom';
import {ProductContext} from '../contexts/ProductContext';
import Spinner from 'react-bootstrap/Spinner';
import {useParams} from 'react-router-dom';
const BoxListCategoryProduct = ({AddProductItem}) => {
    const { id } = useParams();
    let body = null;
    const {
        productState:{
            products,
            productLoading
            },
            getProductsbyCategoryProduct,
            getProducts
    } = useContext(ProductContext);
    useEffect(() =>getProductsbyCategoryProduct(id),[]);

    if(productLoading){
        body=(
            <Spinner animation="border" role="status" size="sm">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        );
        getProductsbyCategoryProduct(id);
    } else if(products.length === 0 ){

    }else{
        body = (
            products.map(product => (
                <li>
                   <ProductDeal className='container'>
                       <Link to={`/productdetails/${product._id}`}>
                           <img src={product.ImageurlProduct} alt="Laptop"/>
                           <LargeDiscountItem className='large-discount'></LargeDiscountItem>
                           <BoxNew className="box-new">New</BoxNew>
                           <BoxInstallment className="box-new">Trả góp 0%</BoxInstallment>
                       </Link>
                       <ContentProductItemDeal>
                           <Link>
                               <TitleItemDeal className='TitleItemDeal'>
                                    {product.nameProduct}
                               </TitleItemDeal>
                               <PriceItemDeal className='PriceItemDeal'>
                                   <i>Giá niêm yết: </i>
                                   {product.priceProduct} ₫ 
                               </PriceItemDeal>
                               <PriceItemDealSell className='PriceItemDealSell'>
                                   <i>Giá Bán: </i>
                                   {product.priceProduct} ₫
                               </PriceItemDealSell>
                           </Link>
                       </ContentProductItemDeal>
                   </ProductDeal>
                   <BoxOverlayProductItem>
                       <RadiusButtonCard>
                           <Link onClick={() => AddProductItem(product)} className="btn" alt="btn btn-card">Thêm vào giỏ hàng</Link>
                       </RadiusButtonCard>
                   </BoxOverlayProductItem>
               </li>
            ))
        );
    }
 
    return(
        <BoxListCategoryProducts className='box-list-product'>
            <TitleBoxProduct>
                <Title>
                    <h4><NavLink to='/'>Sản phẩm</NavLink></h4>   
                </Title>
                <NavLink to=''>Xem tất cả &gt;&gt;</NavLink>
            </TitleBoxProduct>
            <BoxProductList>
                <ListDeal>
                    <ul>
                        {body}
                    </ul>
                </ListDeal>
            </BoxProductList>
        </BoxListCategoryProducts>
    );
}
const BoxListCategoryProducts= styled.div`
    clear:both;    
    width:90vw;
    max-width:90vw;
    margin: auto;
    padding-top:20px;
    
    
`;
const TitleBoxProduct = styled.div`
    width:100%;
    height:40px;
    a{
        text-decoration:none;
        color:black;
        line-height:40px;
        text-align:left;
        float:right;
        padding-left:15px;
        padding-right:15px;
    }
`;
const Title = styled.div`
    display:block;
    float:left;
    height:100%;
    width:50vw;
    text-align:left;
    a{ 
        float:left;
        font-weight:600;
    }
`;
const BoxProductList = styled.div`
    width:100%;
    border: 0.5px solid #dddddd;
`;
const ListDeal = styled.div`
    display:flex;
    ul{
        max-width:100%;
        margin:0;
        padding:0;
        display:flex;
        align-content:strech;
        flex-wrap:wrap;
        list-style:none;
        li{
            position: relative;
            width:calc(100%/6);
            height:400px;
            max-width:288px;
            max-height:400px;
            border: 0.5px solid #dddddd;
        }
    }
`;
const ContentProductItemDeal = styled.div`
    position:relative;
    height:40%;
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
    bottom:160px;
    font-weight:300;
    font-style: italic;
    font-size:14px;
    line-height:28px;
`;
const TitleItemDeal = styled.h5`
    position:absolte;
    bottom:0px;
    left:10px;
    float:left;
    padding-bottom:5px;
`;
const PriceItemDealSell = styled.span`
    font-size:16px;
    float:left;
    color:red;
    position: absolute;
    left: 5px;
    bottom: 5px;
    i{
        font-size:13px;
        font-weight:600;
    }
`;
const PriceItemDeal = styled.span`
    font-size:16px;
    float:left;
    position: absolute;
    left: 5px;
    bottom: 30px;
    i{
        font-size:13px;
        font-weight:600;
    }
`;

const ProductDeal= styled.div`
    height:400px;
    a{
        img{
            width:100%;
            height:60%;
        }
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
    ${ListDeal}>ul>li:hover &{
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
export default BoxListCategoryProduct;