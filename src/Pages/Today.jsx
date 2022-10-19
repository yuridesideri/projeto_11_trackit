import { useContext } from "react";
import styled from "styled-components";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { userDataContext } from "../context/userAuthContext";

export default function Today(props){

    const userData = useContext(userDataContext);
    
    return (
        <StyledToday>
            <Header />
            <h1>Something</h1>
            <Footer />
        </StyledToday>
    );
}

const StyledToday = styled.div`
    background-color: #E5E5E5;
    height: 100vh;
    width: 100%;
    flex-direction: column;
`