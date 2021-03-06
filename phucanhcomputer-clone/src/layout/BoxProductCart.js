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
        productId:cartItems.map(item =>  item._id )
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
        console.log(cartItems);
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
                        <h4>Gi??? h??ng c???a t??i </h4>
                        <Button href="/" className="btn"  variant="info"> Ti???p t???c mua h??ng </Button>
                    </TitleProductCart>
                    <BoxImageCartProductCart>C?? c??i n???t</BoxImageCartProductCart>
                </BoxContainerProductCart>
            </>
        );
    }
    else if(cartItems.length > 0){
        body = (
            <>
                <BoxContainerProductCart>
                    <TitleProductCart>
                        <h4>Gi??? h??ng c???a t??i </h4>
                        <Button href="/" className="btn"  variant="info"> Ti???p t???c mua h??ng </Button>
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
                                                    <h5>Th??nh ti???n</h5>
                                                    
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
                                            T???ng ti???n :
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
                                <h3>Th??ng tin thanh to??n</h3>
                                <p>????? ti???p t???c ?????t h??ng, qu?? kh??ch xin vui l??ng <a href="/login">????ng nh???p</a> ho???c nh???p th??ng tin b??n d?????i. </p>
                                <p>B???ng c??ch ?????t h??ng, b???n ?????ng ?? v???i <a href="/#">??i???u kho???n giao d???ch</a> c???a Th??nh An</p>
                                <Form onSubmit={SubmitAddProductInvoice}>
                                    <Form.Group className="mb-3" controlId="formBasicFullname">
                                        <Form.Label>H??? v?? t??n</Form.Label>
                                        <Form.Control type="text" placeholder="H??? v?? t??n ng?????i d??ng " name="nameClient" value={nameClient} onChange={onChangeAddProductInvoiceForm} required/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicdPhonenumber">
                                        <Form.Label>S??? ??i???n tho???i</Form.Label>
                                        <Form.Control type="text" placeholder="D??ng ????? li??n l???c khi giao h??ng " name="phonenumberClient" value={phonenumberClient} onChange={onChangeAddProductInvoiceForm} required/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email (Vui l??ng ??i???n ch??nh x??c) </Form.Label>
                                        <Form.Control type="email" placeholder="????? nh???n th??ng b??o ????n h??ng " name="emailClient"  required />
                                    </Form.Group>
                                    <fieldset>
                                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                            <Form.Check type="radio" label="?????a ch??? nh???n h??ng" name="Address" id="Address" checked />
                                            <Form.Check type="radio" label="Giao nh???n t???i si??u th???" name="Address" id="Suppermarket"/>
                                        </Form.Group>
                                    </fieldset>
                                    <Form.Group className="mb-3" controlId="formBasicAddress">
                                        <Form.Label>?????a ch??? nh???n h??ng</Form.Label>
                                        <Form.Control type="text" placeholder="?????a ch??? nh???n h??ng" name="addressClient" value={addressClient} onChange={onChangeAddProductInvoiceForm} required/>
                                    </Form.Group>
                                    <FloatingLabel controlId="floatingTextarea2" label="Ghi ch??">
                                        <Form.Control
                                        as="textarea"
                                        placeholder="Ghi ch?? th??ng tin vi???t ho?? ????n, y??u c???u l???p ?????t ..."
                                        style={{ height: '100px' }} name="remarkProductInvoice" value={remarkProductInvoice} onChange={onChangeAddProductInvoiceForm}
                                        />
                                    </FloatingLabel>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check type="check" label="Xu???t ho?? ????n c??ng ty" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check type="radio" label=" Thanh to??n khi nh???n h??ng." name="pay" checked />
                                        <Form.Check type="radio" label="Thanh to??n chuy???n kho???n qua t??i kho???n ng??n h??ng." name="pay"/>
                                    </Form.Group>
                                    <Button variant="primary" type="submit" onClick={SubmitAddProductInvoice}>
                                        ?????t h??ng
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
                    <liActive> <Link to='/'>Trang ch???</Link></liActive>
                    <li> <Link to='/'>Gi??? h??ng </Link></li>
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