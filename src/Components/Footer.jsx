import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import {CircularProgressbar } from 'react-circular-progressbar';
import { useContext } from "react";
import { userDataContext } from "../context/userAuthContext";


export default function Footer(props){
    const { percentage } = useContext(userDataContext);

    const navigate = useNavigate();
    
    return (
        <StyledFooter>
            <p onClick={() => navigate('/habits')}>Hábitos</p>
            <div className="today-button" onClick={() => navigate('/today')}>
                <p>Hoje</p>
                <CircularProgressbar 
                value={isNaN(percentage) ? 0 : percentage} 
                strokeWidth={"10"}
                styles={
                    {path: {stroke:  'rgb(255, 255, 255)'}, trail: {stroke: "rgba(0,0,0,0)"}}
                }
                
                backgroundPadding={"20px"} />
            </div>
            <p onClick={() => navigate('/history')}>Histórico</p>
        </StyledFooter>
    );
}


const StyledFooter = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
    height: 70px;
    justify-content: space-evenly;
    background-color: white;
    color: rgba(82, 182, 255, 1);
    font-size: 1.125rem;
    z-index: 2;
    .today-button{
        padding: 5px;
        width: 91px;
        height: 91px;
        background-color: rgba(82, 182, 255, 1);
        border-radius: 50px;
        transform: translate(0, -25%);
        color: white;
        position: relative;
        p {
            position: absolute;
        }
        img{
            position: absolute;
            top: 0;
            right: 0;
            transform: translate(-10%, 10%);
        }
    }
`