import React from 'react';
import 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ListDownMenu = (props) => {
    return(
        <ListDown className="ul list-down" id="list-down">
                    <li className="ItemProduct">
                        <Link to=''>
                            <i className="fas fa-laptop"></i>
                            Laptop  &amp; Linh phụ kiện
                        </Link>
                        <SubMenu className="SubItemProduct" id="SubItemProduct">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Laptop theo hãng</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Laptop Acer &gt;</Link>
                                                    <ListItemSubHover id="ListSubItemNewProduct">
                                                        <Link to='./'>Predator</Link>
                                                        <Link to='./'>Aspire</Link>
                                                        <Link to='./'>Nitro</Link>
                                                        <Link to='./'>Swifts</Link>
                                                    </ListItemSubHover>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./' id="ItemSubNewProduct">Laptop Apple &gt;</Link>
                                                        <ListItemSubHover id="ListSubItemNewProduct">
                                                                <Link to='./'>Macbook Air</Link>
                                                                <Link to='./'>Macbook Pro</Link>
                                                        </ListItemSubHover>
                                                    </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./'>Laptop Asus &gt;</Link>
                                                        <ListItemSubHover id="ListSubItemNewProduct">
                                                                <Link to='./'>Vivobook</Link>
                                                                <Link to='./'>Vivobook Flip</Link>
                                                                <Link to='./'>Zenbook</Link>
                                                                <Link to='./'>Zenbook Flip</Link>
                                                                <Link to='./'>Expertbook</Link>
                                                                <Link to='./'>TUF Gaming</Link>
                                                                <Link to='./'>Phổ thông</Link>
                                                        </ListItemSubHover>
                                                    </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./'>Laptop Dell &gt;</Link>
                                                        <ListItemSubHover id="ListSubItemNewProduct">
                                                                <Link to='./'>G series</Link>
                                                                <Link to='./'>Inspiron</Link>
                                                                <Link to='./'>Vostro</Link>
                                                                <Link to='./'>XPS</Link>
                                                                <Link to='./'>Latitude</Link>
                                                                <Link to='./'>Học tập văn phòng</Link>
                                                                <Link to='./'>Doanh nghiệp</Link>
                                                        </ListItemSubHover>
                                                    </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./'>Laptop Fujitsu &gt;</Link>
                                                        <ListItemSubHover id="ListSubItemNewProduct">
                                                                <Link to='./'>LifeBook E549</Link>
                                                                <Link to='./'>LifeBook E547</Link>
                                                                <Link to='./'>LifeBook E749</Link>
                                                                <Link to='./'>LifeBook U747</Link>
                                                                <Link to='./'>LifeBook U937</Link>
                                                        </ListItemSubHover>
                                                    </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./'>Laptop HP &gt;</Link>
                                                        <ListItemSubHover id="ListSubItemNewProduct">
                                                                <Link to='./'>EliteBook</Link>
                                                                <Link to='./'>Envy</Link>
                                                                <Link to='./'>ProBook</Link>
                                                                <Link to='./'>Pavilion</Link>
                                                                <Link to='./'>Pavilion x360</Link>
                                                                <Link to='./'>Pavilion Gaming</Link>
                                                                <Link to='./'>Omen Gaming</Link>
                                                                <Link to='./'>Spectre</Link>
                                                                <Link to='./'>Học tập văn phòng</Link>
                                                                <Link to='./'>Doanh nghiệp</Link>
                                                        </ListItemSubHover>
                                                    </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./'>Laptop LG &gt;</Link>
                                                        <ListItemSubHover id="ListSubItemNewProduct">
                                                                <Link to='./'>Gram</Link>
                                                        </ListItemSubHover>
                                                    </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./'>Laptop Lenovo &gt;</Link>
                                                        <ListItemSubHover id="ListSubItemNewProduct">
                                                                <Link to='./'>Ideapad</Link>
                                                                <Link to='./'>Yoga</Link>
                                                                <Link to='./'>Legion Gaming</Link>
                                                                <Link to='./'>V Series</Link>
                                                                <Link to='./'>Thinkbook</Link>
                                                                <Link to='./'>Thinkpad</Link>
                                                                <Link to='./'>Flex</Link>
                                                                <Link to='./'>Học tập văn phòng</Link>
                                                                <Link to='./'>Doanh nghiệp</Link>
                                                        </ListItemSubHover>
                                                    </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./'>Laptop Microsoft Sunface &gt;</Link>
                                                        <ListItemSubHover id="ListSubItemNewProduct">
                                                                <Link to='./'>Surface Go</Link>
                                                                <Link to='./'>Surface Pro 7</Link>
                                                                <Link to='./'>Surface Pro X</Link>
                                                                <Link to='./'>Surface Book</Link>
                                                                <Link to='./'>Surface Laptop</Link>
                                                                <Link to='./'>Phụ kiện Surface</Link>
                                                        </ListItemSubHover>
                                                    </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./'>Laptop MSI &gt;</Link>
                                                        <ListItemSubHover id="ListSubItemNewProduct">
                                                                <Link to='./'>GE Series</Link>
                                                                <Link to='./'>GL Series</Link>
                                                                <Link to='./'>GS Series</Link>
                                                                <Link to='./'>GF Series</Link>
                                                                <Link to='./'>GT Series</Link>
                                                                <Link to='./'>Prestige Series</Link>
                                                                <Link to='./'>Modern Series</Link>
                                                                <Link to='./'>Bravo Series</Link>
                                                                <Link to='./'>Doanh nhân, mỏng nhẹ</Link>
                                                                <Link to='./'>Laptop MSI Creator</Link>
                                                        </ListItemSubHover>
                                                    </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./'>Laptop ConceptD-Đồ hoạ &gt;</Link>
                                                        <ListItemSubHover id="ListSubItemNewProduct">
                                                                <Link to='./'>ConceptD 3</Link>
                                                                <Link to='./'>ConceptD 7</Link>
                                                        </ListItemSubHover>
                                                    </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./'>Laptop Avita &gt;</Link>
                                                        <ListItemSubHover id="ListSubItemNewProduct">
                                                                <Link to='./'>Liber</Link>
                                                        </ListItemSubHover>
                                                    </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct"> 
                                                    <Link to='./'>Laptop Gigabyte &gt;</Link>
                                                    <ListItemSubHover id="ListSubItemNewProduct">
                                                            <Link to='./'>Aero Series</Link>
                                                            <Link to='./'>Aorus Series</Link>
                                                            <Link to='./'>G Series</Link>
                                                    </ListItemSubHover>
                                                </ItemSubNewSubItem>
                                            </NewSubItem>
                                        </td>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Laptop theo nhu cầu</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Laptop mỏng nhẹ</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./' id="Item-Sub-New-Product">Laptop cao cấp</Link>
                                                    </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./'>Laptop doanh nghiệp</Link>
                                                    </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./'>Laptop học tập-văn phòng</Link>
                                                    </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./'>Laptop đồ họa-kỹ thuật</Link>
                                                    </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./'>Laptop Gaming-Hiend</Link>
                                                    </ItemSubNewSubItem>
                                            </NewSubItem>
                                        </td>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Laptop theo khoảng tiền</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Laptop dưới 10 triệu</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./' id="Item-Sub-New-Product">Laptop từ 10-15 triệu</Link>
                                                    </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./'>Laptop từ 15-20 triệu</Link>
                                                    </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./'>Laptop từ 20-25 triệu</Link>
                                                    </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./'>Laptop từ 25-35 triệu</Link>
                                                    </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./'>Laptop từ 35-40 triệu</Link>
                                                    </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./'>Laptop trên 40 triệu</Link>
                                                </ItemSubNewSubItem>
                                            </NewSubItem>
                                        </td>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Linh kiện, phụ kiện Laptop</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Bộ nhớ trong laptop</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Ổ đĩa cứng laptop</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Pin Laptop</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Sạc Laptop - Adapter</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Màn hình Laptop</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Bàn phím Laptop</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Chuột Laptop</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Túi  	&amp; Balo Laptop</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Giá làm mát Laptop</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Phụ kiện Apple-Surface</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Phụ kiện khác</Link>
                                                </ItemSubNewSubItem>
                                            </NewSubItem>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Laptop Gaming</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Laptop Gaming Asus</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Laptop Gaming Acer</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Laptop Gaming Dell</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Laptop Gaming HP</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Laptop Gaming Lenovo</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Laptop Gaming MSI</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Laptop Gaming Gigabyte</Link>
                                                </ItemSubNewSubItem>
                                                
                                            </NewSubItem>
                                        </td>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Laptop theo cấu hình</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Laptop Celeron</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Laptop Pentium</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Laptop Core i3</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Laptop Core i5</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Laptop Core i7</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Laptop Core i9</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Laptop Ryzen 3</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Laptop Ryzen 5</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Laptop Ryzen 7</Link>
                                                </ItemSubNewSubItem>
                                            </NewSubItem>
                                        </td>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Laptop theo kích thước</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Laptop khoảng 11 inch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Laptop khoảng 12 inch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Laptop khoảng 13 inch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Laptop khoảng 14 inch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Laptop khoảng 15 inch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Laptop khoảng 17 inch</Link>
                                                </ItemSubNewSubItem>    
                                            </NewSubItem>
                                        </td>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Laptop Workstation</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Laptop Workstation HP  &gt;</Link>
                                                    <ListItemSubHover id="ListSubItemNewProduct">
                                                        <Link to='./'>HP Zbook Firefly</Link>
                                                        <Link to='./'>HP Zbook Fury</Link>
                                                        <Link to='./'>HP Zbook Studio</Link>
                                                    </ListItemSubHover>
                                                </ItemSubNewSubItem>
                                                
                                            </NewSubItem>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Laptop trả góp 0 &#37;</Link>
                                            </TitleItem>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </SubMenu>
                    </li>
                    <li className="ItemProduct">
                        <Link to=''>
                            <i className="fas fa-mobile-alt"></i>
                            Điện thoại,Table  &amp; phụ kiện
                        </Link>
                        <SubMenu className="SubItemProduct" id="SubItemProduct">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Điện thoại theo hãng</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Iphone  &gt;</Link>
                                                    <ListItemSubHover id="ListSubItemNewProduct">
                                                        <Link to='./'>Iphone 12</Link>
                                                        <Link to='./'>Iphone 11</Link>
                                                        <Link to='./'>Iphone SE</Link>
                                                        <Link to='./'>Iphone 8</Link>
                                                    </ListItemSubHover>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./' id="ItemSubNewProduct">Samsung &gt;</Link>
                                                        <ListItemSubHover id="ListSubItemNewProduct">
                                                            <Link to='./'>Galaxy A</Link>
                                                            <Link to='./'>Galaxy M</Link>
                                                            <Link to='./'>Galaxy S</Link>
                                                            <Link to='./'>Galaxy Z  &#40; Màn hình gập &#41;</Link>
                                                            <Link to='./'>Galaxy Note</Link>
                                                        </ListItemSubHover>
                                                    </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Xiaomi</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Vsmart</Link>
                                                
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Oppo</Link>
                                                    
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Nokia</Link>
                                                    
                                                </ItemSubNewSubItem>
                                            </NewSubItem>
                                        </td>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Điện thoại theo khoảng giá</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Dưới 2 triệu</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./' id="Item-Sub-New-Product">Từ 2 triệu - 4 triệu</Link>
                                                    </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./'>Từ 4 triệu - 7 triệu</Link>
                                                    </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./'>Từ 7 triệu - 13 triệu</Link>
                                                    </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./'>Trên 13 triệu</Link>
                                                    </ItemSubNewSubItem>
                                            </NewSubItem>
                                        </td>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Điện thoại theo kích thước</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Khoảng 4 inch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./' id="Item-Sub-New-Product">Khoảng 5 inch</Link>
                                                    </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./'>Khoảng 6 inch</Link>
                                                    </ItemSubNewSubItem>
                                                
                                            </NewSubItem>
                                        </td>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Đồng hồ thông minh</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Apple Watch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Samsung Watch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Garmin</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Xiaomi</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Đồng hồ trẻ em </Link>
                                                </ItemSubNewSubItem>
                                            </NewSubItem>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Máy tính bảng theo hãng</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Ipad </Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Samsung  </Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Lenovo</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Huawei</Link>
                                                </ItemSubNewSubItem>
                                            </NewSubItem>
                                        </td>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Máy tính bảng theo khoảng giá</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Dưới 3 triệu</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Từ 3 - 6 triệu</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Từ 6 - 10 triệu</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'> Từ 10 - 15 triệu</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Từ 15 - 20 triệu</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Từ 20 - 30 triệu</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Trên 30 triệu</Link>
                                                </ItemSubNewSubItem>
                                            </NewSubItem>
                                        </td>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Máy tính bảng theo kích thước</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>khoảng 7 inch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>khoảng 8 inch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>khoảng 10 inch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>khoảng 11 inch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>khoảng 12 inch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>khoảng 13 inch</Link>
                                                </ItemSubNewSubItem>    
                                            </NewSubItem>
                                        </td>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Phụ kiện</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Sạc, cáp</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Pin dự phòng</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Tai nghe</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Bao da, Ốp Lưng</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Thẻ điện thoại</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Dịch vụ Apple Care</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Apple Airtag</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Sim 4G tốc độ cao</Link>
                                                </ItemSubNewSubItem>
                                            </NewSubItem>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </SubMenu>
                    </li>
                    <li className="ItemProduct">
                        <Link to=''>
                            <i className="fab fa-apple"></i>
                            Sản phẩm Apple
                        </Link>
                        
                    </li>
                    <li className="ItemProduct">
                        <Link to=''>
                            <i className="fas fa-hdd"></i>
                            Máy tính đồng bộ
                        </Link>

                    </li>
                    <li className="ItemProduct">
                        <Link to=''>
                            <i className="fas fa-server"></i>
                            Server  &amp; Workstation
                        </Link>
                        <SubMenu className="SubItemProduct" id="SubItemProduct">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Điện thoại theo hãng</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Iphone </Link>
                                                    <ListItemSubHover id="ListSubItemNewProduct">
                                                        <Link to='./'>Iphone 12</Link>
                                                        <Link to='./'>Iphone 11</Link>
                                                        <Link to='./'>Iphone SE</Link>
                                                        <Link to='./'>Iphone 8</Link>
                                                    </ListItemSubHover>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./' id="ItemSubNewProduct">Samsung</Link>
                                                        <ListItemSubHover id="ListSubItemNewProduct">
                                                            <Link to='./'>Galaxy A</Link>
                                                            <Link to='./'>Galaxy M</Link>
                                                            <Link to='./'>Galaxy S</Link>
                                                            <Link to='./'>Galaxy Z  &#40; Màn hình gập &#41;</Link>
                                                            <Link to='./'>Galaxy Note</Link>
                                                        </ListItemSubHover>
                                                    </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Xiaomi</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Vsmart</Link>
                                                
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Oppo</Link>
                                                    
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Nokia</Link>
                                                    
                                                </ItemSubNewSubItem>
                                            </NewSubItem>
                                        </td>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Điện thoại theo khoảng giá</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Dưới 2 triệu</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./' id="Item-Sub-New-Product">Từ 2 triệu - 4 triệu</Link>
                                                    </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./'>Từ 4 triệu - 7 triệu</Link>
                                                    </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./'>Từ 7 triệu - 13 triệu</Link>
                                                    </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./'>Trên 13 triệu</Link>
                                                    </ItemSubNewSubItem>
                                            </NewSubItem>
                                        </td>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Điện thoại theo kích thước</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Khoảng 4 inch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./' id="Item-Sub-New-Product">Khoảng 5 inch</Link>
                                                    </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./'>Khoảng 6 inch</Link>
                                                    </ItemSubNewSubItem>
                                                
                                            </NewSubItem>
                                        </td>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Đồng hồ thông minh</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Apple Watch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Samsung Watch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Garmin</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Xiaomi</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Đồng hồ trẻ em </Link>
                                                </ItemSubNewSubItem>
                                            </NewSubItem>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Máy tính bảng theo hãng</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Ipad </Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Samsung  </Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Lenovo</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Huawei</Link>
                                                </ItemSubNewSubItem>
                                            </NewSubItem>
                                        </td>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Máy tính bảng theo khoảng giá</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Dưới 3 triệu</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Từ 3 - 6 triệu</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Từ 6 - 10 triệu</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'> Từ 10 - 15 triệu</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Từ 15 - 20 triệu</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Từ 20 - 30 triệu</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Trên 30 triệu</Link>
                                                </ItemSubNewSubItem>
                                            </NewSubItem>
                                        </td>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Máy tính bảng theo kích thước</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>khoảng 7 inch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>khoảng 8 inch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>khoảng 10 inch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>khoảng 11 inch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>khoảng 12 inch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>khoảng 13 inch</Link>
                                                </ItemSubNewSubItem>    
                                            </NewSubItem>
                                        </td>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Phụ kiện</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Sạc, cáp</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Pin dự phòng</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Tai nghe</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Bao da, Ốp Lưng</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Thẻ điện thoại</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Dịch vụ Apple Care</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Apple Airtag</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Sim 4G tốc độ cao</Link>
                                                </ItemSubNewSubItem>
                                            </NewSubItem>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </SubMenu>
                    </li>
                    <li className="ItemProduct">
                        <Link to=''>
                            <i className="fas fa-desktop"></i>
                            Gaming PC
                        </Link>
                    </li>
                    <li className="ItemProduct">
                        <Link to=''>
                            <i className="fas fa-gamepad"></i>
                            Game Gear
                        </Link>
                    </li>
                    <li className="ItemProduct">
                        <Link to=''>
                            <i className="fas fa-microchip"></i>
                            Linh kiện máy tính
                        </Link>
                        <SubMenu className="SubItemProduct" id="SubItemProduct">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Điện thoại theo hãng</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Iphone </Link>
                                                    <ListItemSubHover id="ListSubItemNewProduct">
                                                        <Link to='./'>Iphone 12</Link>
                                                        <Link to='./'>Iphone 11</Link>
                                                        <Link to='./'>Iphone SE</Link>
                                                        <Link to='./'>Iphone 8</Link>
                                                    </ListItemSubHover>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./' id="ItemSubNewProduct">Samsung</Link>
                                                        <ListItemSubHover id="ListSubItemNewProduct">
                                                            <Link to='./'>Galaxy A</Link>
                                                            <Link to='./'>Galaxy M</Link>
                                                            <Link to='./'>Galaxy S</Link>
                                                            <Link to='./'>Galaxy Z  &#40; Màn hình gập &#41;</Link>
                                                            <Link to='./'>Galaxy Note</Link>
                                                        </ListItemSubHover>
                                                    </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Xiaomi</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Vsmart</Link>
                                                
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Oppo</Link>
                                                    
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Nokia</Link>
                                                    
                                                </ItemSubNewSubItem>
                                            </NewSubItem>
                                        </td>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Điện thoại theo khoảng giá</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Dưới 2 triệu</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./' id="Item-Sub-New-Product">Từ 2 triệu - 4 triệu</Link>
                                                    </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./'>Từ 4 triệu - 7 triệu</Link>
                                                    </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./'>Từ 7 triệu - 13 triệu</Link>
                                                    </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./'>Trên 13 triệu</Link>
                                                    </ItemSubNewSubItem>
                                            </NewSubItem>
                                        </td>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Điện thoại theo kích thước</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Khoảng 4 inch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./' id="Item-Sub-New-Product">Khoảng 5 inch</Link>
                                                    </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./'>Khoảng 6 inch</Link>
                                                    </ItemSubNewSubItem>
                                                
                                            </NewSubItem>
                                        </td>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Đồng hồ thông minh</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Apple Watch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Samsung Watch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Garmin</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Xiaomi</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Đồng hồ trẻ em </Link>
                                                </ItemSubNewSubItem>
                                            </NewSubItem>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Máy tính bảng theo hãng</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Ipad </Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Samsung  </Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Lenovo</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Huawei</Link>
                                                </ItemSubNewSubItem>
                                            </NewSubItem>
                                        </td>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Máy tính bảng theo khoảng giá</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Dưới 3 triệu</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Từ 3 - 6 triệu</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Từ 6 - 10 triệu</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'> Từ 10 - 15 triệu</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Từ 15 - 20 triệu</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Từ 20 - 30 triệu</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Trên 30 triệu</Link>
                                                </ItemSubNewSubItem>
                                            </NewSubItem>
                                        </td>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Máy tính bảng theo kích thước</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>khoảng 7 inch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>khoảng 8 inch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>khoảng 10 inch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>khoảng 11 inch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>khoảng 12 inch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>khoảng 13 inch</Link>
                                                </ItemSubNewSubItem>    
                                            </NewSubItem>
                                        </td>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Phụ kiện</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Sạc, cáp</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Pin dự phòng</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Tai nghe</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Bao da, Ốp Lưng</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Thẻ điện thoại</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Dịch vụ Apple Care</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Apple Airtag</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Sim 4G tốc độ cao</Link>
                                                </ItemSubNewSubItem>
                                            </NewSubItem>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </SubMenu>
                    </li>
                    <li className="ItemProduct">
                        <Link to=''>
                            <i className="fas fa-code-branch"></i>
                            Phụ kiện máy tính &amp; nghe nhìn
                        </Link>
                    </li>
                    <li className="ItemProduct">
                        <Link to=''>
                            <i className="fas fa-tv"></i>
                            Màn hình máy tính
                        </Link>

                    </li>
                    <li className="ItemProduct">
                        <Link to=''>
                            <i className="fas fa-print"></i>
                            Thiết bị văn phòng Phần mềm
                        </Link>
                        <SubMenu className="SubItemProduct" id="SubItemProduct">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Điện thoại theo hãng</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Iphone </Link>
                                                    <ListItemSubHover id="ListSubItemNewProduct">
                                                        <Link to='./'>Iphone 12</Link>
                                                        <Link to='./'>Iphone 11</Link>
                                                        <Link to='./'>Iphone SE</Link>
                                                        <Link to='./'>Iphone 8</Link>
                                                    </ListItemSubHover>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./' id="ItemSubNewProduct">Samsung</Link>
                                                        <ListItemSubHover id="ListSubItemNewProduct">
                                                            <Link to='./'>Galaxy A</Link>
                                                            <Link to='./'>Galaxy M</Link>
                                                            <Link to='./'>Galaxy S</Link>
                                                            <Link to='./'>Galaxy Z  &#40; Màn hình gập &#41;</Link>
                                                            <Link to='./'>Galaxy Note</Link>
                                                        </ListItemSubHover>
                                                    </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Xiaomi</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Vsmart</Link>
                                                
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Oppo</Link>
                                                    
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Nokia</Link>
                                                    
                                                </ItemSubNewSubItem>
                                            </NewSubItem>
                                        </td>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Điện thoại theo khoảng giá</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Dưới 2 triệu</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./' id="Item-Sub-New-Product">Từ 2 triệu - 4 triệu</Link>
                                                    </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./'>Từ 4 triệu - 7 triệu</Link>
                                                    </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./'>Từ 7 triệu - 13 triệu</Link>
                                                    </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./'>Trên 13 triệu</Link>
                                                    </ItemSubNewSubItem>
                                            </NewSubItem>
                                        </td>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Điện thoại theo kích thước</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Khoảng 4 inch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./' id="Item-Sub-New-Product">Khoảng 5 inch</Link>
                                                    </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./'>Khoảng 6 inch</Link>
                                                    </ItemSubNewSubItem>
                                                
                                            </NewSubItem>
                                        </td>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Đồng hồ thông minh</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Apple Watch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Samsung Watch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Garmin</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Xiaomi</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Đồng hồ trẻ em </Link>
                                                </ItemSubNewSubItem>
                                            </NewSubItem>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Máy tính bảng theo hãng</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Ipad </Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Samsung  </Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Lenovo</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Huawei</Link>
                                                </ItemSubNewSubItem>
                                            </NewSubItem>
                                        </td>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Máy tính bảng theo khoảng giá</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Dưới 3 triệu</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Từ 3 - 6 triệu</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Từ 6 - 10 triệu</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'> Từ 10 - 15 triệu</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Từ 15 - 20 triệu</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Từ 20 - 30 triệu</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Trên 30 triệu</Link>
                                                </ItemSubNewSubItem>
                                            </NewSubItem>
                                        </td>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Máy tính bảng theo kích thước</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>khoảng 7 inch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>khoảng 8 inch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>khoảng 10 inch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>khoảng 11 inch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>khoảng 12 inch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>khoảng 13 inch</Link>
                                                </ItemSubNewSubItem>    
                                            </NewSubItem>
                                        </td>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Phụ kiện</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Sạc, cáp</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Pin dự phòng</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Tai nghe</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Bao da, Ốp Lưng</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Thẻ điện thoại</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Dịch vụ Apple Care</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Apple Airtag</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Sim 4G tốc độ cao</Link>
                                                </ItemSubNewSubItem>
                                            </NewSubItem>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </SubMenu>
                    </li>
                    <li className="ItemProduct">
                        <Link to=''>
                            <i className="fas fa-print"></i>
                            TB lưu trữ  &amp; Kỹ thuật số
                        </Link>
                        <SubMenu className="SubItemProduct" id="SubItemProduct">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Điện thoại theo hãng</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Iphone </Link>
                                                    <ListItemSubHover id="ListSubItemNewProduct">
                                                        <Link to='./'>Iphone 12</Link>
                                                        <Link to='./'>Iphone 11</Link>
                                                        <Link to='./'>Iphone SE</Link>
                                                        <Link to='./'>Iphone 8</Link>
                                                    </ListItemSubHover>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./' id="ItemSubNewProduct">Samsung</Link>
                                                        <ListItemSubHover id="ListSubItemNewProduct">
                                                            <Link to='./'>Galaxy A</Link>
                                                            <Link to='./'>Galaxy M</Link>
                                                            <Link to='./'>Galaxy S</Link>
                                                            <Link to='./'>Galaxy Z  &#40; Màn hình gập &#41;</Link>
                                                            <Link to='./'>Galaxy Note</Link>
                                                        </ListItemSubHover>
                                                    </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Xiaomi</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Vsmart</Link>
                                                
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Oppo</Link>
                                                    
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Nokia</Link>
                                                    
                                                </ItemSubNewSubItem>
                                            </NewSubItem>
                                        </td>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Điện thoại theo khoảng giá</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Dưới 2 triệu</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./' id="Item-Sub-New-Product">Từ 2 triệu - 4 triệu</Link>
                                                    </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./'>Từ 4 triệu - 7 triệu</Link>
                                                    </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./'>Từ 7 triệu - 13 triệu</Link>
                                                    </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./'>Trên 13 triệu</Link>
                                                    </ItemSubNewSubItem>
                                            </NewSubItem>
                                        </td>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Điện thoại theo kích thước</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Khoảng 4 inch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./' id="Item-Sub-New-Product">Khoảng 5 inch</Link>
                                                    </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./'>Khoảng 6 inch</Link>
                                                    </ItemSubNewSubItem>
                                                
                                            </NewSubItem>
                                        </td>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Đồng hồ thông minh</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Apple Watch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Samsung Watch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Garmin</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Xiaomi</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Đồng hồ trẻ em </Link>
                                                </ItemSubNewSubItem>
                                            </NewSubItem>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Máy tính bảng theo hãng</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Ipad </Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Samsung  </Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Lenovo</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Huawei</Link>
                                                </ItemSubNewSubItem>
                                            </NewSubItem>
                                        </td>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Máy tính bảng theo khoảng giá</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Dưới 3 triệu</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Từ 3 - 6 triệu</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Từ 6 - 10 triệu</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'> Từ 10 - 15 triệu</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Từ 15 - 20 triệu</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Từ 20 - 30 triệu</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Trên 30 triệu</Link>
                                                </ItemSubNewSubItem>
                                            </NewSubItem>
                                        </td>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Máy tính bảng theo kích thước</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>khoảng 7 inch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>khoảng 8 inch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>khoảng 10 inch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>khoảng 11 inch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>khoảng 12 inch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>khoảng 13 inch</Link>
                                                </ItemSubNewSubItem>    
                                            </NewSubItem>
                                        </td>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Phụ kiện</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Sạc, cáp</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Pin dự phòng</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Tai nghe</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Bao da, Ốp Lưng</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Thẻ điện thoại</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Dịch vụ Apple Care</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Apple Airtag</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Sim 4G tốc độ cao</Link>
                                                </ItemSubNewSubItem>
                                            </NewSubItem>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </SubMenu>
                    </li>
                    <li className="ItemProduct">
                        <Link to=''>
                            <i className="fas fa-network-wired"></i>
                            Thiết bị mạng
                        </Link>
                        <SubMenu className="SubItemProduct" id="SubItemProduct">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Điện thoại theo hãng</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Iphone </Link>
                                                    <ListItemSubHover id="ListSubItemNewProduct">
                                                        <Link to='./'>Iphone 12</Link>
                                                        <Link to='./'>Iphone 11</Link>
                                                        <Link to='./'>Iphone SE</Link>
                                                        <Link to='./'>Iphone 8</Link>
                                                    </ListItemSubHover>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./' id="ItemSubNewProduct">Samsung</Link>
                                                        <ListItemSubHover id="ListSubItemNewProduct">
                                                            <Link to='./'>Galaxy A</Link>
                                                            <Link to='./'>Galaxy M</Link>
                                                            <Link to='./'>Galaxy S</Link>
                                                            <Link to='./'>Galaxy Z  &#40; Màn hình gập &#41;</Link>
                                                            <Link to='./'>Galaxy Note</Link>
                                                        </ListItemSubHover>
                                                    </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Xiaomi</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Vsmart</Link>
                                                
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Oppo</Link>
                                                    
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Nokia</Link>
                                                    
                                                </ItemSubNewSubItem>
                                            </NewSubItem>
                                        </td>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Điện thoại theo khoảng giá</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Dưới 2 triệu</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./' id="Item-Sub-New-Product">Từ 2 triệu - 4 triệu</Link>
                                                    </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./'>Từ 4 triệu - 7 triệu</Link>
                                                    </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./'>Từ 7 triệu - 13 triệu</Link>
                                                    </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./'>Trên 13 triệu</Link>
                                                    </ItemSubNewSubItem>
                                            </NewSubItem>
                                        </td>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Điện thoại theo kích thước</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Khoảng 4 inch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./' id="Item-Sub-New-Product">Khoảng 5 inch</Link>
                                                    </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./'>Khoảng 6 inch</Link>
                                                    </ItemSubNewSubItem>
                                                
                                            </NewSubItem>
                                        </td>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Đồng hồ thông minh</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Apple Watch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Samsung Watch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Garmin</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Xiaomi</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Đồng hồ trẻ em </Link>
                                                </ItemSubNewSubItem>
                                            </NewSubItem>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Máy tính bảng theo hãng</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Ipad </Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Samsung  </Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Lenovo</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Huawei</Link>
                                                </ItemSubNewSubItem>
                                            </NewSubItem>
                                        </td>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Máy tính bảng theo khoảng giá</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Dưới 3 triệu</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Từ 3 - 6 triệu</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Từ 6 - 10 triệu</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'> Từ 10 - 15 triệu</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Từ 15 - 20 triệu</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Từ 20 - 30 triệu</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Trên 30 triệu</Link>
                                                </ItemSubNewSubItem>
                                            </NewSubItem>
                                        </td>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Máy tính bảng theo kích thước</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>khoảng 7 inch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>khoảng 8 inch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>khoảng 10 inch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>khoảng 11 inch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>khoảng 12 inch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>khoảng 13 inch</Link>
                                                </ItemSubNewSubItem>    
                                            </NewSubItem>
                                        </td>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Phụ kiện</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Sạc, cáp</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Pin dự phòng</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Tai nghe</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Bao da, Ốp Lưng</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Thẻ điện thoại</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Dịch vụ Apple Care</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Apple Airtag</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Sim 4G tốc độ cao</Link>
                                                </ItemSubNewSubItem>
                                            </NewSubItem>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </SubMenu>
                    </li>
                    <li className="ItemProduct">
                        <Link to=''>
                            <i className="fas fa-video"></i>
                            Camera  &amp; SmartHome
                        </Link>
                        <SubMenu className="SubItemProduct" id="SubItemProduct">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Điện thoại theo hãng</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Iphone </Link>
                                                    <ListItemSubHover id="ListSubItemNewProduct">
                                                        <Link to='./'>Iphone 12</Link>
                                                        <Link to='./'>Iphone 11</Link>
                                                        <Link to='./'>Iphone SE</Link>
                                                        <Link to='./'>Iphone 8</Link>
                                                    </ListItemSubHover>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./' id="ItemSubNewProduct">Samsung</Link>
                                                        <ListItemSubHover id="ListSubItemNewProduct">
                                                            <Link to='./'>Galaxy A</Link>
                                                            <Link to='./'>Galaxy M</Link>
                                                            <Link to='./'>Galaxy S</Link>
                                                            <Link to='./'>Galaxy Z  &#40; Màn hình gập &#41;</Link>
                                                            <Link to='./'>Galaxy Note</Link>
                                                        </ListItemSubHover>
                                                    </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Xiaomi</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Vsmart</Link>
                                                
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Oppo</Link>
                                                    
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Nokia</Link>
                                                    
                                                </ItemSubNewSubItem>
                                            </NewSubItem>
                                        </td>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Điện thoại theo khoảng giá</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Dưới 2 triệu</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./' id="Item-Sub-New-Product">Từ 2 triệu - 4 triệu</Link>
                                                    </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./'>Từ 4 triệu - 7 triệu</Link>
                                                    </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./'>Từ 7 triệu - 13 triệu</Link>
                                                    </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./'>Trên 13 triệu</Link>
                                                    </ItemSubNewSubItem>
                                            </NewSubItem>
                                        </td>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Điện thoại theo kích thước</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Khoảng 4 inch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./' id="Item-Sub-New-Product">Khoảng 5 inch</Link>
                                                    </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./'>Khoảng 6 inch</Link>
                                                    </ItemSubNewSubItem>
                                                
                                            </NewSubItem>
                                        </td>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Đồng hồ thông minh</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Apple Watch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Samsung Watch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Garmin</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Xiaomi</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Đồng hồ trẻ em </Link>
                                                </ItemSubNewSubItem>
                                            </NewSubItem>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Máy tính bảng theo hãng</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Ipad </Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Samsung  </Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Lenovo</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Huawei</Link>
                                                </ItemSubNewSubItem>
                                            </NewSubItem>
                                        </td>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Máy tính bảng theo khoảng giá</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Dưới 3 triệu</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Từ 3 - 6 triệu</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Từ 6 - 10 triệu</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'> Từ 10 - 15 triệu</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Từ 15 - 20 triệu</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Từ 20 - 30 triệu</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Trên 30 triệu</Link>
                                                </ItemSubNewSubItem>
                                            </NewSubItem>
                                        </td>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Máy tính bảng theo kích thước</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>khoảng 7 inch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>khoảng 8 inch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>khoảng 10 inch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>khoảng 11 inch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>khoảng 12 inch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>khoảng 13 inch</Link>
                                                </ItemSubNewSubItem>    
                                            </NewSubItem>
                                        </td>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Phụ kiện</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Sạc, cáp</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Pin dự phòng</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Tai nghe</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Bao da, Ốp Lưng</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Thẻ điện thoại</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Dịch vụ Apple Care</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Apple Airtag</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Sim 4G tốc độ cao</Link>
                                                </ItemSubNewSubItem>
                                            </NewSubItem>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </SubMenu>
                    </li>
                    <li className="ItemProduct">
                        <Link to=''>
                            <i className="fas fa-barcode"></i>
                            TB siêu thị  &amp; PM văn phòng
                        </Link>
                        <SubMenu className="SubItemProduct" id="SubItemProduct">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Điện thoại theo hãng</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Iphone </Link>
                                                    <ListItemSubHover id="ListSubItemNewProduct">
                                                        <Link to='./'>Iphone 12</Link>
                                                        <Link to='./'>Iphone 11</Link>
                                                        <Link to='./'>Iphone SE</Link>
                                                        <Link to='./'>Iphone 8</Link>
                                                    </ListItemSubHover>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./' id="ItemSubNewProduct">Samsung</Link>
                                                        <ListItemSubHover id="ListSubItemNewProduct">
                                                            <Link to='./'>Galaxy A</Link>
                                                            <Link to='./'>Galaxy M</Link>
                                                            <Link to='./'>Galaxy S</Link>
                                                            <Link to='./'>Galaxy Z  &#40; Màn hình gập &#41;</Link>
                                                            <Link to='./'>Galaxy Note</Link>
                                                        </ListItemSubHover>
                                                    </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Xiaomi</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Vsmart</Link>
                                                
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Oppo</Link>
                                                    
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Nokia</Link>
                                                    
                                                </ItemSubNewSubItem>
                                            </NewSubItem>
                                        </td>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Điện thoại theo khoảng giá</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Dưới 2 triệu</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./' id="Item-Sub-New-Product">Từ 2 triệu - 4 triệu</Link>
                                                    </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./'>Từ 4 triệu - 7 triệu</Link>
                                                    </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./'>Từ 7 triệu - 13 triệu</Link>
                                                    </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./'>Trên 13 triệu</Link>
                                                    </ItemSubNewSubItem>
                                            </NewSubItem>
                                        </td>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Điện thoại theo kích thước</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Khoảng 4 inch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./' id="Item-Sub-New-Product">Khoảng 5 inch</Link>
                                                    </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./'>Khoảng 6 inch</Link>
                                                    </ItemSubNewSubItem>
                                                
                                            </NewSubItem>
                                        </td>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Đồng hồ thông minh</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Apple Watch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Samsung Watch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Garmin</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Xiaomi</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Đồng hồ trẻ em </Link>
                                                </ItemSubNewSubItem>
                                            </NewSubItem>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Máy tính bảng theo hãng</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Ipad </Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Samsung  </Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Lenovo</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Huawei</Link>
                                                </ItemSubNewSubItem>
                                            </NewSubItem>
                                        </td>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Máy tính bảng theo khoảng giá</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Dưới 3 triệu</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Từ 3 - 6 triệu</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Từ 6 - 10 triệu</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'> Từ 10 - 15 triệu</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Từ 15 - 20 triệu</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Từ 20 - 30 triệu</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Trên 30 triệu</Link>
                                                </ItemSubNewSubItem>
                                            </NewSubItem>
                                        </td>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Máy tính bảng theo kích thước</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>khoảng 7 inch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>khoảng 8 inch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>khoảng 10 inch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>khoảng 11 inch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>khoảng 12 inch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>khoảng 13 inch</Link>
                                                </ItemSubNewSubItem>    
                                            </NewSubItem>
                                        </td>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Phụ kiện</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Sạc, cáp</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Pin dự phòng</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Tai nghe</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Bao da, Ốp Lưng</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Thẻ điện thoại</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Dịch vụ Apple Care</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Apple Airtag</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Sim 4G tốc độ cao</Link>
                                                </ItemSubNewSubItem>
                                            </NewSubItem>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </SubMenu>
                    </li>
                    <li className="ItemProduct"> 
                        <Link to=''>
                            <i className="fas fa-play"></i>
                            Thiết bị hội nghị  &amp; trường học
                        </Link>
                        <SubMenu className="SubItemProduct" id="SubItemProduct">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Điện thoại theo hãng</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Iphone </Link>
                                                    <ListItemSubHover id="ListSubItemNewProduct">
                                                        <Link to='./'>Iphone 12</Link>
                                                        <Link to='./'>Iphone 11</Link>
                                                        <Link to='./'>Iphone SE</Link>
                                                        <Link to='./'>Iphone 8</Link>
                                                    </ListItemSubHover>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./' id="ItemSubNewProduct">Samsung</Link>
                                                        <ListItemSubHover id="ListSubItemNewProduct">
                                                            <Link to='./'>Galaxy A</Link>
                                                            <Link to='./'>Galaxy M</Link>
                                                            <Link to='./'>Galaxy S</Link>
                                                            <Link to='./'>Galaxy Z  &#40; Màn hình gập &#41;</Link>
                                                            <Link to='./'>Galaxy Note</Link>
                                                        </ListItemSubHover>
                                                    </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Xiaomi</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Vsmart</Link>
                                                
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Oppo</Link>
                                                    
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Nokia</Link>
                                                    
                                                </ItemSubNewSubItem>
                                            </NewSubItem>
                                        </td>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Điện thoại theo khoảng giá</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Dưới 2 triệu</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./' id="Item-Sub-New-Product">Từ 2 triệu - 4 triệu</Link>
                                                    </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./'>Từ 4 triệu - 7 triệu</Link>
                                                    </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./'>Từ 7 triệu - 13 triệu</Link>
                                                    </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./'>Trên 13 triệu</Link>
                                                    </ItemSubNewSubItem>
                                            </NewSubItem>
                                        </td>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Điện thoại theo kích thước</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Khoảng 4 inch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./' id="Item-Sub-New-Product">Khoảng 5 inch</Link>
                                                    </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                        <Link to='./'>Khoảng 6 inch</Link>
                                                    </ItemSubNewSubItem>
                                                
                                            </NewSubItem>
                                        </td>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Đồng hồ thông minh</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Apple Watch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Samsung Watch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Garmin</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Xiaomi</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Đồng hồ trẻ em </Link>
                                                </ItemSubNewSubItem>
                                            </NewSubItem>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Máy tính bảng theo hãng</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Ipad </Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Samsung  </Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Lenovo</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Huawei</Link>
                                                </ItemSubNewSubItem>
                                            </NewSubItem>
                                        </td>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Máy tính bảng theo khoảng giá</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Dưới 3 triệu</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Từ 3 - 6 triệu</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Từ 6 - 10 triệu</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'> Từ 10 - 15 triệu</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Từ 15 - 20 triệu</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Từ 20 - 30 triệu</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>Trên 30 triệu</Link>
                                                </ItemSubNewSubItem>
                                            </NewSubItem>
                                        </td>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Máy tính bảng theo kích thước</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>khoảng 7 inch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>khoảng 8 inch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>khoảng 10 inch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>khoảng 11 inch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>khoảng 12 inch</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./'>khoảng 13 inch</Link>
                                                </ItemSubNewSubItem>    
                                            </NewSubItem>
                                        </td>
                                        <td>
                                            <TitleItem id="TitleItem">
                                                <Link to="./">Phụ kiện</Link>
                                            </TitleItem>
                                            <NewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Sạc, cáp</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Pin dự phòng</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Tai nghe</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Bao da, Ốp Lưng</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Thẻ điện thoại</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Dịch vụ Apple Care</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Apple Airtag</Link>
                                                </ItemSubNewSubItem>
                                                <ItemSubNewSubItem id="ItemSubNewProduct">
                                                    <Link to='./' id="Item-Sub-New-Product">Sim 4G tốc độ cao</Link>
                                                </ItemSubNewSubItem>
                                            </NewSubItem>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </SubMenu>
                    </li>
                </ListDown>

    );
}
const ListDown =  styled.ul`
    width: 300px;
    max-width: 17vw;
    height: 720px;
    position: absolute;
    margin-top: 10px;
    padding-left:0;
    border: 1px solid #d00;
    background: #ffff;
    line-height:30px;
    list-style:none;
    z-index:99;
    display:block;
    text-align: left;
    li{
        width:100%;
        height:45px;
        padding:15px;
        border: 0.5px solid gray;
        line-height:10px;
        font-size: 16px;
        transition-delay:3s;
        a{
            color:black;
            text-decoration: none;
            i{
                padding-right:5px;
            }
        }
    }
    
            
`;
const td = styled.td`
    width:25%;
    height:320px;
    vertical-align: top;
    tex-align:left;
    padding-left:20px;
`;
const SubMenu = styled.div`
    top:-1px;
    left:300px;
    display:flex;
    align-self:flex-start;
    position:absolute;
    width:1100px;
    height: 724px;
    background-color:#f7f7f7;
    border: 1px solid #dedede;
    visibility:hidden;
    table{
        width:100%;
        padding: 7px 0px 0px 5px;
        line-height:30px;
        position:absolute;
        z-index:999;
        td{
            width:25%;
            
            vertical-align: top;
            text-align:left;
            padding-left:20px;
        }
    }
    
`;
const NewSubItem = styled.div`
    
`;
const ItemSubNewSubItem = styled.div`
    position:relative;
    text-align:left;
    a{
        padding-right:35px;
        :hover{
            color:red;
        }
    }
`;
const ListItemSubHover = styled.div`
    width:200px;
    position:absolute;
    left:60%;
    top:0px;
    display: block;
    z-index:999999;
    box-shadow: 2px 2px 2px 3px grey;
    visibility:hidden;
    a{
        width:100%;
        height:20px;
        line-height:20px;
        background-color:white;
        padding-left:15px;
        display:block;
        
    }
`;
const TitleItem = styled.div`
    height:30px;
    font-size: 16px;
    font-weight:650;
    a{
        color:red;
    }
`;
export default ListDownMenu;