import { createContext } from "react";

export const userDataContext = createContext(null);

export default function UserAuthContext({children, data}){

    return (
        <userDataContext.Provider value={data}>
            {children}            
        </userDataContext.Provider>
    );
}