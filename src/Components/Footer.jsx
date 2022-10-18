import { useNavigate } from "react-router-dom";

export default function Footer(props){

    const navigate = useNavigate();

    return (
        <>
            <p onClick={() => navigate('/habits')}>Hábitos</p>
            <img onClick={() => navigate('/today')} src="" alt="Today Progress Bar" />
            <p onClick={() => navigate('/history')}>Histórico</p>
        </>
    );
}