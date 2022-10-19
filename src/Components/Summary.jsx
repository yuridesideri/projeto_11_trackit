export default function Summary(props){

    const {habitsObject} = props;

    function handleSummary (){
        if(habitsObject){
            if(habitsObject.length === 0)
            {
                return "Você não tem nenhum hábito criado";
            }
            else{
                const count = habitsObject.reduce((counter, habit) => habit.done ? counter+=1 : null, 0);
                return count === 0 ? 
                    "Nenhum hábito concluído ainda": 
                    `${Math.ceil((count/habitsObject.length) * 100)}% dos hábitos concluídos`
            }
        }
        else{
            return 'Loading...';
        }
    }

    return (
        <h2>
            {handleSummary()}
        </h2>
    );
}