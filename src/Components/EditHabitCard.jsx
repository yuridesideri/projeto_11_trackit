import dayjs from "../utils/updatedWeekdays";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";
import { userDataContext } from "../context/userAuthContext";

export default function EditHabitCard(props){


    const {habit, type, setHabitsObject} = props;
    const colors = ["rgba(255, 255, 255, 1)", "rgba(207, 207, 207, 1)"]
    const days = dayjs.localeData().weekdays().map(day => day[0]);
    

    return (
        <StyledCard>
            {
               type === 'add' ? 
               <AddCard setHabitsObject={setHabitsObject} days={days} colors={colors}/> : 
               <RemoveCard habit={habit} days={days}/>
            }
        </StyledCard>
    );
}

const StyledCard = styled.div`
    width: 340px;
    border-radius: 5px;
    background-color: white;
    button{
        border: 1px solid #CFCFCF;
        border-radius: 5px;
        width: 30px;
        height: 30px;
        margin-right: 4px;
        }
`


function AddCard (props) {
    const {days,colors, setHabitsObject} = props;
    const [selectedDays, setSelectedDays] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const {token} = useContext(userDataContext);

    useEffect(() => console.log(selectedDays),[selectedDays])


    function handleSubmit(e){
        e.preventDefault();
        console.log(e);
        const inputValue = e.target[0].value;
        const formArray = Array.from(e.target);
        formArray.forEach(el => el.setAttribute('disabled','true'));
        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", {name: inputValue, days: selectedDays}, {headers:{"Authorization" : `Bearer ${token}`}})
        .then(resp => setHabitsObject(old => [resp.data, ...old]))
        .catch(err => {
            console.log(err)
            alert('Dados Inválidos');
            formArray.forEach(el => el.removeAttribute('disabled'));
            setIsLoading(false);
    })

    }

    return (<StyledAddCard>
        <form onSubmit={handleSubmit}>
            <input type="text" />
            <div className="days-buttons">
                {days.map((letter, ind) => (
                <button 
                type="button"
                key={`add${ind}`} 
                style={{backgroundColor: `${selectedDays.includes(ind)? colors[1] : colors[0]}`, color: `${selectedDays.includes(ind)? colors[0] : colors[1]}`}}
                onClick={() => setSelectedDays(old => (
                old.includes(ind) ? 
                old.filter(el => el !== ind) : 
                [ind, ...old]))}>
                    {letter}
                </button>))} 
            </div>
            <div className="actions">
                <p>Cancelar</p>
                <button onClick={() => setIsLoading(true)} type="submit">
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
    const {days} = props;
    return (<></>)
}