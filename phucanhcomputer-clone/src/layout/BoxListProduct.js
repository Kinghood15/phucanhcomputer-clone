import React,{useContext,useEffect} from 'react';
import styled from 'styled-components';
import {Link,NavLink} from 'react-router-dom';
import {ProductContext} from '../contexts/ProductContext';
import {useHistory,generatePath} from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
const BoxListProduct = ({AddProductItem}) => {
    const history = useHistory();
    // const handleProceed = (e) => {
    //     _id && history.push(generatePath("/productcategory/:id", { _id }));
    // };
    const {
        productState:{
            products,
            productLoading
            },
            getProductsbyCategoryProduct,
            getProducts
    } = useContext(ProductContext);
    let body = null;
    useEffect(() => getProducts(), []);
    if(productLoading){
        return(
            <Spinner animation="border" role="status" size="sm" style={{margin:"auto",marginTop:"200px"}}>
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        );
    }
    else if(products.length === 0) {
        body=(
            <div>
                <h4>Hiện tại chưa cập nhật sản phẩm </h4>
            </div>
        );
    }
    else{
        
        body=(
            products.map(product => (       
                <li>
                    <ProductDeal className='container' key={product._id}>
                        <Link to={ `/productdetails/${product._id}`}>
                            <img src={product.ImageurlProduct} alt={product.nameProduct} />
                            <LargeDiscountItem className='large-discount'></LargeDiscountItem>
                            <BoxNew className="box-new">New</BoxNew>
                            <BoxInstallment className="box-new">Trả góp 0%</BoxInstallment>
                        </Link>
                        <ContentProductItemDeal>
                            
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
                                <Cart className='Cart' onClick={() => AddProductItem(product)}> Giỏ hàng</Cart>
                           
                        </ContentProductItemDeal>
                    </ProductDeal>
                </li>    
            ))
        );
    }
    // const urlLink=`/productcategory/${}`;
    return(
        <BoxListProducts className='box-list-product'>
            <TitleBoxProduct>
                <Title>
                    <NavLink to='/'>Sản phẩm</NavLink>    
                </Title>
                {/* <NavLink style={{paddingRight:"15px"}} to=''>Laptop Gaming</NavLink> */}
                <NavLink to='/'>Xem tất cả &gt;&gt;</NavLink>
            </TitleBoxProduct>
            <BoxProductList>
                <ListDeal>
                    <ul>
                        {body}
                    </ul>
                </ListDeal>
            </BoxProductList>
        </BoxListProducts>
    );
}
const BoxListProducts= styled.div`
    clear:both;    
    width:90vw;
    max-width:90vw;
    margin: auto;
    padding-top:20px;
    
    
`;
const TitleBoxProduct = styled.div`
    width:100%;
    height:40px;
    background-color:#365899;
    a{
        text-decoration:none;
        color:white;
        line-height:40px;
        text-align:left;
        float:left;
        padding-left:15px;
    }
`;
const Title = styled.div`
    display:block;
    float:left;
    height:100%;
    width:250px;
    clip-path: polygon(
        0% 100%,
        100% 100%,
        100% 100%,
        70% 0%,
        0% 0%
    );
    background-color:#ee0000;
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
            
            max-height:400px;
            border: 0.5px solid #dddddd;
        }
    }
`;
const ContentProductItemDeal = styled.div`
    margin-top:40px;
    text-align:left;
    font-size:13px;
    text-decoration:none;
    color: #333;
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
const TitleItemDeal = styled.span`
    position:absolute;
    top:250px;
    left:10px;
    float:left;
    padding-bottom:5px;
    font-weight:600;
    font-size:15px;
`;
const PriceItemDealSell = styled.span`
    position:absolute;
    bottom:25px;
    left:10px;
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
    position:absolute;
    bottom:50px;
    left:10px;
    i{
        font-size:13px;
        font-weight:600;
    }
`;
const Cart = styled.a`
    cursor: pointer;
    position:absolute;
    right:10px;
    bottom:5px;
    width: 50%;
    float:right;
    text-align:right;
    text-decoration:none;
    :hover{
        color:red;
    }
`;
const ProductDeal= styled.div`
    a{
        img{
            width:90%;
            height:100%;
        }
    }
`;
export default BoxListProduct;