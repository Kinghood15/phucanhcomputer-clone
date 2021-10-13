import React from 'react';
import styled from 'styled-components';
import {Link } from 'react-router-dom';
import 'react-bootstrap';
import ImageAdvPopup from '../image/popup_800x700.png';
const AdvPopup = (props) =>{
    function ClickClose (){
        
        document.getElementById('Adv').style.display= "none";
    }
    return(
        <Adv id="Adv" onHide={ClickClose}>
            <Middle>
                <Link to='./'>
                    <img src= {ImageAdvPopup} alt='AdvPopup' />
                </Link>
                <i className="fas fa-times-circle" onClick={ClickClose}></i>
            </Middle>
        </Adv>
    );
}
const Adv = styled.div`
    width:100%;
    height:100vh;
    display: block;
    position:fixed;
    opacity: 0.9;
    background-color: black;
    margin:auto;
    z-index:99999999;
`;
const Middle = styled.div`
    top:20%;
    left:30%;
    position:fixed;
    a{
        img{
            opacity:1;
        }
    }
    i{
        font-size:30px;
        color: red;
        font-weight:500;
        postion:absolute;
        line-height:-150px;
        cursor:pointer;
        vertical-align: top;
        margin-left:30px;
    }
`;

export default AdvPopup;