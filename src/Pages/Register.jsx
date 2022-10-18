import { useNavigate } from "react-router-dom";

export default function Register(props){

    const navigate = useNavigate();

    return (
        <>
            <img src="" alt="" />
            <input type="email" name="register_email" id="" />
            <input type="password" name="register_passowrd" id="" />
            <input type="text" value="" />
            <input type="url" name="register_url" id="" />
            <button onClick={() => navigate('/today')}>Cadastrar</button>
        </>
    );
}