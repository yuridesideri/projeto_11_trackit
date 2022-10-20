import dayjs from "../utils/updatedWeekdays";
import styled from "styled-components";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Summary from "../Components/Summary";
import { useContext, useEffect, useState } from "react";
import { userDataContext } from "../context/userAuthContext";
import axios from "axios";

export default function Today(props){

    const [habitsObject, setHabitsObject] = useState(null);
    const {token} = useContext(userDataContext);

    const date = dayjs().locale('pt-br').format('dddd, DD/MM');
    

    useEffect(() => {
        axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", {headers : {Authorization: `Bearer ${token}`}})
        .then(resp => setHabitsObject(resp.data))
        .catch(err => alert('Could not load User Habits'));
    },[token])


    return (
        <StyledToday>
            <Header />
            <div className="summary">
                <h1>{date}</h1>
                <Summary habitsObject={habitsObject}/>
            </div>
            <Footer />
        </StyledToday>
    );
}

const StyledToday = styled.div`
    background-color: #E5E5E5;
    padding-top: 70px;
    padding-bottom: 70px;
    height: 100vh;
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    .summary{
        flex-direction: column;
        align-items: flex-start;
        h1{
            color: #126BA5;
            font-size: 1.5rem;
        }
    }
`