import { useState } from "react";

export default function Summary(props){

    const {habitsObject} = props;
    const [coloredStatus, setColoredStatus] = useState(false);

    function handleSummary (){
        if(habitsObject){
            if(habitsObject.length === 0)
            {
                return "Nenhum hábito criado";
            }
            else{
                const count = habitsObject.reduce((counter, habit) => habit.done ? counter+=1 : counter, 0);
                if (count === 0){
                    return "Nenhum hábito concluído ainda";
                }
                else{
                    setColoredStatus(true)
                    return `${Math.ceil((count/habitsObject.length) * 100)}% dos hábitos concluídos`;
                }
            }
        }
        else{
            return 'Loading...';
        }
    }

    return (
        <h2 style={{color: coloredStatus ? 'rgba(143, 197, 73, 1)' : "rgba(186, 186, 186, 1)"}}>
            {handleSummary()}
        </h2>
    );
}