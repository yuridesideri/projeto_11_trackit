import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import GraphicLogo from '../assets/TrackitGD.svg';

export default function LogIn(props){

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        console.log(e,e.target,e.target[0]);
        
    }
     
    return (
        <StyledLogIn>
            <img src={GraphicLogo} alt="Habit tracker logo" />
            <form onSubmit={handleSubmit}>
                <input placeholder="email" type="email" name="user_email" id="userEmail" required/>
                <input placeholder="senha" type="password" name="user_passoword" id="userPassword" required/>
                <button name="LogInButton">Entrar</button>
            </form>
            <p onClick={() => navigate('/register')}>Não tem uma conta? Cadastre-se!</p>        
        </StyledLogIn>
    );
}




const StyledLogIn = styled.div`
    flex-direction: column;
    height: 100vh;
    justify-content: flex-start;
    padding-top: 80px;
    form {
        margin-top: 40px;
        flex-direction: inherit;
        input{
            margin-top: 8px;

        }
    }
    button{
        width: 303px;
        height: 45px;
        background: #52B6FF;
        border-radius: 4.63636px;
        margin-top: 8px;
    }
    p{
        margin-top: 20px;
        color:rgba(82, 182, 255, 1);
        text-decoration: underline;
    }

`