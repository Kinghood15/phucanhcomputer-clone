import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {AuthClientContext} from '../contexts/AuthClientContext';
const Top = (props) =>{
	const {
        authClientState:{
            user:{username}
        },
        logoutUser
    } = useContext(AuthClientContext);
    const logout = () =>logoutUser();
    return(
		<Topp className="top">
			<Container>
			<SupportLeft className="Top-Left">
				<List>
					<ListItem><Link to='/'>Hệ thống showroom &gt;&gt;</Link></ListItem>
					<ListItem><Link to='/'>Bán hàng trực tuyến</Link></ListItem>
					<ListItem><Link to='/'>Khuyến mại</Link></ListItem>
					<ListItem><Link to='/'>Xây dựng cấu hình</Link></ListItem>
					<ListItem><Link to='/'>In hoá đơn điện tử</Link></ListItem>
					<ListItem><Link to='/'>Tra cứu bảo hành</Link></ListItem>
				</List>
			</SupportLeft>
			<LoginSignUp className="Top-Right">
				<List>
                   <span>Welcome back, {username}</span>
                   <Link onClick={logout}>Đăng xuẩt</Link>
				</List>
			</LoginSignUp>
		</Container>
		</Topp>
	);
}
const Topp = styled.div`
	background-color: #365899;
	color:white;
`;
const Container = styled.div`
	padding: 0;
	max-width: 90vw;
	max-height: 50px;
	height:30px;
	display:flex;
	justify-content: space-between;
	margin:auto;
`;
const SupportLeft = styled.div`
	max-width:70vw;
	width:70vw;
	float:left;
`;
const LoginSignUp = styled.div`
	float:right;
`;
const List = styled.ul`
	max-height:30px;
	display:flex;
	flex-wrap:wrap;
	margin:5px;
	padding: 0;
	text-align:left;
	span{
		padding-right:25px;
	}
	a{
		color:white;
	}
`;
const ListItem = styled.li`
	list-style: none;
	padding-right: 15px;
	a{
		text-decoration: none;
		color:white;
		max-font-size: 14px;
	}
`;

export default Top;