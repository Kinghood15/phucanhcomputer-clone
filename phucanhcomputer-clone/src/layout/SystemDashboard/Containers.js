import React from 'react';
import styled from 'styled-components';
import Tab from 'react-bootstrap/Tab';
import TabContentSupplier from './TabContentSupplier';
import TabContentSupplierInvoice from './TabContentSupplierInvoice';
import TabContentCategoryProduct from './TabContentCategoryProduct';
import TabContentProduct from './TabContentProduct';
import TabContentProductInvoice from './TabContentProductInvoice';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import '../../bootstrap.css';
import '../../fontawesome-free-5.15.2-web/css/all.css';
import Dashboard from './Dashboard';
import './Containers.css';
const Containers = (porps) => {
    let i;
    return (
        <Containerr>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={1} style={{backgroundColor:"#f6f4f5"}}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">
                                        <i className="fas fa-tachometer-alt"></i>
                                        <p className="fs-6">Dashboard</p>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second" >  {/*  /admin-acodern/loaisanpham */}
                                        <Menu>
                                            <i className="fas fa-dolly-flatbed"></i>   
                                            <p className="fs-6">Loại sản phẩm</p>
                                        </Menu>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">
                                        <Menu>
                                            <i className="fab fa-product-hunt"></i>
                                            <p className="fs-6">Sản phẩm</p>
                                        </Menu>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">
                                        <Menu>
                                            <i className="fas fa-receipt"></i>
                                            <p className="fs-6">Hoá đơn sản phẩm</p>
                                        </Menu>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">
                                        <Menu>
                                            <i className="fas fa-warehouse"></i>
                                            <p className="fs-6">Nhà cung cấp</p>
                                        </Menu>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="sixth">
                                        <Menu>
                                            <i className="fas fa-file-invoice-dollar"></i>
                                            <p className="fs-6">Hoá đơn nhà cung cấp</p>
                                        </Menu>
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={11}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Dashboard />
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <TabContentCategoryProduct />
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <TabContentProduct />
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <TabContentProductInvoice />
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <TabContentSupplier />
                                </Tab.Pane>
                                <Tab.Pane eventKey="sixth">
                                    <TabContentSupplierInvoice />
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container> 
        </Containerr>
    );
}
const Containerr = styled.div`
    width: 100%;
    background-color:white;
    padding:0;
`;
const Menu = styled.div`
    position:relative;
    vertical-align: middle;
    z-index: 1000;
`;
export default Containers;