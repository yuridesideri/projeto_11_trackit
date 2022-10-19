import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import GraphicLogo from '../assets/TrackitGD.svg';
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";

export default function LogIn(props){

    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const {setUserData} = props;

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(!isLoading);
        axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', {
            email: e.target[0].value,
            password: e.target[1].value
        })
        .then(resp => {
            setUserData(resp.data);
            navigate("/today");
        })
        .catch(err => {
            setIsLoading(false);
            alert('Dados Inválidos');
        })
    }
     
    return (
        <StyledLogIn>
            <img src={GraphicLogo} alt="Habit tracker logo" />
            <form onSubmit={handleSubmit}>
                <input placeholder="email" type="email" name="user_email" id="userEmail" required disabled={isLoading} />
                <input placeholder="senha" type="password" name="user_passoword" id="userPassword" required disabled={isLoading} />
                <button name='LogInButton' disabled={isLoading}>{isLoading ? 
                <ThreeDots
                    height = "60"
                    width = "60"
                    radius = "9"
                    color = 'white'
                    ariaLabel = 'three-dots-loading'     
                    wrapperStyle = {{}}
                    wrapperClassName="loading-animation"
                /> :
                "Entrar"}</button>
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