import { useContext } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { userDataContext } from "../context/userAuthContext";

export default function Today(props){

    const userData = useContext(userDataContext);
    
    return (
        <>
            <Header />

            <Footer />
        </>
    );
}