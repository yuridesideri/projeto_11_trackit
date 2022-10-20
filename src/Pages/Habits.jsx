import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../Components/Footer.jsx";
import Header from "../Components/Header.jsx";
import { userDataContext } from "../context/userAuthContext.jsx";
import axios from "axios";
import EditHabitCard from "../Components/EditHabitCard.jsx";


export default function Habits(props){

    const userData = useContext(userDataContext);
    const [habitsObject, setHabitsObject] = useState(null);
    const [showNewCard, setShowNewCard] = useState(false);

    useEffect(() => {
        axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", {headers : {Authorization: `Bearer ${userData.token}`}})
        .then(resp => setHabitsObject(resp.data))
        .catch(err => alert('Could not load User Habits'));
    },[userData]);

    return (
        <StyledHabits>
            <Header />
                <div className="body-header">
                    <h1>Meus hábitos</h1>
                    <button onClick={() => setShowNewCard(oldState => !oldState)}> <p>+</p> </button>
                </div>
                {showNewCard && <EditHabitCard setHabitsObject={setHabitsObject} setShowNewCard={setShowNewCard} type={'add'} /> }
                {
                habitsObject && habitsObject.length !== 0 ? 
                    habitsObject.map(habit => <EditHabitCard key={habit.id} setHabitsObject={setHabitsObject} type={'remove'} habit={habit} />) :
                    <p className="encoraging-sentence">Você não tem nenhum hábito cadastrado ainda. 
                    Adicione um hábito para começar a trackear!</p>
                }
            <Footer />
        </StyledHabits>
    );
}


const StyledHabits = styled.div`
    background-color: #E5E5E5;
    padding-top: 70px;
    padding-bottom: 70px;
    min-height: 100vh;
    flex-direction: column;
    justify-content: flex-start;
    .body-header{
        justify-content: space-between;
        width: 340px;
        margin-top:22px;
        margin-bottom:20px;
        h1{
            font-size: 23px;
            line-height: 29px;
            color: #126BA5;
        }
    }
    .encoraging-sentence{
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        width: 340px;
        color: #666666;
    }
    button{
        width: 45px;
        height: 35px;
        background-color: #52B6FF;
        border-radius: 4.5px;
        p{
            font-size: 28px;
            line-height: 34px;
            transform: translate(0, -5%);
        }
    }
`

