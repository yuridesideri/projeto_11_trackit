import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import GraphicLogo from '../assets/TrackitGD.svg';


export default function Register(props){

    const navigate = useNavigate();

    function handleSubmit(e) {
        
        console.log(e,e.target,e.target[0]);
        
    }

    return (
        <StyledRegister>
            <img src={GraphicLogo} alt="Trackit Graphical Logo" />
            <form onSubmit={handleSubmit}>
                <input placeholder="email" type="email" name="register_email" id="userEmail" required/>
                <input placeholder="senha" type="password" name="register_passowrd" id="userPassword" required />
                <input placeholder="nome" type="text" name="register_name" id="userName" required/>
                <input placeholder="foto" type="url" name="register_url" id="userPic" required/>
                <button name='register_button'>Cadastrar</button>
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