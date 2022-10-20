import dayjs from "../utils/updatedWeekdays";
import styled from "styled-components";
import { useContext, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";
import { userDataContext } from "../context/userAuthContext";
import TrashCan from "../assets/TrashCanIcon.svg";

export default function EditHabitCard(props){


    const {habit, type, setHabitsObject, setShowNewCard} = props;
    const colors = ["rgba(255, 255, 255, 1)", "rgba(207, 207, 207, 1)"]
    const days = dayjs.localeData().weekdays().map(day => day[0]);
    

    return (
        <StyledCard>
            {
               type === 'add' ? 
               <AddCard setShowNewCard={setShowNewCard} setHabitsObject={setHabitsObject} days={days} colors={colors}/> : 
               <RemoveCard setHabitsObject={setHabitsObject} colors={colors} habit={habit} days={days}/>
            }
        </StyledCard>
    );
}

const StyledCard = styled.div`
    width: 340px;
    border-radius: 5px;
    background-color: white;
    margin-bottom: 10px;
    button{
        border: 1px solid #CFCFCF;
        border-radius: 5px;
        width: 30px;
        height: 30px;
        margin-right: 4px;
        }
`


function AddCard (props) {
    const {days, colors, setHabitsObject, setShowNewCard} = props;
    const [selectedDays, setSelectedDays] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const {token} = useContext(userDataContext);



    function handleSubmit(e){
        e.preventDefault();
        const inputValue = e.target[0].value;
        const formArray = Array.from(e.target);
        formArray.forEach(el => el.setAttribute('disabled','true'));
        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", {name: inputValue, days: selectedDays}, {headers:{"Authorization" : `Bearer ${token}`}})
        .then(resp => {
            setHabitsObject(old => [resp.data, ...old])
            e.target[0].value = '';
            setSelectedDays([]);
            formArray.forEach(el => el.removeAttribute('disabled'));
            setIsLoading(false);  
            })
        .catch(err => {
            alert('Dados Inválidos');
            formArray.forEach(el => el.removeAttribute('disabled'));
            setIsLoading(false);
    })

    }

    return (<StyledAddCard>
        <form onSubmit={handleSubmit}>
            <input data-identifier="input-habit-name" type="text" />
            <div className="days-buttons">
                {days.map((letter, ind) => (
                <button 
                data-identifier="week-day-btn"
                type="button"
                key={`add${ind}`} 
                style={{backgroundColor: `${selectedDays.includes(ind)? colors[1] : colors[0]}`, 
                color: `${selectedDays.includes(ind)? colors[0] : colors[1]}`}}
                onClick={() => setSelectedDays(old => (
                old.includes(ind) ? 
                old.filter(el => el !== ind) : 
                [ind, ...old]))}>
                    {letter}
                </button>))} 
            </div>
            <div className="actions">
                <p data-identifier="cancel-habit-create-btn" onClick={() => setShowNewCard(false)}>Cancelar</p>
                <button data-identifier="save-habit-create-btn" onClick={() => setIsLoading(true)} type="submit">
                { isLoading ? 
                    <ThreeDots
                    height = "40"
                    width = "40"
                    radius = "9"
                    color = 'white'
                    ariaLabel = 'three-dots-loading'     
                    wrapperStyle = {{}}
                    wrapperClassName="loading-animation"
                /> :
                "Salvar"}
                </button>
            </div>
        </form>
    </StyledAddCard>)
    //Pode dar problema no 0
}
const StyledAddCard = styled.div`
    form{
        flex-direction:column;
        width: auto;
        padding-top: 18px;
    }
    .days-buttons{
        margin-top: 8px;
        justify-content: flex-start;
        width: 100%;
        button{
            border: 1px solid #CFCFCF;
            border-radius: 5px;
            width: 30px;
            height: 30px;
            margin-right: 4px;
        }
    }
    .actions{
        width: 100%;
        justify-content: flex-end;
        color: rgba(82, 182, 255, 1);
        margin-top: 29px;
        margin-bottom: 15px;
        button{
            border: none;
            width: 84px;
            height: 35px;
            margin-left: 23px;
        }
    }
`


function RemoveCard (props) {
    const {days, habit, colors, setHabitsObject} = props;
    const {token} = useContext(userDataContext);

    function handleRemove() {
        axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}`, {headers:{Authorization : `Bearer ${token}`}, data: {source: habit}})
        .then(resp => {
            axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',{headers:{Authorization: `Bearer ${token}`}})
            .then(resp => setHabitsObject(resp.data));
        })
        .catch(err => {
            alert('Pedido não concluído');
        })
    }
    
    return (
    <StyledRemoveCard>
        <img data-identifier="delete-habit-btn" onClick={() => handleRemove()} src={TrashCan} alt='Remove habit icon' className="icon" />
        <h1 data-identifier="habit-name">{habit.name}</h1>
        <div className="days">
            {days.map((letter, ind) => 
            <div
            className="day-button"
            key={habit.id + ind} 
            style={{backgroundColor: `${habit.days.includes(ind)? colors[1] : colors[0]}`, 
            color: `${habit.days.includes(ind)? colors[0] : colors[1]}`}}>
                {letter}
            </div>)
            }
        </div>
    </StyledRemoveCard>
    )
}
const StyledRemoveCard = styled.div`
    flex-direction: column;
    width: 303px;
    align-items: flex-start;
    position: relative;
    .icon{
        position: absolute;
        top: 11px;
        right: -10px;
    }
    h1{
        margin-top: 13px;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
    }
    .days{
        justify-content: flex-start;
        margin-bottom: 15px;
        margin-top: 8px;
    }
    .day-button{
        width: 30px;
        height: 30px;
        border-radius: 5px;
        border: 1px solid #D5D5D5;
        margin-right: 4px;
    }
`