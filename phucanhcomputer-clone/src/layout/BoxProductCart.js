import React,{useContext,useState} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import {ProductInvoiceContext}  from '../contexts/ProductInvoiceContext';
import Spinner from 'react-bootstrap/Spinner';
import ReactImageMagnify from '@blacklab/react-image-magnify';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
const BoxProductCart = ({cartItems,AddProductItem,RemoveProductItem}) => {
    const totalPriceProduct = cartItems.reduce((total,item) => cartItems[0] !== item ? total + (item.quantity *item.priceProduct) : total,0);
    const totalQuantityProduct = cartItems.reduce((total,item) => cartItems[0] !== item ? total + item.quantity : total ,0);
    //Local context
    const {AddProductInvoiceClient}= useContext(ProductInvoiceContext);
    //Local state
    const [addProcductInvoiceForm, setAddProductInvoiceForm] = useState({
        nameClient:'',
        addressClient:'',
        phonenumberClient:'',
        ImageurlProductInvoice:'',
        totalpriceProductInvoice:totalPriceProduct,
        quanlityProductInvoice:totalQuantityProduct,
        remarkProductInvoice:'' , 
        productId: cartItems.map(item => {
            if(item._id !== undefined){
                return item._id;
            }
        })
    })
    const {nameClient,addressClient,phonenumberClient,ImageurlProductInvoice,totalpriceProductInvoice, quanlityProductInvoice, remarkProductInvoice , productId} = addProcductInvoiceForm;
    const onChangeAddProductInvoiceForm = event => {
        setAddProductInvoiceForm({
            ...addProcductInvoiceForm,[event.target.name]: event.target.value

        }
    )}   
    const SubmitAddProductInvoice = async event => {
        setAddProductInvoiceForm({
            addProcductInvoiceForm, productId:[]
            
        })
        event.preventDefault();
        try{
            const addProductInvoiceData = await AddProductInvoiceClient(addProcductInvoiceForm);
            if(addProductInvoiceData){
                setAddProductInvoiceForm({
                nameClient:'',
                addressClient:'',
                phonenumberClient:'',
                ImageurlProductInvoice:'',
                totalpriceProductInvoice:'',
                quanlityProductInvoice:'',
                remarkProductInvoice:'' , 
                productId:[]
            });
            alert("Đặt hàng thành công !")
            }
        }catch(error) {
            console.log(error);
        }
    }
    let body = null;

    if (cartItems.length === 0) {
        body = (
            <>
                <BoxContainerProductCart>
                    <TitleProductCart>
                        <h4>Giỏ hàng của tôi </h4>
                        <Button href="/" className="btn"  variant="info"> Tiếp tục mua hàng </Button>
                    </TitleProductCart>
                    <BoxImageCartProductCart>Có cái nịt</BoxImageCartProductCart>
                </BoxContainerProductCart>
            </>
        );
    }
    else if(cartItems.length > 0){
        body = (
            <>
                <BoxContainerProductCart>
                    <TitleProductCart>
                        <h4>Giỏ hàng của tôi </h4>
                        <Button href="/" className="btn"  variant="info"> Tiếp tục mua hàng </Button>
                    </TitleProductCart>
                    <BoxImageCartProductCart>
                        <BoxPriceBuyProductCart>
                            <Table responsive="sm" bordered>
                                <tbody>
                                    {cartItems.map(item =>( item !== cartItems[0] && 
                                        <tr key={item._id}>
                                            <td>
                                                <ImageProductCart>
                                                    <img src={item.ImageurlProduct} alt={item.nameProduct}/>
                                                </ImageProductCart>
                                                <TitleContentProductCart>
                                                    <h5>{item.nameProduct}</h5>
                                                    <ContentGiftProductCart>
                                                        <p></p>
                                                    </ContentGiftProductCart>
                                                </TitleContentProductCart>
                                            </td>  
                                            <td>
                                                <PriceProductCart>
                                                    <p>{item.priceProduct} VND</p>
                                                    <h5>Thành tiền</h5>
                                                    
                                                    <h5>{item.priceProduct * item.quantity} VND</h5>
                                                </PriceProductCart>
                                                <Button onClick={() => RemoveProductItem(item)}>&#45;</Button>
                                                <input key={item._id} type="text" value={item.quantity} name="numberSoluong" id="txtSoLuong" /> 
                                                <Button onClick={() => AddProductItem(item)}>&#43;</Button>
                                                <Button><i class="fas fa-trash"></i></Button>
                                                
                                            </td>
                                        </tr>

                                    ))}
                                </tbody>
                                <tbody>
                                    <tr style={{backgroundColor:"#5b5b5bba" }}>
                                        <td style={{fontSize:"25px",color:"white"}}>
                                            Tổng tiền :
                                        </td>
                                        <td style={{fontSize:"25px",color:"white"}}>
                                            {totalPriceProduct} VND
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                            
                        </BoxPriceBuyProductCart>
                        <BoxAddressConmitProductCart>
                            <BoxConmitProductCart>
                                <h3>Thông tin thanh toán</h3>
                                <p>Để tiếp tục đặt hàng, quý khách xin vui lòng <a href="/login">đăng nhập</a> hoặc nhập thông tin bên dưới. </p>
                                <p>Bằng cách đặt hàng, bạn đồng ý với <a href="/#">Điều khoản giao dịch</a> của Thành An</p>
                                <Form onSubmit={SubmitAddProductInvoice}>
                                    <Form.Group className="mb-3" controlId="formBasicFullname">
                                        <Form.Label>Họ và tên</Form.Label>
                                        <Form.Control type="text" placeholder="Họ và tên người dùng " name="nameClient" value={nameClient} onChange={onChangeAddProductInvoiceForm} required/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicdPhonenumber">
                                        <Form.Label>Số điện thoại</Form.Label>
                                        <Form.Control type="text" placeholder="Dùng để liên lạc khi giao hàng " name="phonenumberClient" value={phonenumberClient} onChange={onChangeAddProductInvoiceForm} required/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email (Vui lòng điền chính xác) </Form.Label>
                                        <Form.Control type="email" placeholder="Để nhận thông báo đơn hàng " name="emailClient"  required />
                                    </Form.Group>
                                    <fieldset>
                                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                            <Form.Check type="radio" label="Địa chỉ nhận hàng" name="Address" id="Address" checked />
                                            <Form.Check type="radio" label="Giao nhận tại siêu thị" name="Address" id="Suppermarket"/>
                                        </Form.Group>
                                    </fieldset>
                                    <Form.Group className="mb-3" controlId="formBasicAddress">
                                        <Form.Label>Địa chỉ nhận hàng</Form.Label>
                                        <Form.Control type="text" placeholder="Địa chỉ nhận hàng" name="addressClient" value={addressClient} onChange={onChangeAddProductInvoiceForm} required/>
                                    </Form.Group>
                                    <FloatingLabel controlId="floatingTextarea2" label="Ghi chú">
                                        <Form.Control
                                        as="textarea"
                                        placeholder="Ghi chú thông tin viết hoá đơn, yêu cầu lắp đặt ..."
                                        style={{ height: '100px' }} name="remarkProductInvoice" value={remarkProductInvoice} onChange={onChangeAddProductInvoiceForm}
                                        />
                                    </FloatingLabel>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check type="check" label="Xuất hoá đơn công ty" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check type="radio" label=" Thanh toán khi nhận hàng." name="pay" checked />
                                        <Form.Check type="radio" label="Thanh toán chuyển khoản qua tài khoản ngân hàng." name="pay"/>
                                    </Form.Group>
                                    <Button variant="primary" type="submit" onClick={SubmitAddProductInvoice}>
                                        Đặt hàng
                                    </Button>
                                </Form>
                            </BoxConmitProductCart>
                        </BoxAddressConmitProductCart>
                    </BoxImageCartProductCart>                    
                </BoxContainerProductCart>
            </>
        );
    }
    return(
        <container>
            <Locationbar>
                <ul>
                    <liActive> <Link to='/'>Trang chủ</Link></liActive>
                    <li> <Link to='/'>Giỏ hàng </Link></li>
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
const BoxContainerProductCart = styled.div`
    width:100%;
    
`;

const BoxImageCartProductCart = styled.div`
    display:flex;
    justify-content:space-between;
`;
const TitleProductCart = styled.div`
    clear:both;
    width:100%;
    text-align:left;
    display:flex;
    button{
        margin-left:20px;
    }
`;
const ImageProductCart = styled.div`
    width:100px;
    height:100px;
    float:left;
    padding:5px;
    img{
        width:100px;
        height:100px;
    }
`;
const ContentGiftProductCart = styled.div`
`;
const PriceProductCart = styled.div`
    float:left;
    width:200px;

`;
// const `
const BoxPriceBuyProductCart = styled.div`
    width:60%;
    text-align:left;
    margin:15px;
    table{
        background-color:#f9f9f9;
        td{
            button{
                padding:0;
                width:30px;
                height:30px;
                margin:5px;
            }
            input{
                width:30px;
                height:30px;
            }
        }
    }

`;
const BoxAddressConmitProductCart = styled.div`
    width:35%;
    
`;                  
const BoxConmitProductCart = styled.div`
    border:0.5px solid red;
    
    p{
        text-align:left;
        padding: 0 10px;
    }
    h3{
        color:white;
        padding:10px;
        background-color:red;
    }
    form{
        padding:20px;
        text-align:left;
    }
`;
const TitleContentProductCart = styled.div`
    width:70%;
    float:left;
    h5{
        padding:10px;
    }
`;
const ContentProductCart = styled.div`
    width:80%;
    margin:auto !important;
    padding:5px;
    p{
        text-align:justify;
    }
`;
export default BoxProductCart;