import styled from "styled-components";
import Footer from "../Components/Footer.jsx";
import Header from "../Components/Header.jsx";

export default function History(props){

    

    return (
        <StyledHistory>
            <Header />
            <div className="main-header">
                <h3>Histórico</h3>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </div>
            <Footer />
        </StyledHistory>
    );
}


const StyledHistory = styled.div`
    .main-header{
    background-color: #E5E5E5;
    padding-top: 70px;
    padding-bottom: 70px;
    min-height: 100vh;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 70px 20px 70px 20px;
    h3{
        margin-top: 28px;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }
    p{
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
        margin-top: 16px;
    }
}
`