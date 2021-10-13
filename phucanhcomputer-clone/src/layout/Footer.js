import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import 'react-bootstrap';
import ImgBCT from '../image/dathongbao.png';
const Footer = (props) => {
    function onFormSubmit(event){
        
    }
    return(
        <Footers className="footer">
            <FooterTop>
                <PageFacebook>
                    <Title>
                        Facebook
                    </Title>
                    <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FAcodern-100308209054049%2F&tabs=timeline&width=500px&height=70px&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId" title="Page Facebook" width="500px" height="150px" style={{border:"none",overflow:"hidden"}}  scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                </PageFacebook>
                <Hotline>
                    <Title>
                        Tổng đài hỗ trợ
                    </Title>
                    <table>
                        <tr>
                            <td>
                                <p><i className="fas fa-phone-alt"></i>Bán hàng trực tuyến:</p>
                                <p><span>19002164 </span>- Nhánh số 1 &#40; 8h15 - 20h30 &#41;</p>
                            </td>
                            <td>
                                <p><i className="fas fa-phone-alt"></i>Bán hàng trực tuyến:</p>
                                <p><span>19002164 </span>- Nhánh số 1 &#40; 8h15 - 20h30 &#41;</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p><i className="fas fa-phone-alt"></i>Bán hàng trực tuyến:</p>
                                <p><span>19002164 </span>- Nhánh số 1 &#40; 8h15 - 20h30 &#41;</p>
                            </td>
                            <td>
                                <p><i className="fas fa-phone-alt"></i>Bán hàng trực tuyến:</p>
                                <p><span>19002164 </span>- Nhánh số 1 &#40; 8h15 - 20h30 &#41;</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p><i className="fas fa-phone-alt"></i>Bán hàng trực tuyến:</p>
                                <p><span>19002164 </span>- Nhánh số 1 &#40; 8h15 - 20h30 &#41;</p>
                            </td>
                            <td>
                                <p><i className="fas fa-phone-alt"></i>Bán hàng trực tuyến:</p>
                                <p><span>19002164 </span>- Nhánh số 1 &#40; 8h15 - 20h30 &#41;</p>
                            </td>
                        </tr>
                    </table>
                </Hotline>
            </FooterTop>
            <FooterBottom>
                <TableCompany>
                    <table>
                        <tr>
                            <th>Thông tin công ty</th>
                            <th>Quy định & chính sách</th>
                            <th>Hỗ trợ khách hàng</th>
                        </tr>
                        <tr>
                            <td>
                                <BoxTD>
                                    <Link to="./">Giới thiệu công ty</Link>
                                    <Link to="./">Thông tin liên hệ</Link>
                                    <Link to="./">Thông tin tuyển dụng</Link>
                                    <Link to="./">Điều khoản giao dịch</Link>
                                    <Link to="./">Chính sách bảo mật thông tin khách hàng</Link>
                                </BoxTD>
                            </td>
                            <td>
                                <BoxTD>
                                    <Link to="./">Chính sách kinh doanh</Link>
                                    <Link to="./">Ưu đãi cho khách hàng doanh nghiệp</Link>
                                    <Link to="./">Ưu đãi cho khách hàng Game-Net</Link>
                                    <Link to="./">Chính sách vận chuyển và giao nhận</Link>
                                    <Link to="./">Chính sách bảo hành</Link>
                                    <Link to="./">Chính sách đổi trả sản phẩm</Link>
                                </BoxTD>     
                            </td>
                            <td>
                                <BoxTD>
                                    <Link to="./">Hướng dẫn mua hàng online</Link>
                                    <Link to="./">Hướng dẫn mua hàng trả góp</Link>
                                    <Link to="./">Phương thức thanh toán</Link>
                                    <Link to="./">Yêu cầu báo giá</Link>
                                    <Link to="./">Liên hệ kỹ thuật</Link>
                                    <Link to="./">Gửi góp ý, khiếu nại</Link>
                                </BoxTD>   
                            </td>
                        </tr>
                    </table>
                </TableCompany>
                <BoxFormGift>
                    <img src={ImgBCT} alt="Đã đăng ký bộ công thương"/>
                    <form onSubmit={onFormSubmit()} className='ui form'>
                        <input type="text" placeholder="Nhập địa chỉ email của bạn " onChange={(event) => this.setState({entry:event.target.value})} />
                        <input type="submit" className="btn btn-secondary" value="Gửi Ngay"/> 
                    </form>
                </BoxFormGift>
            </FooterBottom>
        </Footers>
    );
}
const Footers = styled.div`
    width:90vw;
    padding:0;
    margin:auto;
    margin-top:25px;
`;
const FooterTop = styled.div`
    max-width:100%;
    width:100%;
    border-top:5px solid #5275be;
`;
const PageFacebook = styled.div`
    width:550px;
    max-width:550px;
    height:200px;
    max-height:200px;
    float:left;
    text-align:left;
`;
const Title = styled.div`
    text-tranform:uppercase;
    color:red;
    font-weight:650;
    margin:10px 0;
`;
const Hotline = styled.div`
    width:60%;
    float:right;
    text-align:left;
    
    table{
        border: 0.5px solid #dddddd;
        width:100%;
        float:right;
        tr{
            width:100%;
            td{
                width:50%;
                margin:15px 0;
                p{
                    font-size:14px;
                    margin: 0;
                    font-size:14px;
                    i{
                        font-size:12px;
                        padding-right:5px;
                    }
                    span{
                        color:red;
                        font-weight:600;
                        float:left;
                    }
                }
            }
        }
    }
`;
const FooterBottom = styled.div`
    max-width:100%;
    width:100%;
    clear:both;
    border-top:5px solid #5275be;
`;

const TableCompany= styled.div`
    width:70vw;
    max-width:70vw;
    text-align:left;
    margin-top:20px;
    float:left;
    table{
        width:100%;
        tr{
            color:red;
            padding:20px;
            th{
                height:50px;
                padding-right:10px;
            }
            td{
                vertical-align: top;
                width:30%;
                max-width:30%;
                padding-right:10px;
            }
        }
    }
`;
const BoxTD= styled.div`
    width:100%;
    a{
        
        width:100%;
        height:30px;
        display:block;
        text-decoration:none;
        text-align:left;
        color:black;

    }
`;
const BoxFormGift = styled.div`
    text-align:center;
    float:right;
    margin-top:20px;
    input[type='submit']{
        background-color:#056bad;
        height: 30px;
        max-height:30px;
        vertical-align: top;
        line-height: 0px;
        margin-left:10px;
    }
`;
export default Footer;