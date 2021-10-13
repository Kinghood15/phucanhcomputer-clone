import React from 'react';
import styled from 'styled-components';
import Headers from '../layout/SystemDashboard/Headers';
import Containers from '../layout/SystemDashboard/Containers';
// import './bootstrap-5.0.2-dist/bootstrap-5.0.2-dist/css/bootstrap.css';

const DataDashboard = () => {
    return (
        <div>
            <Headers />
            <Container className="container">
                <Containers />
            </Container>
        </div>
    );
}
const Container = styled.div`
  max-width:100%;
  width:100%;
  margin:0;
  padding:0;
  background-color:white;
`;
export default DataDashboard;