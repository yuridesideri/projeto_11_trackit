import styled from "styled-components";
import Footer from "../Components/Footer.jsx";
import Header from "../Components/Header.jsx";

export default function Habits(props){

    

    return (
        <StyledHabits>
            <Header />

            <Footer />
        </StyledHabits>
    );
}


const StyledHabits = styled.div`
    background-color: #E5E5E5;
    height: 100vh;
    flex-direction: column;
`