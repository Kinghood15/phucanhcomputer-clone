import React from 'react';
import styled from 'styled-components';
import '../../bootstrap.css';
import '../../fontawesome-free-5.15.2-web/css/all.css';
import Doughnut from './Doughnut';
import StackedBar from './StackedBar';
const Dashboard = () =>{
    return(
        <Containers>
            <h3>Dashboard</h3>
            <BoxListDashboard>
                <BoxDashBoard className="card text-white bg-secondary mb-3">
                    <Icon>
                        <i className="fas fa-box"></i>
                    </Icon>
                    <TitleContent>
                        <h5>Tổng số sản phẩm trong kho :</h5>
                        <h4>1200 $</h4>
                        <span></span>
                    </TitleContent>
                </BoxDashBoard>
                <BoxDashBoard className="card text-white bg-primary mb-3">
                    <Icon>
                        <i className="fas fa-shopping-cart"></i>
                    </Icon>
                    <TitleContent>
                        <h5>Tổng số sản phẩm đặt hàng :</h5>
                        <h4>1200 $</h4>
                        <span></span>
                    </TitleContent>
                </BoxDashBoard>
                <BoxDashBoard className="card text-white bg-info mb-3">
                    <Icon>
                        <i className="fas fa-shipping-fast"></i>
                    </Icon>
                    <TitleContent>
                        <h5>Tổng số sản phẩm đã giao hàng :</h5>
                        <h4>1200 $</h4>
                        <span></span>
                    </TitleContent>
                </BoxDashBoard>
                <BoxDashBoard className="card text-white bg-success mb-3">
                    <Icon>
                        <i className="fas fa-money-bill"></i>
                    </Icon>
                    <TitleContent>
                        <h5>Tổng số sản phẩm đã bán :</h5>
                        <h4>1200 $</h4>
                        <span></span>
                    </TitleContent>
                </BoxDashBoard>
            </BoxListDashboard>
            <h3>Thống kê kinh doanh</h3>
            <BoxStatistics>
                <BoxStatisticsStackedBar>
                    <StackedBar />
                </BoxStatisticsStackedBar>
                <BoxStatisticsChart>
                    <Doughnut/>
                </BoxStatisticsChart>
            </BoxStatistics>
        </Containers>
    );
}
const Containers = styled.div`
    text-align:left;
    h3{
        font-weight:600;
        padding:30px;
    }
`;
const BoxListDashboard = styled.div`
    width:100%;
    display:flex;
    justify-content:space-around;
`;
const BoxDashBoard = styled.div`
    width:350px;
    height:180px;
    border-radius:15px;
`;
const Icon = styled.div`
    width:60px;
    height:60px;
    padding:10px;
    i{
        font-size:35px;
    }
`;
const TitleContent = styled.div`
    width:100%;
    padding:10px;
    h5{
        font-weight:bold;
    }
    h4{
        margin-right:10px;
        font-weight:600;
        float:right;
    }
    span{
        float:right;
    }
`;
const BoxStatistics = styled.div`

`;
const BoxStatisticsStackedBar = styled.div`
    width:850px;
    height:400px;
    float:left;
    margin-left:50px;
`;
const BoxStatisticsChart = styled.div`
    width:400px;
    height:400px;
    float:right;
`;
export default Dashboard;