import styled from "styled-components";
import Footer from "../Components/Footer.jsx";
import Header from "../Components/Header.jsx";

export default function History(props){

    

    return (
        <StyledHistory>
            <Header />
            <h3>Histórico</h3>
            <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            <Footer />
        </StyledHistory>
    );
}

const StyledHistory = styled.div`
    background-color: #E5E5E5;
    height: 100vh;
    flex-direction: column;
`