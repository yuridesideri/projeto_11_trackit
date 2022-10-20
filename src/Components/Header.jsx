import { useContext } from 'react';
import styled from 'styled-components';
import Logo from '../assets/TrackItLogo.svg';
import { userDataContext } from "../context/userAuthContext.jsx";

export default function Header(props){

    const userData = useContext(userDataContext);
    return (
        <StyledHeader>
            <img name="logo-img"  src={Logo} alt="Logo TrackIt" />
            <img data-identifier="avatar" name="user-img" src={userData.image} alt="User Profile" />
        </StyledHeader>
    );
}

const StyledHeader = styled.div`
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(18, 107, 165, 1);
    width: 100%;
    height: 70px;
    padding-left: 16px;
    padding-right: 16px;
    z-index: 2;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    img[name="user-img"]{
        width: 51px;
        height: 51px;
        border-radius: 32px;
    }
`