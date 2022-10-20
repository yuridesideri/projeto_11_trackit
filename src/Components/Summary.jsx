import { useContext, useEffect, useState } from "react";
import { userDataContext } from "../context/userAuthContext";

export default function Summary(props){

    const {habitsObject} = props;
    const [coloredStatus, setColoredStatus] = useState(false);
    const {percentage} = useContext(userDataContext);

    useEffect(()=> {
        if( percentage && percentage !== 0){
            setColoredStatus(true);
        }
        else{
            setColoredStatus(false);
        }
        }
    ,[percentage])

    function handleSummary (habitsObject){
        if(habitsObject){
            if(habitsObject.length === 0)
            {
                return "Nenhum hábito para hoje";
            }
            else{
                if (percentage === 0){
                    return "Nenhum hábito concluído ainda";
                }
                else{
                    return `${percentage}% dos hábitos concluídos`;
                }
            }
        }
        else{
            return 'Loading...';
        }
    }

    return (
        <h2 style={{color: coloredStatus ? 'rgba(143, 197, 73, 1)' : "rgba(186, 186, 186, 1)"}}>
            {handleSummary(habitsObject)}
        </h2>
    );
}