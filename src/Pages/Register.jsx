import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import GraphicLogo from '../assets/TrackitGD.svg';
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";


export default function Register(props){
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(!isLoading);
        axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', {
            email: e.target[0].value,
            name: e.target[2].value,
            image: e.target[3].value,
            password: e.target[1].value
        })
        .then(resp => navigate("/"))
        .catch(err => {
            setIsLoading(false);
            alert('Dados Inválidos');
        })
    }

    return (
        <StyledRegister>
            <img src={GraphicLogo} alt="Trackit Graphical Logo" />
            <form onSubmit={handleSubmit}>
                <input data-identifier="input-email" placeholder="email" type="email" name="register_email" id="userEmail" required disabled={isLoading}/>
                <input data-identifier="input-password" placeholder="senha" type="password" name="register_passowrd" id="userPassword" required disabled={isLoading} />
                <input data-identifier="input-name" placeholder="nome" type="text" name="register_name" id="userName" required disabled={isLoading}/>
                <input ata-identifier="input-photo" placeholder="foto" type="url" name="register_url" id="userPic" required disabled={isLoading}/>
                <button data-identifier="back-to-login-action" name='register_button' required disabled={isLoading}>{isLoading ? 
                <ThreeDots
                    height = "60"
                    width = "60"
                    radius = "9"
                    color = 'white'
                    ariaLabel = 'three-dots-loading'     
                    wrapperStyle = {{}}
                    wrapperClassName="loading-animation"
                /> :
                "Registrar"}</button>
            </form>
            <p onClick={() => navigate("/")}>Já tem uma conta? Faça login!</p>
        </StyledRegister>
    );
}


const StyledRegister = styled.div`
    flex-direction: column;
    height: 100vh;
    justify-content: flex-start;
    padding-top: 80px;
    form {
        margin-top: 40px;
        flex-direction: inherit;
        input{
            margin-top: 4px;

        }
    }
    button{
        margin-top: 8px;
        width: 303px;
        height: 45px;
        background: #52B6FF;
        border-radius: 4.63636px;
    }
    p{
        margin-top: 20px;
        color:rgba(82, 182, 255, 1);
        text-decoration: underline;
    }
`