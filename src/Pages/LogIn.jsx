import { useNavigate } from "react-router-dom";
import GraphicLogo from '../assets/TrackitGD.svg';
export default function LogIn(props){

    const navigate = useNavigate();

    return (
        <>
            <img src={GraphicLogo} alt="Habit tracker logo" />
            <input type="email" name="user_email" id="" />
            <input type="password" name="user_passoword" id="" />
            <button name="LogInButton"></button>
            <p onClick={() => navigate('/register')}>Não tem uma conta? Cadastre-se!</p>        
        </>
    );
}