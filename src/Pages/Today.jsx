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
    const userData = useContext(userDataContext);

    const date = dayjs().locale('pt-br').format('dddd, DD/MM');
    
    console.table(habitsObject);

    useEffect(() => {
        axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", {headers : {Authorization: `Bearer ${userData.token}`}})
        .then(resp => setHabitsObject(resp.data))
        .catch(err => alert('Could not load User Habits'));
    },[])


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
    height: 100vh;
    width: 100%;
    flex-direction: column;
`