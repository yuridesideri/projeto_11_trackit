import axios from "axios";
import { useContext, useState } from "react";
import styled from "styled-components";
import Checkmark from "../assets/Checkmark.svg"
import { userDataContext } from "../context/userAuthContext";

export default function HabitCard(props){

    const {habit, setHabitsObject} = props;
    const [isMarked, setIsMarked] = useState(habit.done);
    const {token} = useContext(userDataContext);

    async function handleCheck (e) {

        e.target.setAttribute('disabled','');

        await axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/${isMarked ? 'uncheck' : 'check'}`, 
        {},
        {headers : {Authorization: `Bearer ${token}`}})
        .then(resp => {
            axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", 
            {headers : {Authorization: `Bearer ${token}`}}).then(response => {setHabitsObject(response.data); setIsMarked(!habit.done);})
        })
        .catch(err => {
            alert("Oh no, we couldn't attend your request!");
        })
        
        e.target.removeAttribute('disabled');
    }

    return (
        <StyledHabitCard>
            <h1 className="title">{habit.name}</h1>
            <h3>Sequência atual: 
            <strong style={{color: isMarked ? 'rgba(143, 197, 73, 1)' : 'rgba(102, 102, 102, 1)'}}>
             {String(habit.currentSequence)} dias</strong>
             </h3>
            <h3>Seu recorde: 
                <strong style={{color: habit.currentSequence === habit.highestSequence ? 'rgba(143, 197, 73, 1)' : 'rgba(102, 102, 102, 1)'}}>
                {String(habit.highestSequence)} dias</strong>
                </h3>
            <button 
            data-identifier="done-habit-btn"
            onClick={handleCheck} 
            className="check-button"
            style={{backgroundColor: isMarked ? 'rgba(143, 197, 73, 1)' : 'rgba(231, 231, 231, 1)'}}>
                <img src={Checkmark} alt="" />
            </button>
        </StyledHabitCard>
    );
}

const StyledHabitCard = styled.div`
    margin-bottom: 10px;
    width: 340px;
    background-color: white;
    background-color: #FFFFFF;
    border-radius: 5px;
    flex-direction: column;
    align-items: flex-start;
    color: #666666;
    padding: 13px;
    position: relative;
    h1{
        font-size: 19.976px;
        line-height: 25px;  
        margin-bottom: 7px;
    }
    h3{
        font-size: 12.976px;
        line-height: 16px;
    }
    .check-button{
        position: absolute;
        right: 13px;
        width: 69px;
        height: 69px;
        border-radius: 5px;
        img{
            transform: translate(5%, 5%);
        }
    }
    strong{
        margin-left: 4px;
    }
`