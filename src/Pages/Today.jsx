import dayjs from "../utils/updatedWeekdays";
import styled from "styled-components";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

export default function Today(props){

   
    
    return (
        <StyledToday>
            <Header />
            <h1>{dayjs().locale('pt-br').format('DD/MM/dddd')}</h1>
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